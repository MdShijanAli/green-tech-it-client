import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../../components/Heading';
import Button from '../../../components/Button';
import axios from 'axios';

const CategorySection = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_apiUrl}/categories`)
            .then(res => {
            setCategories(res.data)
            })
            .catch(err => {
            console.error(err.messages)
        })
    }, [])
    return (
        <div className='max-w-7xl mx-auto px-6 py-14'>
            <Heading>All Categories</Heading>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16'>

                {
                    categories.map(category => <div key={category._id} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${category?.photo})` }} className="w-full sm:h-[300px] h-[250px] flex items-center justify-center bg-cover bg-no-repeat rounded-sm">
                        

                            <div>
                            <h2 className="text-h1 text-white uppercase text-center">{category.name}</h2>
                            <div className="text-center mt-4">
                                <Link to={`/products/${category.name}`}>
                                   <Button>See All</Button>
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