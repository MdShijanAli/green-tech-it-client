import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseSection = () => {

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/advertise');
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
            <h1 className='text-5xl my-20 font-semibold text-center'>Advertisement Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 m-5 md:m-20'>

                {
                    advertise.map(adv => <div key={adv._id} className="card w-full shadow-xl">
                        <figure><img className='w-full h-96' src={adv.product.photo} alt="Products" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"></h2>
                            <h2 className='text-xl'>Seller Name: <span className='font-semibold italic text-blue-900'>{adv.product.salerName}</span></h2>
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