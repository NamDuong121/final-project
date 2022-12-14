import React from "react";
import "../components/styles/Checkout.css";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const deliveryFees = 30000;

  const [newAddress, setNewAddress] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const userId = JSON.parse(localStorage.getItem("user-login")) || [];
  useEffect(() => {
    fetch(`http://localhost:8000/users/${userId[0].id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser([data]);
        setTotalProducts(
          data.cart.reduce((sum, i) => sum + Number(i.quantity), 0)
        );
        setTotal(
          data.cart.reduce(
            (sum, i) => sum + Number(i.price) * Number(i.quantity),
            0
          )
        );
      });
  }, [userId]);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleCheckout = () => {
    if (newAddress === "") {
      fetch(`http://localhost:8000/users/${userId[0].id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          cart: [],
          order: user[0].cart,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user-login", JSON.stringify([data]));
          return setUser(data);
        });
    } else {
      fetch(`http://localhost:8000/users/${userId[0].id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          address: newAddress,
          cart: [],
          order: user[0].cart,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("user-login", JSON.stringify([data]));
          setUser(data);
        });
    }
    toast.success("Thanh to??n th??nh c??ng");
    navigate("/checkout-successful");
  };

  return (
    <Helmet title="Thanh To??n">
      <CommonSection title="Thanh To??n" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h5 className="mb-4 fw-bold checkout">Th??ng Tin Thanh To??n</h5>
              <p className="text-primary mb-2 text-center">
                ** Vui l??ng ki???m tra ch??nh x??c th??ng tin tr?????c khi Click Thanh
                To??n. Xin c???m ??n !
              </p>
              {user.map((item, index) => (
                <div className="checkout__info mb-5" key={index}>
                  <div className="checkout__items d-flex justify-content-between border-bottom pb-2">
                    <span className="fw-bolder">T??n Kh??ch H??ng:</span>
                    <span className="checkout__username">{item.username}</span>
                  </div>
                  <div className="checkout__items d-flex justify-content-between border-bottom pb-2">
                    <span className="fw-bolder">Email:</span>
                    <span>{item.email}</span>
                  </div>
                  <div className="checkout__items d-flex justify-content-between border-bottom pb-2">
                    <span className="fw-bolder">S??? ??i???n Tho???i:</span>
                    <span>{item.phone}</span>
                  </div>
                  <div className="checkout__items d-flex justify-content-between border-bottom pb-2">
                    <span className="fw-bolder">?????a Ch???:</span>
                    <span>{item.address}</span>
                  </div>
                  <p>
                    ** Tr?????ng h???p thay ?????i ?????a ch???. Vui l??ng nh???p ?????a ch??? m???i
                    v??o ?? b??n d?????i.
                  </p>
                  <div className="change__address">
                    <label htmlFor="newAddress" className="fw-bold">
                      ?????a Ch??? M???i:
                    </label>
                    <input
                      className="w-100 "
                      type="text"
                      value={newAddress}
                      name="newAddress"
                      onChange={(e) => setNewAddress(e.target.value)}
                      placeholder="Nh???p ?????a ch??? m???i"
                    />
                  </div>
                </div>
              ))}
              <h6 className="mb-4 fw-bold payment">Ph????ng Th???c Thanh To??n</h6>
              <Form>
                <FormGroup className="payment__method">
                  <input type="radio" name="payment-method" defaultChecked />
                  <label htmlFor="ship-code">Ship COD</label>
                </FormGroup>
                <FormGroup className="payment__method">
                  <input type="radio" name="payment-method" />
                  <label htmlFor="zalo-pay">Zalo Pay</label>
                </FormGroup>
                <FormGroup className="payment__method">
                  <input type="radio" name="payment-method" />
                  <label htmlFor="visa-card">Visa Card</label>
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  S??? L?????ng:
                  <span>
                    {localStorage.getItem("user-login")
                      ? totalProducts
                      : totalQty}
                  </span>
                </h6>
                <h6>
                  Ti???n:{" "}
                  <span>
                    {localStorage.getItem("user-login")
                      ? total.toLocaleString()
                      : totalAmount.toLocaleString()}{" "}
                    VND
                  </span>
                </h6>
                <h6>
                  <span>
                    Ph?? V???n Chuy???n: <br />
                  </span>
                  <span>{deliveryFees.toLocaleString()} VND</span>
                </h6>

                <h4>
                  T???ng Ti???n:{" "}
                  <span>
                    {localStorage.getItem("user-login")
                      ? (total + deliveryFees).toLocaleString()
                      : totalAmount.toLocaleString()}
                    VND
                  </span>
                </h4>
                <button
                  className="shop__btn auth__btn w-100 text"
                  onClick={handleCheckout}
                >
                  Thanh To??n
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
