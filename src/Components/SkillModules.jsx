import React from "react";
import { SkillComponent } from "./CardComponents";
import { SkillList } from "../Constants/AllInfo";
import { motion } from "framer-motion";

const SkillModules = () => {
  return (
    <div className="flex justify-center my-10">
      <div>
        <motion.div
          className="flex justify-center"
          whileInView={{
            x: [-100, 0], // Move right by 100 pixels and return to original position
            transition: {
              duration: 0.6, // Slows down the entire animation to 2 seconds
              ease: "easeInOut", // Adds a smooth, natural acceleration and deceleration
            },
          }}
        >
          <div className="text-white my-16 w-full">
            <p className="tracking-wide text-gray-400">
              WHAT I HAVE DONE SO FAR
            </p>
            <p className="text-3xl font-semibold tracking-wide">SKILL SETS</p>
          </div>
        </motion.div>
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
