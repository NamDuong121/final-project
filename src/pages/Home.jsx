import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import "../components/styles/Home.css";
import counterImg from "../assets/images/counter-timer1.png";

import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import { useState } from "react";
import { useEffect } from "react";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProuducts, setBestSalesProducts] = useState([]);
  const [bucketProducts, setBucketProducts] = useState([]);
  const [beretProducts, setBeretProducts] = useState([]);
  useEffect(() => {
    const filerTrendingProducts = products.filter(
      (item) => item.category === "Snapback"
    );
    const filerCapsProducts = products.filter(
      (item) => item.category === "Mũ Lưỡi Trai"
    );
    const filerBucketProducts = products.filter(
      (item) => item.category === "Bucket"
    );
    const filerBeretProducts = products.filter(
      (item) => item.category === "Beret"
    );

    setTrendingProducts(filerTrendingProducts);
    setBestSalesProducts(filerBucketProducts);
    setBucketProducts(filerCapsProducts);
    setBeretProducts(filerBeretProducts);
  }, []);

  const year = new Date().getFullYear();
  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">
                  Sản Phẩm Trending trong năm {year}
                </p>
                <h2>Giúp Bạn Trở Nên Cá Tính & Năng Động</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat quam provident inventore. Exercitationem, blanditiis!
                  Qui ab velit repudiandae esse harum.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                  <Link to="/shop">XEM NGAY</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="heroImage" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Sản Phẩm Trending</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Sản Phẩm Bán Chạy</h2>
            </Col>
            <ProductList data={bestSalesProuducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down--col">
              <div className="clock__top--content">
                <h4 className="text-white fs-6 mb-2">Giới Hạn Offer</h4>
                <h3 className="text-white fs-5 mb-3 ">Mũ Bucket</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="shop__btn store__btn"
              >
                <Link to="/shop">Xem Ngay</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={bucketProducts} />
            <ProductList data={beretProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList data={bucketProducts} />
            <ProductList data={beretProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
