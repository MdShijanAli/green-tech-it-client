import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Header.css'



const Header = () => {

    const [hidden, setHidden] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    console.log('header user', user)
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('successfuly logout');
                toast.success('You have logged Out Successfully!!')
            })
            .catch(error => {
                console.error('error', error.message)
            })
    }


    const userDash = <React.Fragment>
        {
            hidden && <div className='grid md:justify-end'>
                {
                    user?.uid && <div className="z-50 mt-6 md:mt-0 grid w-full mr-24 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-md font-semibold text-gray-900 dark:text-white">{user?.displayName}</span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                        </div>
                        <ul className="py-1" aria-labelledby="user-menu-button">
                            <li>
                                <Link to='/dashboard' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link to='/dashboard' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
                            </li>

                            <li>
                                <Link onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        }
    </React.Fragment>


    const menuItems = <React.Fragment>
        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white hover:text-indigo-200">
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className="text-white hover:text-indigo-200">
                <NavLink to='/products'>Products</NavLink>
            </li>
            <li className="text-white hover:text-indigo-200">
                <NavLink to='/blog'>Blog</NavLink>
            </li>

            <li className="text-white hover:text-indigo-200">
                <NavLink to='/contact'>Contact</NavLink>
            </li>


        </ul>
    </React.Fragment>

    return (
        <div>
            <nav className="w-full bg-[#004767] shadow sticky top-0 z-50">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3  md:block">
                            <NavLink to='/'>
                                <img className='h-20' src={logo} alt="" />
                            </NavLink>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >



                            {menuItems}




                            <div className="mt-3 space-y-2 md:hidden ">
                                {
                                    user?.uid && <div>

                                        {
                                            user?.photoURL ? <>
                                                <img onClick={() => setHidden(!hidden)} className='w-16 h-16 rounded-full mr-2' alt='profilePhoto' src={user?.photoURL} ></img>
                                                {userDash}
                                            </> :
                                                <UserCircleIcon onClick={() => setHidden(!hidden)} title={user?.displayName} className='w-16 h-16 text-white mr-2'></UserCircleIcon>
                                        }
                                    </div>

                                }


                                {
                                    user?.uid ? <></> :
                                        <>
                                            <NavLink
                                                to='/login'
                                                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                            >
                                                Login
                                            </NavLink>
                                            <NavLink
                                                to='/register'
                                                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                            >
                                                Register
                                            </NavLink>
                                        </>
                                }

                            </div>
                        </div>
                    </div >
                    <div className="hidden md:flex">


                        {
                            user?.uid && <div>
                                {
                                    user?.photoURL ? <img onClick={() => setHidden(!hidden)} className='w-16 h-16 rounded-full mr-2' alt='profilePhoto' src={user?.photoURL} ></img> : <UserCircleIcon onClick={() => setHidden(!hidden)} title={user?.displayName} className='w-16 h-16 text-white mr-2'></UserCircleIcon>
                                }


                            </div>


                        }


                        {
                            user?.uid ? <p></p> :
                                <>
                                    <NavLink
                                        to='/login'
                                        className="px-4 mr-2 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        to='/register'
                                        className="px-4 mr-2 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                    >
                                        Register
                                    </NavLink>
                                </>

                        }





                    </div>









                </div>

            </nav >
            <div className='hidden md:block'>
                {userDash}
            </div>
        </div>
    );
};

export default Header;