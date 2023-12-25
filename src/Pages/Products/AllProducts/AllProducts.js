import React, {useState} from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllProducts = () => {
    const products = useLoaderData();
    console.log('products', products)
    const [selectedProducts, setSelectedProdects] = useState(products);
    const [select, setSelect] = useState('');

    const tabItems = [
        {
            id: 1,
            label: "All"
        },
        {
            id: 2,
            label: "ASUS"
        },
        {
            id: 3,
            label: "HP"
        },
        {
            id: 3,
            label: "MACBOOK"
        },
    ];

    const handleSelect = (value) => {
        const filterProducts = products.filter(pro => pro.category.toLowerCase() === value.toLowerCase())
        setSelectedProdects(filterProducts)
        setSelect(value)
        if (value === 'All') {
            setSelectedProdects(products)
        }
    }


    return (
        <div>


<div>
    <div class="max-w-7xl mx-auto px-6 pt-20">
            <div class="grid sm:grid-cols-3 border py-4 px-5 items-center justify-between">
                 <div>
                    <p>Total Products: <span class="text-primary">{selectedProducts.length }</span></p>
                 </div>
                 <div class="flex gap-5 items-center justify-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 448 512">
                            <path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z"/>
                            </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 512 512">
                            <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/>
                        </svg>
                    </div>
                 </div>
                 <div class="flex justify-end gap-2 items-center">
                    <p class="">Sort By:</p>
                    <select name="" id="" class="border-none focus:ring-primary">
                        <option value="Default">Default</option>
                        <option value="Popularity">Popularity</option>
                        <option value="Average Rating">Average Rating</option>
                        <option value="Newness">Newness</option>
                        <option value="Price Low to High">Price Low to High</option>
                    </select>
                 </div>
            </div>
    </div>
</div>

            <div>
                <div className='max-w-7xl px-6 mx-auto pt-10'>
                    <ul className='flex items-center gap-1'>
                        {
                            tabItems.map(tab => (
                                <li onClick={()=>handleSelect(tab.label)} className={`${select===tab.label? 'bg-secondary': 'bg-primary'}  text-white px-4 py-2 cursor-pointer`}>{ tab.label}</li>
                            ))
                        }
                     </ul>
                </div>       
</div>


            <div className='max-w-7xl mx-auto px-6 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>


{
    selectedProducts.map(product => <div key={product._id} className="w-full relative">
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
    

                <div>
                <h2 className='sm:text-h5 text-xs font-semibold'>Condition: <span className='font-semibold italic text-secondary'>{product?.condition}</span></h2>
            <h2 className='sm:text-h5 text-xs font-semibold mt-2'>Price: <span className='font-semibold italic text-secondary'>{product.resalePrice} BDT</span></h2>
        </div>
    </div>
</div>)
}

</div>
          </div>
        </div>
    );
};

export default AllProducts;