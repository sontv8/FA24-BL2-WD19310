import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductList = (props) => {
  console.log(props.products); //{myName: "sontv"}

  return (
    <>
      <Header />
      <main>
        <h2>Danh sách sản phẩm</h2>
        <div>
          <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductList;

/*
website

  client
    - trang chủ
    - about
    - liên hệ
    ...

  admin
    - dashboard
    - quản lý sản phẩm
    - thêm mới sản phẩm
    ...

    react-router-dom

  productList(...)
*/
