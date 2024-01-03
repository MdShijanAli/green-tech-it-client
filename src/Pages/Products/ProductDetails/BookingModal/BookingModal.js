import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
// import { useQuery } from '@tanstack/react-query';


const BookingModal = ({ productDetails }) => {
    const { name, email: salerEmail, used, photo, resalePrice, salerName } = productDetails;

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();



    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.buyerName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const location = form.location.value;







        const booking = {
            buyerName,
            email,
            phone,
            productName: name,
            salerName,
            price: resalePrice,
            location,
            photo,
            used,
            buyerPhoto: user.photoURL,
            salerEmail
        }

        console.log(booking)



        fetch('https://green-tech-it-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('We have recived Your Booking');
                    // refetch();
                    navigate('/dashboard/my-orders')
                }
                else {
                    toast.error(data.message)
                }
            })


    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mt-5 mb-10">{name}</h3>
                    <form onSubmit={handleBooking}>

                        <input name='buyerName' type="text" defaultValue={user?.displayName}  disabled={user?.displayName ? true : false} className="input input-bordered input-secondary w-full my-1" placeholder='Enter Your Name' required />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered input-secondary w-full my-1" required />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-primary w-full my-1" required />
                        <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered input-primary w-full my-1" required />
                        <h2 className='text-xl my-2'>Price: {resalePrice} BDT</h2>
                        <br />
                        <input className='w-full btn btn-active mt-3' type="submit" value="Submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BookingModal;