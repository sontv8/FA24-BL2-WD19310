import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <div>
        <img src={product.image} alt="" />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default DetailProduct;
