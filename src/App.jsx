import React from "react";
import "./App.css";
import Navbar from "./Views/Navbar/Navbar";
import Main from "./Views/MainMenu/Main";
import { Container } from "@mui/material";
import Footer from "./Views/Footer/Footer";
import ReactGA from "react-ga4";

function App() {
  React.useEffect(() => {
    const googleAnalytics = async () => {
      await ReactGA.initialize("G-5NZ5NHSY71");
      await ReactGA.send(window.location.pathname + window.location.search);
    };
    googleAnalytics();
  }, []);
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
