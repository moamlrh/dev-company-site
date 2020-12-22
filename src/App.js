import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Questions from "./Components/Qusetions/Questions";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Questions />
      <Contact />
    </div>
  );
}

export default App;
