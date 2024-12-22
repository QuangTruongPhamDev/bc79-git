let numberArr = [];
let realNumberArr = [];

// THÊM VÀO MẢNG
let getArray = () => {
  // MẢNG SỐ NGUYÊN
  if (document.getElementById("numbers").value == "") {
    return;
  }
  let number = document.getElementById("numbers").value * 1;
  numberArr.push(number);
  // reset input
  document.getElementById("numbers").value = "";
  // In ra mảng hiện tại
  document.getElementById("result").innerText = `Mảng hiện tại: ${numberArr}`;
};

// 1. TỔNG SỐ DƯƠNG
let sumPositiveNumbers = () => {
  getArray();
  let sum = 0;
  numberArr.forEach((item) => {
    if (item > 0) {
      sum = sum + item;
    }
  });
  document.getElementById(
    "result"
  ).innerText = `Tổng số dương trong mảng: ${sum}`;
};

// 2. ĐẾM SỐ DƯƠNG
let countPositiveNumbers = () => {
  getArray();
  let count = 0;
  numberArr.forEach((item) => {
    if (item > 0) {
      count++;
    }
  });
  document.getElementById(
    "result"
  ).innerText = `Có ${count} số dương trong mảng`;
};

// 3. TÌM SỐ NHỎ NHẤT TRONG MẢNG
let findSmallestNumber = () => {
  getArray();
  let min = numberArr[0];
  numberArr.forEach((item) => {
    if (item < min) {
      min = item;
    }
  });
  document.getElementById(
    "result"
  ).innerText = `Số nhỏ nhất trong mảng: ${min}`;
};

// 4. TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
let findSmallestPositiveNumber = () => {
  getArray();
  // Tạo mảng mới chứa số dương từ mảng cũ
  let positiveNumbersArr = [];
  numberArr.forEach((item) => {
    if (item > 0) {
      positiveNumbersArr.push(item);
    }
  });

  // Nếu mảng mới không có số dương nào thì trả về thông báo
  if (positiveNumbersArr.length === 0) {
    document.getElementById(
      "result"
    ).innerText = `Không có số dương nào trong mảng!`;
  }
  // Duyệt mảng mới tìm số dương nhỏ nhất trong mảng mới
  let minPositive = positiveNumbersArr[0];
  positiveNumbersArr.forEach((item) => {
    if (item < minPositive) {
      minPositive = item;
    }
  });
  document.getElementById(
    "result"
  ).innerText = `Số dương nhỏ nhất trong mảng là: ${minPositive}`;
};

// 5. TÌM SỐ CHẴN CUỐI CÙNG
let findLastEvenNumber = () => {
  getArray();
  let lastEvenNumber = 0;
  numberArr.forEach((item) => {
    if (item % 2 == 0) {
      lastEvenNumber = item;
    }
  });
  document.getElementById(
    "result"
  ).innerText = `Số chẵn cuối cùng trong mảng là: ${lastEvenNumber}`;
};

// 6. ĐỔI VỊ TRÍ
let swapArrayPositions = () => {
  getArray();
  // Hiển thị ô nhập vị trí muốn đổi chỗ
  let viTri = document.getElementById("vi-tri");
  viTri.style.display = "block";

  // Lấy giá trị 2 vị trí mà người dùng muốn đổi
  let index1 = document.getElementById("index1").value * 1;
  let index2 = document.getElementById("index2").value * 1;

  // Xét điều kiện cả 2 vị trí đều phải >= 0 và bé hơn độ dài của mảng
  if (
    index1 >= 0 &&
    index2 >= 0 &&
    index1 < numberArr.length &&
    index2 < numberArr.length
  ) {
    // Gán giá trị của biến tạm là giá trị của phần tử vị trí 1, gán giá trị phần tử vị trí 1 là phần tử vị trí 2, gán giá trị phần tử vị trí 2 là biến tạm
    let temp = numberArr[index1];
    numberArr[index1] = numberArr[index2];
    numberArr[index2] = temp;
    // In ra kết quả
    document.getElementById(
      "result"
    ).innerText = `Mảng sau khi đổi chỗ: ${numberArr}`;
  } else {
    document.getElementById("result").innerText = `Vị trí nhập không hợp lệ!`;
  }
};

// 7. SẮP XẾP TĂNG DẦN
let sortArrayAscending = () => {
  getArray();

  // Thuật toán Bubble Sort để sắp xếp mảng
  let n = numberArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (numberArr[j] > numberArr[j + 1]) {
        // Hoán đổi phần tử
        let temp = numberArr[j];
        numberArr[j] = numberArr[j + 1];
        numberArr[j + 1] = temp;
      }
    }
  }
  document.getElementById(
    "result"
  ).innerText = `Mảng sau khi sắp xếp tăng dần: ${numberArr}`;
};

// 8. TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
let isPrime = (num) => {
  if (num <= 1) {
    return false; // Các số nhỏ hơn hoặc bằng 1 không phải số nguyên tố
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Math.sqrt là hàm lấy căn bậc 2
    // Duyệt từ 2 đến căn bậc hai của num
    if (num % i === 0) {
      // Nếu tìm thấy ước số
      return false; // Không phải số nguyên tố
    }
  }
  return true; // Nếu không có ước số nào, là số nguyên tố
};
let findFirstPrimeNumber = () => {
  getArray();
  for (let i = 0; i < numberArr.length; i++) {
    if (isPrime(numberArr[i])) {
      document.getElementById(
        "result"
      ).textContent = `Số nguyên tố đầu tiên là: ${numberArr[i]}`;
      break; // Dừng vòng lặp khi tìm thấy số nguyên tố đầu tiên
    }
  }
};

// 9. ĐẾM SỐ NGUYÊN TRONG MẢNG SỐ THỰC
let countIntegersInRealArray = () => {
  let extraInput = document.getElementById("extra-input");
  extraInput.style.display = "block";
  if (document.getElementById("real-numbers").value == "") {
    return;
  }
  let realNumber = document.getElementById("real-numbers").value * 1;
  realNumberArr.push(realNumber);
  // reset input
  document.getElementById("real-numbers").value = "";
  // Duyệt mảng số thực
  let count = 0;
  realNumberArr.forEach((item) => {
    if (Number.isInteger(item)) {
      count++;
    }
  });
  document.getElementById(
    "result"
  ).innerText = `Mảng số thực là: ${realNumberArr}
  Số nguyên trong mảng số thực là: ${count}`;
};

// 10. SO SÁNH SỐ LƯỢNG SỐ ÂM VÀ DƯƠNG
let comparePositiveAndNegative = () => {
  getArray();
  let positiveCount = 0;
  let negativeCount = 0;
  numberArr.forEach((item) => {
    if (item > 0) {
      positiveCount++;
    }
    if (item < 0) {
      negativeCount++;
    }
  });
  let result = "";
  if (positiveCount > negativeCount) {
    result = "Số dương nhiều hơn.";
  } else if (negativeCount > positiveCount) {
    result = "Số âm nhiều hơn.";
  } else {
    result = "Số lượng số âm và số dương bằng nhau.";
  }
  document.getElementById("result").innerText = result;
};
