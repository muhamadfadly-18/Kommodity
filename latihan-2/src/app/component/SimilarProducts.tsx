"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  currentProductId: number;
  categorySubId: number; // Ganti dari `category` jadi `categorySubId`
};

type Product = {
  id: number;
  product_category_id: number | null;
  name: string;
  image: string;
  stockStatus: string;
};

export default function SimilarProducts({ currentProductId, categorySubId }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/product-category-sub/${categorySubId}/similar`);
        const json = await res.json();
        if (json.status && json.data) {
          // Filter yang bukan current product
          const filtered = json.data.filter((p: Product) => p.id !== currentProductId);
          setProducts(filtered.slice(0, 10));
        }
      } catch (error) {
        console.error("Error fetching similar products:", error);
      }
    };

    fetchSimilarProducts();
  }, [categorySubId, currentProductId]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  if (products.length === 0) return null;

  return (
    <div className="py-5 mt-5 position-relative">
      {/* Judul pakai gambar */}
      <div className="mb-4 ps-5">
        <Image
          src="/img-detail-product/Similar Product.png"
          alt="Similar Product"
          width={200}
          height={30}
        />
      </div>

      {/* Tombol kiri */}
      <button
        onClick={scrollLeft}
        className="btn position-absolute top-50 start-0 translate-middle-y bg-white shadow rounded-circle d-flex align-items-center justify-content-center p-0"
        style={{ zIndex: 2, width: "40px", height: "40px" }}
      >
        <Image src="/img-detail-product/Left.png" alt="Scroll Left" width={24} height={24} />
      </button>

      {/* List produk */}
      <div
        className="d-flex overflow-auto gap-3 pb-3 px-5"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {products.map((product) => {
          const isReady = product.stockStatus === "Ready Stock";
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="text-decoration-none"
              style={{
                minWidth: "200px",
                maxWidth: "200px",
                flexShrink: 0,
              }}
            >
              <div
                className="rounded-4 border bg-white"
                style={{
                  overflow: "hidden",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.06)",
                  transition: "transform 0.2s ease",
                }}
              >
                <Image
                  src={product.image.startsWith("/") ? product.image : `/${product.image}`}

                  alt={product.name}
                  width={200}
                  height={140}
                  className="w-100"
                  style={{
                    objectFit: "cover",
                    height: "140px",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <div className="p-3 text-start">
                  <p
                    className="mb-1 fw-medium text-dark"
                    style={{ fontSize: "16px", minHeight: "44px" }}
                  >
                    {product.name}
                  </p>
                  <span
                    className="fw-semibold"
                    style={{
                      fontSize: "14px",
                      color: isReady ? "#00B8C4" : "#F59E0B",
                    }}
                  >
                    {product.stockStatus}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Tombol kanan */}
      <button
        onClick={scrollRight}
        className="btn position-absolute top-50 end-0 translate-middle-y bg-white shadow rounded-circle d-flex align-items-center justify-content-center p-0"
        style={{ zIndex: 2, width: "40px", height: "40px" }}
      >
        <Image src="/img-detail-product/Right.png" alt="Scroll Right" width={24} height={24} />
      </button>
    </div>
  );
}
