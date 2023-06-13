import { Col, Row, Typography } from "antd";
import React from "react";
import Projectcard from "../Homecomp/Projectcard";
import project1 from '../../Images/projectimages/project1.jpg'
import project2 from '../../Images/projectimages/project2.jpg'
import project3 from '../../Images/projectimages/project3.jpg'
import project4 from '../../Images/projectimages/project4.jpg'
import project5 from '../../Images/projectimages/project5.jpg'
import project6 from '../../Images/projectimages/project6.jpg'

const Portfoliocard = () => {
  return (
    <div style={{padding:'80px 0px',backgroundColor:'white'}}>
      <Row justify={"center"}>
        <Col sm={22} xs={22} md={16} lg={16} style={{textAlign:'center'}}>
          <Typography style={{ fontSize: "44px", fontWeight: 900 }}>
            Let’s Check Some Works
          </Typography></Col>
          <Col sm={22} xs={22} md={16} lg={12} style={{textAlign:'center',marginTop:'20px'}}>
          <Typography style={{color:'#6F8BA4'}}>
            We have the best experts to elevate your business to the next level,
            try is and you will see! We have the best experts to elevate your
          </Typography>
        </Col>
      </Row>
      <Row style={{ marginTop:'60px',gap: "10px", justifyContent: "center" }}>
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
          {/* </Row>
      <Row style={{ marginTop:'10px',gap: "10px", justifyContent: "center" }}> */}
            <Col>
              <Projectcard
                image={project4}
                alt={"development"}
                text={"Project California"}
                course={"Web debelopment"}
              />
            </Col>
            <Col>
              <Projectcard
                image={project5}
                alt={"development"}
                text={"Project California"}
                course={"Web debelopment"}
              />
            </Col>
            <Col>
              <Projectcard
                image={project6}
                alt={"development"}
                text={"Project California"}
                course={"Web debelopment"}
              />
            </Col>
          </Row>
      
           
    </div>
  );
};

export default Portfoliocard;
