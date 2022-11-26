import { ChatBubbleLeftIcon, EyeIcon, HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';

const SingleBlogDetails = ({ singleBlog }) => {
    console.log(singleBlog);
    const { author, comment, date, description, like, name, photo, view } = singleBlog;
    return (
        <div className='md:px-20 md:my-20'>
            <img className='rounded-l-3xl w-full' src={photo} alt="" />
            <h1 className='text-5xl my-5 font-semibold'>{name}</h1>
            <p className='mb-10 text-gray-600 font-semibold'>{description}</p>
            <p className='text-xl font-semibold'>Author: {author}</p>
            <p className='font-bold'>Published Date: {date}</p>

            <div className='flex justify-between mt-10'>
                <div className='flex items-center'>
                    <HeartIcon className='w-8 h-8 mr-2 text-red-700'></HeartIcon>
                    {like} Likes
                </div>
                <div className='flex items-center'>
                    <ChatBubbleLeftIcon className='w-8 h-8 mr-2 text-slate-900'></ChatBubbleLeftIcon>
                    {comment} Comments
                </div>
                <div className='flex items-center'>
                    <EyeIcon className='w-8 h-8 mr-2 '></EyeIcon>
                    {view} Views
                </div>
            </div>

        </div >
    );
};

export default SingleBlogDetails;