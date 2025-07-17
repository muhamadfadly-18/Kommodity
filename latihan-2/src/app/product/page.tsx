"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductPage() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState("");
  const [selectedProductSlug, setSelectedProductSlug] = useState("");
  const [stockFilters, setStockFilters] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [apiProducts, setApiProducts] = useState<any[]>([]);
  const [categoryTree, setCategoryTree] = useState<any[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, "-");

  // Ambil kategori dan produk dari URL saat pertama kali load
  useEffect(() => {
    const urlCategory = searchParams.get("product_category");
    const urlProduct = searchParams.get("product_name");

    if (urlCategory) {
      setSelectedCategorySlug(urlCategory);
      setExpanded(urlCategory); // expand berdasarkan slug kategori
    }

    if (urlProduct) {
      setSelectedProductSlug(urlProduct);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchApiProducts = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/products");
        const data = await res.json();

        const mapped = data.map((item: any, i: number) => ({
          id: item.id ?? `api-${i}`,
          name: item.name,
          category: item.category ?? "Uncategorized",
          stockStatus: item.stockStatus,
          image: item.image,
        }));

        setApiProducts(mapped);

        // Bangun pohon kategori -> produk
        const categoryMap: { [key: string]: any[] } = {};
        mapped.forEach((item: any) => {
          const cat = item.category ?? "Uncategorized";
          if (!categoryMap[cat]) {
            categoryMap[cat] = [];
          }
          categoryMap[cat].push({
            label: item.name,
            value: slugify(item.name),
          });
        });

        const dynamicTree = Object.entries(categoryMap).map(
          ([cat, children]) => ({
            label: cat,
            value: slugify(cat),
            children,
          })
        );

        setCategoryTree(dynamicTree);
      } catch (err) {
        console.error("Gagal ambil data API:", err);
      }
    };

    fetchApiProducts();
  }, []);

  const handleStockChange = (status: string) =>
    setStockFilters((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );

  const toggleCategory = (cat: string) =>
    setExpanded(expanded === cat ? null : cat);

  const filterBy = (product: any) =>
    (selectedCategorySlug === "" ||
      slugify(product.category) === selectedCategorySlug) &&
    (selectedProductSlug === "" ||
      slugify(product.name) === selectedProductSlug) &&
    (stockFilters.length === 0 ||
      stockFilters.includes(product.stockStatus));

  const handleClick = (id: any) => router.push(`/product/${id}`);

  return (
    <main>
      <div className="container my-4">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" style={{ color: "#000000ff" }}>
                Home
              </a>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ color: "#000000ff" }}
            >
              Products
            </li>
          </ol>
        </nav>

        <div className="row">
          {/* SIDEBAR */}
          <div className="col-md-3 mb-4">
            <div className="border rounded p-3 bg-light">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Filter</h6>
                <span
                  style={{ cursor: "pointer", color: "#000000ff" }}
                  className="small fw-medium"
                  onClick={() => {
                    setSelectedCategorySlug("");
                    setSelectedProductSlug("");
                    setStockFilters([]);
                    setExpanded(null);
                    router.push("/product");
                  }}
                >
                  Reset Filter
                </span>
              </div>

              <p className="fw-semibold mb-2">Kategori</p>

              {categoryTree.map((cat) => (
                <div key={cat.value} className="mb-2">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleCategory(cat.value)}
                  >
                    <span className="fw-medium">{cat.label}</span>
                    <span>{expanded === cat.value ? "▲" : "▼"}</span>
                  </div>
                  {expanded === cat.value && (
                    <div className="ms-3 mt-2">
                      {cat.children.map((sub: any) => (
                        <div className="form-check" key={sub.value}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="category"
                            id={sub.value}
                            checked={selectedProductSlug === sub.value}
                            onChange={() => {
                              setSelectedCategorySlug(cat.value);
                              setSelectedProductSlug(sub.value);
                              router.push(
                                `/product?product_category=${cat.value}&product_name=${sub.value}`
                              );
                            }}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={sub.value}
                          >
                            {sub.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <hr />
              <p className="fw-semibold mb-2">Stock</p>
              {["Ready Stock", "Pre-Order"].map((status) => (
                <div className="form-check mb-2" key={status}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={status}
                    onChange={() => handleStockChange(status)}
                    checked={stockFilters.includes(status)}
                  />
                  <label className="form-check-label" htmlFor={status}>
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* PRODUK GRID */}
          <div className="col-md-9">
            <p>Showing {apiProducts.filter(filterBy).length} items</p>

            <div className="row">
              {apiProducts.filter(filterBy).map((product) => (
                <div className="col-6 col-md-3 mb-4" key={product.id}>
                  <div
                    className="card h-100 shadow-sm"
                    onClick={() => handleClick(product.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.name}</h6>
                      <small
                        style={{
                          color:
                            product.stockStatus === "Ready Stock"
                              ? "#00B8C4"
                              : "#F59E0B",
                        }}
                      >
                        {product.stockStatus}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
