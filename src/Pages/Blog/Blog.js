import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import useTitle from '../../hoocks/useTitle';
import BlogPage from './BlogPage/BlogPage';
import BlogSidebar from './BlogPage/BlogSidebar/BlogSidebar';

const Blog = () => {
    const blogs = useLoaderData([]);
    // useTitle('Blog')
    return (
        <div className='grid md:grid-cols-4 md:mx-10 gap-10 lg:my-16'>
            <div>
                <div className='bg-gray-100 rounded-tr-3xl rounded-l-xl rounded-b-xl pb-10 mx-5 md:mx-0 my-10 md:my-0'>
                    <h2 className='text-2xl mb-10 font-semibold bg-red-700 text-white p-3 text-center rounded-tl-xl rounded-tr-3xl'>Latest Blogs</h2>

                    {
                        blogs.map(blg => <BlogSidebar key={blg._id} blg={blg}></BlogSidebar>)
                    }

                </div>

            </div>
            <div className='md:col-span-3 my-10 md:my-0'>
                <BlogPage blogs={blogs}></BlogPage>
            </div>
        </div>
    );
};

export default Blog;