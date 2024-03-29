import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hoocks/useTitle';

const AddAProduct = () => {
    useTitle('Add a Product')
    const categories = useLoaderData();
    const { user, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const used = form.used.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const category = form.category.value;
        const image = form.image.files[0];
        const salerName = form.salerName.value;
        const description = form.description.value;
        const condition = form.condition.value;
        const parchesDate = form.parchesDate.value;





        // console.log(product);


        const formData = new FormData()
        formData.append('image', image)

        const url = 'https://api.imgbb.com/1/upload?key=c993754e5e7bdf8ca9412defbbd79642'
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {

                if (imageData.success) {

                    const product = {
                        salerName,
                        category,
                        originalPrice,
                        resalePrice,
                        location,
                        used,
                        photo: imageData.data.url,
                        name,
                        email: user?.email,
                        description,
                        condition,
                        parchesDate
                    }
                    // console.log(userInfo)
                    // save doctor information to the database

                    fetch(`${process.env.REACT_APP_apiUrl}/add-a-product`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success('Your Product Has Added Successfully');
                                navigate('/dashboard/my-products');

                            }
                            console.log(result)
                        })
                        .catch(error => {
                            console.error(error.message);
                            setLoading(false);
                        })
                }
            })
            .catch(error => {
                console.log(error)
            })

    }



    return (
        <div >
            <div className="bg-indigo-50">
                <form onSubmit={handleSubmit} className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">

                    <div className="bg-white shadow-lg rounded  md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                            Add Your Product
                        </p>




                        <div className="mt-6 w-full">
                            <label htmlFor="name" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Product Name{" "}
                            </label>
                            <input name='name' id="name" aria-labelledby="name" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: Asus X415FA	 " required />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="image" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Select Image{" "}
                            </label>
                            <br />
                            <input
                                className='mt-2 mb-5'
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Select Brand{" "}
                            </label>
                            <select name='category' id='category' className="select select-success w-full my-2" required>


                                {
                                    categories.map(category => <option
                                        key={category._id}
                                        value={category.name}
                                    >{category.name}</option>)
                                }

                            </select>
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="location" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Location{" "}
                            </label>
                            <input name='location' id="location" aria-labelledby="location" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: Newtown 7 no,dinajpur " required />
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="used" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                How many years/months You Used?{" "}
                            </label>
                            <input name='used' id="used" aria-labelledby="used" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: 1 year / 6 months " required />
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="condition" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Condition{" "}
                            </label>
                            <input name='condition' id="condition" aria-labelledby="condition" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: excellent, good, fair " required />
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="parchesDate" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Year of Parchase{" "}
                            </label>
                            <input name='parchesDate' id="parchesDate" aria-labelledby="parchesDate" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: 2022/2023/2024" required />
                        </div>


                        <div className="mt-6 w-full">
                            <label htmlFor="description" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Product Description{" "}
                            </label>
                            <textarea rows={15} name='description' id="description" aria-labelledby="description" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: Product Description " required ></textarea>
                        </div>

                        <div className="mt-6 w-full">
                            <label htmlFor="salerName" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Your Name{" "}
                            </label>
                            <input name='salerName' disabled defaultValue={user?.displayName} id="salerName" aria-labelledby="salerName" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: Md Shijan Ali " required />
                        </div>


                        <div className="mt-6 w-full">
                            <label htmlFor="originalPrice" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Original Price{" "}
                            </label>
                            <input name='originalPrice' id="originalPrice" aria-labelledby="originalPrice" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: 12,000 " required />
                        </div>


                        <div className="mt-6 w-full">
                            <label htmlFor="resalePrice" className="text-sm font-medium leading-none text-gray-800">
                                {" "}
                                Sale Price{" "}
                            </label>
                            <input name='resalePrice' id="resalePrice" aria-labelledby="resalePrice" type="text" className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-800 text-gray-800 py-3 w-full pl-3 mt-2 " placeholder="e.g: 12,000 " required />
                        </div>

                        <div className='mt-6'>
                            <button type="submit" className=" items-center justify-center w-full  font-semibold text-white transition-all duration-200 btn btn-primary border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                {
                                    loading ? <LoadingSpinner></LoadingSpinner> : 'Add Product'
                                }
                            </button>
                        </div>




                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAProduct;