import React from "react";

export default function DetailGlass({ detailGlass }) {
  return (
    <div>
      <img
        src={detailGlass.url}
        alt={detailGlass.name}
        className="glasses-image"
      />
      <div className="glasses-detail">
        <h1>{detailGlass.name}</h1>
        <h2>Price: {detailGlass.price}$</h2>
        <p>{detailGlass.desc}</p>
      </div>
    </div>
  );
}
