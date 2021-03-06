import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='container'>
            <div className="products-container">
              {/* <h1>i am product: {products.length}</h1> */}
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
              
            </div>

            <div className="cart-container">
              <h1>i am order sumary</h1>
            </div>
        </div>
    );
};

export default Shop;