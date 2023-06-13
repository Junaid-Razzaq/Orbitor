import { CustomerServiceOutlined, GlobalOutlined } from "@ant-design/icons";
import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Row style={{ backgroundColor: "black", padding: "100px 0px" }}>
        <Col xs={2} sm={2} md={2} lg={3}></Col>
        <Col xs={22} sm={22} md={5} lg={5}>
          <Typography
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: 900,
              lineHeight: 1.4,
            }}
          >
            Chakoor
          </Typography>
          <Typography style={{ color: "white", marginTop: "30px" }}>
            Rapid and maintainable product development Bring your startup idea
            to life, or solve a business problem.
          </Typography>
        </Col>
        <Col xs={2} sm={2} md={0} lg={0}></Col>
        <Col xs={22} sm={22} md={6} lg={5}>
          <Typography
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: 900,
              lineHeight: 1.4,
            }}
          >
            Company
          </Typography>
          <Typography style={{ marginTop: "30px" }}>
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            <Link style={{ color: "white" }} to="about">
              About
            </Link>
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            <Link style={{ color: "white" }} to="service">
              Services
            </Link>
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            <Link style={{ color: "white" }} to="portfolio">
              Portfolio
            </Link>
          </Typography>
        </Col>
        <Col xs={2} sm={2} md={0} lg={0}></Col>
        <Col xs={22} sm={22} md={5} lg={5}>
          <Typography
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: 900,
              lineHeight: 1.4,
            }}
          >
            Support
          </Typography>
          <Typography style={{ marginTop: "30px", color: "white" }}>
            Terms & Conditions
          </Typography>
          <Typography style={{ color: "white", marginTop: "10px" }}>
            Privacy Policy
          </Typography>

          <Typography style={{ marginTop: "10px" }}>
            <Link style={{ color: "white" }} to="contact">
              Contact
            </Link>
          </Typography>
        </Col>
        <Col xs={2} sm={2} md={0} lg={0}></Col>
        <Col xs={22} sm={22} md={5} lg={5}>
          <Typography
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: 900,
              lineHeight: 1.4,
            }}
          >
            Get In Touch
          </Typography>
          <Row style={{ gap: "20px", marginTop: "30px" }}>
            <Col>
              <CustomerServiceOutlined style={{ color: "#FF715B" }} />
            </Col>
            <Col>
              <Typography style={{ color: "white" }}>
                the.chakoragency@gmail.com
              </Typography>
            </Col>
          </Row>
          <Row style={{ gap: "20px", marginTop: "10px" }}>
            <Col>
              <GlobalOutlined style={{ color: "#FF715B" }} />
            </Col>
            <Col>
              <Typography style={{ color: "white" }}>
                www.thechakoor.com
              </Typography>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "black" }}>
        <Col sm={2} xs={2} md={2} lg={2}></Col>
        <Col sm={20} xs={20} md={20} lg={20}>
          <Divider style={{ border: "1px solid #ffffff0f" }} />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "black" }}>
        <Col sm={2} xs={2} md={2} lg={2}></Col>
        <Typography style={{ color: "white", marginBottom: "50px" }}>
          Copyright © Chakor Softwares Pvt Ltd.
        </Typography>
      </Row>
    </div>
  );
};

export default Footer;
