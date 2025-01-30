import React from "react";

export default function ItemGlass({ dataGlass, handleChangeGlass }) {
  return (
    <div>
      <button
        onClick={() => {
          handleChangeGlass(dataGlass);
        }}
        className="glasses-button"
      >
        <img src={dataGlass.url} alt={dataGlass.name} />
      </button>
    </div>
  );
}
