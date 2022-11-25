import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllProducts = () => {
    const products = useLoaderData();
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 m-5 md:m-20'>
                {
                    products.map(product => <div key={product._id} className="card w-full shadow-xl">
                        <figure><img className='w-full h-96' src={product.photo} alt="Products" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <h2 className='text-xl'>Seller Name: <span className='font-semibold italic text-blue-900'>{product.salerName}</span></h2>
                            <h2 className='text-xl'>Sale Price: <span className='font-semibold italic text-blue-900'>{product.resalePrice} BDT</span></h2>

                            <Link to={`/products/sp/${product._id}`}>
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

export default AllProducts;