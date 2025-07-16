"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { localProducts } from "../../../../../data/products";
import Link from "next/link";

export default function BuySample() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();

  const [product, setProduct] = useState(() =>
    localProducts.find((p) => p.id.toString() === id)
  );

  useEffect(() => {
    if (!product && id) {
      const found = localProducts.find((p) => p.id.toString() === id);
      setProduct(found);
    }
  }, [id, product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/product/buy-sample/success");
  };

  if (!product)
    return <div className="text-center py-5">Product not found</div>;

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/" style={{ color: "#00B8C4" }}>Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/product" style={{ color: "#00B8C4" }}>Products</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="#" style={{ color: "#00B8C4" }}>Buy Sample</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page" style={{ color: "#00B8C4" }}>
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="d-flex align-items-center gap-2 mb-4">
        <button
          type="button"
          className="btn p-0 border-0 bg-transparent d-flex align-items-center"
          onClick={() => window.history.back()}
        >
          <Image
            src="/icon/Arrow.png"
            alt="Back"
            width={24}
            height={24}
            className="me-2"
          />
          <Image
            src="/icon/Buy-Sample.png"
            alt="Buy Sample"
            width={100}
            height={24}
          />
        </button>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold mb-3">{product.name}</h4>

          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-medium">Contact Information</span>
            <small>
              Already have an account?{' '}
              <Link href="/pages/Login" className="text-decoration-none fw-semibold" style={{ color: "#00B8C4" }}>
                Login
              </Link>
            </small>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>

            <span className="fw-medium">Shipping</span>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Country" required />
            </div>

            <div className="mb-3 d-flex gap-2">
              <input type="text" className="form-control" placeholder="First Name" required />
              <input type="text" className="form-control" placeholder="Last Name" required />
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Address" required />
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Office / warehouse" />
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="City" required />
            </div>

            <div className="mb-3 d-flex gap-2">
              <input type="text" className="form-control" placeholder="Province" />
              <input type="text" className="form-control" placeholder="Postal Code" />
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Phone" />
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" placeholder="How many samples?" />
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="saveInfo" />
              <label htmlFor="saveInfo" className="form-check-label">
                Save This Information for next time
              </label>
            </div>

            <button type="submit" className="btn btn-teal text-white" style={{ backgroundColor: "#00B8C4" }}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}