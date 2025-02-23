import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>CHÀO MỪNG BẠN ĐẾN VỚI TRANG ĐẶT VÉ XEM PHIM</h2>
      <Link className="confirm-button" to="/booking">
        Đặt vé
      </Link>
    </div>
  );
}
