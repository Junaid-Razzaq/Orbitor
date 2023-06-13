import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Button, Card, Col, Input, Row, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { UtopiaMap } from "utopia-ui";
import "../Appbar/style.css";

const Contactform = () => {
  return (
    <div style={{ padding: "80px 0px",backgroundColor:'white' }}>
      <Row>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={22} sm={22} md={16} lg={12}>
          <Typography style={{ color: "#FF715B" }}>Send a message</Typography>
          <Typography style={{ fontSize: "36px", fontWeight: 900 }}>
            Contact Form
          </Typography>
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "20px" }}>
        <Col sm={22} xs={22} md={16} lg={12}>
          <Input
            style={{ height: "45px", marginTop: "10px" }}
            placeholder="I Need Help In..."
          />
          <Input
            style={{ height: "45px", marginTop: "10px" }}
            placeholder="Your Subject"
          />
          <Input
            style={{ height: "45px", marginTop: "10px" }}
            placeholder="Your Name"
          />
          <Input
            style={{ height: "45px", marginTop: "10px" }}
            placeholder="Email Address "
          />
          <TextArea
            style={{ marginTop: "10px", resize: "none" }}
            rows={4}
            placeholder="Your Message"
          />
          <Button
            className="btn-btn-body"
            style={{ height: "45px", width: "200px" }}
          >
            SEND MESSAGE
          </Button>
        </Col>
        <Col sm={22} xs={22} md={7} lg={7} style={{ marginTop: "10px" }}>
          <Card>
            <Row style={{ padding: "20px 0px" }}>
              <Col sm={1} xs={1} md={1} lg={1}></Col>
              <Col sm={23} md={16} xs={23} lg={16}>
                <Typography style={{ fontSize: "21px", fontWeight: 900 }}>
                  Call Us
                </Typography>
                <Typography style={{ color: "#6F8BA4" }}>
                  +92 332 4256700
                </Typography>
                <Typography
                  style={{
                    fontSize: "21px",
                    marginTop: "20px",
                    fontWeight: 900,
                  }}
                >
                  Email Us
                </Typography>
                <Typography style={{ color: "#6F8BA4" }}>
                  the.chakoragency@gmail.com
                </Typography>
                <Typography
                  style={{
                    fontSize: "21px",
                    marginTop: "20px",
                    fontWeight: 900,
                  }}
                >
                  Location Map
                </Typography>
                <Typography style={{ color: "#6F8BA4" }}>
                  MM Alam Road, Gulberb, Lahore, Pakistan
                </Typography>
                <Col style={{ marginTop: "20px" }}>
                  <FacebookFilled style={{ fontSize: "20px" }} />
                  <TwitterCircleFilled
                    style={{ fontSize: "20px", marginLeft: "20px" }}
                  />
                  <InstagramFilled
                    style={{ fontSize: "20px", marginLeft: "20px" }}
                  />
                </Col>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "60px" }}>
        <Col sm={1} xs={1} md={2} lg={2}></Col>
        <Col xs={22} sm={22} md={20} lg={20}>
          <UtopiaMap height="60vh"></UtopiaMap>
        </Col>
      </Row>
    </div>
  );
};

export default Contactform;
