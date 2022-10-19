import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import "../components/styles/Login.css";

import Helmet from "../components/Helmet/Helmet";
import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signupSubmit = async (data) => {
    const userInfo = { username, email, password };
    const userUrl = "http://localhost:8000/user";
    await fetch(`http://localhost:8000/user?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          toast.error("Email đã tồn tài");
        } else {
          setLoading(true);
          fetch(userUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((response) => response.json())
            .then((data) => {
              setLoading(false);
              toast.success("Đăng Ký Thành Công");
              navigate("/login");
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      });
  };

  return (
    <Helmet title="Đăng Ký">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h6 className="fw-bold">Loading...</h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Đăng Ký</h3>
                <Form
                  className="auth__form"
                  onSubmit={handleSubmit(signupSubmit)}
                >
                  <FormGroup className="form__group">
                    <input
                      name="username"
                      type="text"
                      placeholder="Tên"
                      value={username}
                      {...register("username", {
                        required: true,
                        onChange: (e) => setUsername(e.target.value),
                      })}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                        onChange: (e) => setEmail(e.target.value),
                      })}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      name="password"
                      type="password"
                      placeholder="Mất Khẩu"
                      value={password}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        onChange: (e) => setPassword(e.target.value),
                      })}
                    />
                  </FormGroup>
                  {Object.keys(errors).length !== 0 && (
                    <ul className="error__container border bg-white rounded">
                      {errors.username?.type === "required" && (
                        <li className="text-danger text-start ">
                          *** Vui lòng nhập Tên
                        </li>
                      )}
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
                    Đăng Ký
                  </button>
                  <p>
                    Bạn đã có tài khoản ? Vui lòng
                    <Link to="/login"> Đăng Nhập</Link>
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

export default Signup;
