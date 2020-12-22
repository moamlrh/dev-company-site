import React, { useState } from "react";
import "./Contact.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import {
  Facebook,
  GitHub,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";

function Contact({ google }) {
  const [latAndLang, setLatAndLang] = useState({});
  const mapClicked = (mapProps, map, clickEvent) => {
    setLatAndLang(clickEvent);
  };
  return (
    <>
      <div className="contact" id='contact'>
        <div className="map">
          <Map
            google={google}
            zoom={5}
            style={{
              width: "100%",
              height: "100%",
            }}
            onClick={mapClicked}
            initialCenter={{ lat: 46.34, lng: -122 }}
          >
            <Marker label="Moaml RIad  Clicked" position={latAndLang.hb} />
          </Map>
        </div>
        <div className="form">
          <div className="container-form">
            <div className="text">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-mail" />
            </div>
            <textarea placeholder="Your Message"></textarea>
            <button>SEND IT</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>
          Copyright © 2020 Moaml Riad. Design By:{" "}
          <a
            href="http://www.twitter.com/moamlrh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moaml RH.Js
          </a>
        </h3>
        <div className="icons">
          <Facebook />
          <Twitter />
          <YouTube />
          <GitHub />
          <LinkedIn />
        </div>
      </div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDjyWCtWbAB5sac_AZLN2wAHbMlJFFrt5k",
})(Contact);
