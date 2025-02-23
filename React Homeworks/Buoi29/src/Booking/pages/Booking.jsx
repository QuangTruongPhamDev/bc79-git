import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmSelection, removeSeat, selectSeat } from "./redux/seatSlice";

export default function Booking() {
  const dispatch = useDispatch();
  const { seats, selectedSeats, confirmedSeats } = useSelector(
    (state) => state.seats
  );
  // State để lưu thông tin tên và số ghế do người dùng nhập
  const [name, setName] = useState("");
  const [numSeats, setNumSeats] = useState("");

  // Cho phép chọn ghế chỉ sau khi người dùng bấm "Start Selection"
  const [selectionEnable, setSelectionEnable] = useState(false);

  // Hàm xử lý khi người dùng click chọn ghế
  const handleSelectSeat = (seat) => {
    if (selectionEnable) {
      if (selectedSeats.includes(seat)) {
        // Nếu ghế đã được chọn, bỏ chọn ghế đó
        dispatch(removeSeat(seat));
      } else {
        // Kiểm tra số ghế đã chọn không vượt quá số ghế đã nhập
        if (selectedSeats.length < Number(numSeats)) {
          dispatch(selectSeat(seat));
        } else {
          alert(
            `Bạn chỉ có thể chọn đúng ${numSeats} chỗ ngồi mà bạn đã nhập. Vui lòng thay đổi số lượng ghế nếu muốn đặt thêm / bớt chỗ. Xin cảm ơn!`
          );
        }
      }
    }
  };

  // Bắt đầu cho phép chọn ghế sau khi nhập thông tin hợp lệ
  const handleStartSelection = () => {
    if (name.trim() !== "" && numSeats > 0) {
      setSelectionEnable(true);
    } else {
      alert("Vui lòng nhập tên và số ghế ngồi bạn muốn chọn!");
    }
  };

  const handleConfirmSelection = () => {
    dispatch(confirmSelection());
    setSelectionEnable(false);
  };
  return (
    <div>
      <div className="bookingMovie">
        <h2 className="title">Movie Selection</h2>
        <div className="input-container">
          <div className="input-row">
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Số ghế ngồi"
              value={numSeats}
              onChange={(e) => setNumSeats(e.target.value)}
              min="1"
            />
          </div>
          <button className="start-button" onClick={handleStartSelection}>
            Bắt Đầu Chọn
          </button>
        </div>
        <div className="screen">MÀN HÌNH</div>
        <div className="seat-map">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              <span className="row-lable">{row.hang}</span>
              {row.danhSachGhe.map((seat) => (
                <button
                  key={seat.soGhe}
                  className={`ghe ${selectionEnable ? "enabled" : ""} ${
                    selectedSeats.includes(seat.soGhe) ? "gheDangChon" : ""
                  } ${seat.daDat ? "gheDuocChon" : ""}`}
                  onClick={() => handleSelectSeat(seat.soGhe)}
                  disabled={seat.daDat}
                >
                  {seat.soGhe}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="selection-info">
          <p>Ghế đã chọn: {selectedSeats.join(", ")}</p>
          <button
            className="confirm-button"
            onClick={handleConfirmSelection}
            disabled={!selectionEnable}
          >
            Xác nhận chọn
          </button>
        </div>
        {confirmedSeats.length > 0 && (
          <div className="confirmed-seats">
            <h3>Xác nhận vé</h3>
            <table>
              <thead>
                <tr>
                  <th>Ghế</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                {confirmedSeats.map((seat) => (
                  <tr key={seat}>
                    <td>{seat}</td>
                    <td>75,000 VNĐ</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="total">
              Tổng tiền: {(confirmedSeats.length * 75000).toLocaleString()} VNĐ
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
