import React from "react";
import { ProjectList } from "../Constants/AllInfo";
import { ProjectCard } from "./CardComponents";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const ProjectModule = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <div className="my-10">
      {matches ? (
        <div className="flex justify-center">
          <div className="w-full" style={{ maxWidth: "1000px" }}>
            <motion.div
              className="m-auto text-white my-20 w-full"
              style={{ maxWidth: "1000px" }}
              whileInView={{
                x: [-100, 0], // Move right by 100 pixels and return to original position
                transition: {
                  duration: 0.6, // Slows down the entire animation to 2 seconds
                  ease: "easeInOut", // Adds a smooth, natural acceleration and deceleration
                },
              }}
            >
              <p className="tracking-wide text-gray-400">
                WHAT I HAVE BUILT SO FAR
              </p>
              <p className="text-3xl font-semibold tracking-wide">PROJECTS</p>
            </motion.div>
            <div className="flex justify-between w-full">
              {ProjectList.map((project, index) => (
                <div key={index}>
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center ">
          <div>
            <div
              className="m-auto text-white my-20 w-full"
              style={{ maxWidth: "1000px" }}
            >
              <p className="tracking-wide text-gray-400">
                WHAT I HAVE BUILT SO FAR
              </p>
              <p className="text-3xl font-semibold tracking-wide">PROJECTS</p>
            </div>
            <div className="flex justify-between flex-col">
              {ProjectList.map((project, index) => (
                <div key={index} className={`${index !== 0 ? "mt-20" : ""}`}>
                  <ProjectCard
                    matches={matches}
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModule;
