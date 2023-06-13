import { Col, Row } from "antd";
import React from "react";
import Servicecard from "./Servicecard";
import {
  BulbOutlined,
  CheckCircleOutlined,
  CloudFilled,
  GlobalOutlined,
  LaptopOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { FaSignal } from "react-icons/fa";
import { BsSpeedometer2, BsHeadphones } from "react-icons/bs";

const Serviceindus = () => {
  const iconstyle = { color: "#FF715B", fontSize: "25px", paddingLeft: "15px" };
  return (
    <div style={{ padding: "80px 0px",backgroundColor:'white' }}>
      <Row>
        <Col sm={2} xs={2} md={2} lg={2}></Col>
        <Col
          sm={21}
          xs={22}
          md={16}
          lg={14}
          style={{ fontSize: "4vw", fontWeight: 900 }}
        >
          Industry Leading Managed Services & Staffing Solutions
        </Col>
      </Row>
      <Row>
        <Col sm={2} xs={2} md={2} lg={2}></Col>
        <Col
          sm={22}
          xs={22}
          md={16}
          lg={18}
          style={{
            color: "#6F8BA4",
            lineHeight: 1.6,
            fontWeight: 400,
            marginTop: "15px",
          }}
        >
          Quos recusandae dolore, consequuntur nemo hic nisi perferendis. Vel
          praesentium magnam architecto delectus blanditiis doloremque, deleniti
          aperiam ab adipisci!
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "20px", marginTop: "60px" }}>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            icon={<GlobalOutlined style={iconstyle} />}
            title={"Flexible Engagement"}
            description={"Models"}
          />
        </Col>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            title={"Mobility"}
            description={"Service"}
            icon={<MobileOutlined style={iconstyle} />}
          />
        </Col>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            title={"Integrated & Dedicated"}
            description={"Teams"}
            icon={<BsHeadphones style={{fontSize:'38px',marginTop:'-5px',color:"#FF715B",paddingLeft:'15px'}} />}
          />
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "20px", marginTop: "10px" }}>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            icon={<LaptopOutlined style={iconstyle} />}
            title={"Custom Software"}
            description={"Development"}
          />
        </Col>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            title={"Quality"}
            description={"Assurance"}
            icon={<CheckCircleOutlined style={iconstyle} />}
          />
        </Col>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            title={"Big data and"}
            description={"Analytics"}
            icon={<FaSignal style={{fontSize:'38px',marginTop:'-5px',color:"#FF715B",paddingLeft:'15px'}} />}
          />
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "20px", marginTop: "10px" }}>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            icon={<BulbOutlined style={iconstyle} />}
            title={"Product Innovation &"}
            description={"Technology"}
          />
        </Col>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            title={"Enterprise"}
            description={"Solution"}
            icon={<BsSpeedometer2 style={{fontSize:'38px',marginTop:'-5px',color:"#FF715B",paddingLeft:'15px'}} />}
          />
        </Col>
        <Col sm={22} xs={22} md={16} lg={6}>
          <Servicecard
            title={"Cloud backup"}
            description={"System"}
            icon={<CloudFilled style={iconstyle} />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Serviceindus;
