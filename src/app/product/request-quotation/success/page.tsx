"use client";

import Link from "next/link";
import Image from "next/image";

export default function RequestSuccess() {
  return (
    <div className="container py-5">
      {/* === Breadcrumb === */}
      <nav aria-label="breadcrumb" className="mb-5 text-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" style={{ color: "#00B8C4" }}>
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/product" style={{ color: "#00B8C4" }}>
              Product
            </Link>
          </li>
          <li className="breadcrumb-item">
            <span style={{ color: "#00B8C4" }}>Request For Quotation</span>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ color: "#00B8C4" }}
          >
            Request Success
          </li>
        </ol>
      </nav>

      {/* === Content Center === */}
      <div className="text-center">
        {/* === Success Image === */}
        <div className="mb-4 d-flex justify-content-center">
          <Image
            src="/image-success/image-request.png"
            alt="Request Success"
            width={600}
            height={400}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* === Text === */}
        <h2 className="fw-bold mb-3" style={{ color: "#00B8C4" }}>
          Thank you for your request
        </h2>
        <p className="text-muted mb-4">
          We will contact you via e-mail or WhatsApp
        </p>

        {/* === Back Button === */}
        <Link href="/">
          <button
            className="btn text-white px-4 py-2"
            style={{ backgroundColor: "#00B8C4", fontWeight: 500 }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
