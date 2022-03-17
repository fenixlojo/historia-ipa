import "./App.css";
import Navbar from "./Views/Navbar/Navbar";
import Main from "./Views/MainMenu/Main";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
