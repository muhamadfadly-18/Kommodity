"use client";

import Image from "next/image";
import { useState } from "react";

type Product = {
  image: string;
  name: string;
  status: "Ready Stock" | "Pre-Order";
};

const bestsellerProducts: Product[] = [
  {
    image: "/image/bestseller/biji-kopi.png",
    name: "Arabica Cofee Roasted",
    status: "Pre-Order",
  },
  {
    image: "/image/bestseller/black-tea.png",
    name: "Black Tea",
    status: "Ready Stock",
  },
  {
    image: "/image/bestseller/rattan.png",
    name: "Rattan Furniture",
    status: "Pre-Order",
  },
  {
    image: "/image/bestseller/coconut-charcoal.png",
    name: "Coconut Charcoal Briquets",
    status: "Ready Stock",
  },
  {
    image: "/image/bestseller/green-coffee.png",
    name: "Green Bean Coffee",
    status: "Ready Stock",
  },
];

export default function Bestseller() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#fff", padding: "40px 0" }}>
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Header teks */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#000000",
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Bestseller
          </h2>

          <Image
            src="/image/teks/bestseller2.png"
            alt="Bestseller 2"
            width={60}
            height={30}
            priority
          />
        </div>

        {/* Grid Responsif */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "20px",
          }}
        >
          {bestsellerProducts.map((product, index) => {
            const isActive = selectedIndex === index || hoverIndex === index;

            return (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                style={{
                  cursor: "pointer",
                  borderRadius: "12px",
                  transition: "transform 0.2s, border 0.2s",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  border: isActive ? "2px solid #00B8C4" : "1px solid #e5e5e5",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={120}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "120px",
                    display: "block",
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                  }}
                />
                <div className="p-3">
                  <h6 className="mb-2" style={{ fontWeight: 600 }}>
                    {product.name}
                  </h6>
                  <div
                    style={{
                      color:
                        product.status === "Ready Stock"
                          ? "#00B8C4"
                          : "#F59E0B",
                      fontWeight: "600",
                    }}
                  >
                    {product.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
