import React from "react";
import "../components/styles/Checkout.css";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Thanh Toán">
      <CommonSection title="Thanh Toán" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Thông Tin Thanh Toán</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Tên Của Khách Hàng" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="number" placeholder="Số Điện Thoại" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Địa Chỉ" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Số Lượng: <span>{totalQty}</span>
                </h6>
                <h6>
                  Tiền: <span>{totalAmount.toLocaleString()} VND</span>
                </h6>
                <h6>
                  <span>
                    Phí Vận Chuyển: <br />
                    Miễn Phí Vận Chuyển
                  </span>
                  <span>0</span>
                </h6>

                <h4>
                  Tổng Tiền: <span>{totalAmount.toLocaleString()} VND</span>
                </h4>
                <button className="shop__btn auth__btn w-100 text">
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

export default Checkout;
