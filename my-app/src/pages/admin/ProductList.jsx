import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductList = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Danh sách sản phẩm</h2>
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
*/
