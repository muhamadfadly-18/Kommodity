"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login gagal");
      }

      // ✅ Login sukses
      console.log("Login berhasil:", data);

      // Simpan token (jika ada) ke localStorage (atau cookie, sesuai kebutuhan)
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Arahkan ke halaman dashboard misalnya
      const redirectUrl = localStorage.getItem("redirectAfterLogin") || "/";
      localStorage.removeItem("redirectAfterLogin");
      window.location.href = redirectUrl;
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="padding-50 font-grey-200">
          <h1 className="fw-bold Gabarito-Regular mb-2">Login</h1>
          <p className="Gabarito-Regular mb-3">
            If you are already a member you can login with your email address
            and password.
          </p>

          {error && <div className="alert alert-danger py-2 px-3">{error}</div>}

          <div className="mb-3">
            <input
              type="text"
              className="form-control padding-15 focus-green"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control padding-15 focus-green"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-check cursor">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Remember Me
            </label>
          </div>
          <button
            className="btn-login2 mt-3 mb-3"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link href="../pages/SignUp1" className="font-core1">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
