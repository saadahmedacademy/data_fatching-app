'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { BackgroundGradient } from './ui/background-gradient';
import { IoMdStar } from 'react-icons/io';
const ClientComponent = () => {
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

  const [ClientSideData, setClientSideData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const dataJson = await response.json();
        console.log(dataJson);  
        setClientSideData(dataJson);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <p className="text-center text-2xl">Loading...</p>;
  }

  return (
    <main className='container mx-auto px-4'>
       
       <section className="flex flex-col w-full">
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
           This is the client side component data,
           to see the dynapic route click on the project cards <br/>
           and the dynamic route.
          </p>
          </section>  

    <section className="w-full mt-8 px-2 grid place-items-center gap-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {ClientSideData.map((data) => (
        <BackgroundGradient 
         key={data.id} className=''>
          <div className=" rounded-[22px] w-[300px] h-[560px] px-3 py-2 bg-white dark:bg-zinc-900">
            <div className="w-full h-[300px]">
              <Image
                src={`${data.image}`}
                alt={data.title}
                height={400}
                width={400}
                className="object-cover object-center w-full h-full rounded-md"
                priority={true} 
              />
            </div>
            <div className='w-full h-20 px-2 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                <p>{data.rating.rate}</p>
                <IoMdStar className='text-yellow-400 text-xl'/>

                </div>
                <p className='text-green-500 py-1 px-4 border border-green-500 rounded-full'>{data.rating.count}</p>
            </div>
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {data.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 overflow-ellipsis overflow-hidden h-20">
              {data.description}
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Buy now </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                ${data.price}
              </span>
            </button>
           
          </div>
        </BackgroundGradient >
      ))}
    </section>
    </main>
  );
};

export default ClientComponent;
