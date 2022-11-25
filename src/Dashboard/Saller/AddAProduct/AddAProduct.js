import React from 'react';

const AddAProduct = () => {
    return (
        <div >
            <div className="bg-indigo-50">
                <form className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                    <div className="bg-white shadow-lg rounded  md:w-3/4 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                            Add Your Product
                        </p>




                        <div className="mt-6 w-full">
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Name{" "}
                            </label>
                            <input name='name' id="name" aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: Md Shijan Ali " required />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="photoURL" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Select Image{" "}
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Email{" "}
                            </label>
                            <input name='email' id="email" aria-labelledby="email" type="email" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2" placeholder="e.g: john@gmail.com " required />
                        </div>




                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAProduct;