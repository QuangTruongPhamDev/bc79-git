/* Bài 1 
- input:
Khai báo và nhập giá trị các biến

- Các bước xử lý:
+ Tạo function lấy điểm ưu tiên khu vực và điểm ưu tiên đối tượng của Thí sinh.
+ Thực hiện phép tính tổng.
+ Xét các điều kiện đậu và rớt, in ra kết quả.

- Output
+ Trả về kết quả Đậu hoặc Rớt và Tổng điểm


**/

let getDiemUuTienKhuVuc = () => {
  let khuVuc = document.getElementById("khuVuc").value;

  let diemUuTienKhuVuc = 0;
  switch (khuVuc) {
    case "A":
      diemUuTienKhuVuc = 2;
      break;
    case "B":
      diemUuTienKhuVuc = 1;
      break;
    case "C":
      diemUuTienKhuVuc = 0.5;
      break;
    default:
      diemUuTienKhuVuc = 0;
      break;
  }
  return diemUuTienKhuVuc;
};

let getDiemUuTienDoiTuong = () => {
  let doiTuong = document.getElementById("doiTuong").value * 1;

  let diemUuTienDoiTuong = 0;
  switch (doiTuong) {
    case 1:
      diemUuTienDoiTuong = 2.5;
      break;
    case 2:
      diemUuTienDoiTuong = 1.5;
      break;
    case 3:
      diemUuTienDoiTuong = 1;
      break;
    default:
      diemUuTienDoiTuong = 0;
  }
  return diemUuTienDoiTuong;
};

