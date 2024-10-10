import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";

const paymentImg = [
  {
    src: "/footer/image1.png",
  },
  {
    src: "/footer/image2.png",
  },
  {
    src: "/footer/image3.png",
  },
  {
    src: "/footer/image4.png",
  },
  {
    src: "/footer/image5.png",
  },
];
const Footer = () => {
  return (
    <main className="relative">
      <div className="bg-slate-100 h-56 w-full absolute -top-32 -z-10"></div>
      <section className="lg:px-12 px-2 bg-slate-100 py-20 -z-10">
        <div className="flex lg:justify-between lg:flex-row flex-col gap-10 mx-auto">
          <div className="lg:w-[20%]">
            <h1 className="text-[38px] font-bold tracking-wide mb-4">
              SHOP.CO
            </h1>
            <p className="text-slate-600 text-[14px] mb-8">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-x-4">
              <div className="w-[38px] h-[38px] rounded-full bg-white border border-slate-300 flex justify-center items-center">
                <BsTwitter size={15} className="fill-black" />
              </div>
              <div className="w-[38px] h-[38px] rounded-full bg-black flex justify-center items-center">
                <FaFacebookF size={15} className="fill-white w-auto h-auto" />
              </div>
              <div className="w-[38px] h-[38px] rounded-full bg-white border border-slate-300 flex justify-center items-center">
                <BsInstagram size={16} className="" />
              </div>
              <div className="w-[38px] h-[38px] rounded-full bg-white border border-slate-300 flex justify-center items-center">
                <BsGithub size={15} className="" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-x-2 lg:w-[65%]">
            <div className="w-full text-[16px]">
              <h1 className="uppercase tracking-widest font-medium mb-5">
                Company
              </h1>
              <div className="flex flex-col gap-y-5 text-slate-500">
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>
            </div>
            <div className="w-full text-[16px]">
              <h1 className="uppercase tracking-widest font-medium mb-5">
                Help
              </h1>
              <div className="flex flex-col gap-y-5 text-slate-500">
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="w-full text-[16px]">
              <h1 className="uppercase tracking-widest font-medium mb-5">
                FAQ
              </h1>
              <div className="flex flex-col gap-y-5 text-slate-500">
                <p>Accounts</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
            </div>
            <div className="w-full text-[16px]">
              <h1 className="uppercase tracking-widest font-medium mb-5">
                Resources
              </h1>
              <div className="flex flex-col gap-y-5 text-slate-500">
                <p>Free eBooks</p>
                <p>Deployment Tutorials</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 h-[2px] rounded-full w-full my-10"></div>
        <div className="flex lg:justify-between justify-center gap-y-4 lg:flex-row flex-col items-center">
          <p className="text-slate-500 text-center">
            Abdul Samad Siddiqui © 2000-2024, All Rights Reserved
          </p>
          <div className="flex gap-x-3">
            {paymentImg.map((item, index) => (
              <div
                className="w-[50px] h-[35px] rounded-lg bg-white flex justify-center items-center"
                key={index}
              >
                <Image src={item.src} alt="img" width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
