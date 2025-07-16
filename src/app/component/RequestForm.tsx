"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RequestForm() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!message.trim()) {
      alert("Please write your message first.");
      return;
    }

    // Kamu bisa kirim message ke backend di sini (optional)

    // ✅ Arahkan ke halaman sukses
    router.push("/product/request-quotation/success");
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
            style={{ color: "#00B8C4" }}
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
          backgroundColor: "#00B8C4",
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
