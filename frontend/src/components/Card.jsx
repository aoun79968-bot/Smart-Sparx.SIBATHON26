// src/components/Card.jsx
import React from "react";

const Card = ({ item }) => {
  const handleAdd = () => {
    // get existing data
    const storedItems =
      JSON.parse(localStorage.getItem("items")) || [];

    // add new item
    storedItems.push(item);

    // save back to localStorage
    localStorage.setItem("items", JSON.stringify(storedItems));

    alert("Item saved to localStorage ✅");
  };

  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <button onClick={handleAdd}>Save</button>
    </div>
  );
};

export default Card;
