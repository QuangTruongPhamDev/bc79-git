import React from "react";
import ItemShoe from "./ItemShoe";
import { listShoe } from "./dataShoe";

export default function ListShoe(props) {
  let renderListShoe = () => {
    return listShoe.map((shoe, index) => {
      return (
        <ItemShoe
          key={index}
          dataShoe={shoe}
          handleChangeShoe={props.setDetailShoe}
          handleAddToCart={props.handleAddToCart}
        />
      );
    });
  };
  return <div className="grid grid-cols-4 gap-12">{renderListShoe()}</div>;
}
