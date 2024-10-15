"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchProduct } from "@/app/util/api";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
  };
};

const Page: React.FC = () => {
  const [Products, SetProducts] = useState<Product[]>([]);
  const [Loading, SetLoading] = useState(true);
  const [error, SetError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProduct();
        SetProducts(data);
      } catch (err) {
        SetError(err instanceof Error ? err.message : "An error Occured");
      } finally {
        SetLoading(false);
      }
    };

    getProducts();
  }, []);
  if (Loading)
    return (
      <div className=" w-full h-[300px] bg-white">
        <p className="spinner mt-10 mx-auto"></p>
      </div>
    );
  if (error)
    return (
      <p className="text-[42px] text-center w-full h-[300px] bg-white font-bold text-red-700">
        Error: {Error}
      </p>
    );
  return (
    <div className="px-10 mx-5">
      <div className="border-t border-slate-300">
        <div className="mt-4 flex">
          <p className="text-slate-600 flex items-center gap-x-1">
            Home <ChevronRight size={18} />
          </p>
          <p className="ml-2 font-medium">Shop</p>
        </div>
        <div className="container mx-auto mb-52 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Products.map((product) => (
            <Link key={product.id} href={`/productid/${product.id}`}>
              <div className="w-[300px] h-[400px] border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col gap-3 justify-between bg-white">
                <Image
                  width={200}
                  height={200}
                  alt="img"
                  src={product.image}
                  className="w-[200px] h-[200px] mx-auto"
                />
                <div className="flex flex-col justify-between">
                  <p className="font-bold text-lg mb-8 flex items-start">
                    {product.title}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-x-1">
                      <p className="font-medium">Rating : </p>
                      <span className="text-slate-500 text-sm mt-1">
                        {product.rating.rate}
                      </span>
                    </div>
                    <p className="flex font-bold text-xl">
                      {"$"}
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
