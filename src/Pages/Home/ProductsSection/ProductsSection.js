import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://assignment-12-server-neon.vercel.app/products');
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
            <h1 className=' className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl mt-20'>All Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-5 lg:m-20'>

                {
                    products.slice(0, 3).map(product => <div key={product._id} className="card w-full shadow-xl">
                        <figure><img className='w-full h-96' src={product?.photo} alt="Products" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>

                            <h2 className='text-xl mt-10'>Seller Name: <span className='font-semibold italic text-blue-900'>{product?.salerName}</span></h2>
                            <h2 className='text-xl'>Condition: <span className='font-semibold italic text-blue-900'>{product?.condition}</span></h2>
                            <h2 className='text-xl'>Brand: <span className='font-semibold italic text-blue-900'>{product?.category}</span></h2>
                            <h2 className='text-xl'>Sale Price: <span className='font-semibold italic text-blue-900'>{product?.resalePrice} BDT</span></h2>

                            <Link to={`/products/sp/${product?._id}`}>
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

export default ProductsSection;