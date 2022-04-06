import "./App.css";
import Navbar from "./Views/Navbar/Navbar";
import Main from "./Views/MainMenu/Main";
import { Container, Box } from "@mui/material";
import { GitHub } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Main />
      </Container>
      <Box sx={{ color: "gray", position: "fixed", bottom: 0 }}>
        <center>
          Copyright Santiago Gonzalez Lojo 2022.{" "}
          <GitHub
            sx={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://github.com/fenixlojo", "_blank")
            }
          />
        </center>
      </Box>
    </div>
  );
}

export default App;
