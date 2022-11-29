// import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);




    const [myBuyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => {
                const myBuyer = data.filter(myb => myb.salerEmail === user?.email);
                setBuyers(myBuyer)
            })
    }, [user?.email])


    return (
        <div>
            <h2 className='text-3xl text-center font-semibold  mt-10'>My Buyers</h2>

            {
                myBuyers.length === 0 ? <h2 className='text-3xl font-semibold mt-10 text-center'>You Have not any Buyers</h2> :


                    <div className="overflow-x-auto w-5/6 mx-auto my-10">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>
                                        Avater
                                    </th>
                                    <th>
                                        Buyer Name

                                    </th>
                                    <th>Email</th>
                                    <th>Location</th>
                                    <th>Phone Number</th>


                                </tr>
                            </thead>
                            <tbody>


                                {
                                    myBuyers.map(order => <tr key={order._id}>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={order?.buyerPhoto} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className="font-bold">{order?.buyerName}</div>

                                            </div>
                                        </td>
                                        <td>{order?.email}</td>
                                        <td>
                                            {order?.location}

                                        </td>
                                        <td>{order?.phone}</td>

                                    </tr>)
                                }


                            </tbody>



                        </table>
                    </div>
            }
        </div>
    );
};

export default MyBuyers;