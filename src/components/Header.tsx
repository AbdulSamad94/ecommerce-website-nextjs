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
        <Menu className="lg:hidden" />
        <h1 className="text-[35px] font-bold tracking-wide">SHOP.CO</h1>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-x-4 text-sm list-none">
        <li className="flex gap-x-1 justify-center items-center ">
          Shop <ChevronDown className="w-4 h-4" />
        </li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </div>
      <div className="hidden lg:block relative">
        <Search className="absolute left-4 top-[13px] text-slate-500" />
        <input
          className="w-[600px] h-12 py-3 pl-16 rounded-full font-outfit bg-slate-100 text-slate-400 text-left text-sm"
          type="text"
          placeholder="Search for products..."
        />
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <div>
          <ShoppingCart className="w-5 h-5" />
        </div>
        <div>
          <CircleUserRound className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
