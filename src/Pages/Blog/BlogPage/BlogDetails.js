import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
  const blogDetails = useLoaderData();
  const {name,photo,description,author,date,category} = blogDetails
  return (
    <div>
      <div>
        <div className='w-full h-[500px]'>
          <img className='w-full h-full' src={photo} alt="" />
        </div>


        <div class="mt-5">
          <div class="flex sm:flex-row flex-col gap-5 items-start">
            <p class="bg-gray-300 text-sm px-2 rounded-xl">Date: <span className='font-semibold'>{date}</span></p>
            <p class="bg-gray-300 text-sm px-2 rounded-xl">Author: <span class="font-semibold">{author }</span></p>
            <p class="bg-gray-300 text-sm px-2 rounded-xl">Category: <span class="font-semibold">{category }</span></p>
          </div>
          <div class="mt-10">
            <p class="lg:text-h1 text-h2 font-semibold">{name}</p>
          <p class="py-5 text-justify">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;