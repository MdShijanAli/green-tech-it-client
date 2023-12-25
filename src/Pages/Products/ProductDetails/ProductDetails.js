import React,{useState,useEffect} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hoocks/useTitle';
import BookingModal from './BookingModal/BookingModal';
import Button from '../../../components/Button';
import { useQuery } from '@tanstack/react-query';
import Heading from '../../../components/Heading';
import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
const ProductDetails = () => {
    const productDetails = useLoaderData();

    const { name, photo, location, resalePrice, parchesDate, originalPrice, category, description, condition, used } = productDetails;

    useTitle(`${name}`)

    // const [products, setProducts] = useState([])
    const [featureProducts, setFeaturesProducts] = useState([])

    useEffect(() => {
        axios.get('https://green-tech-it-server.vercel.app/products')
            .then(res => {
           const filterProducts = res.data.filter(product => product.category === category);
           setFeaturesProducts(filterProducts)
            })
            .catch(err => {
            console.log(err.message)
        })
    }, [category])





    return (
     

 
       <div>
        <div className="max-w-7xl mx-auto px-6 py-20">
     
           <div className="grid md:grid-cols-2 gap-10">
           <div>
             <div className="border-2 rounded-md md:h-[550px] sm:h-[500px] h-[300px] p-10 w-full col-span-1">
                    <img className="w-full h-full rounded-md" src={photo} alt=""  />
              </div>
           </div>
   
             <div>
               <h2 className="md:text-h2 sm:text-2xl text-md font-medium leading-7">{name}</h2>
               <h2 className="md:text-h3 sm:text-2xl text-md mt-5">Original Price <span className='font-semibold'>${originalPrice}</span> </h2>
               <h2 className="md:text-h3 sm:text-2xl text-md">Sale Price <span className='font-semibold'>${resalePrice}</span> </h2>

   

               {/* <div className="border my-10"></div> */}

                        <h2 className='md:text-h3 sm:text-2xl text-md font-semibold underline mt-10'>Details</h2>
                        

                        <div className='mt-5'>
                        <h2 className='md:text-h3 sm:text-2xl text-md'>Purches Year: <span className='font-semibold'>{parchesDate }</span></h2>
                        <h2 className='md:text-h3 sm:text-2xl text-md'>Used: <span className='font-semibold'>{used }</span></h2>
                        <h2 className='md:text-h3 sm:text-2xl text-md'>Condition: <span className='font-semibold'>{condition }</span></h2>
                        <h2 className='md:text-h3 sm:text-2xl text-md'>Location: <span className='font-semibold'>{location }</span></h2>
                        <h2 className='md:text-h3 sm:text-2xl text-md'>Brand: <span className='font-semibold'>{category }</span></h2>
    
                        <p className="text-justify text-sm sm:text-base tracking-wider leading-7 mt-5">{ description }</p>
                        </div>
                        
                        <div className="mt-10 text-right">
                            <label htmlFor="booking-modal" className='sm:px-10 px-8 py-2 sm:py-3 bg-primary hover:bg-secondary transition duration-500 ease-in-out text-white font-semibold rounded-sm'>
                                Book Now
                         </label>

                        </div>
                     <BookingModal productDetails={productDetails}></BookingModal>
        
    
             </div>
     
           </div>
            </div>
            



            <div>
                <div className='max-w-7xl  mx-auto px-6 pb-20 pt-10'>
                    <Heading>More <mark>{category }</mark> Laptops</Heading>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16'>

                            {
                                featureProducts.slice(0, 3).map(product => <div key={product._id} className="w-full relative">
                                <div className='relative w-full sm:h-[320px] h-[250px] p-10 flex items-center justify-center border overflow-hidden'>
                                  <img className='w-full h-full bg-contain hover:scale-110 transition duration-700 ease-in-out' src={product.photo} alt="Products" />
                                </div>
                                <div
                                    class="absolute top-5 left-5 bg-secondary px-2 rounded-sm"
                                    >
                                    <p class="text-white uppercase">{ product?.category }</p>
                                    </div>
                                    <div className="">
                                            <Link to={`/products/sp/${product._id}`}>
                                                <h2 className="sm:text-h4 text-md hover:text-primary transition duration-500 ease-out font-semibold my-5">{product?.name.slice(0,40)}...</h2>
                                            </Link>
                                    
            
                                                <div>
                                                <h2 className='sm:text-h5 text-xs font-semibold'>Condition: <span className='font-semibold italic text-secondary'>{product?.condition}</span></h2>
                                            <h2 className='sm:text-h5 text-xs font-semibold mt-2'>Price: <span className='font-semibold italic text-secondary'>{product.resalePrice} BDT</span></h2>
                                        </div>
                                    </div>
                            </div>)
                            }

</div>
                </div>
            </div>
        </div>
 
           
    );
};

export default ProductDetails;