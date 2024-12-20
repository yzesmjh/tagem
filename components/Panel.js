import Image from "next/image";
import React from "react";

const Panel = () => {
  return (
    <div className=" justify-center bg-primary p-20">
      <div className="relative w-full h-[500px]">
        <Image src="/images/panel.webp" layout="fill" objectFit="cover" />
      </div>
      <div>
        <h1 className="text-white text-6xl font-semibold  text-center p-20">
          <span className="gradient-left">Tangem Chip—</span>Crypto security at
          its peak.
        </h1>
        <p className="text-white text-2xl px-10 text-center">
          Every Tangem Wallet contains a powerful, certified microchip developed
          with Samsung Semiconductors.
        </p>
      </div>
    </div>
  );
};

export default Panel;
