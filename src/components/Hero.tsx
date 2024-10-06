"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const data = [
  {
    number: 1300,
    text: "International Brands",
  },
  {
    number: 2000,
    text: "High-Quality Products",
  },
  {
    number: 30000,
    text: "Happy Customers",
  },
];
const Hero = () => {
  return (
    <section className="w-full h-full bg-zinc-100 pt-20">
      <div className="flex justify-between items-center">
        <div className="w-2/5 ml-10 flex flex-col">
          <h1 className="uppercase text-5xl text-left font-bold mb-8">
            find clothes that matches your styles
          </h1>
          <p className="text-zinc-500 text-[16px] mb-8">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white py-3 px-5 w-48 h-12 rounded-full flex items-center justify-center mb-12">
            Shop Now
          </button>
          <div className="flex gap-x-10 mb-20">
            {data.map((item, index) => (
              <div key={index}>
                <div className="text-4xl te font-bold mb-2">
                  <CountUp end={item.number} duration={6} />
                  {"+"}
                </div>
                <div className="text-[16px] text-zinc-500 ">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src="/hero/vector.png"
            alt="star"
            className="w-20 h-20 absolute -left-20 top-1/4"
          />
          <img
            src="/hero/vector.png"
            alt="star"
            className="w-14 h-14 absolute right-5 top-10"
          />
          <Image
            src="/hero/hero-img.png"
            width={560}
            height={560}
            alt="hero-bg"
          />
        </div>
      </div>
      <div className="w-full bg-black h-20 mb-10 flex justify-around items-center">
        <Image
          src="/hero/one-text.png"
          alt="text-logo"
          width={130}
          height={130}
        />
        <Image
          src="/hero/two-text.png"
          alt="text-logo"
          width={70}
          height={70}
        />
        <Image
          src="/hero/three-text.png"
          alt="text-logo"
          width={130}
          height={130}
        />
        <Image
          src="/hero/fourth-text.png"
          alt="text-logo"
          width={130}
          height={130}
        />
        <Image
          src="/hero/fifth-text.png"
          alt="text-logo"
          width={130}
          height={130}
        />
      </div>
    </section>
  );
};

export default Hero;
