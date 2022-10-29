import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo">
              <div>
                <h1 className="text-white">ZERDIO</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              ZERDIO chuyên kinh doanh các loại mũ nón thời trang cao cấp như mũ
              lưỡi trai, nón snapback, mũ bucket, mũ nồi beret, mũ len, mũ phớt
              cho cả Nam & Nữ. Chúng tôi cam kết luôn cập nhật những mẫu mới
              nhất vì chúng tôi muốn bạn đẹp nhất.
            </p>
          </Col>
          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick--links">
              <h4 className="quick__links--title">Danh Mục Sản Phẩm</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mũ Lưỡi Trai</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mũ Snapback</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mũ Bucket</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mũ Beret</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick--links">
              <h4 className="quick__links--title">Liên kết</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/contact">Liên Hệ</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/about">Giới Thiệu</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/home">Trang Chủ</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="footer__quick--links">
              <h4 className="quick__links--title">Liên Hệ</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 ">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>92 Quang Trung - Đà Nẵng </p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+84 912-345-678</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>namduong@frontend.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} . Bản quyền thuộc về Zerdio
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
