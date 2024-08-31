import { Box } from "@mui/material";
import "./App.css";
import ProjectModule from "./Components/ProjectModule";
import SkillModules from "./Components/SkillModules";
import WorkModule from "./Components/WorkModule";
import IntroModule from "./Components/IntroModule";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <Box
      sx={{
        bgcolor: "#030714",
        maxWidth: "1400px",
        width: "100%",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        paddingBottom: "50px",
      }}
    >
      <NavBar />
      <IntroModule />
      <WorkModule />
      <SkillModules />
      <ProjectModule />
    </Box>
  );
};

export default App;
