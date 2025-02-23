import { createSlice } from "@reduxjs/toolkit";
import seatData from "../danhSachGhe.json";

const initialState = {
  seats: seatData, // Dữ liệu lấy từ file JSON
  selectedSeats: [], // Danh sách ghế đang chọn
  confirmedSeats: [], // Danh sách ghế đã xác nhận
};

const seatSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    selectSeat: (state, action) => {
      if (!state.selectedSeats.includes(action.payload)) {
        state.selectedSeats.push(action.payload);
      }
    },
    removeSeat: (state, action) => {
      state.confirmedSeats = state.selectedSeats.filter(
        (seat) => seat != action.payload
      );
    },
    confirmSelection: (state) => {
      state.confirmedSeats = [...state.selectedSeats];
      state.selectedSeats = [];
    },
  },
});

export const { selectSeat, removeSeat, confirmSelection } = seatSlice.actions;

export default seatSlice.reducer;
