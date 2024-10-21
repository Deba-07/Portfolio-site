import React from "react";
import About from "./Components/About";
import Footer from "./components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./style.css";

const siteProps = {
  name: "Debasis Das",
  title: "Web Developer & Software Tester",
  email: "dynamicdeba07@gmail.com",
  gitHub: "Deba-07",
  linkedIn: "Debasis",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
