import { Card, Col, Row, Typography } from "antd";
import React from "react";
import "../Appbar/style.css";

const Servicecard = ({ icon, title, description }) => {
  return (
    <Card style={{ boxShadow: "0px 0px 15px 0px #0000001a" }}>
      <Row style={{ gap: "20px" }}>
        <Col>{icon}</Col>
        <Col>
          <Typography style={{ fontWeight: 500 }}>{title}</Typography>
          <Typography style={{ fontWeight: 500 }}>{description}</Typography>
        </Col>
      </Row>
    </Card>
  );
};

export default Servicecard;
