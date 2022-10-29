import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Checkout from "../pages/Checkout";
import ProductDetails from "../pages/ProductDetails";
import ForgotPassword from "../pages/ForgotPassword";
import UserProfile from "../pages/UserProfile";
import CheckoutSuccessful from "../pages/CheckoutSuccessful";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<UserProfile />} />

      <Route path="checkout-successful" element={<CheckoutSuccessful />} />

      <Route path="reset" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Routers;
