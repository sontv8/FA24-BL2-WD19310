/*
    1. Function
    - khởi tạo hàm
        Cú pháp: function [tên hàm](tham số){
            khối lệnh
        }
    - các kiểu hàm trong js
    - arrow function
    - default params
*/

// function sum() {
//   const a = 10;
//   const b = 20;
//   const result = a + b;
// }

// const sum = function () {
//   const a = 10;
//   const b = 20;
//   const result = a + b;
// };
// arrow function
// const sum = () => {
//   return "abcd";
// };

/*
    Các kiểu hàm trong js
    - hàm không có tham số và không có giá trị trả về (không có return)
    - hàm không có tham số và  có giá trị trả về ( có return)
    - hàm có tham số và không có giá trị trả về (không có return)
    - hàm có tham số và có giá trị trả về (không có return)
*/

// function sum(a, b) {
//   return a + b;
// }
// const sum = (a = 1, b = 2) => a + b;
// console.log(sum(20, 20));

// const tienDanhDe = sum() * 70;
// console.log(tienDanhDe);
/*
    Tham số: giống như biến, được truyền vào hàm khi khởi tạo hàm
    Đối số: là giá trị được truyền vào hàm khi gọi hàm ra thực thi
*/

/*
    2. Array
    - khởi tạo mảng
    - các phương thức xử lý mảng
        cơ bản:
            - length
            - push()
            - pop()
            - splice()
            - indexOf()
            - includes()
        nâng cao:
            - map
            - filter
            - find
    - sự khác nhau giữa function và method
*/

// const username1 = "sontv";
// const username2 = "thienth";
// const username3 = "datlt";

// const users = new Array("sontv", "thienth", "datlt");
// const users = ["sontv", "thienth", "datlt", "tuannda"];
// users.splice(users.length, 0, "hieunv", "thanhnt");
// users.splice(0, 2);
// users.splice(0, 1, "hieunv");
// console.log(users);

// users.push("abcd");
// console.log(users);

// index - chỉ mục

// const addProduct = () => {};
// const updateProduct = () => {};
// const deleteProduct = () => {};

// const products = ["xiaomi", "iphone", "samsung", "oppo"];

// products.forEach((item, index) => {
//   //   console.log(item);
//   console.log(index + 1);
// });

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

// for (let item of products) {
//   // khối lệnh
//   console.log(item);
// }

// const cars = new Object();
// const car = {
//   name: "BMW",
//   color: "blue",
//   drive: () => {
//     console.log("bạn đang đua xe");
//   },
// };
// console.log(car.color);
// car.drive();
/*
    Khai báo 1 mảng users bao gồm 3 object
    Mỗi object chứa thông tin của 1 user bao gồm:
        - username
        - email
        - password
        - role
        - status

    Viết 1 hàm để in ra toàn bộ thông tin của từng user trong mảng
    Viết 1 hàm để thêm mới 1 user vào mảng
*/

// const users = [
//   {
//     username: "sontv",
//     email: "abcd@gmail.com",
//     password: "123456",
//     role: 1,
//     status: true,
//   },
//   {
//     username: "thienth",
//     email: "abcd@gmail.com",
//     password: "123456",
//     role: 1,
//     status: true,
//   },
//   {
//     username: "datlt",
//     email: "abcd@gmail.com",
//     password: "123456",
//     role: 1,
//     status: true,
//   },
// ];

// const showUsers = () => {
//   for (let user of users) {
//     console.log("Thông tin user:");
//     console.log("Tên tài khoản:", user.username);
//     console.log("Email tài khoản:", user.email);
//   }
// };
// // showUsers();

// const addUser = () => {
//   const newUser = {
//     username: "bichpn",
//     email: "bichpn@gmail.com",
//     password: "bichxinhgai",
//     role: 1,
//     status: false,
//   };
//   users.push(newUser);
//   console.log(users);
// };
// addUser();

// console.log(document);
// console.log(document.querySelectorAll(".title"));

// const mainTitle = document.querySelector("#main-title");

// mainTitle.innerHTML = "abcd";

const product = {
  name: "Product 1",
  price: 1000,
  image:
    "https://img.redbull.com/images/c_crop,x_542,y_0,h_1080,w_810/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/3/4/bs4epwbrsuwx3i1lcmrc/seraphine-tips-lol-main",
  description: "Description",
};

// const productImage = document.querySelector("#image");
// const productName = document.querySelector("#product-name");
// const productPrice = document.querySelector("#price");
// const productDesc = document.querySelector("#desc");

// console.log(product.image);

// productImage.src = product.image;
// productName.innerHTML = product.name;
// productPrice.innerHTML = product.price;
// productDesc.innerHTML = product.description;

const productDiv = document.querySelector(".product");
// productDiv.innerHTML =
//   "<img src='" +
//   product.image +
//   "' alt='' />" +
//   "<h3>" +
//   product.name +
//   "</h3>" +
//   "<p>" +
//   product.price +
//   "</p>" +
//   "<p>" +
//   product.description +
//   "</p>";
const myName = "sontv";

productDiv.innerHTML = `
    <img src=${product.image} alt=''>
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <p>${product.description}</p>
`;

/*
B1: tìm phần tử html sẽ hiển thị (thẻ div có class product)
B2: lặp qua mảng products để lấy ra từng object
B3: lấy dữ liệu trong từng object để hiển thị ra html 
    (cập nhật nội dung bên trong div product)
*/
