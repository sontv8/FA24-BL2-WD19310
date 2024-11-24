import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ProductList = (props) => {
  console.log(props.products); //{myName: "sontv"}

  return (
    <>
      <Header />
      <main>
        <h2>Danh sách sản phẩm</h2>

        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm</th>
              <th>Giá sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((item, index) => {
              console.log(item);

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <img src={item.image} alt="" style={{ width: 400 }} />
                  </td>
                  <td>
                    <button>Xoá</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
