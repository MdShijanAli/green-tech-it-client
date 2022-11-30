import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hoocks/useTitle';
import BookingModal from './BookingModal/BookingModal';
// import { useQuery } from '@tanstack/react-query';
const ProductDetails = () => {
    const productDetails = useLoaderData();


    /* 
        const { data: productDetails = [], refetch } = useQuery({
            queryKey: ['productDetails'],
            queryFn: async ({ params }) => {
                const res = await fetch(`https://assignment-12-server-neon.vercel.app/product/${params.id}`)
                const data = await res.json();
                return data;
    
            }
    
    
        }) */
    const { name, photo, location, resalePrice, parchesDate, originalPrice, category, description, condition, used, salerName } = productDetails;

    useTitle(`${name}`)

    return (
        <div className="card w-3/4 mx-auto my-20 bg-base-100 shadow-xl">
            <figure><img className='w-1/2' src={photo} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold mb-10">{name}</h2>
                <h2 className='text-xl font-semibold'>Parches Year: <span className='italic text-blue-900'>{parchesDate}</span></h2>
                <h2 className='text-xl font-semibold'>Used: <span className='italic text-blue-900'>{used}</span></h2>
                <h2 className='text-xl font-semibold'>Location: <span className='italic text-blue-900'>{location}</span> </h2>
                <h2 className='text-xl font-semibold'>Saller Name: <span className='italic text-blue-900'>{salerName}</span></h2>
                <h2 className='text-xl font-semibold'>Brand: <span className='italic text-blue-900'>{category}</span></h2>
                <h2 className='text-xl font-semibold'>Condition: <span className='italic text-blue-900'>{condition}</span></h2>
                <h2 className='text-xl font-semibold'>Description: <span className='italic text-blue-900'>{description}</span></h2>
                <h2 className='text-xl font-semibold'>Original Price: <span className='italic text-blue-900'>{originalPrice} BDT</span></h2>
                <h2 className='text-xl font-semibold'>Resale Price: <span className='italic text-blue-900'>{resalePrice} BDT</span> </h2>


                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"

                    >Book Now</label>

                </div>
                <BookingModal productDetails={productDetails}></BookingModal>
            </div>
        </div>
    );
};

export default ProductDetails;