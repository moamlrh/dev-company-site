import { Button, Container } from "@material-ui/core";
import React from "react";
import { createUseStyles } from "react-jss";
import "./Home.css";

const useStayle = createUseStyles({
  rightSide: {
    backgroundImage: "url('/images/slider-icon.png')",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    height: "100vh",
    flex: "1",
  },
  bg: {
    backgroundImage: "url('/images/banner-bg.png')",
    backgroundRepeat: "no-repeat",
  },
});

function Home() {
  const classes = useStayle();
  return (
    <div className={`home ${classes.bg}`} id='home'>
      <div className="home-left">
        <h1>
          Web design and development for <span>YOU</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste
          similique sed consequuntur fugit ducimus cumque vitae aut. Consectetur
          beatae quae.
        </p>
        <button>FIND OUT MORE</button>
      </div>
      <div className={`home-right ${classes.rightSide}`}></div>
    </div>
  );
}

export default Home;
