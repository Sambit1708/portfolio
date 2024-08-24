import React from "react";
import { SkillComponent } from "./CardComponents";
import { SkillList } from "../Constants/AllInfo";

const SkillModules = () => {
  return (
    <div className="flex justify-center my-10">
      <div>
        <div className="flex justify-center">
          <div className="text-white my-16 w-full">
            <p className="tracking-wide text-gray-400">
              WHAT I HAVE DONE SO FAR
            </p>
            <p className="text-3xl font-semibold tracking-wide">SKILL SETS</p>
          </div>
        </div>
        <div
          className="flex flex-wrap justify-between "
          style={{ maxWidth: "1000px", width: "100%" }}
        >
          {SkillList.map((item) => (
            <SkillComponent
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillModules;
