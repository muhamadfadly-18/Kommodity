"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import RequestForm from "../../../component/RequestForm";
import BackButton from "../../../component/BackButton";

export default function RequestQuotation() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/product-category-sub/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.status) {
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

  if (loading || !product) return <div className="container py-5">Loading...</div>;

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" style={{ color: "#000000ff" }}>Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/product" style={{ color: "#000000ff" }}>Products</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#000000ff" }}>
            Request Quotation
          </li>
          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#000000ff" }}>
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="d-flex align-items-center gap-2 mb-4">
        <BackButton />
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <Image
            src={`${product.product_category?.table_product?.thumbnail}`}
            alt={product.name}
            width={600}
            height={400}
            className="img-fluid rounded"
            style={{ objectFit: "cover", maxHeight: "400px" }}
          />
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold mb-3">{product.product_category?.table_product?.name}</h4>
          <RequestForm productId={product.id} />
        </div>
      </div>
    </div>
  );
}
