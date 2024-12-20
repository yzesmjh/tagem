import React from "react";

const Zero = () => {
  const items = [
    {
      icon: "images/svg/faceid.svg",
      text: (
        <span className="text-link text-nowrap">
          <span className="text-white">Biometric</span> security
        </span>
      ),
    },
    {
      icon: "images/svg/password.svg",
      text: (
        <span className="text-link">
          <span className="text-white text-nowrap">Access code</span> protection
        </span>
      ),
    },
  ];
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gradient-top-border gradient-bottom-border text-link font-semibold bg-primary">
      <div className="lg:py-40 p-10 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl text-white text-nowrap">
          Zero out of 2,000,000
        </h1>
        <p className="text-link text-2xl">
          <span className="gradient-right ">cards hacked </span> since creation
        </p>
      </div>
      <div className="lg:p-40 p-10 border-l-[1px] border-r-[#b9b8b8]  justify-center flex flex-col">
        <p className="text-xl ">
          <span className="text-link">
            Tangem keeps your crypto safe on several fronts
          </span>
        </p>
        <div className="flex gap-10 pt-10 ">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-2 items-start justify-between ${
                  index == 1 && " gradient-divider  pl-10"
                }`}
              >
                <img src={item.icon} alt="" />
                <p className="text-link ">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Zero;
