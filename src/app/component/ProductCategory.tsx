"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Category = {
  image: string;
  name: string;
};

const categories: Category[] = [
  { image: "/image/coffee.png", name: "Coffee" },
  { image: "/image/sugar.png", name: "Sugar" },
  { image: "/image/coconut.png", name: "Coconut & Derivatives" },
  { image: "/image/tea.png", name: "Tea" },
  { image: "/image/briquette.png", name: "Briquette" },
  { image: "/image/cocoa.png", name: "Cocoa" },
  { image: "/image/seafood.png", name: "Seafood & Freshwater" },
  { image: "/image/fruit.png", name: "Tropical Fruit & Vegies" },
  { image: "/image/furniture.png", name: "Furniture & Rattan" },
  { image: "/image/fabric.png", name: "Fabric & Leather" },
  { image: "/image/spices.png", name: "Spices & Nuts" },
  { image: "/image/essence.png", name: "Essence" },
  { image: "/image/palm.png", name: "Palm" },
  { image: "/image/others.png", name: "Others" },
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

export default function ProductCategory() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFirstSubCategory = (categoryName: string): string => {
    const found = categoryTree.find(
      (cat) => cat.label.toLowerCase() === categoryName.toLowerCase()
    );
    return found?.children?.[0]?.value || "";
  };

  const handleClickCategory = (index: number, categoryName: string) => {
    setSelectedIndex(index);
    const subCategoryValue = getFirstSubCategory(categoryName);
    if (subCategoryValue) {
      router.push(`/product?category=${subCategoryValue}`);
    }
  };

  const columnsPerRow = 7;
  const rows: Category[][] = [];
  if (isDesktop) {
    for (let i = 0; i < categories.length; i += columnsPerRow) {
      rows.push(categories.slice(i, i + columnsPerRow));
    }
  }

  return (
    <div style={{ backgroundColor: "#e9fefc", padding: "40px 0" }}>
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
          <Image
            src="/image/teks/product-category.png"
            alt="Product Category"
            width={210}
            height={30}
          />
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
                      handleClickCategory(actualIndex, category.name)
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
                          ? "2px solid #00b5ad"
                          : "1px solid #ddd",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.2s, border 0.2s",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
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
                  onClick={() => handleClickCategory(index, category.name)}
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
                        ? "2px solid #00b5ad"
                        : "1px solid #ddd",
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.2s, border 0.2s",
                    height: "100px",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
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
