import React from "react";
import "../components/styles/Cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";

import { cartActions } from "../redux/slices/cartSlice";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const navigate = useNavigate();

  const handleCheckout = () => {
    localStorage.getItem("user-login")
      ? navigate("/checkout")
      : navigate("/login");
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
                  <Link to="/shop">Tiếp Tục Mua</Link>
                </button>
                <button className="shop__btn mt-2" onClick={handleCheckout}>
                  {/* <Link to="/checkout">Thanh Toán</Link> */}
                  Thanh Toán
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
      <td>{item.quantity}</td>
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
