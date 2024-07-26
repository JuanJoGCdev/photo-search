import React from "react";
import backgroundHome from "../assets/backgroundHome.jpg";
import "./Home.scss";
import SearchSection from "../components/SearchSection";

const Home = () => {
  return (
    <div className="searchSection">
      <SearchSection />
      <img src={backgroundHome} alt="img" className="imgBackground" />
    </div>
  );
};

export default Home;
