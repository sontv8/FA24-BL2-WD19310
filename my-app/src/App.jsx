import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./pages/admin/ProductList";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/products" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
