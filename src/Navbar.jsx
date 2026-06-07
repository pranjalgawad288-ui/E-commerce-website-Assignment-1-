import React from "react";

export function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>ShopEasy</h2>

      <ul style={styles.menu}>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    backgroundColor: "#333",
    color: "white",
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
};

export default Navbar;