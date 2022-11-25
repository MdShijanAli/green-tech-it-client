import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { name, photo, location, resalePrice, originalPrice, used, salerName } = productDetails;
    return (
        <div className="card w-3/4 mx-auto my-20 bg-base-100 shadow-xl">
            <figure><img className='w-1/2' src={photo} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-semibold mb-10">{name}</h2>
                <h2 className='text-xl font-semibold'>Used: <span className='italic text-blue-900'>{used}</span></h2>
                <h2 className='text-xl font-semibold'>Original Price: <span className='italic text-blue-900'>{originalPrice} BDT</span></h2>
                <h2 className='text-xl font-semibold'>Resale Price: <span className='italic text-blue-900'>{resalePrice} BDT</span> </h2>
                <h2 className='text-xl font-semibold'>Location: <span className='italic text-blue-900'>{location}</span> </h2>
                <h2 className='text-xl font-semibold'>Saler Name: <span className='italic text-blue-900'>{salerName}</span></h2>


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