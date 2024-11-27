/* Đầu vào
- Khai báo các biến:
    + n: số nhập vào có 2 chữ số
    + c: chữ số hàng chục của số n vừa nhập
    + d: chữ số hàng đơn vị của số n vừa nhập
    + sum: tổng chữ số hàng chục và hàng đơn vị
* Các bước thực hiện:
- Khai báo và gán giá trị biến n
- Thực hiện phép tính tìm chữ số hàng chục gán giá trị cho c
- Thực hiện phép tính tìm chữ số hàng đơn vị gán giá trị cho d
- Khai báo và gán giá trị cho sum là phép cộng giữa c và d
* Đầu ra:
- Trả về kết quả giá trị biến sum
**/

let n = 57;
let d = n % 10;
let c = n / 10 - d / 10;
let sum = c + d;
console.log("c:", c);
console.log("d:", d);
console.log("Tổng chữ số hàng chục và hàng đơn vị:", sum);
