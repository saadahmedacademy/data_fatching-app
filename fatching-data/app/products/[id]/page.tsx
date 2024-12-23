"use client";

import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { useEffect, useState } from "react";

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetail = ({ params }: { params: { id: number } }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const dataJson: ProductData = await response.json();
        setSelectedProduct(dataJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  
    getData();
  }, [params.id]);
  
  if (loading) {
    return <p className="text-center text-2xl">Loading...</p>;
  }

  if (!selectedProduct) {
    return (
      <p className="text-center relative top-48 bottom-52">
        No product found.
      </p>
    );
  }

  return (
    <section className="text-white body-font">
      <Spotlight
        className="-top-40 left-0 md:left-[28rem] md:-top-[2rem]"
        fill="white"
      />
      <div className="container relative z-50 mx-auto flex px-5 py-10 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-4 object-cover object-center rounded-lg"
          alt={selectedProduct.title}
          src={selectedProduct.image}
          width={700}
          height={300}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 text-white">
            {selectedProduct.title}
          </h1>
          <div
            style={{ borderBottom: "4px double yellow", marginTop: "5px" }}
          />
          <p className="mb-8 text-xl leading-relaxed">
            {selectedProduct.description}
          </p>
          <p className="text-xl font-semibold">${selectedProduct.price}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
