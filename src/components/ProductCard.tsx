import React, { useState } from "react";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.imageUrl.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.imageUrl.length) % product.imageUrl.length,
    );
  };

  return (
    <div 
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        maxWidth: "300px",
        textAlign: "center",
        backgroundColor: "#d9b258",
        
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={product.imageUrl[currentImageIndex]}
          alt={product.name}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={() => setShowModal(true)}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            fontSize: "18px",
             display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "0", // Prevents text-line height from pushing the symbol down
          }}
        >
          🔍
        </button>
        {product.imageUrl.length > 1 && (
          <>
            <button
              onClick={prevImage}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                fontSize: "18px",
                 display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "0", // Prevents text-line height from pushing the symbol down
              }}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                fontSize: "18px",
                 display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "0", // Prevents text-line height from pushing the symbol down
              }}
            >
              ›
            </button>
          </>
        )}
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={{ fontWeight: "bold", color: "#094e4e" }}>
        ${product.price.toFixed(2)}
      </p>
      <button 
      // className="bg-green-500 text-white border-none px-4 py-2 rounded cursor-pointer"

        // style={{
        //   backgroundColor: "#007bff",
        //   color: "white",
        //   border: "none",
        //   padding: "8px 16px",
        //   borderRadius: "4px",
        //   cursor: "pointer",
        // }}
      >
        Add to Cart
      </button>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setShowModal(false)}
        >
          <img
            src={product.imageUrl[currentImageIndex]}
            alt={product.name}
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
