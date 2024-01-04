import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hoocks/useTitle';

const MyProducts = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const categories = useLoaderData();

    useTitle('My Products')
    console.log('emailllll', user?.email)



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

        const url = 'https://api.imgbb.com/1/upload?key=8d6f88076c0d0741db9ce8b01104af0c'
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
                    console.log(product)
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
                                setVisible(false)
                                refetch()
                                setLoading(false);
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




    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_apiUrl}/my-products/${user?.email}`);
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




    // delete product

    const handleDelete = product => {
        fetch(`${process.env.REACT_APP_apiUrl}/my-products/${product._id}`, {
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

                // const remaining= myProducts.filter(product => product._id )
            })

    }
    // advertise product

    const handleAdvertise = product => {
        const advertise = {
            product

        }

        fetch(`${process.env.REACT_APP_apiUrl}/advertise`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Product Added Advertise Section Successfully!!!')
                }
            })
    }
    return (
        <div className='bg-white p-10'>
            <h2 className='text-3xl text-center font-semibold  mb-10'>My products</h2>

            <div>
                {
                    myProducts.length === 0 ? <div>
                        <h2 className='text-3xl font-semibold mt-10 text-center'>You Have not any Products</h2> 
                       
                    </div>
                        
                        :
                          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'> 

                            {
                                myProducts.map(product => <div key={product._id} className="w-full relative ">
                                <div className=' relative w-full sm:h-[320px] h-[250px] p-10 flex items-center justify-center border overflow-hidden'>
                                <img className='w-full h-full bg-contain hover:scale-110 transition duration-700 ease-in-out' src={product.photo} alt="Products" />
                                </div>
                                <div
                                    class="absolute top-5 left-5 bg-secondary px-2 rounded-sm"
                                    >
                                    <p class="text-white uppercase">{ product?.category }</p>
                                    </div>
                                    <div className="">
                                        <Link to={`/products/sp/${product._id}`}>
                                            <h2 className="sm:text-h4 text-md hover:text-primary transition duration-500 ease-out font-semibold my-5">{product?.name.slice(0,40)}...</h2>
                                        </Link>
                                
                            
                                        <div className='flex justify-evenly mt-10'>
                            
                                          <Link onClick={() => handleDelete(product)}>
                                              <button className="px-3 py-1 text-white bg-red-700">Delete</button>
                            
                                          </Link>
                                          <Link onClick={() => handleAdvertise(product)}>
                                              <button className="px-3 py-1 text-white bg-green-800">Advertise</button>
                                          </Link>
                                          <Link to={`/products/sp/${product._id}`}>
                                              <div className="card-actions">
                                                  <button className="px-3 py-1 text-white bg-black">See Details</button>
                                              </div>
                                          </Link>
                                          </div>
                                </div>
                            </div>)
                            }
                        </div>
                }
            </div>


            <div className='fixed right-0 bottom-0'>
            <Button onClick={() => setVisible(true)} >
                                  <p className='bg-[#00b22d] w-10 sm:w-14 lg:w-16 h-10 sm:h-14 lg:h-16 flex items-center justify-center rounded-full'><i className='pi pi-plus text-xl text-white font-semibold'></i></p>
                                      </Button>
            </div>



            
            
            <Dialog header=" Add Your Product" visible={visible} className='w-full md:w-3/4 xl:w-1/2 px-6 md:px-0' onHide={() => setVisible(false)}>
              <form onSubmit={handleSubmit} className="">

<div className="w-full">




    <div className="w-full">
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
                loading ? <ProgressSpinner /> : 'Add Product'
            }
        </button>
    </div>




</div>

</form>
            </Dialog>
                   
        </div>
    );
};

export default MyProducts;

