"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [message, setMessage] = useState("Mengecek status verifikasi...");
  const [showResend, setShowResend] = useState(false);
  const [loading, setLoading] = useState(false);

  const email = typeof window !== "undefined" ? localStorage.getItem("signup_email") : null;

  useEffect(() => {
    const checkVerification = async () => {
      if (!email) {
        setMessage("Email tidak ditemukan. Silakan daftar ulang.");
        return;
      }

      try {
        const res = await fetch(`http://localhost:8000/api/check-verification-status?email=${email}`);
        const data = await res.json();

        if (res.ok && data.verified) {
          setMessage("Email sudah diverifikasi. Mengarahkan ke login...");
          setTimeout(() => router.push("/pages/Login"), 2000);
        } else {
          setMessage("Email belum diverifikasi. Silakan kirim ulang email verifikasi.");
          setShowResend(true);
        }
      } catch (err) {
        setMessage("Gagal memeriksa status verifikasi.");
      }
    };

    checkVerification();
  }, [email, router]);

  const resendEmail = async () => {
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/email/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Email verifikasi telah dikirim ulang.");
        setShowResend(false);
      } else {
        setMessage(data.message || "Gagal mengirim ulang email.");
      }
    } catch (err) {
      setMessage("Terjadi kesalahan saat mengirim email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="text-center">
        <Image src="/icon/icon-verifikasi.png" alt="Verify" width={80} height={80} />
        <h2 className="mt-3">{message}</h2>

        {showResend && (
          <button className="btn-login2 mt-3" onClick={resendEmail} disabled={loading}>
            {loading ? "Mengirim..." : "Kirim Ulang Email Verifikasi"}
          </button>
        )}

        <Link href="/pages/Login">
          <button className="btn-login2 mt-3">Kembali ke Login</button>
        </Link>
      </div>
    </div>
  );
}
