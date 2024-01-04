import React, { useContext, useState,useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../hoocks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
import { DataView } from 'primereact/dataview';


const Products = () => {
  const { loading } = useContext(AuthContext);

  useTitle('My Products')

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_apiUrl}/products`)
      .then(response => {
      setProducts(response.data)
      })
      .catch(err => {
      console.log(err.message)
    })
  },[])
    
  

    if (loading) {
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
                    setProducts(prevProducts => prevProducts.filter(p => p._id !== product._id));
                }
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




  const itemTemplate = (product) => {
    return (
      <div className=''>
         <div key={product._id} className="w-full relative ">
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
                    <button className="md:px-3 px-2 lg:px-2 xl:px-3 text-sm md:text-base lg:text-sm xl:text-base py-1 text-white bg-red-700">Delete</button>
  
                </Link>
                <Link onClick={() => handleAdvertise(product)}>
                    <button className="md:px-3 px-2 lg:px-2 xl:px-3 text-sm md:text-base lg:text-sm xl:text-base py-1 text-white bg-green-800">Advertise</button>
                </Link>
                <Link to={`/products/sp/${product._id}`}>
                    <div className="card-actions">
                        <button className="md:px-3 px-2 lg:px-2 xl:px-3 text-sm md:text-base lg:text-sm xl:text-base py-1 text-white bg-black">See Details</button>
                    </div>
                </Link>
                </div>
      </div>
  </div>
     </div>
    );
  };
  



    return (
      <div className='bg-white p-10'>



            <div className=''>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> */}

            <DataView value={products} itemTemplate={itemTemplate} paginator rows={9} rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"/>

{/* </div> */}
          </div>
        </div>
    );
};

export default Products;