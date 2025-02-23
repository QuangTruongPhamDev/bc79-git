import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import seatReducer from "./Booking/pages/redux/seatSlice.js";

let store = configureStore({
  reducer: {
    seats: seatReducer,
  },
});
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
);
