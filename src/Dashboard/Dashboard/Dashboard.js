import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hoocks/useTitle';

const Dashboard = () => {

    useTitle('Dashboard')

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await fetch('https://assignment-12-server-neon.vercel.app/users');
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })






    const handleDelete = user => {


        fetch(`https://assignment-12-server-neon.vercel.app/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User Deleted Successfully')
                    refetch();
                }
            })
    }


    return (
        <div>
            <h2 className='text-3xl text-center font-semibold  mt-10'>All Users</h2>
            {
                users.length === 0 ? <h2 className='text-3xl font-semibold mt-10 text-center'>Here has not any User</h2> :
                    <div className="overflow-x-auto w-5/6 mx-auto my-10">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>
                                        Avater
                                    </th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    users.map(user => <tr key={user._id}>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-circle w-16 h-16">
                                                        <img src={user?.photoURL} alt="Avater" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {user?.displayName}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{user?.email}</span>
                                        </td>
                                        <td>{user?.role}</td>
                                        <th>
                                            <button onClick={() => handleDelete(user)} className="btn btn-error btn-sm">Delete</button>
                                        </th>
                                    </tr>)
                                }


                            </tbody>


                        </table>
                    </div>
            }

        </div>
    );
};

export default Dashboard;