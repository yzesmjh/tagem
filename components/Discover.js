"use client";
import Image from "next/image";
import React, { useState } from "react";

const Discover = () => {
  const accordions = [
    {
      text: "Access real-time tickers for thousands of cryptocurrencies, compare prices and make more informed investment decisions.",
      title: "Track prices",
      image: "/images/trackprice.png",
    },
    {
      text: "Get insights into valuable data that drive smarter decisions, analyze market trends, and uncover key opportunities.",
      title: "Analyze tokensAnalyze toke",
      image: "/images/analyseToken.png",
    },
    {
      text: "Exchange one cryptocurrency for another quickly and securely with our providers. Diversify your portfolio, grow your funds and protect your assets.",
      title: "Swap",
      image: "/images/swap.png",
    },
    {
      text: "Easily purchase Bitcoin and other cryptocurrencies using credit cards, bank transfers, Apple Pay, or Google Pay",
      title: "Buy",
      image: "/images/buy.png",
    },
    {
      text: "Sell crypto assets, including stablecoins, safely via integrated off-ramp services.",
      title: "Sell",
      image: "/images/sell.png",
    },
    {
      text: "Earn passive income and benefit from long-term reward accumulation by staking cryptocurrencies.",
      title: "Stake Crypto",
      image: "/images/stake.png",
    },
  ];
  const [current, setCurrent] = useState(accordions[0]);
  const apps = [
    {
      title: (
        <span className="text-white font-medium">
          <span className="text-link hover:text-gray-300">Download on the</span>{" "}
          <br />
          App Store
        </span>
      ),
      icon: "/images/svg/app-store.svg",
    },
    {
      title: (
        <span className="text-white font-medium">
          <span className="text-link hover:text-gray-300">Get it on</span>{" "}
          <br />
          Google Play
        </span>
      ),
      icon: "/images/svg/android-apk.svg",
    },
    {
      title: (
        <span className="text-white font-medium">
          <span className="text-link hover:text-gray-300">Android APK</span>{" "}
          <br />
          Download
        </span>
      ),
      icon: "/images/svg/google-play.svg",
    },
    {
      title: (
        <span className="text-white font-medium">
          <span className="text-link underline hover:text-gray-300">
            Scan QR{" "}
          </span>
        </span>
      ),
      icon: "/images/svg/qr.svg",
    },
  ];
  return (
    <div className="w-full bg-primary">
      <h1 className="p-20 bg-primary text-white text-6xl font-medium w-2/3">
        <span className="gradient-left">Discover</span> the best crypto wallet
        app in Tangem.
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 p-10">
        <div className="flex items-start pl-10">
          <div className="w-[400px] h-[600px] relative">
            <Image
              key={current.image} // Add a key to force re-render when the image changes
              src={`${current.image}?v=${new Date().getTime()}`}
              alt={current.title}
              className="w-full h-full object-cover"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          {accordions.map((item, index) => (
            <div className="pr-40 gradient-bottom-border pb-5" key={index}>
              <h1
                className={`text-white mb-3 font-medium text-nowrap cursor-pointer ${
                  current.title == item.title ? " text-3xl" : "text-2xl"
                }`}
                onClick={() => setCurrent(item)}
              >
                {item.title}
              </h1>
              <p
                className={`text-link  ${
                  current.title == item.title ? " flex" : "hidden"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
          <div className="grid grid-cols-2 w-2/3 gap-5  items-start justify-start">
            {apps.map((item, index) => (
              <div className="flex flex-col  gap-3 cursor-pointer" key={index}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                  className="grayscale-image"
                />
                <div className="text-white">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-20 gradient-top-border mt-20">
        <h1 className="text-center text-6xl text-white font-semibold">
          <span className="gradient-left">Access</span> to thousands of
          cryptocurrencies.
        </h1>
      </div>
    </div>
  );
};

export default Discover;
