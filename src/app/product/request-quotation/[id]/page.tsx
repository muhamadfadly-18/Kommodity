"use client";

import { use } from "react";
import { localProducts } from "../../../../../data/products";
import Image from "next/image";
import { notFound } from "next/navigation";

// Komponen tambahan
import RequestForm from "../../../component/RequestForm";
import BackButton from "../../../component/BackButton";

export default function RequestQuotation({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ Pakai use() untuk ambil id
  const product = localProducts.find((p) => p.id.toString() === id);
  if (!product) return notFound();

  return (
    <div className="container py-5">
      {/* === Breadcrumb === */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" style={{ color: "#00B8C4" }}>Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/product" style={{ color: "#00B8C4" }}>Products</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" style={{ color: "#00B8C4" }}>Request Quotation</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00B8C4" }}>
            {product.name}
          </li>
        </ol>
      </nav>

      {/* === Tombol Back === */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <BackButton />
      </div>

      <div className="row">
        {/* LEFT: Gambar produk */}
        <div className="col-md-6 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="img-fluid rounded"
            style={{ objectFit: "cover", maxHeight: "400px" }}
          />
        </div>

        {/* RIGHT: Formulir */}
        <div className="col-md-6">
          <h4 className="fw-bold mb-3">{product.name}</h4>
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
