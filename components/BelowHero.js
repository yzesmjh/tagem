import React from "react";
import Health from "./Svgs/Health";
import Security from "./Svgs/Security";
import WalletForm from "./WalletForm";
import Modal from "./Modal";

const BelowHero = () => {
  const captions = [
    { caption: "Swiss-based", icon: <Health /> },
    { caption: "25-year warranty", icon: null },
    { caption: "EAL6+ security standard", icon: <Security /> },
    { caption: "Audited by Kudelski Security & Riscure", icon: null },
  ];
  return (
    <div className=" bg-primary p-10">
      <p className="text-link text-xl text-center px-10 sm:px-20 lg:px-36 font-normal">
        Slim as a bank card, secure as a bank vault. Store, buy, earn, transfer
        and swap thousands of coins and tokens.
      </p>
      <div className="flex justify-center items-center mt-10">
        <button className="bg-transparent text-link px-4 py-2 rounded-full font-medium">
          From $54.90
        </button>

        <Modal
          caption={
            <button className=" text-white px-5 py-3  bg-gradient-to-br from-[#66ccff] via-[#66ccff] to-[#18a1fc] hover:bg-blue-600 rounded-xl ">
              Get Tangem
            </button>
          }
          body={<WalletForm />}
        />
      </div>
      <div className="flex gap-4 lg:flex-wrap justify-center items-center p-10 overflow-auto lg:overflow-hidden">
        {captions.map((item, index) => (
          <div
            className="flex items-center rounded-lg bg-[#151518] py-4 px-5 gap-4"
            key={index}
          >
            <div>{item.icon}</div>

            <p className="text-link text-xl text-center text-nowrap font-normal ">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BelowHero;
