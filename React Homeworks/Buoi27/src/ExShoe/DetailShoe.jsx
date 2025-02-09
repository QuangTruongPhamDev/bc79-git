import React from "react";

export default function DetailShoe({ detailShoe }) {
  return (
    <div>
      <img className="w-96" src={detailShoe.image} alt="" />
    </div>
  );
}
