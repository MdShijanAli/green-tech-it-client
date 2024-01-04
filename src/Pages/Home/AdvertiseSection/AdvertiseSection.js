import { useQuery } from '@tanstack/react-query';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../../components/Heading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const AdvertiseSection = () => {
const {products} = useContext(AuthContext)
    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_apiUrl}/advertise`);
                console.log(res)
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    const advertiseProduct = advertise.map(adv => adv.product);

    const existingAdvertiseProducts = products.filter(pro =>
        advertiseProduct.some(adv => adv._id === pro._id)
    );
    
    console.log('final advertise product', existingAdvertiseProducts)




    return (
        <div className='bg-background'>

      
        <div className='max-w-7xl mx-auto px-6 py-14'>
          <Heading>Advertisement Products</Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16'>

                {
                    existingAdvertiseProducts.slice(0,3).map(adv => <div key={adv._id} className="w-full relative">
                        <div className='bg-white relative w-full sm:h-[320px] h-[250px] p-10 flex items-center justify-center border overflow-hidden'>
                          <img className='w-full h-full hover:scale-110 transition duration-700 ease-in-out' src={adv?.photo} alt="Products" />
                        </div>
                        <div
                            class="absolute top-5 left-5 bg-secondary px-2 rounded-sm"
                            >
                            <p class="text-white uppercase">{ adv?.category }</p>
                            </div>
                            <div className="">
            <Link to={`/products/sp/${adv._id}`}>
                <h2 className="sm:text-h4 text-md hover:text-primary transition duration-500 ease-out font-semibold my-5">{adv?.name.slice(0,40)}...</h2>
            </Link>
    

                <div>
                <h2 className='sm:text-h5 text-xs font-semibold'>Condition: <span className='font-semibold italic text-secondary'>{adv?.condition}</span></h2>
            <h2 className='sm:text-h5 text-xs font-semibold mt-2'>Price: <span className='font-semibold italic text-secondary'>{adv?.resalePrice} BDT</span></h2>
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