import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className='mt-96'>
            <h1 className=' className="text-3xl font-bold leading-tight text-center text-black sm:text-4xl lg:text-5xl my-20'>All Categories</h1>
            <div className=' grid grid-cols-3 gap-10 w-5/6 mx-auto'>

                {
                    categories.map(category => <div key={category._id} className="card w-full bg-base-100 shadow-xl image-full">
                        <figure><img src={category.photo} alt="category" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl  justify-center mt-28">{category.name}</h2>
                            <div className="card-actions justify-center mt-4">
                                <Link to={`/products/${category.name}`}>
                                    <button className="btn btn-primary">See All</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default CategorySection;