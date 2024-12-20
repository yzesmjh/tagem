"use client"; // Ensure this file is treated as a Client Component

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the AdaptiveVideo component with client-side rendering
const DynamicVideo = dynamic(() => import("./AdaptiveVideo"), {
  ssr: false, // Ensures the component is only rendered on the client-side
});

const Hero = () => {
  return (
    <div className="hero bg-primary">
      <div className="w-full h-full bg-primary relative">
        <DynamicVideo />
        <div className="w-full h-full absolute top-0 left-0 ">
          <h1 className="text-white text-center font-semibold text-2xl sm:text-[112px] px-20 leading-none mt-96">
            <span className="gradient-left">Tangem</span>- Your Wallet
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
