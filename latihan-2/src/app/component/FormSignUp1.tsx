"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function FormSignUp1() {
  const router = useRouter();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    reason: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Simpan data ke localStorage
    localStorage.setItem("signup_first_name", form.first_name);
    localStorage.setItem("signup_last_name", form.last_name);
    localStorage.setItem("signup_email", form.email);
    localStorage.setItem("signup_phone", form.phone);
    localStorage.setItem("signup_address", form.address);
    localStorage.setItem("signup_reason", form.reason);

    // Arahkan langsung ke SignUp2
    router.push("/pages/SignUp2");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="padding-50 font-grey-200">
            <Link
              href="../pages/Login"
              className="font-grey-200 d-flex margin-b-50"
            >
              <Image
                src="/icon/icon-left1.png"
                alt="Back"
                width={15}
                height={15}
              />
              <p className="margin-l-5 margin-t-3">Back</p>
            </Link>

            <h1 className="fw-bold Gabarito-Regular mb-2">Sign Up</h1>
            <p className="Gabarito-Regular mb-3">
              Become a diaspora member and grow together.
            </p>

            <div className="row mb-3">
              <div className="col">
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  className="form-control padding-15 focus-green"
                  placeholder="First Name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  className="form-control padding-15 focus-green"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control padding-15 focus-green"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="form-control padding-15 focus-green"
                placeholder="Phone"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="form-control padding-15 focus-green"
                placeholder="Address"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="reason"
                rows={5}
                value={form.reason}
                onChange={handleChange}
                className="form-control padding-15 focus-green"
                placeholder="Reason to be Diaspora"
              />
            </div>
            <div className="form-check cursor">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkDefault"
              />
              <label className="form-check-label">
                I accept Komodity's <Link href="/">Term & Condition</Link> &{" "}
                <Link href="/">Privacy Policy</Link>
              </label>
            </div>
            <button onClick={handleSubmit} className="btn-login2 mt-3 mb-3">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
