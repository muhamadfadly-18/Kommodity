"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const localProducts = [
  {
    id: 1,
    name: "Arabica Coffee Roasted",
    category: "arabica",
    stockStatus: "Ready Stock",
    image: "/image-product/Arabica-Cofee-Roasted.png",
  },
  {
    id: 2,
    name: "Arabica Coffee Roasted Premium",
    category: "arabica",
    stockStatus: "Pre-Order",
    image: "/image-product/Arabica-Cofee-Roasted1.png",
  },
  {
    id: 3,
    name: "Robusta Coffee Roasted",
    category: "robusta",
    stockStatus: "Ready Stock",
    image: "/image-product/Robusta-Cofe.png",
  },
  {
    id: 4,
    name: "Green Coffee Bean",
    category: "arabica",
    stockStatus: "Pre-Order",
    image: "/image-product/Green-Cofe.png",
  },
  {
    id: 5,
    name: "Black Coffee",
    category: "robusta",
    stockStatus: "Ready Stock",
    image: "/image-product/Black-Cofe.png",
  },
  {
    id: 6,
    name: "Liberica Coffee",
    category: "liberica",
    stockStatus: "Ready Stock",
    image: "/image-product/Liberikan-Cofe.png",
  },
];

const categoryTree = [
  {
    label: "Coffee",
    value: "coffee",
    children: [
      { label: "Arabica Green Bean", value: "arabica" },
      { label: "Robusta Green Bean", value: "robusta" },
      { label: "Liberica Green Bean", value: "liberica" },
    ],
  },
  {
    label: "Coconut & Derivatives",
    value: "coconut",
    children: [
      { label: "Coconut Sugar", value: "coconut-sugar" },
      { label: "Coconut Oil", value: "coconut-oil" },
    ],
  },
  {
    label: "Spices & Nuts",
    value: "spices",
    children: [
      { label: "Nutmeg", value: "nutmeg" },
      { label: "Clove", value: "clove" },
    ],
  },
  {
    label: "Sugar",
    value: "sugar",
    children: [
      { label: "Refined Sugar", value: "refined-sugar" },
      { label: "Brown Sugar", value: "brown-sugar" },
    ],
  },
  {
    label: "Tea",
    value: "tea",
    children: [
      { label: "Green Tea", value: "green-tea" },
      { label: "Black Tea", value: "black-tea" },
    ],
  },
  {
    label: "Briquette",
    value: "briquette",
    children: [
      { label: "Charcoal Briquette", value: "charcoal" },
      { label: "Sawdust Briquette", value: "sawdust" },
    ],
  },
  {
    label: "Cocoa",
    value: "cocoa",
    children: [
      { label: "Cocoa Powder", value: "cocoa-powder" },
      { label: "Cocoa Butter", value: "cocoa-butter" },
    ],
  },
  {
    label: "Seafood & Freshwater",
    value: "seafood",
    children: [
      { label: "Shrimp", value: "shrimp" },
      { label: "Tilapia", value: "tilapia" },
    ],
  },
  {
    label: "Tropical Fruit & Vegies",
    value: "fruit",
    children: [
      { label: "Mango", value: "mango" },
      { label: "Avocado", value: "avocado" },
    ],
  },
  {
    label: "Furniture & Rattan",
    value: "furniture",
    children: [
      { label: "Indoor Furniture", value: "indoor-furniture" },
      { label: "Outdoor Rattan", value: "outdoor-rattan" },
    ],
  },
  {
    label: "Fabric & Leather",
    value: "fabric",
    children: [
      { label: "Batik", value: "batik" },
      { label: "Leather Goods", value: "leather-goods" },
    ],
  },
  {
    label: "Essence",
    value: "essence",
    children: [
      { label: "Vanilla Essence", value: "vanilla" },
      { label: "Cinnamon Essence", value: "cinnamon" },
    ],
  },
  {
    label: "Palm",
    value: "palm",
    children: [
      { label: "Palm Oil", value: "palm-oil" },
      { label: "Palm Kernel", value: "palm-kernel" },
    ],
  },
  {
    label: "Others",
    value: "others",
    children: [
      { label: "Miscellaneous A", value: "misc-a" },
      { label: "Miscellaneous B", value: "misc-b" },
    ],
  },
];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stockFilters, setStockFilters] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string | null>("coffee");
  const [apiProducts, setApiProducts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchApiProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        const mapped = data.map((item: any, i: number) => ({
          id: item.id ?? `api-${i}`,
          name: item.name,
          category: item.category,
          stockStatus: item.stockStatus,
          image: item.image,
        }));
        setApiProducts(mapped);
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
    (selectedCategory === "" ||
      product.category?.toLowerCase() === selectedCategory) &&
    (stockFilters.length === 0 || stockFilters.includes(product.stockStatus));

  const handleClick = (id: any) => router.push(`/product/${id}`);

  return (
    <main>
      <div className="container my-4">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Products
            </li>
          </ol>
        </nav>

        <div className="row">
          {/* SIDEBAR FILTER */}
          <div className="col-md-3 mb-4">
            <div className="border rounded p-3 bg-light">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">Filter</h6>
                <span
                  style={{
                    cursor: "pointer",
                    color: "#00B8C4",
                  }}
                  className="small fw-medium"
                  onClick={() => {
                    setSelectedCategory("");
                    setStockFilters([]);
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
                    <span>
                      {expanded === cat.value ? (
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 10.854a.5.5 0 0 0 .708 0L8 5.207l5.646 5.647a.5.5 0 0 0 .708-.708l-6-6a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 0 .708z"
                          />
                        </svg> // ▲ (up)
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg> // ▼ (down)
                      )}
                    </span>
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
                            checked={selectedCategory === sub.value}
                            onChange={() => setSelectedCategory(sub.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={sub.value}
                            style={{ cursor: "pointer" }}
                          >
                            {sub.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                className="btn btn-sm btn-outline-secondary mt-2"
                onClick={() => setSelectedCategory("")}
              >
                Tampilkan Semua
              </button>

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
            <p>
              Showing{" "}
              {localProducts.filter(filterBy).length +
                apiProducts.filter(filterBy).length}{" "}
              items
            </p>

            <div className="row">
              {localProducts.filter(filterBy).map((product) => (
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
