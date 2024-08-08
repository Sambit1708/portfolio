import React from "react";
import { ExperienceCard } from "./CardComponents";
import { WorkList } from "../Constants/AllInfo";
import { useMediaQuery } from "@mui/material";

const WorkModule = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <React.Fragment>
      <div>
        <div className="m-auto text-white mb-20" style={{ width: "900px" }}>
          <p className="tracking-wide text-gray-400">WHAT I HAVE DONE SO FAR</p>
          <p className="text-3xl font-semibold tracking-wide">
            Internship and Trainings.
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
                    style={{ width: "900px" }}
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
                    <div className="" style={{ marginLeft: "60px" }}>
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
        <div className="-mt-6">
          {WorkList.map((item) => {
            if (item.id % 2 !== 0) {
              return (
                <div
                  className="mt-10 flex"
                  style={{ width: "900px" }}
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
                  <div className="" style={{ marginLeft: "60px" }}>
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
      )}
    </React.Fragment>
  );
};

export default WorkModule;
