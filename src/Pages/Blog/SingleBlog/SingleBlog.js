import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogSidebar from '../BlogPage/BlogSidebar/BlogSidebar';
// import useTitle from '../../../hoocks/useTitle';
import SingleBlogDetails from '../SingleBlogDetails/SingleBlogDetails';

const SingleBlog = () => {

    const [blogs, setBlogss] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-phi.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogss(data))

    }, [])

    const singleBlog = useLoaderData();
    // useTitle(`${singleBlog?.name}`)
    return (
        <div className='md:grid md:grid-cols-4 md:mx-10 gap-10 items-center'>
            <div>
                <div className='bg-gray-100 rounded-tr-3xl rounded-l-xl rounded-b-xl pb-10 my-10 lg:my-16 mx-5 md:mx-0'>
                    <h2 className='text-2xl mb-10 font-semibold bg-red-700 text-white p-3 text-center rounded-tl-xl rounded-tr-3xl'>Latest Blogs</h2>

                    {
                        blogs.map(blg => <BlogSidebar key={blg._id} blg={blg}></BlogSidebar>)
                    }

                </div>

            </div>
            <div className='md:col-span-3 my-20 md:my-0 mx-5 md:mx-0'>
                <SingleBlogDetails singleBlog={singleBlog}></SingleBlogDetails>
            </div>
        </div>
    );
};

export default SingleBlog;