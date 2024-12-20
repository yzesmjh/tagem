import BelowHero from "@/components/BelowHero";
import Discover from "@/components/Discover";
import Hardware from "@/components/Hardware";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Panel from "@/components/Panel";
import SmartPrivate from "@/components/SmartPrivate";
import TextImage from "@/components/TextImage";
import Zero from "@/components/Zero";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <BelowHero />
      <Hardware />
      <TextImage />
      <SmartPrivate />
      <Zero />
      <Discover />
      <Panel />
    </div>
  );
};

export default page;
