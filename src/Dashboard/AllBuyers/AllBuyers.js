import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    /*     const [buyers, setBuyers] = useState([]);
        useEffect(() => {
            fetch('http://localhost:5000/users')
                .then(res => res.json())
                .then(data => {
                    const showSallers = data.filter(saler => saler.check === false)
                    // console.log(showSallers)
    
                    setBuyers(showSallers)
                })
        }, []) */



    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['sallers'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/users');
                const data = await res.json();
                const shwoBuyers = data.filter(saler => saler.check === false)
                return shwoBuyers;
            }
            catch (error) {
                console.log(error);
            }
        }
    })



    const handleDelete = user => {


        fetch(`http://localhost:5000/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Deleted Successfully')
                    refetch();
                }
            })
    }




    return (
        <div>
            <h2 className='text-3xl text-center font-semibold  mt-10'>All Buyers</h2>

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
                            buyers.map(user => <tr key={user._id}>

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
                                <td>{user?.check === true ? 'Saller' : 'Buyer'}</td>
                                <th>
                                    <button onClick={() => handleDelete(user)} className="btn btn-error btn-sm">Delete</button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AllBuyers;