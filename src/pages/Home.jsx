import React from "react";
import "./Home.css";
import HomeHero from "../components/home/HomeHero";
import HomePartners from "../components/home/HomePartners";
import HomeWhatWeDo from "../components/home/HomeWhatWeDo";
import HomeRealState from "../components/home/HomeRealState";
import HomeTechnologies from "../components/home/HomeTechnologies";
import HomeHowWeBuild from "../components/home/HomeHowWeBuild";
import HomeWhyChooseUs from "../components/home/HomeWhyChooseUs";
import HomeFAQ from "../components/home/HomeFAQ";

const Home = () => {
  return (
    <div className="home-container">
      <HomeHero />
      <HomePartners />
      <HomeWhatWeDo />
      <HomeRealState />
      <HomeTechnologies />
      <HomeHowWeBuild />
      <HomeWhyChooseUs />
      <HomeFAQ />
    </div>
  );
};
export default Home;
