import { CaretDownFilled } from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Profilecard = ({ description, image, city, name }) => {
  return (
    <div>
      <div>
        <div
          style={{
            boxShadow: "#5580ff33 0px 0px 25px 0px",
            border: "0px solid white",
          }}
        >
          <Typography
            style={{
              fontFamily: "Rubik",
              fontSize: "16px",
              fontWeight: 400,
              color: "#6F8BA4",
              lineHeight: 1.6,
              padding: "40px",
            }}
          >
            {description}
          </Typography>
        </div>
        <div style={{ marginTop: "-12px", marginLeft: "10px" }}>
          <AiFillCaretDown color="white" fontSize={"40px"} />
        </div>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <Avatar style={{ height: "60px", width: "60px" }} src={image} />
        <div>
          <Typography style={{ fontSize: "16px", fontWeight: 900 }}>
            {name}
          </Typography>
          <Typography
            style={{ fontWeight: 400, fontFamily: "Rubik", color: "#6F8BA4" }}
          >
            {city}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
