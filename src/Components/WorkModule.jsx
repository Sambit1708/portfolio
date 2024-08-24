import React from "react";
import { ExperienceCard } from "./CardComponents";
import { WorkList } from "../Constants/AllInfo";
import { useMediaQuery } from "@mui/material";

const WorkModule = () => {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <div className="my-10">
      <div>
        <div
          className={`m-auto text-white mb-20 ${matches ? "w-full" : "w-fit"}`}
          style={{ maxWidth: "900px" }}
        >
          <p className="tracking-wide text-gray-400">WHAT I HAVE DONE SO FAR</p>
          <p className="text-3xl font-semibold tracking-wide">
            INTERNSHIP AND TRAINING.
          </p>
        </div>
      </div>

      {matches ? (
        <div className="text-white relative m-auto grid place-items-center">
          <div
            className="top-0 absolute w-1 bg-gray-200 z-10"
            style={{ height: "1200px" }}
          ></div>
          <div className="z-20">
            {WorkList.map((item) => {
              if (item.id % 2 !== 0) {
                return (
                  <div
                    className="mt-10 flex"
                    style={{ width: "100%", maxWidth: "900px" }}
                    key={item.id}
                  >
                    <div className="-mt-6">
                      <ExperienceCard
                        arrowClass={item.arrowClass}
                        designation={item.designation}
                        description={item.description}
                        company={item.company}
                      />
                    </div>
                    <div style={{ marginLeft: "60px" }}>
                      <img
                        alt="R"
                        src={item.companyLogo}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="ml-6 mt-2">
                      <p>{item.duration}</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="mt-10 flex justify-end"
                    style={{ width: "900px" }}
                    key={item.id}
                  >
                    <div className="mr-6 mt-2">
                      <p>{item.duration}</p>
                    </div>
                    <div className="" style={{ marginRight: "60px" }}>
                      <img
                        alt="R"
                        src={item.companyLogo}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>

                    <div className="-mt-6">
                      <ExperienceCard
                        arrowClass={item.arrowClass}
                        designation={item.designation}
                        description={item.description}
                        company={item.company}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="mt-10 w-6 h-1 bg-white"></div>
        </div>
      ) : (
        <div className="relative m-auto grid place-items-center">
          <div>
            <div
              className="top-0 absolute  w-1 bg-gray-200 z-10"
              style={{ height: "1250px" }}
            ></div>
            <div className=" m-auto grid place-items-center">
              {WorkList.map((item, index) => (
                <div key={index} className={`${index !== 0 ? "mt-8" : ""}`}>
                  <div className="flex -ml-4">
                    <div className="mt-6  z-20">
                      <img
                        alt="R"
                        src={item.companyLogo}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div key={index} className="flex flex-col w-fit ml-12">
                      <ExperienceCard
                        arrowClass="project-arrow-right"
                        designation={item.designation}
                        description={item.description}
                        company={item.company}
                        date={item.duration}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 -ml-3 w-6 h-1 bg-white"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkModule;
