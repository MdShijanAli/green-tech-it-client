import React from 'react';

const ServiceTop = () => {


    const services = [
        {
            "id": 1,
            "img": 'https://i.pinimg.com/originals/95/15/d8/9515d851ab5fc0373d062a9bfce76915.jpg',
            "title": 'Smart Laptops',
            "description": 'You can find here best laptops'
        },
        {
            "id": 2,
            "img": 'https://cdn-icons-png.flaticon.com/512/2592/2592258.png',
            "title": 'Trusted security',
            "description": 'You can find here best laptops'
        },
        {
            "id": 3,
            "img": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bR2H43r_hyz0obf0at6qqaFrrPIapdoXwA&usqp=CAU',
            "title": 'Awards winners',
            "description": 'You can find here best laptops'
        },
        {
            "id": 4,
            "img": 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
            "title": 'Great experience',
            "description": 'You can find here best laptops'
        }
    ]


    return (
        <div className=''>

            <div className='max-w-7xl mx-auto px-6 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 py-20  gap-5 xl:-mt-40'>
                {
                    services.map(service => <div key={service.id} className='shadow-xl shadow-slate-500 bg-white p-10 z-50 '>
                        <div className=''>
                            <img className='w-32 h-32 mx-auto' src={service.img} alt="" />
                            <h1 className='text-blue-900 font-semibold text-xl my-5'>{service.title}</h1>
                            <p>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceTop;