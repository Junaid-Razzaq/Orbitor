import React from "react";
import Development from "../components/Homecomp/Development";
import Choose from "../components/Homecomp/Choose";
import Softwaretesting from "../components/Homecomp/Softwaretesting";
import Projects from "../components/Homecomp/Projects";
import Journey from "../components/Homecomp/Journey";
import Profile from "../components/Homecomp/Profile";

const Home = () => {
  return (
    <>
      <Development />
      <Choose />
      <Softwaretesting />
      <Projects />
      <Journey />
      <Profile />
    </>
  );
};

export default Home;
