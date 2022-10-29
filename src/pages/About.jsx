import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../components/styles/About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Helmet title="Giới Thiệu">
      <CommonSection title="Giới Thiệu" />
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg="9">
            <div className="about">
              <div className="about__title">
                <div className="about__title--content">
                  <i className="ri-star-fill"></i>
                  <h3>ZERDIO - THƯƠNG HIỆU NÓN MŨ THỜI TRANG VIỆT</h3>
                </div>
                <hr />
                <div className="about__title--line"></div>
              </div>
              <div className="about__content">
                <p>
                  Ấp ủ ước mơ trở thành trang thương mại điện tử về nón mũ thời
                  trang Việt hàng đầu Việt Nam. ZERDIO không ngừng phát triển và
                  hoàn thiện các dòng sản phẩm như mũ lưỡi trai, nón snapback,
                  mũ bucket, mũ nồi, mũ phớt, mũ len để phục vụ nhu cầu đa dạng
                  của khách hàng.
                </p>
                <br />
                <p>
                  ZERDIO với phương châm “Chất liệu tạo nên thương hiệu” dành
                  tâm huyết cho những điều nhỏ nhất để mang đến cho khách hàng
                  những giá trị bền vững.
                </p>
                <br />
                <p>
                  ZERDIO chuyên kinh doanh các loại mũ nón thời trang cao cấp
                  như mũ lưỡi trai, nón snapback, mũ bucket, mũ nồi beret, mũ
                  len, mũ phớt cho cả Nam & Nữ. Chúng tôi cam kết luôn cập nhật
                  những mẫu mới nhất vì chúng tôi muốn bạn đẹp nhất.
                </p>
              </div>
            </div>
            <div className="back__home text-end">
              <Link to="/home" className="back__home">
                &#8594; Quay Lại Trang Chủ
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default About;
