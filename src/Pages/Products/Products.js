import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useTitle from '../../hoocks/useTitle';
import Header from '../../Shared/Header/Header';

const Products = () => {
    useTitle('Products')
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  bg-[#F2F2F2]">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>





                    <ul className="menu p-4 w-80 text-base-content">



                        <li><NavLink to='/products'>All Products</NavLink></li>

                        <li><NavLink to='/products/Asus'>Asus</NavLink></li>
                        <li><NavLink to='/products/hp'>HP</NavLink></li>
                        <li><NavLink to='/products/Macbook'>Macbook</NavLink></li>

                    </ul>





                </div>
            </div>
        </div>
    );
};

export default Products;