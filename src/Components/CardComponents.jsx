import { Tilt } from "react-tilt";

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

export const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div>
      <Tilt
        options={defaultOptions}
        style={{
          height: 350,
          width: 280,
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
              <img
                src={image}
                alt="P"
                style={{ width: 260, height: 160 }}
                className="rounded-2xl"
              />
            </div>
            <div className="h-44 p-2">
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
    </div>
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
}) => {
  return (
    <div>
      <Tilt
        options={defaultOptions}
        style={{
          backgroundColor: "#1A1534",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <div
          className="border-b-2 border-b-white"
          style={{
            backgroundColor: "#1A1534",
            maxWidth: "370px",
            minHeight: "300px",
          }}
        >
          <div className="p-4 text-white relative">
            <div className={`${arrowClass}`}></div>
            <div>
              <p className="text-lg font-semibold">{designation}</p>
              <p className="text-gray-400">{company}</p>
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
    </div>
  );
};

export const SkillComponent = ({ title, image }) => {
  return (
    <div className="w-36 flex justify-center">
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
    </div>
  );
};
