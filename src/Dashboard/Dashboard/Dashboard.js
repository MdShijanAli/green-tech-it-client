import React, {useContext} from 'react';
import Loading from '../../components/Loading/Loading';
import useTitle from '../../hoocks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Dashboard = () => {
const {loading,products,users} = useContext(AuthContext)
    useTitle('Dashboard')

    const saller = users.filter(usr=>usr.role === "saller")
    const buyer = users.filter(usr=>usr.role === "buyer")



    if (loading) {
        return <Loading></Loading>
    }




    return (
        <div>
            
<div className="grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
    <div className="col-span-1 bg-white rounded-lg">
        <div className="shadow-xl p-3 border rounded-lg">
            <div className="flex justify-between mb-3">
                <div>
                    <span className="block text-sm font-medium mb-3">Orders</span>
                    <div className="font-medium text-xl">152</div>
                </div>
                <div className="flex items-center justify-center bg-blue-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">24 new </span>
            <span className="text-sm">since last visit</span>
        </div>
    </div>
    <div className="col-span-1 bg-white rounded-lg">
        <div className="shadow-xl p-3 border rounded-lg">
            <div className="flex justify-between mb-3">
                <div>
                    <span className="block text-sm font-medium mb-3">Products</span>
                                <div className="font-medium text-xl">{ products.length}</div>
                </div>
                <div className="flex items-center justify-center bg-orange-100 rounded-md" style={{ width: '2.5rem', height: '2.5rem' }}>
                    <i className="pi pi-shopping-bag text-orange-500 text-xl"></i>
                </div>
            </div>
            <span className="text-green-500 font-medium">3 new </span>
            <span className="text-sm">since last week</span>
        </div>
    </div>
    <div className="col-span-1 bg-white rounded-lg">
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
    </div>
    <div className="col-span-1 bg-white rounded-lg">
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
    </div>
</div>
    
       </div>
    );
};

export default Dashboard;