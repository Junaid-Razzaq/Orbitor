import { Button, Col, Row, Typography } from "antd";
import React from "react";

const Servicecontact = () => {
  return (
    <div style={{ padding: "80px 0px", backgroundColor: "#F8F9FA" }}>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={22} sm={22} md={16} lg={14}>
          <Typography style={{ color: "#FF715B", letterSpacing: "2px" }}>
            For Every type business
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={22} sm={22} md={16} lg={14}>
          <Typography style={{ fontSize: "4vw", fontWeight: 900 }}>
            Entrust your project to our best team of professionals
          </Typography>
        </Col>
        <Col xs={24} sm={24} md={16} lg={8}>
          <Row>
            <Col xs={2} sm={2} md={2} lg={10}></Col>
            <Col xs={22} sm={22} md={16} lg={5}>
              <Button
                className="btn-btn-body"
                style={{
                  marginTop: "5vw",
                  width: "150px",
                  borderRadius: "30px",
                }}
              >
                Contact Us
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Servicecontact;
