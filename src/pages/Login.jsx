import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../components/styles/Login.css";

import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Helmet title="Đăng Nhập">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Đăng Nhập</h3>
              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Mất Khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <button
                  type="submit"
                  className="shop__btn login__btn
                 "
                >
                  Đăng Nhập
                </button>
                <p>
                  Bạn chưa có tài khoản ? Vui lòng
                  <Link to="/signup"> Đăng Ký</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
