"use client";

import Image from "next/image";
import Link from "next/link";

export default function BuySampleSuccess() {
  return (
    <div className="container py-5">
      {/* Breadcrumb (Left aligned) */}
      <nav aria-label="breadcrumb" className="mb-5 text-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" style={{ color: "#000000ff" }}>
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/product" style={{ color: "#000000ff" }}>
              Product
            </Link>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
            style={{ color: "#000000ff" }}
          >
            Buy Sample Success
          </li>
        </ol>
      </nav>

      {/* Content center */}
      <div className="text-center">
        {/* Success Image */}
        <div className="mb-4 d-flex justify-content-center">
          <Image
            src="/image-success/image-buy.png"
            alt="Success"
            width={600}
            height={400}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Message */}
        <h2 className="fw-bold mb-3" style={{ color: "#000000ff" }}>
          We will send you the invoice
        </h2>
        <p className="text-muted mb-4">Check your profile menu within 1x24h</p>

        {/* Back Button */}
        <Link href="/">
          <button
            className="btn text-white px-4 py-2"
            style={{ backgroundColor: "#030303ff", fontWeight: 500 }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
    