import React from "react";
import "./Header.css";

import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useState } from "react";

const nav__links = [
  {
    path: "home",
    display: "Trang Chủ",
  },
  {
    path: "shop",
    display: "Sản Phẩm",
  },
  {
    path: "cart",
    display: "Giỏ Hàng",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();

  const menuRef = useRef(null);

  const stickyHeaderFunc = useCallback(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  }, []);

  const user = JSON.parse(localStorage.getItem("user-login"));

  useEffect(() => {
    stickyHeaderFunc();
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  const handleLogOut = () => {
    localStorage.removeItem("user-login");
    navigate("/home");
  };

  const [status, setStatus] = useState(false);
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" onClick={navigateToHome} />
              <div>
                <h1 onClick={navigateToHome}>ZERDIO</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div onClick={() => setStatus(!status)} className="profile">
                {localStorage.getItem("user-login") ? (
                  <p>
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={userIcon}
                      alt="userIcon"
                    />
                    <span>{user[0].username}</span>
                  </p>
                ) : (
                  <span>
                    <motion.img
                      whileTap={{ scale: 1.2 }}
                      src={userIcon}
                      alt="userIcon"
                    />
                  </span>
                )}
                <div
                  style={{ display: status ? "block" : "none" }}
                  className="profile__action"
                >
                  {localStorage.getItem("user-login") ? (
                    <span className="fw-bold" onClick={handleLogOut}>
                      Đăng Xuất
                    </span>
                  ) : (
                    <div>
                      <Link to="/signup">Đăng Ký</Link>
                      <Link to="/login">Đăng Nhập</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
