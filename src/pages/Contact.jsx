import React from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import emailjs from "@emailjs/browser";

import "../components/styles/Contact.css";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_kp4wt1l",
        "template_qbbg9s4",
        form.current,
        "yNG0V_azfCINVskNt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    toast.success("Yêu cầu liên hệ đã được gửi thành công");
    navigate("/home");
  };

  return (
    <Helmet title="Liên Hệ">
      <CommonSection title="Liên Hệ" />
      <Container>
        {/* <Row className="contact">
          <Col lg="6">
            <div
              className="contact__successful"
              style={{ display: show ? "block" : "none" }}
            >
              <p>Quý Khách Hàng đã gửi Email thành công</p>
              <p>Zerdio sẽ phản hồi sớm nhất</p>
              <p>Xin Chân Thành Cảm Ơn</p>
            </div>
          </Col>
        </Row> */}
        <Row className="contact">
          <Col lg="6">
            <div className="contact__subs">
              <h5>Liên Hệ Zerdio</h5>
              <form
                className="contact__form"
                ref={form}
                onSubmit={handleSubmit(sendEmail)}
              >
                <div className="form__group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tên của Khách Hàng"
                    {...register("name", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                    })}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Tiêu Đề"
                    {...register("subject", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form__group">
                  <textarea
                    name="message"
                    cols="30"
                    rows="4"
                    placeholder="Nội dung ..."
                    {...register("message", {
                      required: true,
                    })}
                  ></textarea>
                </div>
                {Object.keys(errors).length !== 0 && (
                  <ul className="error__container border bg-white rounded">
                    {errors.name?.type === "required" && (
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
                    {errors.subject?.type === "required" && (
                      <li className="text-danger text-start ">
                        *** Vui lòng nhập Tiêu Đề
                      </li>
                    )}
                    {errors.message?.type === "required" && (
                      <li className="text-danger text-start ">
                        *** Vui lòng nhập Nội Dung
                      </li>
                    )}
                  </ul>
                )}
                <div className="form__group text-end m-0">
                  <button type="submit" className="shop__btn m-0 ">
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default Contact;
