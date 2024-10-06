import React from "react";
import {
  Search,
  ChevronDown,
  ShoppingCart,
  CircleUserRound,
  Menu,
} from "lucide-react";

const Header = () => {
  return (
    <header className="w-full lg:h-28 h-20 flex justify-between lg:justify-around items-center py-4 lg:px-10 px-7 ">
      <div className="flex justify-center items-center gap-x-5">
        <Menu className="lg:hidden cursor-pointer" />
        <h1 className="text-[35px] font-bold tracking-wide cursor-pointer">
          SHOP.CO
        </h1>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-x-4 text-sm list-none">
        <li className="flex gap-x-1 justify-center items-center cursor-pointer">
          Shop <ChevronDown className="w-4 h-4 cursor-pointer" />
        </li>
        <li className="cursor-pointer">On Sale</li>
        <li className="cursor-pointer">New Arrivals</li>
        <li className="cursor-pointer">Brands</li>
      </div>
      <div className="hidden lg:block relative">
        <Search className="absolute left-4 top-[13px] text-slate-500 cursor-pointer" />
        <input
          className="w-[600px] h-12 py-3 pl-16 rounded-full font-outfit cursor-pointer bg-slate-100 text-slate-400 text-left text-sm"
          type="text"
          placeholder="Search for products..."
        />
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <div>
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>
        <div>
          <CircleUserRound className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
