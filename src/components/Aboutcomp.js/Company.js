import { Card, Image } from "antd";
import React from "react";

const Company = ({ logo }) => {
  return (
    <Card style={{ height: "150px",lineHeight:10,textAlign:'center' }}>
      <Image src={logo} preview={false} />
    </Card>
  );
};

export default Company;
