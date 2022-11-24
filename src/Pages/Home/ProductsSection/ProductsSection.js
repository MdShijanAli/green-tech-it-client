import React, { useEffect, useState } from 'react';

const ProductsSection = () => {
    const { loading, setLoading } = useState(false);
    const { allProducts, setAllProducts } = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllProducts(data)
            })
    }, [setAllProducts])
    console.log(allProducts.length)
    return (
        <div>

        </div>
    );
};

export default ProductsSection;