import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
        <div className='container mt-30'>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {products.map((product) => (
                    <div className="col" key={product.id}>
                        <div className="card h-100">
                            <img src={product.imageCover} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
