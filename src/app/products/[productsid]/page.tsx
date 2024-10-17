"use client";

import { ChevronRight, Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/ContextApi";
import React, { useEffect, useState } from "react";

const sizeData = [
  { name: "Small" },
  { name: "Medium" },
  { name: "Large" },
  { name: "X-Large" },
];

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  size: string;
  rating: {
    rate: number;
  };
};

type ProductPageProps = {
  params: {
    productsid: string;
  };
};

async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    console.error("Failed to fetch product data");
    return null;
  }

  const product: Product = await res.json();
  return product;
}

const Page = ({ params }: ProductPageProps) => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [size, setSize] = useState<string>(String);

  useEffect(() => {
    const fetchAndSetProduct = async () => {
      const fetchedProduct = await fetchProduct(params.productsid);
      setProduct(fetchedProduct);
    };

    fetchAndSetProduct();
  }, [params.productsid]);

  if (!product) {
    return (
      <div className="px-10 mx-5 h-[1000px]">
        <p>Loading.....</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: size,
    });
  };

  return (
    <div className="px-10 mx-5 h-[1000px]">
      <div className="border-t border-slate-300">
        <div className="mt-4 flex">
          <p className="text-slate-600 flex items-center gap-x-1">
            Home <ChevronRight size={18} />
          </p>
          <p className="ml-2 text-slate-700 font-medium flex gap-x-1 items-center">
            Shop <ChevronRight size={18} />
          </p>
          <p className="font-medium ml-2">{product.category}</p>
        </div>
        <div className="flex justify-center gap-10 mt-12">
          <div className="flex gap-x-4">
            <div>
              <div className="border border-slate-300 shadow-lg py-3 px-5 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div>
              <div className="border border-slate-300 shadow-lg py-5 px-10 w-[450px] rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={350}
                  height={350}
                  className="w-[350px] h-[450px] mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-[40px] leading-10 font-bold ">
              {product.title}
            </h1>
            <div className="flex my-4 gap-x-1 items-center">
              <Star className="w-5 text-yellow-400 fill-current" />
              <Star className="w-5 text-yellow-400 fill-current" />
              <Star className="w-5 text-yellow-400 fill-current" />
              <Star className="w-5 text-yellow-400 fill-current" />
              <StarHalf className="w-5 text-yellow-400 fill-current" />
              <p className="font-medium text-sm">
                {product.rating.rate} /{" "}
                <span className="text-slate-500 text-sm">5</span>
              </p>{" "}
            </div>
            <h1 className="flex font-bold text-[30px]">${product.price}</h1>
            <p className="text-sm text-slate-600 my-4">{product.description}</p>
            <div className="bg-slate-300 rounded-full mt-6 h-[2px]"></div>
            <p className="text-slate-600 mt-4 text-lg">Choose Size</p>
            <div className="flex gap-x-5 mt-4">
              {sizeData.map((items, index) => (
                <button
                  key={index}
                  onClick={() => setSize(items.name)}
                  className={`${
                    items.name === size ? "bg-black text-white" : "bg-slate-200"
                  } w-28 rounded-full h-12 py-2 px-5 text-center `}
                >
                  {items.name}
                </button>
              ))}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-center text-white h-12 w-full px-8 py-3 mt-8 rounded-full flex justify-center items-center"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
