"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      setIsLoggedIn(true);
      try {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || "Profile");
      } catch {
        setUserName("Profile");
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <header className="shadow-sm py-3 bg-white">
      <div
        className="container"
        style={{ maxWidth: "1500px", paddingLeft: "10px", paddingRight: "10px" }}
      >
        <div className="row align-items-center justify-content-between">
          {/* Logo */}
          <div className="col-6 col-lg-3">
            <Link href="/">
              <Image
                src="/Logo/Asset 3-8.png"
                alt="Logo"
                width={250}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="col-12 col-lg-9 mt-3 mt-lg-0">
            <div className="d-flex flex-wrap justify-content-end align-items-center gap-2 gap-lg-3">
              {/* Dropdown Category */}
              <select className="form-select shadow-none" style={{ maxWidth: "140px" }}>
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
                  <Image src="/icon/icon-search2.png" alt="Search" width={20} height={20} />
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
                  <Image src="/icon-us.png" alt="Lang" width={30} height={20} className="me-2" />
                  En
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                      <Image src="/icon-indo.png" alt="Indo" width={30} height={20} />
                      ID
                    </a>
                  </li>
                </ul>
              </div>

              {/* Conditional Login/Profile */}
              {isLoggedIn ? (
                <div className="dropdown">
                  <button
                    className="btn btn-outline-dark dropdown-toggle px-4 py-2"
                    style={{ borderRadius: "999px" }}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userName}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="/pages/Profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link href="/pages/Login">
                  <button
                    className="text-white px-4 py-2"
                    style={{
                      backgroundColor: "#0c0c0cff",
                      border: "none",
                      borderRadius: "999px",
                    }}
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
