import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductList from "../components/UI/ProductList";

import products from "../data/products";
import { useParams } from "react-router-dom";

import "../components/styles/ProductDetails.css";
import { motion } from "framer-motion";
import { useState } from "react";

import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    category,
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    remainingAmount,
    sold,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const storageComment = JSON.parse(localStorage.getItem("comment-list"));

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState(storageComment || []);

  const totalReview = reviews.length + commentList.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentObj = {
      name,
      rating,
      comment,
    };
    setCommentList((prev) => {
      const newComment = [...prev, commentObj];
      localStorage.setItem("comment-list", JSON.stringify(newComment));

      return newComment;
    });
    toast.success("Bình luận Thành Công");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Thêm vào giỏ Thành Công");
  };

  useEffect(() => {
    window.scrollTo(0, 400);
  }, [product]);
  return (
    <Helmet title={category}>
      <CommonSection title={category} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <span>{category}</span>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> Ratings)
                  </p>
                  <p>
                    Đã bán: <span>{sold}</span> sản phẩm
                  </p>
                </div>
                <div>
                  <span className="product__price">
                    {price.toLocaleString()} VND
                  </span>
                </div>

                <p className="mt-3">{shortDesc}</p>
                <div className="product__remain d-flex align-items-center gap-3 mt-5">
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="shop__btn m-0"
                    onClick={addToCart}
                  >
                    Thêm Vào Giỏ
                  </motion.button>
                  <p>
                    Còn lại: <span>{remainingAmount}</span> sản phẩm
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review ({totalReview})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>Hải </h6>
                          <span>{item.rating}(rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                      {commentList.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>{item.name}</h6>
                          <span>{item.rating}(rating)</span>
                          <p>{item.comment}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review__form">
                      <h4>Đánh Giá Sản Phẩm</h4>
                      <form action="" onSubmit={handleSubmit}>
                        <div className="form__group">
                          <input
                            value={name}
                            type="text"
                            placeholder="Tên Của Bạn"
                            required
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5 <i className="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea
                            rows={4}
                            type="text"
                            placeholder="Bình Luận"
                            required
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="shop__btn"
                        >
                          Gửi
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">SẢN PHẨM TƯƠNG TỰ</h2>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
