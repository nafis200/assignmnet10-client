
import React from 'react';
import Excarddetails from './Excarddetails';

const Excard = () => {
    const items = [

         {
            "id" : 1,
            "image": "https://i.postimg.cc/SNvw9VgN/aircraft-jet-landing-cloud-46148.jpg",
            "name" : "fly emiratrs",
            "available": "avalilable",
            "cost" : 1500,
            "button": "purchase now"
         },
         {
            "id" : 2,
            "image": "https://i.postimg.cc/R0c8jm4N/istockphoto-1502960058-2048x2048.jpg",
            "name" : "private car",
            "available": "avalilable",
            "cost" : 2000,
            "button": "Booking now"
         },
         { 
            "id" : 3,
            "image": "https://i.postimg.cc/1tsTSd3M/LT-471-LTZ-1471-Arriva-London-New-Routemaster-19522859218.jpg",
            "name" : "Shohag paribahan",
            "available": "avalilable",
            "cost" : 700,
            "button": "purchase now"
         },
         { 
            "id" : 4,
            "image": "https://i.postimg.cc/854YzbFG/pexels-photo-813011.jpg",
            "name" : "COSCO shipping",
            "available": "avalilable",
            "cost" : 700,
            "button": "Booking now"
         },
         { 
            "id" : 5,
            "image": "https://i.postimg.cc/KvwHjjY1/photo-2024-04-08-22-28-31.jpg",
            "name" : "Hotel nature",
            "available": "avalilable",
            "cost" : 1000,
            "button": "Booking now"
         },
         { 
            "id" : 6,
            "image": "https://i.postimg.cc/2SWXZYq2/photo-2024-04-08-22-34-59.jpg",
            "name" : "Hotel Occean",
            "available": "avalilable",
            "cost" : 1200,
            "button": "Booking now"
         },


    ]
    return (
        <div className='mt-10'>
             <h2 className="lg:text-2xl md:text-xl text-center font-bold">Our <span className='text-orange-400'>services</span> </h2>
             <p className='font-extralight text-center mt-5'>you can get best service from our company.you get bus ticket plane ticket hotel service as cheapest price.and we ensure you to give our best survice</p>

             <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
          {items.slice(0, 6).map((data, index) => (
            <Excarddetails key={data._id}
              data={data}
             
              index={index}
            ></Excarddetails>
          ))}
        </div>
        </div>
    );
};

export default Excard;