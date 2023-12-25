import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const BlogSidebar = () => {
  const { blogs } = useContext(AuthContext)
  
  const categories = blogs.map(blog => blog.category);


  return (
    <div>
       <form>
          <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
            <div className="flex-[1_0_0%]">
              <label for="hs-search-article-1" className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search</span></label>
              <input type="email" name="hs-search-article-1" id="hs-search-article-1" className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-primary focus:ring-primary" placeholder="Search" />
            </div>
            <div className="flex-[0_0_auto]">
              <Link className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-red-700" to="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </Link>
            </div>
          </div>
        </form>



        <div className="p-10 bg-slate-100 mt-10 rounded-md border">
           <div>
              <h1 className="text-h3 font-semibold">Categories</h1>
              <div className="border-2 w-[180px] mt-3 mb-5"></div>

              <div>
            <ul>
              {
                categories.map((ctg,i) => (
                  <li key={i} className="my-3 hover:text-primary">
                  <Link className="font-medium" to="/blog">{ctg} (6)</Link>
                </li>
                ))
              }
                 
            
                </ul>
              </div>

           <div className="mt-10">
              <h1 className="text-h3 font-semibold">Recent Posts</h1>
              <div className="border-2 w-[180px] mt-3 mb-5"></div>

            {
              blogs.slice(0,3).map(blog => (
                <div  className="sm:flex  items-center grid gap-5 my-5">
                <div className="xl:col-span-2 md:col-span-1 w-[110px] h-[110px]">
                  <img className="w-full h-full rounded-md" src={blog.photo} alt="" />
                </div>
                <div className=" py-2">
            <div className="flex gap-2 items-center">
                            <i className="pi pi-calendar text-sm" ></i>
                            <p className="hover:text-primary text-sm hover:underline transition duration-500 ease-in-out cursor-pointer">{blog.date}</p>
                  </div>
                  <Link to={`/blog/${blog._id}`}>
                            <h1 className="text-h4 mt-3 hover:text-primary  transition duration-500 ease-in-out">{blog.name.slice(0,20)}</h1>
                        </Link>
                </div>
          </div>
              ))
             }
           </div>

           <div className="mt-10">
            <h1 className="text-h3 font-semibold">Tages</h1>
              <div className="border-2 w-[180px] mt-3 mb-5"></div>

              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Mobile</button>
                <button className="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Laptop</button>
                <button className="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Smart TV</button>
                <button className="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Pendrive</button>
                <button className="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Smart Watch</button>
                <button className="px-5 py-2 border bg-white hover:bg-primary transition duration-500 ease-in-out hover:text-white rounded-sm">Shooes</button>
              </div>
           </div>
           </div>
        </div>
    </div>
  );
};

export default BlogSidebar;