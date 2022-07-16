import React from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./Hero/Hero";
import Recent from "./recent/Recent";
import Teams from "./Teams/Teams";
import AboutsCard from "../abouts/AboutsCard";
import Gallery from "./Gallery/Gallery";

const home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <AboutsCard />
      <Awards />
      <Teams />
      <Gallery />
    </>
  );
};

export default home;
