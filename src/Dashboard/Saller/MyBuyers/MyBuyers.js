// import { useQuery } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hoocks/useTitle';

const MyBuyers = () => {
    const { user } = useContext(AuthContext);

    useTitle('My Buyers')


    const { data: myBuyers = [], isLoading } = useQuery({
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

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>

            {
                myBuyers.length === 0 ? <h2 className='text-3xl font-semibold mt-10 text-center'>You Have not any Buyers</h2> :


                    <div className="overflow-x-auto">
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