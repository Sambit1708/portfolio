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

export const ProjectCard = (props) => {
  const { title, description, image, tags, matches } = props;
  return (
    <motion.div
      whileInView={{
        scale: 1.1, // Move right by 100 pixels and return to original position
        transition: {
          duration: 0.6, // Slows down the entire animation to 2 seconds
          ease: "easeInOut", // Adds a smooth, natural acceleration and deceleration
        },
      }}
    >
      <Tilt
        options={defaultOptions}
        style={{
          maxHeight: matches === undefined ? 350 : 600,
          maxWidth: matches === undefined ? 280 : 400,
          width: "100%",
          height: "100%",
          backgroundColor: "#110C29",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <div className="check">
          <div
            className="z-10 text-white flex flex-col justify-between rounded-2xl "
            style={{ height: "95%", paddingLeft: "10px" }}
          >
            <div className="rounded-2xl relative">
              <div className="github-icon">
                <img
                  src={require("../Assets/github.png")}
                  alt="g"
                  width="20px"
                />
              </div>
              <div className="github-icon mt-8">
                <img
                  src={require("../Assets/github.png")}
                  alt="g"
                  width="20px"
                />
              </div>
              <img
                src={image}
                alt="P"
                style={{
                  width: matches === undefined ? 260 : 380,
                  height: matches === undefined ? 160 : 250,
                }}
                className="rounded-2xl"
              />
            </div>
            <div className="p-2 pt-5 pb-7">
              <div className="">
                <p className="text-base font-medium">{title}</p>
              </div>
              <div className="pt-1">
                <p
                  className="ellipsis text-ellipsis text-gray-300"
                  style={{ fontSize: "10px" }}
                >
                  {description}
                </p>
              </div>
              <div
                className="w-fit flex flex-wrap mt-2"
                style={{
                  fontSize: "11px",
                }}
              >
                {tags.map((item) => (
                  <p className={`ml-2 ${item.color}`} key={item.id}>
                    #{item.title}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export const SimpleCard = () => {
  return (
    <div>
      <Tilt
        options={defaultOptions}
        style={{
          height: 350,
          width: 320,
          backgroundColor: "#1e293b",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <div className="check">s</div>
      </Tilt>
    </div>
  );
};

export const ExperienceCard = ({
  designation,
  company,
  arrowClass,
  description,
  date,
}) => {
  return (
    <motion.div
      whileInView={{
        scale: 1.1, // Move right by 100 pixels and return to original position
        transition: {
          duration: 0.6, // Slows down the entire animation to 2 seconds
          ease: "easeInOut", // Adds a smooth, natural acceleration and deceleration
        },
      }}
    >
      <Tilt
        options={defaultOptions}
        style={{
          backgroundColor: "#1A1534",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <div
          className="border-b-2 border-b-white rounded-xl"
          style={{
            backgroundColor: "#1A1534",
            maxWidth: "360px",
            minHeight: "290px",
          }}
        >
          <div className="p-4 text-white relative">
            <div className={`${arrowClass}`}></div>
            <div>
              <p className="text-lg font-semibold">{designation}</p>
              <p className="text-sm text-gray-400">{company}</p>
              {date && <p className="text-gray-400 text-xs mt-1">{date}</p>}
              <div className="pl-4 pt-2">
                <ul
                  className="list-disc leading-4 text-gray-200"
                  style={{ fontSize: "11px" }}
                >
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export const SkillComponent = ({ title, image }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{
        scale: 1, // Enlarges the element when it enters the viewport
        transition: {
          duration: 0.5, // Slows down the entire animation to 2 seconds
          ease: "easeInOut", // Adds a smooth, natural acceleration and deceleration
        },
      }}
      className="w-36"
    >
      <Tilt
        options={defaultOptions}
        style={{
          borderRadius: "50%",
          cursor: "pointer",
          width: "85px",
          height: "120px",
        }}
      >
        <div className="skill-title">
          <div className="icons">
            <img alt="R" src={image} />
          </div>
          <div className="skill-title-h3">
            <h3>{title}</h3>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};
