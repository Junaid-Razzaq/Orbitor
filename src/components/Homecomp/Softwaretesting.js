import React from "react";
import home2back from "../../Images/home2back.jpg";
import { Button, Card, Col, Row, Typography } from "antd";
import "../Appbar/style.css";
import { RightOutlined } from "@ant-design/icons";

const Softwaretesting = () => {
  return (
    <div
      style={{ backgroundImage: `url(${home2back})`, backgroundSize: "cover" }}
    >
      <Row style={{ padding: "100px 0px" }}>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={20} sm={20} md={16} lg={10}>
          <Card>
            <Row>
              <Col xs={22} sm={22} md={22} lg={18}>
                <Typography
                  style={{
                    fontSize: "24px",
                    fontWeight: 900,
                    letterSpacing: "1px",
                    marginLeft: "20px",
                  }}
                >
                  Assurance Service In Software{" "}
                  <span style={{ color: "#FF715B" }}>Testing</span>
                </Typography>
              </Col>
            </Row>
            <Row>
              <Col xs={1} sm={1} md={1} lg={1}></Col>
              <Col xs={22} sm={22} md={22} lg={20}>
                <Typography
                  style={{
                    marginTop: "10px",
                    whiteSpace: "pre-wrap",
                    fontFamily: "Rubik",
                    letterSpacing: "2px",
                    lineHeight: "1.8",
                    color: "#6F8BA4",
                  }}
                >
                  An Independent Validation and Testing services from SISAR.
                  Helps to reduce software development efforts
                </Typography>
              </Col>
            </Row>
            <Button className="btn-body">
              PORTFOLIO
              <RightOutlined />
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Softwaretesting;
