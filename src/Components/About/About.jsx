import React from "react";
import { createUseStyles } from "react-jss";
import "./About.css";

const useStayle = createUseStyles({
  leftSideImg: {
    backgroundImage: "url(/images/left-image.png)",
  },
  rightSideImage: {
    backgroundImage: "url(/images/right-image.png)",
  },
});

function About() {
  const classes = useStayle();

  return (
    <div className="about" id='about'>
      <div className="first-child">
        <div className={`left ${classes.leftSideImg}`}></div>
        <div className="right">
          <h2>Vivamus sodales nisi id ante molestie venenatis</h2>
          <p>
            This template is last updated on 20 August 2019 for main menu
            drop-down arrow and sub menu text color. Duis auctor dolor eu
            scelerisque vestibulum. Vestibulum lacinia, nisl sit amet tristique
            condimentum.
            <br />
            Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit
            amet, ultrices malesuada odio. Donec non quam euismod, mattis dui a,
            ultrices nisi.
          </p>
          <button>Discover More</button>
        </div>
      </div>
      <div className="second-child">
        <div className={`left ${classes.rightSideImage}`}></div>
        <div className="right">
          <h2>Curabitur aliquam eget tellus id porta</h2>
          <p>
            Proin justo sapien, posuere suscipit tortor in, fermentum mattis
            elit. Aenean in feugiat purus.
          </p>
          <div className="second-icons">
            <div className="first">
              <img src="/images/service-icon-01.png" alt="service-icon" />
              <div className="text">
                <h3>Nulla ultricies risus quis risus</h3>
                <p>
                  You can use this website template for commercial or
                  non-commercial purposes.
                </p>
              </div>
            </div>
            <div className="first">
              <img src="/images/service-icon-02.png" alt="service-icon" />
              <div className="text">
                <h3>Donec consequat commodo purus</h3>
                <p>
                  You have no right to re-distribute this template as a
                  downloadable ZIP file on any website.
                </p>
              </div>
            </div>
            <div className="first">
              <img src="/images/service-icon-03.png" alt="service-icon" />
              <div className="text">
                <h3>Sed placerat sollicitudin mauris</h3>
                <p>
                  If you have any question or comment, please contact us on
                  TemplateMo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
