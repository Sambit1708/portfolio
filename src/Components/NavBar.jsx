import React from "react";
import { Box } from "@mui/material";
import UserImg from "../Assets/portfolio.png";

const NavBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "50px",
        background: "#030714",
        width: "100%",
        zIndex: 1000,
        padding: "30px 50px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "180px",
          justifyContent: "space-between",
        }}
      >
        <Box component="img" src={UserImg} title="User" width="40px" />
        <p>|</p>
        <p>My Portfolio</p>
      </div>
      <div
        className="nav-a"
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <a href="!#">Home</a>
        <p>|</p>
        <a href="!#">Experience</a>
        <p>|</p>
        <a href="!#">Skills</a>
        <p>|</p>
        <a href="!#">Projects</a>
        <p>|</p>
        <a href="!#">Contact</a>
      </div>
    </div>
  );
};

export default NavBar;
