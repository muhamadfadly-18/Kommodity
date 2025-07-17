"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter, notFound } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

export default function BuySample() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [buyerId, setBuyerId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    office: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    sampleQty: "",
  });

  // 🔒 Cek login & ambil buyer ID dari localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      Swal.fire({
        icon: "warning",
        title: "Akses Ditolak",
        text: "Silakan login terlebih dahulu.",
        confirmButtonColor: "#000000",
      }).then(() => {
        router.push("/pages/Login");
      });
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setBuyerId(parsedUser.id);
    } catch (error) {
      console.error("Gagal parsing user data", error);
    }
  }, []);

  // 🔄 Ambil data produk dari API
  useEffect(() => {
    fetch(`http://localhost:8000/api/product-category-sub/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          console.log("📦 DATA PRODUK:", data.data); // opsional
          setProduct(data.data);
        } else {
          notFound();
        }
        setLoading(false);
      })
      .catch(() => {
        notFound();
      });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataToSend = {
      product_id: product?.product_category_sub_id ?? null,
      buyer_id: buyerId,
      supplier_id: product?.product_category?.table_product?.supplier_id ?? null,
      tgl_order: new Date().toISOString().split("T")[0],
      description: `Email: ${formData.email}\nQty: ${formData.sampleQty}\nPhone: ${formData.phone}\nAddress: ${formData.address}, ${formData.city}, ${formData.province}, ${formData.postalCode}, ${formData.country}`,
      author: `${formData.firstName} ${formData.lastName}`,
      status: 1,
    };

    console.log("📨 Data yang dikirim:", dataToSend);

    try {
      const res = await fetch("http://localhost:8000/api/orders-sample", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(dataToSend),
      });

      const result = await res.json();

      if (result.status) {
        router.push("/product/buy-sample/success");
      } else {
        Swal.fire("Gagal", "Gagal menyimpan order", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Terjadi kesalahan saat mengirim data", "error");
    }
  };

  if (loading || !product) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/" style={{ color: "#000000ff" }}>Home</Link></li>
          <li className="breadcrumb-item"><Link href="/product" style={{ color: "#000000ff" }}>Products</Link></li>
          <li className="breadcrumb-item"><Link href="#" style={{ color: "#000000ff" }}>Buy Sample</Link></li>
          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#000000ff" }}>
            {product.product_category?.table_product?.name}
          </li>
        </ol>
      </nav>

      <div className="d-flex align-items-center gap-2 mb-4">
        <button type="button" className="btn p-0 border-0 bg-transparent d-flex align-items-center"
          onClick={() => window.history.back()}
          style={{ color: "#000", fontWeight: 500, fontSize: "25px" }}>
          <i className="bi bi-arrow-left-square-fill me-2 mt-1"></i> Buy Sample
        </button>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <Image
            src={product.product_category?.table_product?.thumbnail}
            alt={product.name}
            width={600}
            height={400}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold mb-3">{product.product_category?.table_product?.name}</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3"><input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} required /></div>

            <span className="fw-medium">Shipping</span>
            <div className="mb-3"><input type="text" name="country" className="form-control" placeholder="Country" value={formData.country} onChange={handleChange} required /></div>

            <div className="mb-3 d-flex gap-2">
              <input type="text" name="firstName" className="form-control" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" className="form-control" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div className="mb-3"><input type="text" name="address" className="form-control" placeholder="Address" value={formData.address} onChange={handleChange} required /></div>
            <div className="mb-3"><input type="text" name="office" className="form-control" placeholder="Office / warehouse" value={formData.office} onChange={handleChange} /></div>
            <div className="mb-3"><input type="text" name="city" className="form-control" placeholder="City" value={formData.city} onChange={handleChange} required /></div>

            <div className="mb-3 d-flex gap-2">
              <input type="text" name="province" className="form-control" placeholder="Province" value={formData.province} onChange={handleChange} />
              <input type="text" name="postalCode" className="form-control" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
            </div>

            <div className="mb-3"><input type="text" name="phone" className="form-control" placeholder="Phone" value={formData.phone} onChange={handleChange} /></div>
            <div className="mb-3"><input type="text" name="sampleQty" className="form-control" placeholder="How many samples?" value={formData.sampleQty} onChange={handleChange} /></div>

            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="saveInfo" />
              <label htmlFor="saveInfo" className="form-check-label">Save This Information for next time</label>
            </div>

            <button type="submit" className="btn btn-teal text-white" style={{ backgroundColor: "#000000ff" }}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
