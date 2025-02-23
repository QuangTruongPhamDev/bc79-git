import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./Booking/Header/Header";
import Home from "./Booking/pages/Home";
import Booking from "./Booking/pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/booking" element={<Booking />} />;
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
