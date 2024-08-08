import { Box } from "@mui/material";
import "./App.css";
import ProjectModule from "./Components/ProjectModule";
import SkillModules from "./Components/SkillModules";
import WorkModule from "./Components/WorkModule";

const App = () => {
  return (
    <Box
      sx={{
        bgcolor: "#030714",
        color: "#fff",
        p: "50px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <WorkModule />
      <SkillModules />
      <ProjectModule />
    </Box>
  );
};

export default App;
