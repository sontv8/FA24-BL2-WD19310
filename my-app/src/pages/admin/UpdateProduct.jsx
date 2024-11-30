import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = (props) => {
  const [inputValues, setInputValues] = useState({});

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => response.json())
      .then((data) => setInputValues(data));
  }, []);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onUpdate(inputValues);
  };
  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      {JSON.stringify(inputValues)}
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            onInput={onHandleChange}
            defaultValue={inputValues.name}
          />
        </div>
        <div>
          <label htmlFor="">Giá sản phẩm</label>
          <input
            type="text"
            name="price"
            onInput={onHandleChange}
            defaultValue={inputValues.price}
          />
        </div>
        <div>
          <label htmlFor="">Ảnh sản phẩm</label>
          <input
            type="text"
            name="image"
            onInput={onHandleChange}
            defaultValue={inputValues.image}
          />
        </div>
        <button>Cập nhật</button>
      </form>
    </div>
  );
};

export default UpdateProduct;

/*
    B1: tạo form cập nhật
    B2: lấy id từ url
    B3: lấy dữ liệu của sản phẩm cần cập nhật theo id lấy được
    B4: đổ dữ liệu lấy được vào form cập nhật
    B5: lấy dữ liệu từ input trong form
    B6: submit dữ liệu lấy được
    B7: gửi dữ liệu lấy được lên component App
    B8: call API để cập nhật sản phẩm
*/
