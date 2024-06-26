import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const Products = () => {
    const [products, setProducts] = useState([])

    async function getAllProducts() {
        const response = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
        console.log('products:', response.data.data)
        setProducts(response.data.data)
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    return (
        <Link to={`details`}>
            <div className='products container mt-30'>
                <h3>Products: </h3>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {products.map((product) => (
                        <div className="col" key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default Products
