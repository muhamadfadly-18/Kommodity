"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactDetail() {
  return (
    <section
      style={{
        backgroundColor: "#484848ff",
        backgroundImage: "url(/image/banner/Banner-contact.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 20px",
        textAlign: "center",
        marginTop: "60px", 
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <h2
          style={{
            color: "#00b5ad",
            fontWeight: 500, // tidak terlalu tebal
            fontSize: "32px",
            marginBottom: "10px",
          }}
        >
          Need More Detail?
        </h2>
        <p style={{ color: "#6D6D6DFF", fontSize: "16px", marginBottom: "30px" }}>
          You can connect with our partners to consult about your needs.
        </p>
        <Link href="/contact">
          <button
            style={{
              backgroundColor: "#00b5ad",
              color: "#FFFFFFFF",
              border: "none",
              padding: "12px 28px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              marginTop: "30px", 
            }}
          >
            CONTACT NOW
          </button>
        </Link>
      </div>
    </section>
  );
}