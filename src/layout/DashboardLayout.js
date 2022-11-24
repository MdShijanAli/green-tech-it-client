import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('successfuly logout');
                toast.success('You have logged Out Successfully!!');
                navigate('/')
            })
            .catch(error => {
                console.error('error', error.message)
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to='/dashboard'>All Users</Link></li>

                        <li><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/my-products'>My Products</Link></li>
                        <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                        <li><Link to='/dashboard/add-a-product'>Add Product</Link></li>
                        <li><Link to='/dashboard/my-buyers'>My Buyers</Link></li>
                        <li><Link onClick={handleLogout} >Logout</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;