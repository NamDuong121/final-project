import React from "react";
import "../components/styles/CheckoutSuccessful.css";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useState } from "react";
import { useEffect } from "react";

const CheckoutSuccessful = () => {
  const now = new Date().toDateString();
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState([]);

  const deliveryFees = 30000;

  const userLogin = JSON.parse(localStorage.getItem("user-login"));

  useEffect(() => {
    fetch(`http://localhost:8000/users/${userLogin[0].id}`)
      .then((response) => response.json())
      .then((data) => {
        setTotal(
          data.order.reduce(
            (sum, i) => sum + Number(i.price) * Number(i.quantity),
            deliveryFees
          )
        );
        setOrder(data.order);
      });
  }, [userLogin]);

  return (
    <Helmet title="Thanh Toán">
      <CommonSection title="Thanh Toán" />
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg="8">
            <div className="order__message text-center pb-4">
              <i className="ri-checkbox-circle-line"></i>
              <h5>Đặt Hàng Thành Công</h5>
              <p className="text-dark">
                Zerdio sẽ xử lý đơn hàng của khách hàng sớm nhất
              </p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col lg="8">
            <div className="order__subs d-flex text-center bg-light">
              <div className="order__number col-3 border-2 border-end">
                <p>Mã Đơn</p>
                <h6>140</h6>
              </div>
              <div className="order__times col-3 border-end">
                <p>Thời Gian</p>
                <h6>{now}</h6>
              </div>
              <div className="order__number col-3 border-end">
                <p>Tổng Tiền</p>
                <h6>{total.toLocaleString()} VND</h6>
              </div>
              <div className="order__number col-3">
                <p>Phương Thức</p>
                <h6>Ship COD</h6>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col lg="8">
            <h5 className="mb-2">Chi Tiết Đơn Hàng</h5>
            <table className="bordered table mb-5" border="1">
              <thead>
                <tr className="bg-light">
                  <th>Hình Ảnh</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                  <th>Số Lượng</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.imgUrl} alt="" />
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.price.toLocaleString()} VND</td>
                    <td>
                      <div className="text-center">{item.quantity}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default CheckoutSuccessful;
