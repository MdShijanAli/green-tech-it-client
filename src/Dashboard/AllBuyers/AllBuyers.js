import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../components/Loading/Loading';
import useTitle from '../../hoocks/useTitle';

const AllBuyers = () => {
    /*     const [buyers, setBuyers] = useState([]);
        useEffect(() => {
            fetch('https://green-tech-it-server.vercel.app/users')
                .then(res => res.json())
                .then(data => {
                    const showSallers = data.filter(saler => saler.check === false)
                    // console.log(showSallers)
    
                    setBuyers(showSallers)
                })
        }, []) */

    useTitle('All Buyers')

    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['sallers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://green-tech-it-server.vercel.app/users');
                const data = await res.json();
                const shwoBuyers = data.filter(buyer => buyer.role === "Buyer")
                return shwoBuyers;
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


        fetch(`https://green-tech-it-server.vercel.app/user/${user._id}`, {
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
            {
                buyers.length === 0 ? <h2 className='text-3xl font-semibold mt-10 text-center'>Here has not any Buyer</h2> :
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

export default AllBuyers;