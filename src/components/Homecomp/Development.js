import React from "react";
import {
  BulbOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

const Development = () => {
  return (
    <>
      <Row justify={"space-evenly"} style={{ padding: "100px 0px",backgroundColor:'white' }}>
        <Col
          xs={22}
          sm={18}
          md={12}
          lg={5}
          style={{ display: "flex", gap: "15px", marginBottom: "20px" }}
        >
          <Col>
            <BulbOutlined style={{ fontSize: "40px", color: "#6F8BA4" }} />
          </Col>
          <Col>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                lineHeight: 1.2,
                fontWeight: "bold",
              }}
            >
              Custom Effective Software Development
            </Typography>
            <Typography
              style={{
                color: "#6F8BA4",
                letterSpacing: "2px",
                lineHeight: 1.8,
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Saepe nulla praesentium eaque omnis perferendis a doloremque
            </Typography>
            <Typography style={{ color: "#FF715B", fontWeight: "bold" }}>
              Read More
            </Typography>
          </Col>
        </Col>
        <Col
          xs={22}
          sm={18}
          md={12}
          lg={5}
          style={{ display: "flex", gap: "15px", marginBottom: "20px" }}
        >
          <Col>
            <GlobalOutlined style={{ fontSize: "45px", color: "#6F8BA4" }} />
          </Col>
          <Col>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                lineHeight: 1.2,
                fontWeight: "bold",
              }}
            >
              Analyse Your Expensees On Every Device
            </Typography>
            <Typography
              style={{
                color: "#6F8BA4",
                letterSpacing: "2px",
                lineHeight: 1.8,
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Saepe nulla praesentium eaque omnis perferendis a doloremque
            </Typography>
            <Typography style={{ color: "#FF715B", fontWeight: "bold" }}>
              Read More
            </Typography>
          </Col>
        </Col>
        <Col
          xs={22}
          sm={18}
          md={12}
          lg={5}
          style={{ display: "flex", gap: "15px", marginBottom: "20px" }}
        >
          <Col>
            <CustomerServiceOutlined
              style={{ fontSize: "45px", color: "#6F8BA4" }}
            />
          </Col>
          <Col>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                lineHeight: 1.2,
                fontWeight: "bold",
              }}
            >
              Creating a dedicated IT business growth
            </Typography>
            <Typography
              style={{
                color: "#6F8BA4",
                letterSpacing: "2px",
                lineHeight: 1.8,
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Saepe nulla praesentium eaque omnis perferendis a doloremque
            </Typography>
            <Typography style={{ color: "#FF715B", fontWeight: "bold" }}>
              Read More
            </Typography>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Development;
