import React from "react";

const Hardware = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gradient-top-border gradient-bottom-border text-link font-semibold bg-primary">
      <div className="lg:p-40 p-10">
        <p>
          <span className="text-white">During activation</span>, the Tangem chip
          generates a random private key offline, ensuring it cannot be
          compromised.
        </p>
      </div>
      <div className="lg:p-40 p-10 border-l-[1px] border-r-[#b9b8b8] items-center justify-center flex flex-col">
        <p className="text-xl  tracking-wider">
          <span className="gradient-right">Set up a ha</span>
          rdware wallet in
        </p>
        <h1 className="text-6xl text-white text-nowrap">3 minutes</h1>
      </div>
    </div>
  );
};

export default Hardware;
