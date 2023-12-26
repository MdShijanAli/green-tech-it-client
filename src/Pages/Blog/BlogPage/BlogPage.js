import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BlogPage = () => {
    const { blogs } = useContext(AuthContext)
    console.log('blogs', blogs)
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
            {
                blogs.map(blog => (
                    <div  key={blog._id} className=''>
                    <div className="h-[250px] overflow-hidden rounded-md">
                        <img className="h-full w-full rounded-md hover:scale-110 transition duration-500 ease-in-out" src={blog.photo} alt="" />
                    </div>
                   <div className="mt-5">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <i className="pi pi-calendar text-sm sm:text-base"></i>
                                <p className="hover:text-primary text-sm sm:text-base hover:underline transition duration-500 ease-in-out cursor-pointer">{blog.date}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i className="pi pi-user text-sm sm:text-base"></i>
                                <p className="hover:text-primary text-sm sm:text-base hover:underline transition duration-500 ease-in-out cursor-pointer">{ blog.author }</p>
                            </div>
                        </div>
         
                        <div>
                            <Link to={`/blog/${blog._id}`}>
                                <h1 className="md:text-h2 text-xl font-semibold my-5 hover:text-primary  transition duration-500 ease-in-out">{ blog.name.slice(0,50) }</h1>
                            </Link>
                            <div className="py-5">
                             <Link className="sm:px-6 px-5 sm:py-3 py-2.5 rounded-sm bg-secondary hover:bg-primary transition duration-500 ease-in-out text-white" to={`/blog/${blog._id}`}>Read More</Link>
                            </div>
                        </div>
                   </div>
                 </div>
                ))
       }
       </div>
    );
};

export default BlogPage;