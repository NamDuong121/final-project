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

import emptyCartImg from "../assets/images/empty-cart.png";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const user = JSON.parse(localStorage.getItem("user-login")) || [];
  useEffect(() => {
    if (localStorage.getItem("user-login")) {
      fetch(`http://localhost:8000/users/${user[0].id}`)
        .then((response) => response.json())
        .then((data) => setCart(data.cart));

      fetch(`http://localhost:8000/users/${user[0].id}`)
        .then((response) => response.json())
        .then((data) =>
          setTotal(
            data.cart.reduce(
              (sum, i) => sum + Number(i.price) * Number(i.quantity),
              0
            )
          )
        );
    }
  }, [localStorage.getItem("user-login")]);

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

  const Tr = ({ item }) => {
    const dispatch = useDispatch();
    const deleteProduct = (productId) => {
      if (!localStorage.getItem("user-login")) {
        dispatch(cartActions.deleteItem(item.id));
      } else {
        const newCart = cart.filter((i) => i.id !== productId);
        const user = JSON.parse(localStorage.getItem("user-login"))[0];
        const userCart = { ...user, cart: newCart };

        const userId = JSON.parse(localStorage.getItem("user-login"))[0].id;
        fetch(`http://localhost:8000/users/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userCart),
        })
          .then((response) => response.json())
          .then((data) => setCart(data.cart));
        localStorage.setItem("user-login", JSON.stringify([userCart]));
      }
    };

    const handleDecrease = (cartId) => {
      const userId = JSON.parse(localStorage.getItem("user-login"))[0].id;
      const decreaseItem = cart.map((i) =>
        cartId === i.id
          ? { ...i, quantity: i.quantity - (i.quantity > 1 ? 1 : 0) }
          : i
      );
      setTotal(
        decreaseItem.reduce(
          (sum, i) => sum + Number(i.price) * Number(i.quantity),
          0
        )
      );
      fetch(`http://localhost:8000/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: decreaseItem }),
      })
        .then((response) => response.json())
        .then((data) => setCart(data.cart));
    };

    const handleIncrease = (cartId) => {
      const userId = JSON.parse(localStorage.getItem("user-login"))[0].id;
      const increaseItem = cart.map((i) =>
        cartId === i.id
          ? { ...i, quantity: i.quantity + (i.quantity < 10 ? 1 : 0) }
          : i
      );
      setTotal(
        increaseItem.reduce(
          (sum, i) => sum + Number(i.price) * Number(i.quantity),
          0
        )
      );
      fetch(`http://localhost:8000/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: increaseItem }),
      })
        .then((response) => response.json())
        .then((data) => setCart(data.cart));
    };

    return (
      <tr>
        <td>
          <img src={item.imgUrl} alt="" />
        </td>
        <td>{item.productName}</td>
        <td>{item.price.toLocaleString()} VND</td>
        <td>
          <div className="d-flex gap-5">
            {localStorage.getItem("user-login") && (
              <span onClick={() => handleDecrease(item.id)}>
                <i className="ri-subtract-line"></i>
              </span>
            )}
            {item.quantity}
            {localStorage.getItem("user-login") && (
              <span onClick={() => handleIncrease(item.id)}>
                <i className="ri-add-line"></i>
              </span>
            )}
          </div>
        </td>
        <td>
          <motion.i
            whileTap={{ scale: 1.2 }}
            className="ri-delete-bin-line"
            onClick={() => deleteProduct(item.id)}
          ></motion.i>
        </td>
      </tr>
    );
  };
  return (
    <Helmet title="Giỏ Hàng">
      <CommonSection title="Giỏ Hàng" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {!localStorage.getItem("user-login") ? (
                cartItems.length === 0 ? (
                  <img
                    src={emptyCartImg}
                    alt="emptyCart"
                    className="empty__cart"
                  />
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
                )
              ) : cart.length === 0 ? (
                <img
                  src={emptyCartImg}
                  alt="emptyCart"
                  className="empty__cart"
                />
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
                    {cart.map((item, index) => (
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
                    {localStorage.getItem("user-login")
                      ? total.toLocaleString()
                      : totalAmount.toLocaleString()}{" "}
                    VND
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

export default Cart;
