import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./pages/admin/ProductList";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import AddProduct from "./pages/admin/AddProduct";

function App() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/products", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const onRemove = (id) => {
    // console.log(`http://localhost:3000/products/${id}`);

    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?")) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      const newData = products.filter((item) => {
        return item.id != id;
      });
      setProducts(newData);
    }
  };

  const onAdd = (product) => {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert("Thêm mới sản phẩm thành công");
        setProducts([...products, data]);
        navigate("/admin/products");
      });
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Trang chủ</h1>} />
        <Route
          path="/admin/products"
          element={<ProductList products={products} onRemove={onRemove} />}
        />
        <Route
          path="/admin/products/add"
          element={<AddProduct onAdd={onAdd} />}
        />
      </Routes>
    </>
  );
}

export default App;

/*
  Props
    object: { property : value}
    được sử dụng để truyền dữ liệu qua lại giữa các component
*/

/*
  API (Application Programming Interface) là một tập hợp các giao thức, công cụ và 
  định dạng mà các ứng dụng sử dụng để giao tiếp và trao đổi dữ liệu với nhau. 
  API hoạt động như một cầu nối, cho phép hai hệ thống khác nhau có thể tương tác 
  mà không cần biết cách thức hoạt động chi tiết bên trong của từng hệ thống.

  Các khái niệm cơ bản về API
    Giao diện (Interface): Là lớp trung gian giữa hai ứng dụng, cho phép chúng trao đổi thông tin.
    Endpoints: Là các URL mà ứng dụng có thể gọi để thực hiện các chức năng cụ thể (ví dụ: lấy dữ liệu, gửi dữ liệu).
    Request và Response:
    Request: Là yêu cầu gửi từ ứng dụng khách (client) tới API.
    Response: Là phản hồi API gửi lại cho ứng dụng khách.


  Tại sao phải sử dụng API?

  Tránh truy cập trực tiếp vào server:
    Truy cập trực tiếp có thể làm lộ cơ sở dữ liệu hoặc các tài nguyên nhạy cảm, 
    tăng nguy cơ bị tấn công.
  Cung cấp kiểm soát thông qua API:
    API cho phép chỉ cung cấp quyền truy cập vào các chức năng hoặc dữ liệu được 
    định nghĩa trước, hạn chế rủi ro từ truy cập không hợp lệ.
  Sử dụng cơ chế xác thực:
    API có thể yêu cầu xác thực bằng token, API key hoặc các phương thức bảo mật 
    khác để kiểm soát quyền truy cập.
  Che giấu logic xử lý phức tạp:
    API cung cấp một giao diện đơn giản cho người dùng hoặc ứng dụng khác, che giấu 
    các chi tiết kỹ thuật bên trong server (cơ sở dữ liệu, cấu trúc file, v.v.).
  Tập trung vào các chức năng cần thiết:
    Người dùng không cần biết cách dữ liệu được xử lý, chỉ cần gửi yêu cầu và 
    nhận phản hồi.
  Chia sẻ dữ liệu và dịch vụ:
    API cho phép nhiều ứng dụng khác nhau truy cập cùng một dữ liệu hoặc 
    chức năng. Ví dụ, một API thanh toán có thể được dùng bởi cả website 
    và ứng dụng di động.
  Tái sử dụng logic xử lý:
    Thay vì xây dựng lại hệ thống cho mỗi ứng dụng, API cung cấp các 
    chức năng chung sẵn sàng sử dụng.
*/

/**
 * B1: Bật terminal : npm i -g json-server@0.17.4
 * B2: Tạo file db.json ở thư mục gốc với nội dung: { "products": [] }
 * B3: Chạy lệnh: json-server --watch db.json
 */
