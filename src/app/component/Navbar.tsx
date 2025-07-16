// components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="shadow-sm py-3 bg-white">
      <div
        className="container"
        style={{ maxWidth: "1330px", paddingLeft: "10px", paddingRight: "10px" }}
      >
        <div className="row align-items-center justify-content-between">
          {/* Logo */}
          <div className="col-6 col-lg-3">
            <Link href="/">
              <Image
                src="/Logo/logo-commodity.png"
                alt="Logo"
                width={220}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-9 mt-3 mt-lg-0">
            <div className="d-flex flex-wrap justify-content-end align-items-center gap-2 gap-lg-3">
              {/* Dropdown Category */}
              <select
                className="form-select shadow-none"
                style={{ maxWidth: "140px" }}
              >
                <option>Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>

              {/* Search Input */}
              <div className="position-relative" style={{ flex: "1", maxWidth: "300px" }}>
                <input
                  className="form-control bg-light rounded-3 shadow-none ps-3 pe-5"
                  placeholder="Search Katalog"
                />
                <div className="position-absolute top-50 end-0 translate-middle-y pe-3">
                  <Image
                    src="/icon/icon-search2.png"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Language Selector */}
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center text-dark text-decoration-none"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    src="/icon-us.png"
                    alt="Lang"
                    width={30}
                    height={20}
                    className="me-2"
                  />
                  En
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item d-flex align-items-center gap-2"
                      href="#"
                    >
                      <Image
                        src="/icon-indo.png"
                        alt="Indo"
                        width={30}
                        height={20}
                      />
                      ID
                    </a>
                  </li>
                </ul>
              </div>

              {/* Login Button */}
              <Link href="/pages/Login">
                <button
                  className="btn px-4 rounded-pill text-white"
                  style={{ backgroundColor: "#0BBCAD", border: "none" }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
