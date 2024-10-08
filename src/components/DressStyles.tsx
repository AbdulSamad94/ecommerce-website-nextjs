import React from "react";
import Image from "next/image";

const DressStyles = () => {
  return (
    <section className="mt-20">
      <div className="w-[90%] h-full py-10 m-auto rounded-2xl bg-slate-200 ">
        <div className="mb-10">
          <h1 className="text-[32px] font-bold text-center">
            BROWSE BY dress STYLE
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-4 items-center mb-4 px-12">
          <div className="lg:w-[400px] lg:h-[270px] w-[350px] h-[190px] relative bg-white rounded-xl overflow-hidden cursor-pointer">
            <p className="text-[28px] font-bold absolute top-6 left-7 z-10">
              Casual
            </p>
            <Image
              src="/dressStyle/image1.png"
              alt="img-1"
              className="w-full h-full"
              priority
              fill
            />
          </div>
          <div className="lg:w-[680px] lg:h-[270px] w-[350px] h-[190px] relative bg-white rounded-xl overflow-hidden cursor-pointer">
            <p className="text-[28px] font-bold absolute top-6 left-7 z-10">
              Formal
            </p>
            <Image
              src="/dressStyle/image4.png"
              alt="img-1"
              className="w-full h-full"
              priority
              fill
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-4 items-center px-12">
          <div className="lg:w-[680px] lg:h-[270px] w-[350px] h-[190px] relative bg-white rounded-xl overflow-hidden cursor-pointer">
            <p className="text-[28px] font-bold absolute top-6 left-7 z-10">
              Party
            </p>
            <Image
              src="/dressStyle/image3.png"
              alt="img-1"
              priority
              fill
              className="w-full h-full absolute right-0"
            />
          </div>
          <div className="lg:w-[400px] lg:h-[270px] w-[350px] h-[190px] relative bg-white rounded-xl overflow-hidden cursor-pointer">
            <p className="text-[28px] font-bold absolute top-6 left-7 z-10">
              Gym
            </p>
            <Image
              src="/dressStyle/image2.png"
              alt="img-1"
              priority
              width={300}
              height={300}
              className="w-[300px] h-[270px] absolute right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyles;
