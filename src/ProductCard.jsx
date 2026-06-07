import React from "react";

export function ProductCard({ name, price, image }) {
  return (
    <div style={styles.card}>
      <img src={image}alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    width: "220px",
    border: "1px solid #ddd",
    padding: "15px",
    textAlign: "center",
    borderRadius: "10px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
};

export default ProductCard;