import React from "react";

export function Categories() {
  const categories = [
    "Electronics",
    "Fashion",
    "Shoes",
    "Books",
    "Home Decor",
  ];

  return (
    <div style={styles.container}>
      <h2>Categories</h2>

      <div style={styles.list}>
        {categories.map((item, index) => (
          <div key={index} style={styles.category}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  category: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px 25px",
    borderRadius: "8px",
  },
};

export default Categories;