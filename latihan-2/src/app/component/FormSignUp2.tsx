"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function FormSignUp2() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    reason: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("signup_email") || "";
    const first_name = localStorage.getItem("signup_first_name") || "";
    const last_name = localStorage.getItem("signup_last_name") || "";
    const phone = localStorage.getItem("signup_phone") || "";
    const address = localStorage.getItem("signup_address") || "";
    const reason = localStorage.getItem("signup_reason") || "";

    setForm((prev) => ({
      ...prev,
      email,
      first_name,
      last_name,
      phone,
      address,
      reason,
    }));
  }, []);

  const handleSubmit = async () => {
    if (form.password !== form.password_confirmation) {
      alert("Password tidak sama.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        // Jangan tampilkan alert, langsung redirect
        router.push("/verify-email");

      } else {
        alert(data.message || "Gagal daftar.");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat mendaftar.");
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="padding-50 font-grey-200">
            <Link href="../pages/SignUp1" className="font-grey-200 d-flex margin-b-100">
              <Image src="/icon/icon-left1.png" alt="Back" width={15} height={15} />
              <p className="margin-l-5 margin-t-3">Back</p>
            </Link>
            <h1 className="fw-bold Gabarito-Regular mb-2">Create Password</h1>
            <p className="Gabarito-Regular mb-3">
              Password must be at least 8 characters including a lowercase letter, an uppercase letter.
            </p>
            <div className="mb-3">
              <input
                type="password"
                className="form-control padding-15 focus-green"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control padding-15 focus-green"
                placeholder="Confirm Password"
                value={form.password_confirmation}
                onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })}
              />
            </div>
            <button className="btn-login2 mt-3 mb-3" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
