import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../../components/Heading';
import Button from '../../../components/Button';

const BlogSection = () => {
    const [blogss, setBlogss] = useState([]);

    useEffect(() => {
        fetch('https://green-tech-it-server.vercel.app/home-blogs')
            .then(res => res.json())
            .then(data => setBlogss(data))
            .catch(err => {
                console.error(err.messages)
            })
    }, [])

    console.log(blogss);
    return (
        <div>
            <div className='max-w-7xl mx-auto px-6 py-10'>
                <Heading>Latest Blogs</Heading>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
            {
                blogss.map(blg => <div key={blg.id} className="overflow-hidden my-10  bg-white rounded shadow">
                    <div className="p-5">
                        <div className="relative">
                            <Link to={`/blog/${blg._id}`} className="block aspect-w-4 aspect-h-3">
                                <img className="object-cover w-full h-52" src={blg?.photo} alt="" />
                            </Link>

                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-secondary rounded-full"> {blg?.category} </span>
                            </div>
                        </div>
                        <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> {blg?.date} </span>
                        <p className="mt-5 text-h4 font-semibold">
                            <Link to={`/blog/${blg._id}`} className="text-black">{blg?.name} </Link>
                        </p>
                        <p className="mt-4 text-base text-gray-600">{blg?.description.slice(0, 100)}...</p>
                        <Link to={`/blog/${blg._id}`} className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-secondary transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            Continue Reading
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>)
            }
                </div>
                
                <div className='text-center'>
                    <Link to='/blog' >
                        <Button>View All</Button>
                        </Link>
                    </div>
            </div>
      </div>
    );
};

export default BlogSection;