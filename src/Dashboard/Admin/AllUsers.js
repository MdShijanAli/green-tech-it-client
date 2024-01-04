import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading/Loading';
import useTitle from '../../hoocks/useTitle';
// import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AllUsers = () => {
   

    useTitle('All Sallers')
    const { data: sallers = [], isLoading, refetch } = useQuery({
        queryKey: ['sallers'],
        queryFn: async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_apiUrl}/users`);
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    }




    const handleDelete = user => {


        fetch(`${process.env.REACT_APP_apiUrl}/user/${user._id}`, {
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

            {
                sallers.length === 0 ? <h2 className='text-3xl font-semibold text-center'>Here has not any Saller</h2> :
                    <div className="overflow-x-auto">
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
                                    sallers.map(user => <tr key={user._id}>

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

export default AllUsers;