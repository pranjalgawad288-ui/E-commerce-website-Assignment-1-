import React, { useEffect, useState } from "react";
import { supabase } from "./supabase.js";

export function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    getCartCount();
  }, []);

  async function getCartCount() {
    const { count, error } = await supabase
      .from("cart")
      .select("*", { count: "exact", head: true });

    if (!error) {
      setCartCount(count);
    }
  }

  return (
    <nav style={styles.nav}>
      <h2>ShopEasy</h2>

      <ul style={styles.menu}>
        <li>Home</li>
        <li>Products</li>
        <li>Categories</li>
        <li>Contact</li>
        <li>🛒 Cart ({cartCount})</li>
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