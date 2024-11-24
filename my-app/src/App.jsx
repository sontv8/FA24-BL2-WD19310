import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./pages/admin/ProductList";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const data = [
    {
      id: "1",
      name: "Sản phẩm 1",
      price: 1000,
      image: "https://cdn.tgdd.vn/2020/07/content/Yonedatrolai-800x450.jpg",
    },
    {
      id: "2",
      name: "Sản phẩm 2",
      price: 2000,
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
    },
  ];

  const [products, setProducts] = useState(data);

  const onRemove = (id) => {
    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?")) {
      const newData = data.filter((item) => {
        return item.id != id;
      });
      setProducts(newData);
    }
  };
  return (
    <>
      <Routes>
        <Route
          path="/admin/products"
          element={<ProductList products={products} onRemove={onRemove} />}
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
