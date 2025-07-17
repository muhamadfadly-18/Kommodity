"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function RequestForm({ productId }: { productId: number }) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      Swal.fire({
        icon: "warning",
        title: "Akses Ditolak",
        text: "Silakan login terlebih dahulu.",
        confirmButtonColor: "#000000",
      }).then(() => {
        router.push("/pages/Login");
      });
    }
  }, [router]);

  const handleSubmit = async () => {
    if (!message.trim()) {
      alert("Please write your message first.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const buyer_id = user.id;

    if (!buyer_id || !productId) {
      Swal.fire({
        icon: "error",
        title: "Data tidak valid",
        text: "buyer_id atau product_id tidak ditemukan.",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/order-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          buyer_id: buyer_id,
          product_id: productId,
          message: message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.status) {
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: data.message,
          confirmButtonColor: "#000000",
        }).then(() => {
          router.push("/product/request-quotation/success");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: data.message ?? "Request gagal dikirim",
        });
      }
    } catch (error) {
      console.error("Gagal mengirim request:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat mengirim request.",
      });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="text-muted mb-0">Write down your request</p>
        <p className="mb-0" style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <a
            href="/pages/Login"
            className="text-decoration-none fw-semibold"
            style={{ color: "#000000ff" }}
          >
            Login
          </a>
        </p>
      </div>

      <textarea
        rows={5}
        className="form-control mb-3"
        placeholder="Write your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        className="btn text-white"
        style={{
          backgroundColor: "#000000ff",
          padding: "8px 24px",
          fontWeight: "600",
          fontSize: "16px",
          borderRadius: "6px",
        }}
        onClick={handleSubmit}
      >
        Request
      </button>
    </>
  );
}
