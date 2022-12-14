import React from "react";
import { motion } from "framer-motion";
import "../styles/ProductCard.css";
import { toast } from "react-toastify";

import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    if (localStorage.getItem("user-login")) {
      const user = JSON.parse(localStorage.getItem("user-login"))[0];
      const flag = user.cart.some((e) => e.id === item.id);
      if (!flag) {
        const newCart = [
          ...user.cart,
          {
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
            quantity: 1,
          },
        ];

        const userCart = { ...user, cart: newCart };

        const userId = JSON.parse(localStorage.getItem("user-login"))[0].id;
        fetch(`http://localhost:8000/users/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userCart),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
        localStorage.setItem("user-login", JSON.stringify([userCart]));
        dispatch(
          cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
          })
        );
        toast.success("Thêm vào giỏ hàng thành công");
      } else {
        toast.error("Sản phẩm đã có trong giỏ hàng!");
      }
    } else {
      dispatch(
        cartActions.addItem({
          id: item.id,
          productName: item.productName,
          price: item.price,
          imgUrl: item.imgUrl,
        })
      );
      toast.success("Thêm vào giỏ hàng thành công");
    }
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__image">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="trendingProduct"
          />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card--bottom d-flex align-items center justify-content-between p-2">
          <span className="price">
            {item.price && item.price.toLocaleString()} VND
          </span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
