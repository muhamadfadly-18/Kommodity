"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { notFound, useParams } from "next/navigation";
import SimilarProducts from "../../component/SimilarProducts";
import Link from "next/link";

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<any>(null);
  const [mainMedia, setMainMedia] = useState<string>("");
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const info = {
    experience: "Have been a leading green beans suppliers since 2000.",
    productionTime: "In the production process, we need 1–5 weeks...",
    minimalOrder: "20 Kilos for minimal orders & 1-5 Kilos for samples",
    certification: "HALAL Certificates, Organic Farming Certificates...",
  };

  useEffect(() => {
     setLoading(true);
    fetch(`http://localhost:8000/api/product-category-sub/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setProduct(data.data);

          const imagePath = `${data.data.product_category.table_product.thumbnail}`;
          setMainMedia(imagePath);
        } else {
           setProduct(null);
        }
        setLoading(false);
      })
      .catch(() => {
      //  console.error("Fetch error:", err);
      setProduct(null); // Error juga dianggap tidak ada data
      setLoading(false);
      });
  }, [id]);

if (loading) {
  return <div className="container py-5">Loading...</div>;
}

if (!product) {
  return (
    <div className="container py-5 text-center text-muted">
      <h4>Data tidak ada.</h4>
      <Link href="/product" className="btn btn-secondary mt-3">
        Kembali ke Produk
      </Link>
    </div>
  );
}


  const renderMainMedia = () => {
    if (mainMedia.endsWith(".mp4")) {
      return (
        <video
          src={mainMedia}
          width={400}
          height={300}
          className="img-fluid rounded mb-3"
          style={{
            objectFit: "cover",
            backgroundColor: "#000",
          }}
          controls
          muted
          playsInline
        />
      );
    }
    return (
      <Image
        src={mainMedia}
        alt={product.product_category?.table_product?.name}
        width={550}
        height={400}
        className="img-fluid rounded mb-3"
      />
    );
  };

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" style={{ color: "#000000ff" }}>
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="/product" style={{ color: "#000000ff" }}>
              Products
            </a>
          </li>
          <li className="breadcrumb-item active" style={{ color: "#000000ff" }}>
            {product.product_category?.table_product?.name}
          </li>
        </ol>
      </nav>

      <div className="row">
        {/* LEFT */}
        <div className="col-md-6 mb-4">
          {/* MAIN MEDIA */}
          {renderMainMedia()}

          {/* THUMBNAIL GALLERY */}
          {product.foto_product && product.foto_product.length > 0 && (
            <div className="d-flex flex-wrap gap-2">
              {product.foto_product
                .slice(0, 6)
                .map((item: string, index: number) => (
                  <div key={index}>
                    {item.endsWith(".mp4") ? (
                      <div
                        className="position-relative"
                        style={{
                          cursor: "pointer",
                          width: "180px",
                          height: "180px",
                          overflow: "hidden",
                          borderRadius: "8px",
                        }}
                        onClick={() => setMainMedia(item)}
                      >
                        <video
                          src={item}
                          className="img-fluid"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#000",
                          }}
                          muted
                          playsInline
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "24px",
                            color: "#fff",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          ▶
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "180px",
                          height: "180px",
                          overflow: "hidden",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                        onClick={() => setMainMedia(item)}
                      >
                        <Image
                          src={item}
                          alt={`Thumbnail ${index}`}
                          width={160}
                          height={160}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                          className="img-fluid"
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="col-md-6">
          <span className="badge mb-2 bg-success">Ready Stock</span>
          <h3 className="fw-bold">
            {product.product_category?.table_product?.name}
          </h3>

          <div className="d-flex align-items-center gap-4 mb-3">
            <button
              className="btn d-flex align-items-center gap-2 p-0 border-0 bg-transparent"
              style={{ fontSize: "14px", color: liked ? "#e63946" : "#6c757d" }}
              onClick={() => setLiked(!liked)}
            >
              ❤️ <span>{liked ? "Wish listed" : "Wish list"}</span>
            </button>

            <button
              className="btn d-flex align-items-center gap-2 p-0 text-secondary border-0 bg-transparent"
              style={{ fontSize: "14px" }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: product.product_category?.table_product?.name,
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
            >
              🔗 <span>Share</span>
            </button>
          </div>

          <div className="d-flex gap-3 mb-4">
            <Link href={`/product/request-quotation/${id}`}>
              <button
                className="btn btn-teal text-white"
                style={{ backgroundColor: "#000000ff" }}
              >
                Request For Quotation
              </button>
            </Link>
            <Link href={`/product/buy-sample/${id}`}>
              <button className="btn btn-outline-secondary">Buy Sample</button>
            </Link>
          </div>

          <hr />

          <div className="mb-4">
            {[
              {
                icon: "Filled1.png",
                label: "Experience",
                value: info.experience,
              },
              {
                icon: "Filled.png",
                label: "Production Time",
                value: info.productionTime,
              },
              {
                icon: "Filled2.png",
                label: "Minimal Orders",
                value: info.minimalOrder,
              },
              {
                icon: "Outlined.png",
                label: "Certification",
                value: info.certification,
              },
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

          <div className="mb-4">
            <h5 className="mb-3">Description</h5>
            <p style={{ textAlign: "justify" }}>{product.description}</p>
          </div>
        </div>
      </div>

      <hr />

      <SimilarProducts
        currentProductId={product.id}
        categorySubId={product.product_category_sub_id}
      />
    </div>
  );
}