document.getElementById("btnXetTuyen").onclick = function () {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const mon1 = document.getElementById("mon1").value * 1;
  const mon2 = document.getElementById("mon2").value * 1;
  const mon3 = document.getElementById("mon3").value * 1;
  const diemUuTienKhuVuc = getDiemUuTienKhuVuc();
  const diemUuTienDoiTuong = getDiemUuTienDoiTuong();

  const diemUuTien = diemUuTienKhuVuc + diemUuTienDoiTuong;
  const tongDiem = mon1 + mon2 + mon3 + diemUuTien;

  if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
    document.getElementById(
      "result"
    ).innerHTML = `<h3 style='color: red;'>Rớt: Có môn thi điểm 0. Tổng điểm đạt được: ${tongDiem}</h3>`;
  } else if (tongDiem >= diemChuan) {
    document.getElementById(
      "result"
    ).innerHTML = `<h3 style='color: green;'>Đậu: Tổng điểm đạt được là ${tongDiem}</h3>`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<h3 style='color: red;'>Rớt: Tổng điểm đạt được là ${tongDiem}</h3>`;
  }
};

/* Bài 2 

- input:
Khai báo và nhập giá trị các biến

- Các bước xử lý:
+ Khi khách hàng click vào button Tính tiền điện, lấy giá trị tên khách hàng và số Kw đã nhập.
+ Xét điều kiện hợp lệ của số Kw.
+ Sử dụng if-else if để thực hiện các phép tính theo từng trường hợp.

- Output
+ Trả về kết quả tiền điện đã tiêu thụ.


*/

document.getElementById("btnTinhTienDien").onclick = function () {
  const name = document.getElementById("name").value;
  const kw = document.getElementById("kw").value * 1;
  let total = 0;

  // Xét điều kiện số Kw khách hàng nhập vào có hợp lệ không (là số thực, không được là số âm)
  if (isNaN(kw) || kw < 0) {
    document.getElementById("result2").innerHTML =
      "<p style='color: red;'><strong>Vui lòng nhập số Kw đã sử dụng hợp lệ!<strong></p>";
    return;
  }
  // Xét từng trường hợp
  if (kw <= 50) {
    total = kw * 500;
  } else if (kw <= 100) {
    total = 50 * 500 + (kw - 50) * 650;
  } else if (kw <= 200) {
    total = 50 * 500 + 50 * 650 + (kw - 100) * 850;
  } else if (kw <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
  } else {
    total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
  }

  document.getElementById(
    "result2"
  ).innerHTML = `<p style='color: green;'>Kính thưa quý khách <strong>${name}</strong>! Hóa đơn hiện tại của quý khách là: <strong>${total.toLocaleString()} VNĐ</strong>.<br>Qúy khách vui lòng thanh toán đúng hẹn tránh phát sinh chi phí! Xin cảm ơn </p>`;
};

/* Bài 3

- input:
Khai báo và nhập giá trị các biến

- Các bước xử lý:
+ Khi người dùng click vào button Tính thuế, lấy giá trị họ và tên, thu nhập năm và số người phụ thuộc.
+ Xét tính hợp lệ của dữ liệu nhập nào: Họ và tên không để trống, thu nhập năm và số người phải là số  > 0.
+ Khai báo các mức miễn trừ (miễn trừ cá nhân và miễn trừ mỗi người phụ thuộc)
+ Sử dụng if-else if để thực hiện các trường hợp: Nếu thu nhập chịu thuế <=0 thì người dùng không phải đóng thuế, ngược lại nếu > 0 thì xác định thuế suất theo từng trường hợp của thu nhập chịu thuế.
+ Thực hiện tính tiền Thuế.

- Output:
+ Trả về kết quả tiền Thuế phải đóng.


*/

document.getElementById("btnTinhThue").onclick = function () {
  const fullname = document.getElementById("fullname").value;
  const income = document.getElementById("income").value * 1;
  const dependents = document.getElementById("dependents").value * 1;

  // Kiểm tra nếu các thông tin chưa được nhập đầy đủ và hợp lệ
  if (
    !fullname ||
    isNaN(income) ||
    isNaN(dependents) ||
    income <= 0 ||
    dependents <= 0
  ) {
    document.getElementById(
      "result3"
    ).innerHTML = `<p style='color: red;'>Vui lòng nhập thông tin hợp lệ!</p>`;
  }

  const personalDeduction = 4000000; // Giảm trừ cá nhân (4 triệu)
  const dependentDeduction = 1600000; // Giảm trừ mỗi người phụ thuộc (1.6 triệu)

  const taxableIncome =
    income - personalDeduction - dependents * dependentDeduction;

  // Nếu thu nhập chịu thuế <= 0, không phải nộp thuế
  if (taxableIncome <= 0) {
    document.getElementById(
      "result3"
    ).innerHTML = `<p style='color: green;'><strong>Bạn không phải đóng thuế!</strong></p>`;
  } else {
    // Nếu thu nhập chịu thuế > 0
    // Xác định thuế suất
    let taxRate = 0;
    if (taxableIncome <= 60000000) {
      taxRate = 0.05;
    } else if (taxableIncome <= 120000000) {
      taxRate = 0.1;
    } else if (taxableIncome <= 210000000) {
      taxRate = 0.15;
    } else if (taxableIncome <= 384000000) {
      taxRate = 0.2;
    } else if (taxableIncome <= 624000000) {
      taxRate = 0.25;
    } else if (taxableIncome <= 960000000) {
      taxRate = 0.3;
    } else {
      taxRate = 0.35;
    }

    // Tính số thuế phải trả
    let taxAmount = taxableIncome * taxRate;

    // Hiển thị kết quả
    document.getElementById(
      "result3"
    ).innerHTML = `<p style='color: green;'>Họ và tên cá nhân: <strong>${fullname}</strong>.<br>Thu nhập chịu thuế là: <strong>${taxableIncome.toLocaleString()} VNĐ</strong>.<br>Thuế thu nhập cá nhân phải trả: <strong>${taxAmount.toLocaleString()} VNĐ.</strong></p>`;
  }
};

/* Bài 4 

- input:
Khai báo và nhập giá trị các biến

- Các bước xử lý:
+ Xét điều kiện ẩn hiện thanh nhập số kết nối
+ Thực hiện function tính tiền cáp theo từng trường hop85
+ Thực hiện các bước lấy giá trị
+ Xét tính hợp lệ của giá trị nhập vào.
+ Thực hiện theo function đã làm trước đó.

- Output:
+ Trả về kết quả hóa đơn tiền cáp phải đóng.

*/

let customerType = document.getElementById("loaiKhachHang");
let connections = document.getElementById("soKetNoi");

// enable/ disable thanh nhập số kết nối
customerType.onchange = function () {
  if (customerType.value === "business") {
    connections.disabled = false;
  } else {
    connections.disabled = true;
    connections.value = "";
  }
};
// Function tính tiền cáp
let tinhTienCap = (loaiKhachHang, soKetNoi, soKenhCaoCap) => {
  let tienCap = 0;
  switch (loaiKhachHang) {
    case "residential": {
      let phiHoaDon = 4.5;
      let phiDichVu = 20.5;
      let phiThueKenh = 7.5;
      tienCap = phiHoaDon + phiDichVu + soKenhCaoCap * phiThueKenh;
      return tienCap;
    }
    case "business": {
      let phiHoaDon = 15;
      let phiKetNoi = 7.5;
      let phiKetNoiTren10 = 5;
      let phiThueKenh = 50;
      let tienKetNoi =
        soKetNoi <= 10
          ? soKetNoi * phiKetNoi
          : phiKetNoi * 10 + (soKetNoi - 10) * phiKetNoiTren10;
      tienCap = phiHoaDon + tienKetNoi + soKenhCaoCap * phiThueKenh;
      return tienCap;
    }
  }
};

document.getElementById("btnTinhHoaDon").onclick = function () {
  let maKhachHang = document.getElementById("customerId").value;
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  // Đảm bảo giá trị số kết nối trong function tính tiền cáp
  if (loaiKhachHang == "residential") {
    soKetNoi = 0;
  } else {
    soKetNoi = document.getElementById("soKetNoi").value * 1;
  }
  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;

  // Xét tính hợp lệ của giá trị nhập vào: mã KH, loại KH không đc để để trống, số kênh cao cấp là số thực
  if (!maKhachHang || !loaiKhachHang || isNaN(soKenhCaoCap)) {
    document.getElementById(
      "result4"
    ).innerHTML = `<p style='color: red;'><strong>Vui lòng nhập thông tin hợp lệ!</strong></p>`;
  }

  // sử dụng fuction tính tiền cáp
  let hoaDon = 0;
  hoaDon = tinhTienCap(loaiKhachHang, soKetNoi, soKenhCaoCap);

  // Hiển thị kết quả
  document.getElementById(
    "result4"
  ).innerHTML = `<p style='color: green;'>Mã khách hàng: <strong>${maKhachHang}</strong> <br>Tổng hóa đơn: <strong>${hoaDon.toFixed(
    2
  )} $</p>`;
};
