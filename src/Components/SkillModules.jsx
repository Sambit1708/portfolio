import React from "react";
import { SkillComponent } from "./CardComponents";
import { SkillList } from "../Constants/AllInfo";

const SkillModules = () => {
  return (
    <div className="grid place-items-center">
      <div>
        <div className="m-auto text-white my-20" style={{ width: "900px" }}>
          <p className="tracking-wide text-gray-400">WHAT I HAVE DONE SO FAR</p>
          <p className="text-3xl font-semibold tracking-wide">SKILL SETS</p>
        </div>
      </div>
      <div
        className="flex flex-wrap justify-between "
        style={{ width: "1000px" }}
      >
        {SkillList.map((item) => (
          <SkillComponent key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default SkillModules;
