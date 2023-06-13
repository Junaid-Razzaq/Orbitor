import { Button, Col, Grid, Menu, Row } from "antd";
import React, { useState } from "react";
import chakor from "../../Images/Chakor.jpeg";
import "./style.css";
import { MenuOutlined, RightOutlined } from "@ant-design/icons";
import Appmenu from "./Appmenu";
import { Link, useLocation } from "react-router-dom";
import homebackground from "../../Images/homebackground.jpg";
import backg from "../../Images/backg.jpg";
import Mainpage from "../Homecomp/Mainpage";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  const menuItems = (
    <Menu className="menuicon" style={{ border: "none" }}>
      <Menu.Item>
        <Link className="link-nav-navbar" to="/">
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="link-nav-navbar" to="about">
          About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="link-nav-navbar" to="/service">
          Services
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="link-nav-navbar" to="/portfolio">
          Portfolio
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="link-nav-navbar" to="/contact">
          Contact
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="grid-nav" style={{backgroundColor:'white'}}>
        <Row justify={"space-between"}>
          <Col xs={{ order: 1 }} lg={{ order: 1 }}>
            <img width={"130px"} height={"40px"} src={chakor} />
          </Col>
          <Col xs={{ order: 2 }} lg={{ order: 2 }} className="link-nav">
            <div className="headermenu">
              <div style={{ paddingTop: "10px" }}>
                <Appmenu />
              </div>
            </div>
            {/* <div
              style={{
                marginTop: "20px",
              }}
            >
              {visible && menuItems}
            </div> */}
          </Col>
          <Col xs={{ order: 3 }} lg={{ order: 3 }}>
            <span className="headermenu">
              <Button className="btn-nav">
                Give an Estimate<RightOutlined />
              </Button>
            </span>
            <span className="menuicon">
              <MenuOutlined
                style={{ color: "black", paddingTop: "10px", fontSize: "20px" }}
                onClick={handleMenuClick}
              />
            </span>
          </Col>
        </Row>
        <Row justify={'center'}>
          <Col sm={24} style={{textAlign:'center'}}>
          <div
              style={{
                marginTop: "20px",
                fontWeight:600,
                fontSize:'20px',
              }}
            >
              {visible && menuItems}
            </div>
          </Col>
        </Row>
      </div>
      <Mainpage />
    </>
  );
};

export default Navbar;
