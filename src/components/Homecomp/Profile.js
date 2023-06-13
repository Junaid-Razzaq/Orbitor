import { Col, Row, Typography } from "antd";
import React from "react";
import Profilecard from "./Profilecard";
import profile1 from "../../Images/Profileimages/profile1.jpg";
import profile2 from "../../Images/Profileimages/profile2.jpg";
import profile3 from "../../Images/Profileimages/profile3.jpg";

const Profile = () => {
  return (
    <div style={{ paddingBottom: "100px",backgroundColor:'white' }}>
      <Row style={{ padding: "100px 0px" }}>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={22} sm={22} md={18} lg={12}>
          <Typography
            style={{
              fontSize: "44px",
              fontWeight: 900,
              lineHeight: 1.4,
            }}
          >
            What they say about us
          </Typography>
        </Col>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={2} sm={2} md={2} lg={2}></Col>
          <Col
            xs={22}
            sm={22}
            md={20}
            lg={19}
            style={{
              fontFamily: "Rubik",
              lineHeight: "1.8",
              wordSpacing: "1px",
              fontSize: "16px",
              whiteSpace: "pre-wrap",
              color: "#6F8BA4",
            }}
          >
            They are truely amazing in the industry ,molestiae expedita
            aspernatur officia, similique minima laudantium. Corrupti ipsa
            perspiciatis commodi nesciunt rerum mollitia enim voluptate!
          </Col>
        </Row>
      </Row>
      <Row style={{ gap: "20px" }}>
        <Col xs={2} sm={2} md={2} lg={2}></Col>
        <Col xs={22} sm={20} md={6} lg={6}>
          <Profilecard
            description={
              "Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic.Qui ullam iste provident mollitia expedita facilis fuga repellat"
            }
            image={profile1}
            city={"Newyork USA"}
            name={"John Partho"}
          />
        </Col>
        <Col xs={2} sm={2} md={0} lg={0}></Col>
        <Col xs={22} sm={20} md={6} lg={6}>
          <Profilecard
            description={
              "Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic.Qui ullam iste provident mollitia expedita facilis fuga repellat"
            }
            image={profile2}
            city={"Newyork USA"}
            name={"Amanda Green"}
          />
        </Col>
        <Col xs={2} sm={2} md={0} lg={0}></Col>
        <Col xs={22} sm={20} md={6} lg={6}>
          <Profilecard
            description={
              "Maiores quasi placeat harum itaque, ducimus cumque quas expedita hic.Qui ullam iste provident mollitia expedita facilis fuga repellat"
            }
            image={profile3}
            city={"Nigeria"}
            name={"Dakota Rice"}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
