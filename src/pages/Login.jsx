import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../components/styles/Login.css";

import { toast } from "react-toastify";

import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {
    fetch(`http://localhost:8000/user?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          toast.error("Email không tồn tại");
        } else {
          setLoading(true);
          fetch(
            `http://localhost:8000/user?email=${email}&password=${password}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.length) {
                setLoading(false);
                toast.success("Đăng Nhập Thành Công");
                localStorage.setItem("user-login", JSON.stringify(data));
                navigate("/checkout");
              } else {
                setLoading(false);
                toast.error("Mật khẩu không chính xác");
              }
            })
            .catch((error) => {
              console.error("Error  :", error);
            });
        }
      });
  };
  return (
    <Helmet title="Đăng Nhập">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h6 className="fw-bold">Loading...</h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Đăng Nhập</h3>
                <Form
                  className="auth__form"
                  onSubmit={handleSubmit(handleLogin)}
                >
                  <FormGroup className="form__group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      {...register("email", {
                        onChange: (e) => setEmail(e.target.value),
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                      })}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Mất Khẩu"
                      value={password}
                      name="password"
                      {...register("password", {
                        onChange: (e) => setPassword(e.target.value),
                        minLength: 6,
                        required: true,
                      })}
                    />
                  </FormGroup>
                  {Object.keys(errors).length !== 0 && (
                    <ul className="error__container border bg-white rounded">
                      {errors.email?.type === "required" && (
                        <li className="text-danger text-start ">
                          *** Vui lòng nhập Email
                        </li>
                      )}
                      {errors.email?.type === "pattern" && (
                        <li className="text-danger text-start ">
                          *** Email không hợp lệ
                        </li>
                      )}
                      {errors.password?.type === "required" && (
                        <li className="text-danger text-start ">
                          *** Vui lòng nhập Mật khẩu
                        </li>
                      )}
                      {errors.password?.type === "minLength" && (
                        <li className="text-danger text-start ">
                          *** Mật khẩu phải có từ 6 ký tự
                        </li>
                      )}
                    </ul>
                  )}
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
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
