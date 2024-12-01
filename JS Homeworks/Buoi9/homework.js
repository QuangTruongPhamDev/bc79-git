// Bài 1
/* Đầu vào 
- Khai báo và gán giá trị các biến số ngày làm việc, lương 1 ngày.
* Các bước thực hiện 
- Lấy giá trị các biến mà người dùng nhập.
- Kiểm tra tính hợp lệ giá trị của biến đó: số ngày làm việc không được để trống và lớn hơn 0, nếu không hợp lệ thì xuất thông báo để người dùng nhập lại.
- Dữ liệu hợp lệ thì thực hiện phép tính lương và khai báo, gán giá trị biến kết quả
* Đầu ra
- Xuất ra kết quả lương dựa trên số ngày làm
**/
let days = document.querySelector("#days");
let btnSalary = document.querySelector("#btn-salary");

btnSalary.addEventListener("click", function () {
  // Lấy giá trị từ ô nhập số ngày
  // Khai báo và gán giá trị biến lương 1 ngày - dailySalary
  let daysValue = days.value;
  let dailySalary = 100000;

  // Kiểm tra số ngày nhập vào có hợp lệ không, gồm 2 điều kiện, số ngày nhập không để trống và số ngày không bé hơn 0
  if (daysValue == "" || daysValue < 0) {
    document.getElementById(
      "result"
    ).innerHTML = `<p style='color:red'>Vui lòng nhập số ngày hợp lệ!</p>`;
    return;
  }

  let totalSalary = daysValue * dailySalary;
  document.querySelector(
    "#result"
  ).innerHTML = `Tổng lương: ${totalSalary.toLocaleString("vi-VN")} VND`;
});

// Bài 2
/* Đầu vào 
- Khai báo và gán giá trị các biến của 5 số thực.
* Các bước thực hiện 
- Lấy giá trị các biến mà người dùng nhập.
- Kiểm tra tính hợp lệ giá trị của các biến đó: tất cả các số vừa nhập đều phải là số thực, nếu không sẽ xuất ra thông báo yêu cầu người dùng nhập lại
- Dữ liệu hợp lệ thì thực hiện phép tính trung bình 5 số thực, khai báo và gán giá trị biến kết quả.
* Đầu ra
- Xuất ra kết quả trung bình của 5 số thực vừa nhập.
**/
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let btnAverage = document.querySelector("#btn-average");

btnAverage.addEventListener("click", function () {
  // Lấy giá trị từ các ô nhập số thực
  let num1Value = parseFloat(num1.value);
  let num2Value = parseFloat(num2.value);
  let num3Value = parseFloat(num3.value);
  let num4Value = parseFloat(num4.value);
  let num5Value = parseFloat(num5.value);

  // Kiểm tra nếu không nhập đúng số thực bằng hàm isNaN
  if (
    isNaN(num1Value) ||
    isNaN(num2Value) ||
    isNaN(num3Value) ||
    isNaN(num4Value) ||
    isNaN(num5Value)
  ) {
    document.getElementById(
      "result2"
    ).innerHTML = `<p style='color:red'>Vui lòng nhập đầy đủ và đúng 5 số thực!</p>`;
    return;
  }

  // Tính trung bình 5 số thực và trả kết quả
  let average = (num1Value + num2Value + num3Value + num4Value + num5Value) / 5;
  document.getElementById("result2").innerHTML =
    `Giá trị trung bình là: ` + average.toFixed(2);
});

// Bai 3
/* Đầu vào 
- Khai báo và gán giá trị các biến của số tiền USD cần quy đổi, biến tỉ giá quy đổi.
* Các bước thực hiện 
- Lấy giá trị các biến mà người dùng nhập.
- Kiểm tra tính hợp lệ giá trị của các biến đó: số tiền USD mà người dùng nhập không được để trống và phải lớn hơn hoặc bằng 0, nếu không hợp lệ thì xuất thông báo để người dùng nhập lại.
- Dữ liệu hợp lệ thì thực hiện quy đổi bằng phép nhân số tiền USD và tỉ giá. Khai báo và gán giá trị biến kết quả.
* Đầu ra
- Xuất ra kết quả số tiền quy đổi ra từ USD.
**/
let EXCHANGE_RATE = 23500;
let usd = document.querySelector("#usdInput");
let btnConvert = document.querySelector("#btn-convert");

