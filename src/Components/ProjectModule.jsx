import React from "react";
import { ProjectList } from "../Constants/AllInfo";
import { ProjectCard } from "./CardComponents";
import { useMediaQuery } from "@mui/material";

const ProjectModule = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <div className="my-10">
      {matches ? (
        <div className="flex justify-center">
          <div className="w-full" style={{ maxWidth: "1000px" }}>
            <div
              className="m-auto text-white my-20 w-full"
              style={{ maxWidth: "1000px" }}
            >
              <p className="tracking-wide text-gray-400">
                WHAT I HAVE BUILT SO FAR
              </p>
              <p className="text-3xl font-semibold tracking-wide">PROJECTS</p>
            </div>
            <div className="flex justify-between w-full">
              {ProjectList.map((project) => (
                <div>
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
                <div className={`${index !== 0 ? "mt-20" : ""}`}>
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
