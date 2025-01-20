// Kiểm tra trống
let kiemTraTrong = (value, idError) => {
  if (value.length == 0) {
    document.getElementById(idError).innerHTML = "Không được để trống";
    return false;
  } else {
    document.getElementById(idError).innerHTML = "";
    return true;
  }
};

// Kiểm tra trùng
let kiemTraTrung = (value, dsnv, idError) => {
  let index = dsnv.findIndex((nv) => {
    return nv.taiKhoan === value;
  });
  if (index !== -1) {
    document.getElementById(idError).innerHTML = "Tài khoản đã tồn tại";
    return false;
  } else {
    document.getElementById(idError).innerHTML = "";
    return true;
  }
};

// Kiểm tra 4-6 ký số tài khoản
let kiemTraTkSo = (value, idError) => {
  let regex = /^[0-9]{4,6}$/;
  let isValid = regex.test(value);
  if (isValid) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(idError).innerHTML =
      "Tài khoản phải là số và có từ 4-6 ký số";
    return false;
  }
};

// Kiểm tra tên phải là chữ
let kiemTraTen = (value, idError) => {
  let regex =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẮẰẲẴẶẮĐỀỀỂỄỆỈỊỎỌỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ\s]+$/u;
  let isValid = regex.test(value.trim());
  if (isValid) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(idError).innerHTML = "Tên nhân viên phải là chữ";
    return false;
  }
};

// Kiểm tra email
let kiemTraEmail = (valueEmail, idErr) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  let isValid = regex.test(valueEmail);
  if (isValid) {
    // email hợp lệ
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
  // email không hợp lệ
  document.getElementById(idErr).innerHTML = "Email không hợp lệ";
  return false;
};

// Kiểm tra password
let kiemTraPassword = (value, idError) => {
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;
  let isValid = regex.test(value);
  if (isValid) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(idError).innerHTML =
      "Password phải có ít nhất 1 chữ cái và 1 số và 1 ký tự đặc biệt, từ 6-10 ký tự";
    return false;
  }
};

// Kiểm tra ngày làm
let kiemTraNgay = (value, idError) => {
  let regex = /^\d{2}\/\d{2}\/\d{4}$/;
  let isValid = regex.test(value);
  if (isValid) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(idError).innerHTML = "Ngày làm không hợp lệ";
    return false;
  }
};

// Kiểm tra lương cơ bản là số
let kiemTraLuongLaSo = (value, idError) => {
  if (typeof value === "number" || isNaN(value)) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(idError).innerHTML = "Lương phải là số";
    return false;
  }
};

// Kiểm tra lương cơ bản từ 1.000.000-20.000.000
let kiemTraLuong = (value, idError) => {
  if (value >= 1000000 && value <= 20000000) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(idError).innerHTML =
      "Lương cơ bản từ 1.000.000-20.000.000";
    return false;
  }
};

// Kiểm tra chọn chức vụ hợp lệ
let kiemTraChucVu = (value, idError) => {
  if (value === "Chọn chức vụ") {
    document.getElementById(idError).innerHTML = "Chọn chức vụ";
    return false;
  } else {
    document.getElementById(idError).innerHTML = "";
    return true;
  }
};

// Kiểm tra giờ làm số
let kiemTraGioLamLaSo = (value, idError) => {
  if (typeof value === "number" || isNaN(value)) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(idError).innerHTML = "Giờ làm phải là số";
    return false;
  }
};

// Kiểm tra giờ làm từ 80-200 giờ
let kiemTraGioLam = (value, idError) => {
  if (value >= 80 && value <= 200) {
    document.getElementById(idError).innerHTML = "";
    return true;
  } else {
    document.getElementById(idError).innerHTML = "Giờ làm từ 80-200 giờ";
    return false;
  }
};