btnConvert.addEventListener("click", function () {
  let usdValue = usd.value;

  // Kiểm tra số tiền USD có nhập hợp lệ
  if (usdValue == "" || usd < 0) {
    document.getElementById(
      "result3"
    ).innerHTML = `<p style='color:red'>Vui lòng nhập số tiền USD hợp lệ!</p>`;
    return;
  }

  let vnd = usdValue * EXCHANGE_RATE;
  document.getElementById(
    "result3"
  ).innerHTML = `Số tiền tương ứng: ${vnd.toLocaleString("vi-VN")} VNĐ`;
});

// Bai 4
/* Đầu vào 
- Khai báo và gán giá trị các biến của chiều dài, rộng.
* Các bước thực hiện 
- Lấy giá trị các biến mà người dùng nhập.
- Kiểm tra tính hợp lệ giá trị của các biến đó: chiều dài và chiều rộng phải là số thực và phải lớn hơn 0. Nếu không hợp lệ thì xuất thông báo, yêu cầu người dùng nhập lại.
- Dữ liệu hợp lệ thì thực hiện phép tính trung bình 5 số thực. Khai báo và gán giá trị 2 biến kết quả.
* Đầu ra
- Xuất ra kết quả chu vi, diện tích của hình chữ nhật.
**/
let length = document.querySelector("#length");
let width = document.querySelector("#width");
let btnCalculate = document.querySelector("#btn-calculate");

btnCalculate.addEventListener("click", function () {
  // Lấy giá trị chiều dài và chiều rộng vừa nhập
  let lengthValue = parseFloat(length.value);
  let widthValue = parseFloat(width.value);

  // Kiểm tra dữ liệu có hợp lệ
  if (
    isNaN(lengthValue) ||
    isNaN(widthValue) ||
    lengthValue <= 0 ||
    widthValue <= 0
  ) {
    document.getElementById(
      "result4"
    ).innerHTML = `<p style='color:red'>Vui lòng nhập số hợp lệ lớn hơn 0 cho chiều dài và chiều rộng!</p>`;
    return;
  }

  // Tính chu vi và diện tích
  let chuvi = (lengthValue + widthValue) * 2;
  let dientich = lengthValue * widthValue;
  document.getElementById("result4").innerHTML = `
                <p>Chu vi hình chữ nhật: ${chuvi.toFixed(2)}</p>
                <p>Diện tích hình chữ nhật: ${dientich.toFixed(2)}</p>
            `;
});

// Bai 5
/* Đầu vào 
- Khai báo và gán giá trị của biến số có 2 chữ số.
* Các bước thực hiện 
- Lấy giá trị biến mà người dùng nhập.
- Kiểm tra tính hợp lệ giá trị của các biến đó: Nêuố đó phải có 2 chữ số và phải là số thực. Nếu không hợp lệ thì xuất thông báo để người dùng nhập lại.
- Dữ liệu hợp lệ thì thực hiện phép tính trích 2 chữ số và tổng 2 chữ số.
* Đầu ra
- Xuất ra kết quả tổng 2 chữ số của số vừa nhập
**/
let so = document.querySelector("#so");
let btnSum = document.querySelector("#btn-sum");

btnSum.addEventListener("click", function () {
  let soValue = so.value;

  // Kiểm tra tính hợp lệ
  if (soValue.length != 2 || isNaN(soValue)) {
    document.getElementById(
      "result5"
    ).innerHTML = `<p style='color:red'>Vui lòng nhập một số có đúng 2 chữ số!</p>`;
    return;
  }

  // Trích 2 chữ số từ số vừa nhập và thực hiện phép tính
  let digit1 = parseInt(soValue % 10);
  let digit2 = parseInt(soValue / 10);
  let sum = digit1 + digit2;
  document.getElementById("result5").innerHTML = `Tổng hai chữ số là: ${sum}`;
});
