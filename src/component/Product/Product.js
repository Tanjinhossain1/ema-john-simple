import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, price, seller, ratings,img} = props.product
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price} </h5>
            
            <p>Manufacturer: {seller} </p>
            <p>Rating: {ratings} </p>
            <button>Add To Cart</button>
        </div>
    );
};

export default Product;