import React, { useContext }  from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const { user, users, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const userRole = users.find(usr => usr.email === user.email)



  const handleLogout = () => {
    logOut()
        .then(() => {
            console.log('successfuly logout');
            toast.success('You have logged Out Successfully!!');
            navigate('/');
        })
        .catch(error => {
            console.error('error', error.message)
        })
}

  return (
      <div className='sticky top-5 p-10 relative bg-white h-[95vh] '>
          <h2>{ user.email}</h2>
          <ul class="list-none p-0 m-0 overflow-hidden">
              
                             <li className='p-3'>
                                 <NavLink to="/dashboard" class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                                     <i class="pi pi-home mr-2"></i>
                                     <span class="font-medium">Dashboard</span>
                                 </NavLink>
                             </li>
              {
                  userRole?.role === 'admin' ? <li className='p-3'>
                  <NavLink to='/dashboard/products' class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                      <i class="pi pi-shopping-bag mr-2"></i>
                      <span class="font-medium">Products</span>
                  </NavLink>
              </li> : ''
              }
              {
                  userRole?.role === 'saller' ?  <li className='p-3'>
                  <NavLink to='/dashboard/my-products' class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                      <i class="pi pi-shopping-bag mr-2"></i>
                      <span class="font-medium">My Products</span>
                  </NavLink>
              </li> : ''
              }
                            
              {
                  userRole?.role === 'admin' ?  <li className='p-3'>
                  <NavLink to='/dashboard/all-users' class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                      <i class="pi pi-users mr-2"></i>
                      <span class="font-medium">Users</span>
                  </NavLink>
              </li> : ''
                            }
              {
                  userRole?.role === 'buyer' ? <li className='p-3'>
                  <NavLink to='/dashboard/my-orders' class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                      <i class="pi pi-shopping-cart mr-2"></i>
                      <span class="font-medium">My Orders</span>
                  </NavLink>
              </li> : ''
                             }
              {
                  userRole?.role === 'saller' ? <li className='p-3'>
                  <NavLink to='/dashboard/my-buyers' class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                      <i class="pi pi-users mr-2"></i>
                      <span class="font-medium">My Buyers</span>
                  </NavLink>
              </li> : ''
                             }
                             <li >
                                 <button onClick={handleLogout} class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                                     <i class="pi pi-sign-out mr-2"></i>
                                     <span class="font-medium">Logout</span>
                                 </button>
                             </li>
                    
          </ul>
          
              <Link to='/' className='text-white'>
              <div className='absolute bottom-0 left-0 bg-black w-full p-5 text-center flex items-center gap-5 justify-center'> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
             <span>Home</span>
                </div>
             </Link>
      </div>
      
      
  );
};

export default Sidebar;