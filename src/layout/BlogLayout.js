import React from 'react';
import { Outlet } from 'react-router-dom';
import BlogSidebar from '../components/BlogSidebar';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const BlogLayout = () => {
  return (
    <div>
      <Header />
      <div className='max-w-7xl mx-auto px-6 py-20'>
          <div className='grid md:grid-cols-3 sm:grid-sols-2 gap-8'>
              <div className='xl:col-span-2 md:col-span-3 sm:col-span-2 '>
                <Outlet />
              </div>
             <div className='md:col-span-3 xl:col-span-1 sm:col-span-2'>
                <BlogSidebar />
              </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;