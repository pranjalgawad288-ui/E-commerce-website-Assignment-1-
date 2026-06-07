import React from "react";

export function Testimonials() {
  const reviews = [
    {
      name: "Rahul",
      review: "Amazing products and quick delivery!",
    },
    {
      name: "Priya",
      review: "Best shopping experience ever.",
    },
    {
      name: "Amit",
      review: "Great quality at affordable prices.",
    },
  ];

  return (
    <div style={styles.container}>
      <h2>Customer Reviews</h2>

      {reviews.map((user, index) => (
        <div key={index} style={styles.card}>
          <h4>{user.name}</h4>
          <p>{user.review}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  card: {
    border: "1px solid #ddd",
    margin: "15px auto",
    padding: "15px",
    width: "60%",
    borderRadius: "8px",
  },
};

export default Testimonials;