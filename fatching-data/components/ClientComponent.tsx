"use client";
import React, { useEffect, useState } from 'react';

const ClientComponent = () => {
    
    const [ClientSideData, setClientSideData] = useState([]);
    
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
        <div className='container py-4 px-2 lg:grid grid-col-3 md:grid-col-2 grid-col-1'>
            
            
        </div>
    );
};

export default ClientComponent;