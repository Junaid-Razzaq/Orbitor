import React from "react";
import projectbackground from "../../Images/projectbackground.jpeg";
import { Col, Row, Typography } from "antd";
import Projectcard from "./Projectcard";
import project1 from "../../Images/projectimages/project1.jpg";
import project2 from "../../Images/projectimages/project2.jpg";
import project3 from "../../Images/projectimages/project3.jpg";
import project4 from "../../Images/projectimages/project4.jpg";

const Projects = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${projectbackground})`,
        backgroundSize: "cover",
      }}
    >
      <Row style={{ padding: "100px 0px" }}>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={20} sm={20} md={12} lg={12}>
          <Typography
            style={{
              fontSize: "44px",
              fontWeight: 900,
              lineHeight: 1.4,
              fontFamily: "Montserrat",
            }}
          >
            We’ve Done Lot’s of Work, Let’s Check Some From Here
          </Typography>
        </Col>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={2} sm={2} md={2} lg={3}></Col>
          <Col
            xs={20}
            sm={20}
            md={14}
            lg={16}
            style={{
              fontFamily: "Rubik",
              lineHeight: "1.8",
              wordSpacing: "1px",
              fontSize: "16px",
              whiteSpace: "pre-wrap",
              color: "#6F8BA4",
            }}
          >
            We have the best experts to elevate your business to the next level,
            try is and you will see! We have the best experts to elevate your
          </Col>
        </Row>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row style={{ gap: "7px", justifyContent: "center" }}>
            <Col>
              <Projectcard
                image={project1}
                alt={"development"}
                text={"Project California"}
                course={"Web debelopment"}
              />
            </Col>
            <Col>
              <Projectcard
                image={project2}
                alt={"development"}
                text={"Project California"}
                course={"Web debelopment"}
              />
            </Col>
            <Col>
              <Projectcard
                image={project3}
                alt={"development"}
                text={"Project California"}
                course={"Web debelopment"}
              />
            </Col>
            <Col>
              <Projectcard
                image={project4}
                alt={"development"}
                text={"Project California"}
                course={"Web debelopment"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
