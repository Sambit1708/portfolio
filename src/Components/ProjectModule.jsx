import React from "react";
import { ProjectList } from "../Constants/AllInfo";
import { ProjectCard } from "./CardComponents";

const ProjectModule = () => {
  return (
    <div className="grid place-items-center">
      <div className="m-auto text-white my-20" style={{ width: "900px" }}>
        <p className="tracking-wide text-gray-400">WHAT I HAVE BUILT SO FAR</p>
        <p className="text-3xl font-semibold tracking-wide">PROJECTS</p>
      </div>
      <div className="flex justify-around" style={{ width: "1000px" }}>
        {ProjectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectModule;
