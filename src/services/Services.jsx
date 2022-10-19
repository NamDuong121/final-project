import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import { Col, Container, Row } from "reactstrap";

import servicesData from "../data/serviceData";

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          {servicesData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service__item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
