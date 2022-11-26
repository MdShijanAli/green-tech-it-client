import React from 'react';
import { NavLink } from 'react-router-dom';
// import './BlogSideBar.css';

const BlogSidebar = ({ blg }) => {
    console.log('blg', blg)
    return (
        <div>
            <div className='mx-5  bg-white navlink'>
                <NavLink to={`/blog/${blg._id}`}>
                    <h3 className='px-5 cursor-pointer font-bold text-lg hover:text-red-700 py-4'>{blg.name}</h3>
                </NavLink>
            </div>


        </div>
    );
};

export default BlogSidebar;