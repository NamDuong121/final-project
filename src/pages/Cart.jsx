import React from "react";
import "../components/styles/Cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";

import { cartActions } from "../redux/slices/cartSlice";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const navigate = useNavigate();

  const handleOrder = () => {
    if (localStorage.getItem("user-login")) {
      if (cartItems.length > 0) {
        navigate("/checkout");
      } else {
        toast.warn("Giỏ hàng trống! Vui lòng thêm sản phẩm");
        navigate("/shop");
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <Helmet title="Giỏ Hàng">
      <CommonSection title="Giỏ Hàng" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">Giỏ Hàng Trống</h2>
              ) : (
                <table className="bordered table">
                  <thead>
                    <tr>
                      <th>Hình Ảnh</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Giá</th>
                      <th>Số Lượng</th>
                      <th>Xoá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Tổng Tiền
                  <span className="fs-4 fw-bold">
                    {totalAmount.toLocaleString()} VND
                  </span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                Thuế và Phí Vận Chuyển sẽ được tính khi Thanh Toán
              </p>
              <div className="d-flex flex-column">
                <button className="shop__btn">
                  <Link to="/shop">Tiếp Tục Mua Hàng</Link>
                </button>
                <button className="shop__btn mt-2" onClick={handleOrder}>
                  {/* <Link to="/checkout">Thanh Toán</Link> */}
                  Đặt Hàng
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  // const [quantityProduct, setQuantityProduct] = useState(item.quantity);

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price.toLocaleString()} VND</td>
      <td>
        {/* <div className="d-flex gap-5">
          <span onClick={() => handleQuantity("decrease")}>
            <i className="ri-subtract-line"></i>
          </span>
          {item.quantity}
          <span onClick={() => handleQuantity("increase")}>
            <i className="ri-add-line"></i>
          </span>
        </div> */}
        {item.quantity}
      </td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          className="ri-delete-bin-line"
          onClick={deleteProduct}
        ></motion.i>
      </td>
    </tr>
  );
};
export default Cart;
