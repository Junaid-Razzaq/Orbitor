import { Col, Image, Row, Typography } from "antd";
import React from "react";
import image1 from "../../Images/Serviceimages/image1.jpg";
import image2 from "../../Images/Serviceimages/image2.jpg";
import image3 from "../../Images/Serviceimages/image3.jpg";

const Servicedetail = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptatum, nobis quos dolores reiciendis unde. Est obcaecati aspernatur pariatur aliquid quos repellendus, amet architecto similique, cumque nisi earum, culpa, ipsa!";

  return (
    <div style={{ padding: "80px 0px",backgroundColor:'white' }}>
      <Row justify={"center"} style={{ gap: "30px" }}>
        <Col sm={22} xs={22} md={16} lg={9}>
          <Image
            style={{
              borderRadius: "5px",
              boxShadow: "0px 0px 40px 0px #5580ff33",
            }}
            preview={false}
            src={image1}
          />
        </Col>
        <Col sm={22} xs={22} md={16} lg={8}>
          <Typography style={{ color: "#FF715B", fontWeight: 900 }}>
            01
          </Typography>
          <Typography style={{ fontSize: "36px", fontWeight: 900 }}>
            Custom Software development
          </Typography>
          <Typography style={{ color: "#6F8BA4", marginTop: "20px" }}>
            {description}
          </Typography>
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "30px", marginTop: "50px" }}>
        <Col sm={22} xs={22} md={16} lg={9}>
          <Typography style={{ color: "#FF715B", fontWeight: 900 }}>
            02
          </Typography>
          <Typography style={{ fontSize: "36px", fontWeight: 900 }}>
            Software Maintenance
          </Typography>
          <Typography style={{ color: "#6F8BA4", marginTop: "20px" }}>
            {description}
          </Typography>
        </Col>
        <Col sm={22} xs={22} md={16} lg={9}>
          <Image
            style={{
              borderRadius: "5px",
              boxShadow: "0px 0px 40px 0px #5580ff33",
            }}
            preview={false}
            src={image2}
          />
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "30px", marginTop: "50px" }}>
        <Col sm={22} xs={22} md={16} lg={9}>
          <Image
            style={{
              borderRadius: "5px",
              boxShadow: "0px 0px 40px 0px #5580ff33",
            }}
            preview={false}
            src={image3}
          />
        </Col>
        <Col sm={22} xs={22} md={16} lg={8}>
          <Typography style={{ color: "#FF715B", fontWeight: 900 }}>
            03
          </Typography>
          <Typography style={{ fontSize: "36px", fontWeight: 900 }}>
            Web App Development
          </Typography>
          <Typography style={{ color: "#6F8BA4", marginTop: "20px" }}>
            {description}
          </Typography>
        </Col>
      </Row>
    </div>
  );
};

export default Servicedetail;
