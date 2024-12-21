"use client";
import React, { useEffect, useState } from 'react';

const ClientComponent = () => {
    interface productData {
        "id": number,
        "title":string,
        "price": number,
        "description": string,
        "category": string,
        "image":string,
        "rating": {
        "rate": number,
        "count": number
        }
        }
    const [ClientSideData, setClientSideData] = useState<productData[]>([]);
    
      async function gatData(){
        const data = await fetch('https://fakestoreapi.com/products')
        const dataJson = await data.json()
        console.log(dataJson)
        setClientSideData(dataJson)
       }

    useEffect(() => {
        gatData()
    }, []);
    
    return (
        <div className='container py-4 px-2 grid gap-4 lg:grid-col-3 md:grid-col-2 grid-col-1'>
            
            
        </div>
    );
};

export default ClientComponent;