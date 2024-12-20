import React from "react";

const First = () => {
  return (
    <p className="text-link">
      The chip{" "}
      <span className="text-white">
        generates a random, non-extractable private key.
      </span>{" "}
    </p>
  );
};
const Second = () => {
  return (
    <p className="text-link">
      Tangem devices establish a secure connection{" "}
      <span className="text-white">
        to transfer your encrypted private key.
      </span>{" "}
    </p>
  );
};
const Third = () => {
  return (
    <p className="text-link">
      The key is stored on the chip, and{" "}
      <span className="text-white">no other copies</span> exist across space and
      time.
    </p>
  );
};
const SmartPrivate = () => {
  const items = [<First />, <Second />, <Third />];
  return (
    <div className="bg-primary text-link px-36 lg:pt-40 ">
      <h1 className="text-white  font-semibold text-2xl sm:text-6xl  mb-20">
        <span className="gradient-left">Smart private</span> key backup.
      </h1>
      <p className="text-xl font-semibold">
        Cutting-edge technology <br /> developed by Tangem engineers.
      </p>
      <div className="flex gap-10 pb-10">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-5 mt-10">
            <div className="w-10 h-10 rounded-lg bg-[#151518] border-2 bg-gradient-to-bt from-[#151518] via-link to-link   border-link flex items-center justify-center">
              <p className="text-link font-bold  text-xl">{index + 1}</p>
            </div>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartPrivate;
