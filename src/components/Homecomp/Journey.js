import { Col, Row, Typography } from "antd";
import React from "react";
import "../Appbar/style.css";

const Journey = () => {
  return (
    <>
      <Row style={{ backgroundColor: "#FF715B", padding: "80px 0px" }}>
        <Col lg={2}></Col>
        <Col style={{ textAlign: "center" }} sm={24} xs={24} md={24} lg={5}>
          <Typography className="heading">1730 +</Typography>
          <Typography className="text-hd">Project Done</Typography>
        </Col>
        <Col style={{ textAlign: "center" }} sm={24} xs={24} md={24} lg={5}>
          <Typography className="heading">125M</Typography>
          <Typography className="text-hd">USER WORLDWIDE</Typography>
        </Col>
        <Col style={{ textAlign: "center" }} sm={24} xs={24} md={24} lg={5}>
          <Typography className="heading">39</Typography>
          <Typography className="text-hd">AVAILBLE COUNTRY</Typography>
        </Col>
        <Col style={{ textAlign: "center" }} sm={24} xs={24} md={24} lg={5}>
          <Typography className="heading">14</Typography>
          <Typography className="text-hd">AWARD WINNER</Typography>
        </Col>
      </Row>
    </>
  );
};

export default Journey;
