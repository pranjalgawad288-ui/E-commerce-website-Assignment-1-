import {Navbar} from "./Navbar.jsx";
import {HomePage} from "./HomePage.jsx";
import {ProductCard} from "./ProductCard.jsx";
import {Categories} from "./Categories.jsx";
import {Testimonials} from "./Testimonials.jsx";
import React from "react";

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <h2 style={{ textAlign: "center" }}>Featured Products</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          name="Smart Watch"
          price="₹25,900"
          image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLejDWHHvOGRiAiDvdPd7q0PZR3FIFPR_RR7OSWB6G_zb8U1onMYofEz6uNtiAW7YnlTAAK0sMGykdEt_4Fe7uTRIh57-I2FqxBQ08bISnUJsqgDMAvCrazuY"
        />

        <ProductCard
          name="Shoes"
          price="₹10,999"
          image="https://cms.brnstc.de/product_images/680x930_retina/cpro/media/images/product/25/9/100284918611000_1_1758609577971.jpg"
        />

        <ProductCard
          name="Headphones"
          price="₹22,900"
          image="https://www.beatsbydre.com/content/dam/beats/web/product/headphones/solo4-wireless/pdp/product-carousel/cloud-pink/pink-01-solo4.jpg.medium.2x.jpg"
        />
      </div>

      <Categories />
      <Testimonials />
    </div>
  );
}

export default App;


