import React from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";

import "../components/styles/UserProfile.css";

import Helmet from "../components/Helmet/Helmet";
import dummyImg from "../assets/images/dummy.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);
  const [isDetails, setIsDetails] = useState(false);

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const changeItems = { phone, address };

  const now = new Date().toDateString();
  const [total, setTotal] = useState(0);
  const deliveryFees = 30000;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userId = JSON.parse(localStorage.getItem("user-login"));
  useEffect(() => {
    fetch(`http://localhost:8000/users/${userId[0].id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser([data]);
        setTotal(
          data.order.reduce(
            (sum, i) => sum + Number(i.price) * Number(i.quantity),
            deliveryFees
          )
        );
        setOrder(data.order);
      });
  }, []);

  const handleExit = () => {
    localStorage.removeItem("user-login");
    navigate("/home");
    toast.success("Bạn đã đăng xuất thành công!");
  };

  const handleChangeUserProfile = () => {
    fetch(`http://localhost:8000/users/${userId[0].id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(changeItems),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user-login", JSON.stringify([data]));
        return setUser([data]);
      });
    toast.success("Thay đổi thông tin thành công!");

    setPhone("");
    setAddress("");
  };

  return (
    <Helmet title="Khách Khàng">
      <Container>
        <Row className="d-flex gap-2 justify-content-between p-4">
          <Col lg="3" className="profile__links">
            <div className="text-center profile__user">
              <img src={dummyImg} alt="" className="profile__img" />
              <p>{userId[0].username}</p>
            </div>
            <hr className="text-white" />

            <li onClick={() => setShow(!show)}>Thông Tin Khách Hàng</li>
            <li onClick={() => setShow(!show)}>Lịch Sử Mua Hàng</li>
            <li onClick={handleExit}>Thoát</li>
          </Col>
          <Col lg="8" style={{ display: show ? "none" : "block" }}>
            <Row>
              <Col lg="6">
                {user.map((item, index) => (
                  <div className="profile__info" key={index}>
                    <h3 className="text-center">Thông Tin Khách Hàng</h3>
                    <div className="profile__details">
                      <div className="row">
                        <div className="col-4 fw-bolder">Tên:</div>
                        <div className="col-8 text-end profile__name">
                          {item.username}
                        </div>
                      </div>
                    </div>
                    <div className="profile__details">
                      <div className="row">
                        <div className="col-4 fw-bolder">Email:</div>
                        <div className="col-8 text-end">{item.email}</div>
                      </div>
                    </div>
                    <div className="profile__details">
                      <div className="row">
                        <div className="col-4 fw-bolder">TEL:</div>
                        <div className="col-8 text-end">
                          <span> {item.phone}</span>
                        </div>
                      </div>
                    </div>
                    <div className="profile__details">
                      <div className="row">
                        <div className="col-4 fw-bolder">Địa Chỉ:</div>
                        <div className="col-8 text-end">
                          <span>{item.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Col>
              <Col lg="6">
                {user &&
                  user.map((item, index) => (
                    <div className="profile__info" key={index}>
                      <h3 className="text-center">Thay Đổi Thông tin</h3>
                      <p className="text-danger text-center px-2 pt-2">
                        * Khách Hàng chỉ có thể thay đổi Số Điện Thoại và Địa
                        Chỉ *
                      </p>
                      <div className="profile__details">
                        <div className="row">
                          <Form
                            onSubmit={handleSubmit(handleChangeUserProfile)}
                          >
                            <FormGroup className="form__group">
                              <label htmlFor="phone">TEL:</label>
                              <input
                                name="phone"
                                type="number"
                                placeholder="Nhập số điện thoại mới"
                                value={phone}
                                {...register("phone", {
                                  required: true,
                                  minLength: 10,
                                  maxLength: 11,
                                  onChange: (e) => setPhone(e.target.value),
                                })}
                              />
                            </FormGroup>
                            <FormGroup className="form__group">
                              <label htmlFor="address">Địa Chỉ</label>
                              <input
                                name="address"
                                type="text"
                                placeholder="Nhập địa chỉ mới"
                                value={address}
                                {...register("address", {
                                  required: true,
                                  onChange: (e) => setAddress(e.target.value),
                                })}
                              />
                            </FormGroup>
                            {Object.keys(errors).length !== 0 && (
                              <ul className="error__container border bg-white rounded">
                                {errors.phone?.type === "required" && (
                                  <li className="text-danger text-start ">
                                    *** Vui lòng nhập Số Điện Thoại
                                  </li>
                                )}
                                {errors.phone?.type === "minLength" && (
                                  <li className="text-danger text-start ">
                                    *** Số Điện Thoại phải có từ 10 số
                                  </li>
                                )}
                                {errors.phone?.type === "maxLength" && (
                                  <li className="text-danger text-start ">
                                    *** Số Điện Thoại tối đa 11 chữ số
                                  </li>
                                )}
                                {errors.address?.type === "required" && (
                                  <li className="text-danger text-start ">
                                    *** Vui lòng nhập Địa Chỉ
                                  </li>
                                )}
                              </ul>
                            )}
                            <motion.button
                              type="submit"
                              whileTap={{ scale: 1.2 }}
                              className="shop__btn text-center mt-0"
                            >
                              Lưu
                            </motion.button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  ))}
              </Col>
            </Row>
          </Col>
          <Col lg="8" style={{ display: show ? "block" : "none" }}>
            <div className="order__history">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="p-3">Lịch Sử Mua Hàng</h5>

                <Link to="/home">
                  <span className="p-2"> &rarr; Quay lại Trang Chủ</span>
                </Link>
              </div>
              {user.map((item, index) =>
                item.order.length === 0 ? (
                  <div
                    className="order__empty p-2 d-flex align-items-center gap-3"
                    key={index}
                  >
                    <p className="text-primary">** Chưa có lịch sử mua hàng!</p>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className="shop__btn mt-0"
                    >
                      <Link to="/home">Quay lại trang chủ</Link>
                    </motion.button>
                  </div>
                ) : (
                  <div key={index} className="p-3">
                    <p className="mb-1 text-primary">
                      Tổng tiền đã bao gồm Thuế và Chi Phí Vận Chuyển
                    </p>
                    <div className="order__subs d-flex text-center bg-light">
                      <div className="order__number col-2 border-2 border-end">
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
                      <div className="order__number col-2">
                        <p>Phương Thức</p>
                        <h6>Ship COD</h6>
                      </div>
                      <div className="col-2">
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          className="shop__btn m-0 h-100 w-100"
                          onClick={() => setIsDetails(!isDetails)}
                        >
                          Chi tiết
                        </motion.button>
                      </div>
                    </div>
                    <div
                      className="detail__order"
                      style={{ display: isDetails ? "block" : "none" }}
                    >
                      <h6 className="mb-2">Chi Tiết Đơn Hàng</h6>
                      <table className="bordered table mb-5" border="1">
                        <thead>
                          <tr className="bg-light">
                            <th>Hình Ảnh</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tình Trạng</th>
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
                                <div className="">{item.quantity}</div>
                              </td>
                              <td className="text-primary">Đang Xử Lý</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default UserProfile;
