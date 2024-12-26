"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";
import Footer from "./Footer";

const ClientComponent = () => {
  interface ProductData {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    images: string[];
    thumbnail: string;
  }
  

  const [ClientSideData, setClientSideData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const dataJson = await response.json();
        setClientSideData(dataJson.products); 
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  
    getData();
  }, []);
  

  if (error) {
    return <p className="text-center text-red-500 text-xl">{error}</p>;
  }

  if (loading) {
    return (
      <div className="container mx-auto pb-8 grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="animate-pulse bg-gray-200 dark:bg-zinc-800 w-[300px] h-[600px] rounded-[22px]"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <>
    <main className="container mx-auto">
      <section className="flex py-4 px-4 flex-col w-full">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Client Side Data:
          </h1>
          <div
            style={{ borderBottom: "6px double yellow" }}
            className="h-1 w-[19rem] rounded"
          />
        </div>
        <p className="lg:w-1/2 my-4 w-full leading-relaxed text-white">
          This is the client side component data, to see the dynamic route click
          on the project cards and the dynamic route.
        </p>
      </section>

      <section className="w-full mt-8 px-2 pb-8 grid place-items-center gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {ClientSideData.map((data) => (
          <BackgroundGradient key={data.id} className="">
            <Link href={`/products/${encodeURIComponent(data.id)}`}>
              <div className="rounded-[22px] w-[300px] h-[600px] px-3 py-2 bg-white dark:bg-zinc-900">
                <div className="w-full h-[280px]">
                  <Image
                    src={data.images[0]}
                    alt={`Product image of ${data.title}`}
                    width={300}
                    height={300}
                    className="w-full h-full rounded-md"
                    priority={true}
                  />
                </div>
                <div className="w-full h-20 px-2 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <p>{data.rating}</p>
                    <IoMdStar className="text-yellow-400 text-xl" />
                  </div>
                  <p className="text-green-500 py-1 px-4 border border-green-500 rounded-full">
                    {data.stock}
                  </p>
                </div>
                <p className="overflow-ellipsis overflow-y-auto h-[80px] text-base sm:text-xl text-black mt-1 mb-2 dark:text-neutral-200 paratext">
                  {data.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 overflow-ellipsis overflow-y-auto h-[80px] paratext">
                  {data.description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    ${data.price}
                  </span>
                </button>
              </div>
            </Link>
          </BackgroundGradient>
        ))}
      </section>
      <Footer />
    </main>
    </>
  );
};

export default ClientComponent;
