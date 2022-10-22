import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    fetch(`http://localhost:8000/users?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          toast.success("Yêu cầu đã được gửi đi. Vui lòng kiểm tra email!");
          navigate("/home");
        } else {
          toast.error("Email không tồn tại!");
        }
      });
  };
  return (
    <Helmet title="Đặt Lại Mật Khẩu">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Đặt Lại Mật Khẩu</h3>

              <Form
                className="auth__form"
                onSubmit={handleSubmit(handleResetPassword)}
              >
                <p>
                  Vui lòng nhập Email đã đăng ký. Bạn sẽ nhận được mật khẩu mới
                  qua email.
                </p>
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
                  </ul>
                )}
                <button
                  type="submit"
                  className="shop__btn login__btn
                 "
                >
                  Gửi
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ForgotPassword;
