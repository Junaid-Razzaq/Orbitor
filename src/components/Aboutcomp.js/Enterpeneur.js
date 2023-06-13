import { LikeFilled, ToolFilled, TrophyFilled } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import { TiTick } from "react-icons/ti";
import React from "react";

const Enterpeneur = () => {
  const iconstyle = {
    backgroundColor: "#FF715B",
    borderRadius: "50px",
    color: "white",
    padding: "20px",
    fontSize: "50px",
  };
  return (
    <div style={{ padding: "80px 0px",backgroundColor:'white' }}>
      <Row justify={"center"}>
        <Col sm={14} xs={14} md={12} lg={14}>
          <Typography
            style={{ fontSize: "3vw", textAlign: "center", fontWeight: 900 }}
          >
            We help entreprenuers starts up and turn their ideas into produtcs
          </Typography>
        </Col>
      </Row>
      <Row justify={"center"} style={{ padding: "80px 0px" }}>
        <Col style={{ textAlign: "center" }} sm={24} xs={24} md={24} lg={5}>
          <LikeFilled style={iconstyle} />
          <Typography className="heading-update">1730 +</Typography>
          <Typography className="text-heading">Project Done</Typography>
        </Col>
        <Col style={{ textAlign: "center" }} sm={24} xs={24} md={24} lg={5}>
          <ToolFilled style={iconstyle} />
          <Typography className="heading-update">125M</Typography>
          <Typography className="text-heading">USER WORLDWIDE</Typography>
        </Col>
        <Col style={{ textAlign: "center" }} sm={24} xs={24} md={24} lg={5}>
          <TrophyFilled style={iconstyle} />
          <Typography className="heading-update">39</Typography>
          <Typography className="text-heading">AVAILBLE COUNTRY</Typography>
        </Col>
      </Row>
    </div>
  );
};

export default Enterpeneur;
