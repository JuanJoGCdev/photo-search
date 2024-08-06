import React from "react";
import GoogleMaps from "../components/GoogleMaps";
import MenuBar from "../components/MenuBar";
import Header from "../components/Header";
import './Location.scss';

const Location = () => {
  return (
    <div className="location">
      <div className="locationContainer">
        <Header />
        <div className="locationBody">
          <MenuBar />
          <div className="locationContent">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
