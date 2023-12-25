import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../../components/Heading';
const AdvertiseSection = () => {

    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            try {
                const res = await fetch('https://green-tech-it-server.vercel.app/advertise');
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })




    return (
        <div className='bg-background'>

      
        <div className='max-w-7xl mx-auto px-6 py-14'>
          <Heading>Advertisement Products</Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16'>

                {
                    advertise.slice(0,3).map(adv => <div key={adv._id} className="w-full relative">
                        <div className='bg-white relative w-full sm:h-[320px] h-[250px] p-10 flex items-center justify-center border overflow-hidden'>
                          <img className='w-full h-full hover:scale-110 transition duration-700 ease-in-out' src={adv.product.photo} alt="Products" />
                        </div>
                        <div
                            class="absolute top-5 left-5 bg-secondary px-2 rounded-sm"
                            >
                            <p class="text-white uppercase">{ adv.product?.category }</p>
                            </div>
                            <div className="">
            <Link to={`/products/sp/${adv.product._id}`}>
                <h2 className="sm:text-h4 text-md hover:text-primary transition duration-500 ease-out font-semibold my-5">{adv.product?.name.slice(0,40)}...</h2>
            </Link>
    

                <div>
                <h2 className='sm:text-h5 text-xs font-semibold'>Condition: <span className='font-semibold italic text-secondary'>{adv.product?.condition}</span></h2>
            <h2 className='sm:text-h5 text-xs font-semibold mt-2'>Price: <span className='font-semibold italic text-secondary'>{adv.product.resalePrice} BDT</span></h2>
        </div>
    </div>
                    </div>)
                }

            </div>
       
            </div>
            </div>
    );
};

export default AdvertiseSection;