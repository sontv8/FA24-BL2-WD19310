import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductList = (props) => {
  console.log(props.products); //{myName: "sontv"}

  return (
    <>
      <Header />
      <main>
        <h2>Danh sách sản phẩm</h2>
        {props.products.map((item, index) => {
          console.log(item);

          return (
            <div key={index}>
              <img src={item.image} alt="" style={{ width: 600 }} />
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          );
        })}
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
