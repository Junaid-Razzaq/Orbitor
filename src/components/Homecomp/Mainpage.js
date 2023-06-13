import React from "react";
import { useLocation } from "react-router-dom";
import homebackground from "../../Images/homebackground.jpg";
import backg from "../../Images/backg.jpg";
import { Button, Col, Grid, Row } from "antd";
import "../Appbar/style.css";
import { RightOutlined } from "@ant-design/icons";
import Multipages from "./Multipages";

const Mainpage = () => {
  const location = useLocation();
  let about = location.pathname.includes("about");
  let contact = location.pathname.includes("contact");
  let service = location.pathname.includes("service");
  let portfolio = location.pathname.includes("portfolio");
  return (
    <div
      className="image-container"
      style={{
        backgroundImage: `url(${
          about === true ||
          contact === true ||
          portfolio === true ||
          service === true
            ? backg
            : homebackground
        })`,
        minHeight:
          about === true ||
          contact === true ||
          portfolio === true ||
          service === true
            ? "53vh"
            : "80vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {about === true ||
      contact === true ||
      portfolio === true ||
      service === true ? (
        ""
      ) : (
        <>
      <Row style={{ paddingTop: "70px" }}>
        <Col xs={2} span={3}></Col>
        <Col
          xs={22}
          sm={18}
          md={12}
          lg={10}
          style={{ fontSize: "13px", color: "#6F8BA4" }}
        >
          THE MOST POWERFUL SOLUTION
        </Col>
      </Row>
      <Row>
        <Col xs={2} span={3}></Col>
        <Col
          xs={22}
          sm={18}
          md={12}
          lg={10}
          style={{ fontSize: "50px", fontWeight: "bold" }}
        >
          Digital Experience With Orbitor
        </Col>
      </Row>
      <Row>
        <Col xs={2} span={3}></Col>
        <Col
          xs={22}
          sm={18}
          md={12}
          lg={12}
          style={{ fontSize: "13px", color: "#6F8BA4", marginTop: "13px" }}
        >
          Veritatis earum aliquid doloribus molestias, eveniet molestiae aperiam
          ratione. Facilis velit voluptatibus impedit eligendi delectus illo
          earum voluptatum, laudantium molestiae!
        </Col>
      </Row>
      <Row>
        <Col xs={2} span={3}></Col>
        <Col xs={22} sm={18} md={12} lg={10}>
          <Button className="btn-body">
            LEARN MORE
            <RightOutlined />
          </Button>
        </Col>
      </Row>
      </>
      )}
     {about===true? (<Multipages name={'About Us'} title={'Our Company'}/>):('')}
     {service===true? (<Multipages name={'Our Services'} title={'What We Do'}/>):('')}
     {portfolio===true? (<Multipages name={'Portfolio'} title={'Our Works'}/>):('')}
     {contact===true? (<Multipages name={'Contact Us'} title={'Get In Touch'}/>):('')}
    
    </div>
  );
};

export default Mainpage;
