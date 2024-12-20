import Image from "next/image";
import React from "react";

const TextImage = () => {
  return (
    <div className="bg-primary grid lg:grid-cols-2 grid-cols-1 font-medium text-xl text-link gradient-bottom-border">
      <div className="lg:p-40 p-5">
        <p>
          <span className="text-white">
            {" "}
            A Tangem Wallet set can contain up to three cards
          </span>{" "}
          or a ring and two cards—each providing equal access like three
          identical keys.
        </p>
      </div>
      <div className="relative">
        <Image
          src="/images/TangemCards.webp"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default TextImage;
