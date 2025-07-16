"use client";

import { use } from "react";
import Image from "next/image";
import { localProducts } from "../../../../data/products";
import React, { useState } from "react";
import { notFound } from "next/navigation";
import SimilarProducts from "../../component/SimilarProducts";
import Link from "next/link";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = localProducts.find((p) => p.id.toString() === id);
  if (!product) return notFound();

  // ✅ Fix: ambil media awal dari product.image, bukan gallery
  const [mainMedia, setMainMedia] = useState(product.image);
  const [liked, setLiked] = useState(false);

  const renderMainMedia = () => {
    if (mainMedia.endsWith(".mp4")) {
      return (
        <video
          src={mainMedia}
          width={600}
          height={400}
          className="img-fluid rounded mb-3"
          controls
        />
      );
    }
    return (
      <Image
        src={mainMedia}
        alt={product.name}
        width={600}
        height={400}
        className="img-fluid rounded mb-3"
      />
    );
  };

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" style={{ color: "#00B8C4" }}>Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/product" style={{ color: "#00B8C4" }}>Products</a>
          </li>
          <li className="breadcrumb-item active" style={{ color: "#00B8C4" }}>
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="row">
        {/* LEFT: Media utama dan galeri */}
        <div className="col-md-6 mb-4">
          {renderMainMedia()}

          {product.gallery && product.gallery.length > 0 && (
            <div className="d-flex flex-wrap gap-2 justify-content-start">
              {[product.image, ...product.gallery].map((item: any, i: number) => {
                const isVideo = typeof item === "object" && item.type === "video";
                const thumbnail = isVideo ? item.thumbnail : item;
                const mediaSrc = isVideo ? item.src : item;

                return (
                  <div
                    key={i}
                    onClick={() => setMainMedia(mediaSrc)}
                    style={{ cursor: "pointer", width: "190px", height: "190px" }}
                  >
                    <div
                      className={`rounded overflow-hidden position-relative border ${
                        mainMedia === mediaSrc ? "border-info" : "border-light"
                      }`}
                      style={{
                        width: "100%",
                        height: "100%",
                        transition: "0.3s",
                        boxShadow: mainMedia === mediaSrc ? "0 0 0 2px #00B8C4" : "",
                      }}
                    >
                      {isVideo ? (
                        <>
                          <video
                            src={mediaSrc}
                            muted
                            playsInline
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              pointerEvents: "none",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              fill="white"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.271 11.813V4.187L11.5 8l-5.229 3.813z" />
                            </svg>
                          </div>
                        </>
                      ) : (
                        <Image
                          src={thumbnail}
                          alt={`Gallery ${i}`}
                          width={190}
                          height={190}
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* RIGHT: Detail produk */}
        <div className="col-md-6">
          <span
            className={`badge mb-2 ${
              product.stockStatus === "Ready Stock" ? "bg-success" : "bg-warning text-dark"
            }`}
          >
            {product.stockStatus}
          </span>
          <h3 className="fw-bold">{product.name}</h3>

          {/* Wishlist & Share */}
          <div className="d-flex align-items-center gap-4 mb-3">
            <button
              className="btn d-flex align-items-center gap-2 p-0 border-0 bg-transparent"
              style={{ fontSize: "14px", color: liked ? "#e63946" : "#6c757d" }}
              onClick={() => setLiked(!liked)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill={liked ? "#e63946" : "none"}
                stroke={liked ? "#e63946" : "currentColor"}
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M12.1 20.8l-1.1-1C6.1 15.2 2.5 12.1 2.5 8.2 2.5 5.4 4.7 3.2 7.5 3.2c1.6 0 3.1.8 4 2.1 0.9-1.3 2.3-2.1 4-2.1 2.8 0 5 2.2 5 5 0 3.9-3.6 7-8.5 11.5l-1.4 1.2z" />
              </svg>
              <span style={{ color: liked ? "#e63946" : "" }}>Wish list</span>
            </button>

            <button
              className="btn d-flex align-items-center gap-2 p-0 text-secondary border-0 bg-transparent"
              style={{ fontSize: "14px" }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: product.name,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="18" cy="5" r="2" />
                <circle cx="6" cy="12" r="2" />
                <circle cx="18" cy="19" r="2" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
              </svg>
              <span>Share</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-3 mb-4">
            <Link href={`/product/request-quotation/${product.id}`}>
              <button className="btn btn-teal text-white" style={{ backgroundColor: "#00B8C4" }}>
                Request For Quotation
              </button>
            </Link>
            <Link href={`/product/buy-sample/${product.id}`}>
              <button className="btn btn-outline-secondary">Buy Sample</button>
            </Link>
          </div>

          <hr />

          {/* Info */}
          <div className="mb-4">
            {[
              { icon: "Filled1.png", label: "Experience", value: product.info?.experience },
              { icon: "Filled.png", label: "Production Time", value: product.info?.productionTime },
              { icon: "Filled2.png", label: "Minimal Orders", value: product.info?.minimalOrder },
              { icon: "Outlined.png", label: "Certification", value: product.info?.certification },
            ].map((item, index) => (
              <div className="d-flex mb-3 align-items-start" key={index}>
                <Image
                  src={`/img-detail-product/${item.icon}`}
                  alt={item.label}
                  width={24}
                  height={24}
                  className="me-2"
                />
                <div>
                  <strong>{item.label}</strong>
                  <p className="mb-0">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <hr />

          {/* Description and Specs */}
          <div className="mb-4">
            <h5 className="mb-3">Description</h5>
            <p style={{ textAlign: "justify" }}>{product.description}</p>

            <h5 className="mt-4 mb-2">Product Specification</h5>
            <ul className="list-unstyled ps-3">
              {product.specs &&
                Object.entries(product.specs).map(([label, value]) => (
                  <li key={label}>
                    <strong>{label[0].toUpperCase() + label.slice(1)}:</strong> {value}
                  </li>
                ))}
            </ul>

            <h5 className="mt-4 mb-2">Characteristic</h5>
            {["physical", "chemical"].map((type) => (
              <div key={type}>
                <h6 className="mb-2 text-capitalize">{type}</h6>
                <ul className="list-unstyled ps-3">
                  {product.characteristics?.[type as "physical" | "chemical"] &&
                    Object.entries(product.characteristics[type as "physical" | "chemical"]).map(
                      ([label, value]) => (
                        <li key={label} className="mb-2">
                          <span className="d-inline-block" style={{ width: "10px" }}>
                            •
                          </span>
                          <span
                            style={{
                              paddingLeft: "10px",
                              textIndent: "-10px",
                              display: "inline-block",
                              maxWidth: "90%",
                            }}
                          >
                            <strong>{label[0].toUpperCase() + label.slice(1)}:</strong> {value}
                          </span>
                        </li>
                      )
                    )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <SimilarProducts currentProductId={product.id} category={product.category} />
    </div>
  );
}
