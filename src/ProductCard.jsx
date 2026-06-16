import React from "react";
import { supabase } from "./Supabase.js";

export function ProductCard({ name, price, image }) {

  const addToCart = async () => {
    const { error } = await supabase
      .from("cart")
      .insert([
        {
          product_name: name,
          price: price,
        },
      ]);

    if (error) {
      alert("Error adding product");
      console.log(error);
    } else {
      alert("Product added to cart");
      window.location.reload();
    }
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p>{price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
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