import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const Shop: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Get all unique categories
  const allCategories = Array.from(
    new Set(products.flatMap((product) => product.CategoryType2)),
  ).sort();

  const filteredProducts = products
    .filter((product) => {
      const lowerSearch = searchText.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(lowerSearch);
      const categoryMatch = product.CategoryType1.toLowerCase().includes(lowerSearch);
      const searchFilter = nameMatch || categoryMatch;

      // If no categories are selected, show all. Otherwise, show only products with selected categories
      const categoryFilter =
        selectedCategories.length === 0 ||
        product.CategoryType2.some((cat) => selectedCategories.includes(cat));

      return searchFilter && categoryFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category],
    );
  };

  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div
        style={{
          width: "250px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: "#d4bd4a",
          height: "fit-content",
          position: "sticky",
          top: "20px",
  
        }}
      >
        <h3 style={{ marginTop: 0, color: "#0b6262" ,fontStyle: "bold"}} >Search by Category</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }} >
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              style={{
                padding: "8px 12px",
                backgroundColor: selectedCategories.includes(category)
                  ? "#0b6262"
                  : "#caeeee",
                color: selectedCategories.includes(category)
                  ? "white"
                  : "black",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: selectedCategories.includes(category)
                  ? "bold"
                  : "normal",
                transition: "all 0.3s ease",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
