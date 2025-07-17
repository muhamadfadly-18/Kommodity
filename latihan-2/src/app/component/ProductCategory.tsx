"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Category = {
  image: string;
  product_category: string;
};

export default function ProductCategory() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/product-category");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickCategory = (index: number, categoryName: string) => {
    setSelectedIndex(index);
    const formatted = encodeURIComponent(
      categoryName.toLowerCase().replace(/\s+/g, "-")
    );
    router.push(`/product?product_category=${formatted}`);
  };

  const columnsPerRow = 7;
  const rows: Category[][] = [];
  if (isDesktop) {
    for (let i = 0; i < categories.length; i += columnsPerRow) {
      rows.push(categories.slice(i, i + columnsPerRow));
    }
  }

  return (
    <div style={{ backgroundColor: "#5b5a5a58", padding: "40px 0" }}>
      <div
        className="container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "10px",
          paddingRight: "10px",
          width: "100%",
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{
              color: "#000000",
              fontSize: "24px",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Product Category
          </h2>
        </div>

        {isDesktop ? (
          rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="d-flex justify-content-between mb-3"
              style={{ gap: "10px" }}
            >
              {row.map((category, index) => {
                const actualIndex = rowIndex * columnsPerRow + index;
                const isActive = selectedIndex === actualIndex;
                const isHovered = hoverIndex === actualIndex;

                return (
                  <div
                    key={index}
                    onClick={() =>
                      handleClickCategory(actualIndex, category.product_category)
                    }
                    onMouseEnter={() => setHoverIndex(actualIndex)}
                    onMouseLeave={() => setHoverIndex(null)}
                    style={{
                      flex: "1 1 0",
                      maxWidth: "110px",
                      minWidth: "110px",
                      height: "110px",
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border:
                        isActive || isHovered
                          ? "2px solid #000000ff"
                          : "1px solid #ddd",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.2s, border 0.2s",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={`/${category.image}`}
                      alt={category.product_category}
                      width={100}
                      height={100}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: "15px",
            }}
          >
            {categories.map((category, index) => {
              const isActive = selectedIndex === index;
              const isHovered = hoverIndex === index;

              return (
                <div
                  key={index}
                  onClick={() =>
                    handleClickCategory(index, category.product_category)
                  }
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border:
                      isActive || isHovered
                        ? "2px solid #000000ff"
                        : "1px solid #ddd",
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.2s, border 0.2s",
                    height: "100px",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={`/${category.image}`}
                    alt={category.product_category}
                    width={90}
                    height={90}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
