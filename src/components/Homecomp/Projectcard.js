import React from "react";
import "../Appbar/style.css";
import { PaperClipOutlined } from "@ant-design/icons";

const Projectcard = ({ image, alt, text, course }) => {
  return (
    <div class="container">
      <img src={image} alt={alt} class="image" />
      <div class="overlay">
        <div class="text">
          <PaperClipOutlined
            style={{ backgroundColor: "#ffffff12", borderRadius: "40px" }}
            fontSize={"70px"}
          />
        </div>
        <div className="text-desc">{text}</div>
        <div className="text-text">{course}</div>
      </div>
    </div>
  );
};

export default Projectcard;
