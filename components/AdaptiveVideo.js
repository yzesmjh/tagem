import React from "react";

const AdaptiveVideo = () => {
  return (
    <div className="w-full h-full">
      <video
        playsInline
        autoPlay
        muted
        width="100%"
        height="100%"
        poster="images/hero-scanning.png"
        className="hero__video"
        loop={false}
      >
        <source src="images/videos/hero-scanning.mp4" type="video/mp4" />
        {/* Add more sources for different video formats if needed */}
      </video>
    </div>
  );
};

export default AdaptiveVideo;
