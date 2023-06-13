import React from "react";
import homeback from "../../Images/homeback.jpeg";
import { Col, Row, Typography } from "antd";
import Cardchoose from "./Cardchoose";
import {
  BulbOutlined,
  GlobalOutlined,
  LaptopOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const Choose = () => {
  const iconstyle = {
    backgroundColor: "#ef323a14",
    padding: "10px",
    fontSize: "35px",
    color: "#FF715B",
  };
  return (
    <div
      style={{
        backgroundImage: `url(${homeback})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col style={{ marginTop: "100px" }} xs={22} sm={18} md={12} lg={8}>
          <Typography
            style={{
              color: "#6F8BA4",
              fontSize: "16px",
              letterSpacing: "2px",
              lineHeight: 1.8,
            }}
          >
            WHY CHOOSE US
          </Typography>
          <Typography
            style={{ fontSize: "44px", fontWeight: "900", lineHeight: 1.4 }}
          >
            We help you to make work easy
          </Typography>
          <Typography
            style={{
              color: "#6F8BA4",
              fontSize: "16px",
              letterSpacing: "1px",
              lineHeight: 1.8,
            }}
          >
            We understand what your business means to you,your requirements
            considering trends.Smet nemo excepturi voluptas eligendi .
          </Typography>
        </Col>
        <Col xs={24} lg={12}>
          <Row>
            <Col xs={1} sm={1} md={0} lg={0}></Col>
            <Col xs={21} sm={21} md={12} lg={12}>
              <Cardchoose
                heading={"Data analysis"}
                description={"A complete web app solution for business"}
                icon={<BulbOutlined style={iconstyle} />}
                isStyle={false}
              />
              <div style={{ marginTop: "20px" }}>
                <Cardchoose
                  heading={"Web Development"}
                  description={"A complete web app solution for business"}
                  icon={<GlobalOutlined style={iconstyle} />}
                  isStyle={false}
                />
              </div>
            </Col>
            <Col style={{ marginTop: "20px" }} xs={22} sm={22} md={12} lg={12}>
              <div style={{ marginLeft: "20px" }}>
                <Cardchoose
                  description={"A complete web app solution for business"}
                  heading={"Content Mangement"}
                  icon={<SearchOutlined style={iconstyle} />}
                  isStyle={false}
                />
              </div>
              <div
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  marginBottom: "100px",
                }}
              >
                <Cardchoose
                  description={"A complete web app solution for business"}
                  heading={"Mobility"}
                  icon={<LaptopOutlined style={iconstyle} />}
                  isStyle={false}
                />
              </div>
            </Col>
            <Col xs={2} sm={2} md={0} lg={0}></Col>
          </Row>
        </Col>
        <Col span={3}></Col>
      </Row>
      {/* <Row style={{ gap: "10px" }}>
        <Col xs={22} sm={22} md={0} lg={0}>
          <Cardchoose
            heading={"Data analysis"}
            description={"A complete web app solution for business"}
            icon={<BulbOutlined style={iconstyle} />}
            isStyle={true}
          />
        </Col>
        <Col xs={22} sm={22} md={0} lg={0}>
          <Cardchoose
            heading={"Web Development"}
            description={"A complete web app solution for business"}
            icon={<GlobalOutlined style={iconstyle} />}
            isStyle={true}
          />
        </Col>
        <Col xs={22} sm={22} md={0} lg={0}>
          <Cardchoose
            heading={"Content Mangement"}
            description={"A complete web app solution for business"}
            icon={<SearchOutlined style={iconstyle} />}
            isStyle={true}
          />
        </Col>
        <Col xs={22} sm={22} md={0} lg={0}>
          <Cardchoose
            heading={"Mobility"}
            description={"A complete web app solution for business"}
            icon={<LaptopOutlined style={iconstyle} />}
            isStyle={true}
          />
        </Col>
      </Row> */}
    </div>
  );
};

export default Choose;
