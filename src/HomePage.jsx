import React from "react";

export function HomePage() {
  return (
    <div style={styles.hero}>
      <h1>Welcome to ShopEasy</h1>
      <p>Best Deals on Fashion, Electronics & More</p>
      <button>Shop Now</button>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px",
    backgroundColor: "#f5f5f5",
  },
};

export default HomePage;