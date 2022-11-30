import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseSection = () => {

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            try {
                const res = await fetch('https://assignment-12-server-neon.vercel.app/advertise');
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    return (
        <div>
            <h1 className=' className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl mt-20'>Advertisement Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-20 lg:m-20'>

                {
                    advertise.map(adv => <div key={adv._id} className="card w-full shadow-xl">
                        <figure><img className='w-full h-96' src={adv.product.photo} alt="Products" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{adv.product?.name}</h2>
                            <h2 className='text-xl mt-10'>Seller Name: <span className='font-semibold italic text-blue-900'>{adv.product.salerName}</span></h2>
                            <h2 className='text-xl'>Condition: <span className='font-semibold italic text-blue-900'>{adv.product?.condition}</span></h2>
                            <h2 className='text-xl'>Brand: <span className='font-semibold italic text-blue-900'>{adv.product?.category}</span></h2>
                            <h2 className='text-xl'>Sale Price: <span className='font-semibold italic text-blue-900'>{adv.product.resalePrice} BDT</span></h2>

                            <Link to={`/products/sp/${adv.product._id}`}>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">See Details</button>
                                </div>
                            </Link>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AdvertiseSection;