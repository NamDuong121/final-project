import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../components/styles/Login.css";

import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Helmet title="Đăng Ký">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Đăng Ký</h3>
              <Form className="auth__form">
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Tên"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
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
                  Đăng Ký
                </button>
                <p>
                  Bạn đã có tài khoản ? Vui lòng
                  <Link to="/login"> Đăng Nhập</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
