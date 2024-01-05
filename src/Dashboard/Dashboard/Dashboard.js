import React, {useContext} from 'react';
import Loading from '../../components/Loading/Loading';
import useTitle from '../../hoocks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {
    const {user, loading, products, users } = useContext(AuthContext)
    const userRole = users.find(usr => usr.email === user.email)
    useTitle('Dashboard')

    const saller = users.filter(usr=>usr.role === "saller")
    const buyer = users.filter(usr => usr.role === "buyer")

    const myProducts = products.filter(product=> product.email === user.email)
    

    const { data: myBuyers = [] } = useQuery({
        queryKey: ['myBuyers'],
        queryFn: async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_apiUrl}/bookings`);
                const data = await res.json();
                const myBuyer = data.filter(myb => myb.salerEmail === user?.email);
                return myBuyer;
            }
            catch (error) {
                console.log(error);
            }
        }
    })
    const { data: orders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_apiUrl}/bookings`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    const { data: myBookings = [] } = useQuery({
        queryKey: ['myBookings'],
        queryFn: async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_apiUrl}/bookings`);
                const data = await res.json();
                const myBuyer = data.filter(myb => myb.email === user?.email);
                return myBuyer;
            }
            catch (error) {
                console.log(error);
            }
        }
    })






    return (
        <div>
            
<div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">

                    {
                    userRole?.role === 'saller' ?    <div className="col-span-1 bg-white rounded-lg">
                        <div className="shadow-xl p-3 border rounded-lg">
                        <div className="flex justify-between mb-3">
                            <div>
                                <span className="block text-sm font-medium mb-3">My Orders</span>
                                    <div className="font-medium text-xl">{ myBuyers.length}</div>
                            </div>
                            <div className="flex items-center justify-center bg-blue-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-sm">since last visit</span>
                        </div>
                        </div>: ''
        }
                    {
                    userRole?.role === 'admin' ?    <div className="col-span-1 bg-white rounded-lg">
                        <div className="shadow-xl p-3 border rounded-lg">
                        <div className="flex justify-between mb-3">
                            <div>
                                <span className="block text-sm font-medium mb-3">Total Orders</span>
                                    <div className="font-medium text-xl">{ orders.length}</div>
                            </div>
                            <div className="flex items-center justify-center bg-blue-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-sm">since last visit</span>
                        </div>
                        </div>: ''
        }
                    {
                    userRole?.role === 'buyer' ? <div className="col-span-1 bg-white rounded-lg">
                        <div className="shadow-xl p-3 border rounded-lg">
                        <div className="flex justify-between mb-3">
                            <div>
                                <span className="block text-sm font-medium mb-3">My Bookings</span>
                                    <div className="font-medium text-xl">{ myBookings.length}</div>
                            </div>
                            <div className="flex items-center justify-center bg-blue-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">24 new </span>
                        <span className="text-sm">since last visit</span>
                            </div>
                      </div>            : ''
        }
              
                {
                    userRole?.role  === 'admin' ?    <div className="col-span-1 bg-white rounded-lg">
                    <div className="shadow-xl p-3 border rounded-lg">
                        <div className="flex justify-between mb-3">
                            <div>
                                <span className="block text-sm font-medium mb-3">Total Products</span>
                                            <div className="font-medium text-xl">{ products.length}</div>
                            </div>
                            <div className="flex items-center justify-center bg-orange-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-bag text-orange-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">3 new </span>
                        <span className="text-sm">since last week</span>
                    </div>
                </div> : ''
                }
                {
                    userRole?.role  === 'saller' ?    <div className="col-span-1 bg-white rounded-lg">
                    <div className="shadow-xl p-3 border rounded-lg">
                        <div className="flex justify-between mb-3">
                            <div>
                                <span className="block text-sm font-medium mb-3">My Products</span>
                                            <div className="font-medium text-xl">{ myProducts.length}</div>
                            </div>
                            <div className="flex items-center justify-center bg-orange-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-shopping-bag text-orange-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">3 new </span>
                        <span className="text-sm">since last week</span>
                    </div>
                </div> : ''
                }
 
                {
                    userRole?.role === 'admin' ? <div className="col-span-1 bg-white rounded-lg">
                    <div className="shadow-xl p-3 border ">
                        <div className="flex justify-between mb-3">
                            <div>
                                <span className="block text-sm font-medium mb-3">Sellers</span>
                                            <div className="font-medium text-xl">{saller.length }</div>
                            </div>
                            <div className="flex items-center justify-center bg-cyan-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-users text-cyan-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">1  </span>
                        <span className="text-sm">newly registered</span>
                    </div>
                </div> : ''
    }
                {
                    userRole?.role === 'admin' ? <div className="col-span-1 bg-white rounded-lg">
                    <div className="shadow-xl p-3 border rounded-lg">
                        <div className="flex justify-between mb-3">
                            <div>
                                <span className="block text-sm font-medium mb-3">Buyers</span>
                                            <div className="font-medium text-xl">{buyer.length }</div>
                            </div>
                            <div className="flex items-center justify-center bg-purple-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                                <i className="pi pi-users text-purple-500 text-xl"></i>
                            </div>
                        </div>
                        <span className="text-green-500 font-medium">1 </span>
                        <span className="text-sm">newly registered</span>
                    </div>
                </div> : ''
    }
</div>
    
       </div>
    );
};

export default Dashboard;