import React, { useState } from "react";

const AddProduct = (props) => {
  const [inputValues, setInputValues] = useState({});
  const onHandleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    const newData = { ...inputValues, [name]: value };
    setInputValues(newData);
    // computed property name
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputValues);
  };

  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
      {JSON.stringify(inputValues)}
      <form onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" name="name" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Giá sản phẩm</label>
          <input type="text" name="price" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">Ảnh sản phẩm</label>
          <input type="text" name="image" onInput={onHandleChange} />
        </div>
        <button>Thêm mới</button>
      </form>
    </div>
  );
};

export default AddProduct;

/*
  B1: tạo form thêm mới
  B2: lấy dữ liệu từ input trong form
  B3: submit dữ liệu lấy được
  B4: gửi dữ liệu lấy được lên component App
  B5: call API để thêm mới sản phẩm
*/
