import React from "react";
import "./App.css";
import Navbar from "./Views/Navbar/Navbar";
import Main from "./Views/MainMenu/Main";
import { Container } from "@mui/material";
import Footer from "./Views/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
