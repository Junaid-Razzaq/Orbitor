import { Col, Image, Row, Typography } from "antd";
import React from "react";

const Teamcard = ({ img, name, position }) => {
  return (
    <>
      <Row>
        <Col>
          <Image style={{ borderRadius: "5px" }} preview={false} src={img} />
          <Typography
            style={{ fontSize: "20px", fontWeight: "900", marginTop: "20px" }}
          >
            {name}
          </Typography>
          <Typography style={{ color: "#6F8BA4" }}>
            {position}
          </Typography>
        </Col>
      </Row>
    </>
  );
};

export default Teamcard;
