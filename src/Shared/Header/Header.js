import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Header.css'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const Header = () => {
    const [visible, setVisible] = useState(false);
    const { user } = useContext(AuthContext);


    
    const customHeader = (
        <React.Fragment>
            <div className='w-[80px]'>
                <img src={logo} alt="" />
           </div>
        </React.Fragment>
    );

    return (
        <div>
      
      


        <nav id="mainNavbar" className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700shadow-md z-[99] w-full">
    <div className="max-w-7xl mx-auto px-6 flex  items-center justify-between ">
      <div className="flex items-center justify-between w-full py-2">
        <div className="lg:w-[100px] sm:w-[80px] w-[50px]">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-full w-full mr-3" alt="Logo" />
          </Link>
        </div>
  
        <div className="hidden lg:flex w-full justify-end" id="navbar-sticky">
          <ul
            className="flex lg:gap-8 lg:items-center flex-col lg:flex-row md:mt-0 p-4 md:p-0 mt-4 font-semibold text-black border border-gray-100 rounded-lg md:border-0">
                 <li>
            <NavLink to="/" className="hover:text-primary rounded ">Home</NavLink>
          </li>
                 <li>
            <NavLink to="/products" className="hover:text-primary rounded ">Products</NavLink>
          </li>
                 <li>
            <NavLink to="/blog" className="hover:text-primary rounded ">Blog</NavLink>
          </li>
                 <li>
            <NavLink to="/contact" className="hover:text-primary rounded ">Contact</NavLink>
          </li>
       
                {
                  user ?  
                  <li>
                                            <NavLink to="/dashboard">
                                            <p className=" flex items-center gap-2 hover:text-primary rounded cursor-pointer">
                    <i className='pi pi-user'></i>
                    Dashboard</p>
                 </NavLink>
                 </li>
                  : <li>
                  <NavLink to="/login" className=" px-3 flex items-center gap-2 hover:text-primary rounded ">
                  <i className='pi pi-user'></i>
  
                    Login</NavLink>
          </li>
        }
  
          </ul>
        </div>

                        

            <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} >
                            
                            <ul class="list-none p-0 m-0 overflow-hidden">
                            <li className='p-3'>
                                <NavLink to="/" class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Home</span>
                                </NavLink>
                            </li>
                            <li className='p-3'>
                                <NavLink to="/products" class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                                    <i class="pi pi-shopping-bag mr-2"></i>
                                    <span class="font-medium">Products</span>
                                </NavLink>
                            </li>
                            <li className='p-3'>
                                <NavLink to="/blog" class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                                    <i class="pi pi-slack mr-2"></i>
                                    <span class="font-medium">Blogs</span>
                                </NavLink>
                            </li>
                            <li className='p-3'>
                                <NavLink to="/contact" class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                                    <i class="pi pi-envelope mr-2"></i>
                                    <span class="font-medium">Contact</span>
                                </NavLink>
                            </li>
                          
                                {
                                    user? <li className='p-3'>
                                    <NavLink to="/dashboard" class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                                        <i class="pi pi-th-large mr-2"></i>
                                        <span class="font-medium">Dashboard</span>
                                    </NavLink>
                                    </li> :
                                        <li className='p-3'>
                                        <NavLink to="/Login" class="flex items-center cursor-pointer p-3 rounded-md text-surface-700 dark:text-surface-0/80 hover:bg-surface-100 dark:hover:bg-surface-700 duration-200 transition-colors">
                                            <i class="pi pi-user mr-2"></i>
                                            <span class="font-medium">Login</span>
                                        </NavLink>
                                    </li>
                            }
                            </ul>
                            
               
            </Sidebar>
            <Button icon="pi pi-align-justify text-xl" className='flex lg:hidden' onClick={() => setVisible(true)} />

      </div>

  
    </div>
  </nav>
  
     </div>
      
    );
};

export default Header;