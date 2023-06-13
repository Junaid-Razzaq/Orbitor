import { Col, Divider, Image, Row, Typography } from "antd";
import React from "react";
import work1 from "../../Images/Serviceimages/work1.jpg";
import work2 from "../../Images/Serviceimages/work2.jpg";
import work3 from "../../Images/Serviceimages/work3.jpg";
import work4 from "../../Images/Serviceimages/work4.png";
import { CodeSandboxCircleFilled } from "@ant-design/icons";
import "../Appbar/style.css";

const Servicework = () => {
  return (
    <div style={{backgroundColor:'white'}}>
      <Row justify={"center"}>
        <Col sm={22} xs={22} md={16} lg={12}>
          <Typography
            style={{ fontWeight: 900, fontSize: "44px", textAlign: "center" }}
          >
            How we work
          </Typography>
          <Typography style={{ color: "#6F8BA4", textAlign: "center" }}>
            There are many variations of lorem passages of Lorem Ipsum
            available, but the majority have suffered. All the Lorem Ipsum
            generators.
          </Typography>
        </Col>
      </Row>
      <Row justify={"center"} style={{ marginTop: "50px", gap: "20px" }}>
        <Col sm={22} xs={22} md={16} lg={9}>
          <Image
            style={{
              borderRadius: "5px",
              marginTop: "20px",
            }}
            preview={false}
            src={work1}
          />
        </Col>
        <Col className="media-tool">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#6F8BA4",
                height: "50px",
                opacity: 0.5,
              }}
            />
            <CodeSandboxCircleFilled
              style={{ position: "relative", color: "#6F8BA4" }}
            />
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#6F8BA4",
                height: "250px",
                opacity: 0.5,
              }}
            />
          </div>
        </Col>
        <Col sm={22} xs={22} md={16} lg={8}>
          <Typography
            style={{ fontSize: "21px", fontWeight: 900, marginTop: "40px" }}
          >
            Competitor Research
          </Typography>
          <Typography style={{ color: "#6F8BA4" }}>
            Nihil fugit officia esse vero, animi tenetur ullam, dolor aperiam
            minus aliquid enim laudantium fuga! Commodi voluptas, deleniti
            distinctio quam totam vitae.
          </Typography>
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "20px" }}>
        <Col sm={22} xs={22} md={16} lg={9}>
          <Typography
            style={{ fontSize: "21px", fontWeight: 900, marginTop: "40px" }}
          >
            Making Functional Strategy
          </Typography>
          <Typography style={{ color: "#6F8BA4" }}>
            Nihil fugit officia esse vero, animi tenetur ullam, dolor aperiam
            minus aliquid enim laudantium fuga! Commodi voluptas, deleniti
            distinctio quam totam vitae.
          </Typography>
        </Col>
        <Col className="media-tool">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#6F8BA4",
                height: "50px",
                opacity: 0.5,
              }}
            />
            <CodeSandboxCircleFilled
              style={{ position: "relative", color: "#6F8BA4" }}
            />
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#6F8BA4",
                height: "200px",
                opacity: 0.5,
              }}
            />
          </div>
        </Col>
        <Col sm={22} xs={22} md={16} lg={8}>
          <Image
            style={{
              borderRadius: "5px",
              marginTop: "20px",
            }}
            preview={false}
            src={work2}
          />
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "20px" }}>
        <Col sm={22} xs={22} md={16} lg={9}>
          <Image
            style={{
              borderRadius: "5px",
              marginTop: "20px",
            }}
            preview={false}
            src={work3}
          />
        </Col>
        <Col className="media-tool">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#6F8BA4",
                height: "50px",
                opacity: 0.5,
              }}
            />
            <CodeSandboxCircleFilled
              style={{ position: "relative", color: "#6F8BA4" }}
            />
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#6F8BA4",
                height: "200px",
                opacity: 0.5,
              }}
            />
          </div>
        </Col>
        <Col sm={22} xs={22} md={16} lg={8}>
          <Typography
            style={{ fontSize: "21px", fontWeight: 900, marginTop: "40px" }}
          >
            Project Outline
          </Typography>
          <Typography style={{ color: "#6F8BA4" }}>
            Nihil fugit officia esse vero, animi tenetur ullam, dolor aperiam
            minus aliquid enim laudantium fuga! Commodi voluptas, deleniti
            distinctio quam totam vitae.
          </Typography>
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "20px" }}>
        <Col sm={22} xs={22} md={16} lg={9}>
          <Typography
            style={{ fontSize: "21px", fontWeight: 900, marginTop: "40px" }}
          >
            Final Delivery
          </Typography>
          <Typography style={{ color: "#6F8BA4" }}>
            Nihil fugit officia esse vero, animi tenetur ullam, dolor aperiam
            minus aliquid enim laudantium fuga! Commodi voluptas, deleniti
            distinctio quam totam vitae.
          </Typography>
        </Col>
        <Col className="media-tool">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#6F8BA4",
                height: "50px",
                opacity: 0.5,
              }}
            />
            <CodeSandboxCircleFilled
              style={{ position: "relative", color: "#6F8BA4" }}
            />
            <Divider
              type="vertical"
              style={{
                backgroundColor: "#6F8BA4",
                height: "200px",
                opacity: 0.5,
              }}
            />
          </div>
        </Col>
        <Col sm={22} xs={22} md={16} lg={8}>
          <Image
            style={{
              borderRadius: "5px",
              marginTop: "20px",
            }}
            preview={false}
            src={work4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Servicework;
