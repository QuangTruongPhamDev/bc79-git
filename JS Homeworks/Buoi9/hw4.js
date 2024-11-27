/* Đầu vào 
- Khai báo các biến d - chiều dài, r - chiều rộng, cv - chu vi, sum - biến chứa giá trị chiều dài + chiều rộng, dt - diện tích của hình chữ nhật.
* Cách thực hiện 
- Khai báo và gán giá trị các biến d, r
- Khai báo và gán giá trị của biến dt là phép nhân d với r
- Khai báo và gán giá trị biến sum là phép cộng d với r
- Khai báo và gán giá trị biến cv là phép nhân sum với 2
- Thực hiện các phép tính
* Đầu ra
- Trả về kết quả Diện tích và Chu vi hình chữ nhật
**/

let d = 400;
let r = 200;
let sum = d + r;
let dt = d * r;
let cv = sum * 2;
console.log("Diện tích hình chữ nhật:", dt);
console.log("Chu vi hình chữ nhật:", cv);
