import { Col, Row, Typography } from "antd";
import React from "react";
import Teamcard from "./Teamcard";
import profile1 from "../../Images/Aboutimages/profile1.jpg";
import profile2 from "../../Images/Aboutimages/profile2.jpg";

const Team = () => {
  return (
    <div style={{backgroundColor:'white'}}>
      <Row justify={"center"} style={{ padding: "80px 0px" }}>
        <Col sm={22} xs={22} md={16} lg={12}>
          <Typography
            style={{ fontSize: "44px", fontWeight: 900, textAlign: "center" }}
          >
            Our Team
          </Typography>
          <Typography
            style={{ color: "#6F8BA4", textAlign: "center", marginTop: "20px" }}
          >
            Today’s users expect effortless experiences. Don’t let essential
            people and processes stay stuck in the past. Speed it up, skip the
            hassles
          </Typography>
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "20px",marginBottom:'80px' }}>
        <Col xs={20} sm={20} md={16} lg={4}>
          <Teamcard img={profile1} name={"John Marshal"} position={"Founder"} />
        </Col>
        <Col xs={20} sm={20} md={16} lg={4}>
          <Teamcard
            img={profile2}
            name={"Marshal Root"}
            position={"Marketing Head"}
          />
        </Col>
        <Col xs={20} sm={20} md={16} lg={4}>
          <Teamcard
            img={profile1}
            name={"Siamon john"}
            position={"Co-ordinator"}
          />
        </Col>
        <Col xs={20} sm={20} md={16} lg={4}>
          <Teamcard
            img={profile2}
            name={"Rishat Ahmed"}
            position={"Senior Developer"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Team;
