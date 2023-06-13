import { Col, Row, Typography } from "antd";
import React from "react";
import Company from "./Company";
import company1 from "../../Images/Aboutimages/company1.png";
import company2 from "../../Images/Aboutimages/company2.jpeg";
import company3 from "../../Images/Aboutimages/company3.jpeg";
import company4 from "../../Images/Aboutimages/company4.png";
import company5 from "../../Images/Aboutimages/company5.png";
import company6 from "../../Images/Aboutimages/company6.jpeg";

const Aboutbrand = () => {
  return (
    <div style={{ padding: "80px 0px", backgroundColor: "#F8F9FA" }}>
      <Row>
        <Col xs={2} sm={2} lg={2}></Col>
        <Col xs={22} sm={22} md={16} lg={12}>
          <Typography style={{ fontSize: "44px", fontWeight: 900 }}>
            Honors and awards
          </Typography>
          <Typography style={{ color: "#6F8BA4" }}>
            Dicta cupiditate, incidunt quia obcaecati itaque cumque, nostrum
            ipsum est voluptatibus, porro provident a quam quibusdam. Ducimus
            possimus, nesciunt minima magni aspernatur
          </Typography>
        </Col>
      </Row>
      <Row justify={"center"} style={{ gap: "10px", marginTop: "60px" }}>
        <Col xs={10} sm={10} md={3} lg={3}>
          <Company logo={company1} />
        </Col>
        <Col xs={10} sm={10} md={3} lg={3}>
          <Company logo={company2} />
        </Col>
        <Col xs={10} sm={10} md={3} lg={3}>
          <Company logo={company3} />
        </Col>
        <Col xs={10} sm={10} md={3} lg={3}>
          <Company logo={company4} />
        </Col>
        <Col xs={10} sm={10} md={3} lg={3}>
          <Company logo={company5} />
        </Col>
        <Col xs={10} sm={10} md={3} lg={3}>
          <Company logo={company6} />
        </Col>
      </Row>
    </div>
  );
};

export default Aboutbrand;
