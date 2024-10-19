"use client";
import { useCart } from "@/context/ContextApi";
import { ChevronRight } from "lucide-react";
import { HiMiniTrash } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const { cart, setCart, removeFromCart, deliveryFee, cartItemCount } =
    useCart();

  const discount = cart.reduce(
    (acc, item) => acc + item.price * 0.2 * item.quantity,
    0
  );
  const subAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };
  const theDiscount = Number(discount);
  const totalAmount = subAmount - discount + deliveryFee;
  if (cartItemCount === 0) {
    return (
      <div className="text-center text-red-600 flex items-center justify-center text-3xl font-bold mb-28 w-full h-[300px]">
        Cart is currently empty..
      </div>
    );
  }
  return (
    <section className="bg-white lg:px-10 lg:mx-5 mx-auto px-5">
      <div className="border-t border-slate-300">
        <div className="mt-4 flex">
          <Link href="/" className="text-slate-600 flex items-center gap-x-1">
            Home <ChevronRight size={18} />
          </Link>
          <p className="ml-2 font-medium">Cart</p>
        </div>
        <h1 className="text-[40px] font-bold my-6">Your Cart</h1>
        {/* MainDiv */}
        <div className="flex md:flex-row flex-col justify-center gap-4">
          {/* LeftSide */}
          <div className="flex h-fit border rounded-xl md:w-[60%] w-full border-slate-300 py-4 px-4 flex-col gap-3">
            {cart.map((items, index) => (
              <div key={index} className="border-b py-4 border-slate-200">
                <div className="flex justify-between gap-x-4">
                  {/* imggggg */}
                  <div className="border px-2 py-2 rounded-lg">
                    <Image width={80} height={80} alt="img" src={items.image} />
                  </div>
                  {/* texttttt */}
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-between w-full">
                      <div>
                        <h1 className="md:text-xl text-lg font-bold">
                          {items.name}
                        </h1>
                        <p className="lg:text-sm text-xs">
                          Size :{" "}
                          <span className="text-slate-500">{items.size}</span>
                        </p>
                      </div>
                      <p className="text-xl font-bold">${items.price}</p>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="md:w-[25px]">
                        <HiMiniTrash
                          onClick={() => removeFromCart(items.id)}
                          size={25}
                          className="fill-red-600 text-red-600 cursor-pointer"
                        />
                      </div>
                      <div className="mr-2">
                        <input
                          className="w-16 h-8 border rounded-lg text-center border-slate-400"
                          type="number"
                          max={5}
                          min={1}
                          value={items.quantity}
                          onChange={(e) =>
                            handleQuantityChange(index, Number(e.target.value))
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* RightSide */}
          <div className="border md:w-[35%] w-full h-fit border-slate-300 px-3 py-4 rounded-xl">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <div className="flex justify-between mt-5">
              <p className="text-slate-500">SubTotal</p>
              <p className="font-bold text-lg">${subAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-slate-500">Discount(-20%)</p>
              <p className="font-bold text-lg text-red-600">
                -${theDiscount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-slate-500">Delivery Fee</p>
              <p className="font-bold text-lg">${deliveryFee}</p>
            </div>
            <div className="w-full h-[2px] bg-slate-200 rounded-full my-5"></div>
            <div className="flex justify-between mt-5">
              <p className="text-slate-500">Total</p>
              <p className="font-bold text-xl">${totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
