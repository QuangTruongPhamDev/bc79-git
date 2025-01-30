import React from "react";
import { listGlass } from "./dataGlass";
import ItemGlass from "./ItemGlass";
import DetailGlass from "./DetailGlass";
import { useState } from "react";

export default function BaiTapThuKinh() {
  let [detailGlass, setDetailGlass] = useState({});
  let renderListGlass = () => {
    return listGlass.map((glass, index) => {
      return (
        <ItemGlass
          key={index}
          dataGlass={glass}
          handleChangeGlass={setDetailGlass}
        />
      );
    });
  };
  return (
    <div
      className="bg-gray-100 font-sans"
      style={{
        backgroundImage: "url(./glassesImage/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1 className="text-center text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          TRY GLASSES APP ONLINE
        </h1>
        <div className="grid grid-cols-2 gap-8 items-center py-10">
          {/* Left section: Face with glasses */}
          <div className="glasses-preview">
            <img
              src="./glassesImage/model.jpg"
              alt="Face without glasses"
              className="w-full rounded shadow"
            />
            <DetailGlass detailGlass={detailGlass} />
          </div>
          {/* Right section: Face without glasses */}
          <div>
            <img
              src="./glassesImage/model.jpg"
              alt="Face without glasses"
              className="w-full rounded shadow"
            />
          </div>
        </div>

        {/* Glasses list */}
        <h2 className="text-3xl font-bold text-purple-400">Glasses Category</h2>
        <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4">
          {renderListGlass()}
        </div>
      </div>
    </div>
  );
}
