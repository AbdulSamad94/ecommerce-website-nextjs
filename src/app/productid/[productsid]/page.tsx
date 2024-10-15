import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { fetchProductById } from "@/app/util/api";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
};

type ProductPageProps = {
  params: {
    productsid: string;
  };
};

const page = async ({ params }: ProductPageProps) => {
  const { productsid } = params;
  const product: Product = await fetchProductById(productsid);
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
        <div className="flex justify-between mt-12">
          <div className="flex gap-x-10">
            {/* leftside */}
            <div>
              <div className="border border-orange-600 py-3 px-5 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div>
              <div className="border border-orange-600 py-5 px-10 w-[450px] rounded-lg">
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
          <div> {/* rightside */}</div>
        </div>
      </div>
    </div>
  );
};

export default page;
