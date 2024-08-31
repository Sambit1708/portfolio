import { Box } from "@mui/material";
import React from "react";
import MyImage from "../Assets/user.png";
import HeroBG from "../Assets/herobg.png";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const IntroModule = () => {
  return (
    <div
      className="mb-28"
      style={{
        top: 0,
        backgroundImage: `url(${HeroBG})`,
        backgroundSize: "cover",
        padding: "50px",
        paddingTop: "150px",
        backgroundRepeat: "no-repeat",
        minHeight: "641px",
      }}
    >
      <div className="flex justify-center">
        <div className="text-white my-16 w-full" style={{ maxWidth: "800px" }}>
          <motion.p
            className="font-black tracking-wide"
            animate={{ fontSize: "3rem" }}
          >
            Hi, I'm <span className="text-purple-500">Sambit</span>
          </motion.p>
          <p className="text-gray-100 mt-5 tracking-wide pr-20">
            Qualitative Full Stack Developer with hands-on experience through
            multiple internships in Java Development and a strong foundation in
            both backend and frontend technologies. Proficient in building
            robust backend systems using Java, Spring Boot, Spring Security,
            Microservices, NodeJS, MySQL, and MongoDB. Adept at crafting
            responsive and dynamic user interfaces with React, Angular,
            JavaScript, and TypeScript. Passionate about delivering high-quality
            software solutions and continuously enhancing skills in full-stack
            development. Ready to contribute effectively to a dynamic
            development team.
          </p>
        </div>
        <Tilt
          options={defaultOptions}
          style={{
            maxHeight: 350,
            maxWidth: 280,
            width: "100%",
            height: "100%",
            backgroundColor: "#110C29",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <div className="check-intro-img">
            <Box
              title="Sambit"
              component="img"
              alt="Sambit"
              src={MyImage}
              sx={{
                width: "280px",
                height: "330px",
                borderRadius: "8px",
                zIndex: "10",
              }}
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default IntroModule;
