import { Card } from "antd";
import Typography from "antd/es/typography/Typography";
import React from "react";

const Cardchoose = ({ isStyle, icon, heading, description }) => {
  return (
    <Card
      style={{ textAlign: "center", boxShadow: " 0px 2px 40px 0px #5580ff33" }}
    >
      <div style={{ marginTop: "30px" }}>{icon}</div>
      <Typography
        style={{ fontSize: "20px", fontWeight: 900, paddingTop: "20px" }}
      >
        {heading}
      </Typography>
      <Typography
        style={{
          color: "#6F8BA4",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: 1.8,
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {description}
      </Typography>
    </Card>
  );
};

export default Cardchoose;
