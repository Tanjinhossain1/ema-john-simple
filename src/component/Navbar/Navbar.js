import React from 'react';
import logo from '../../images/Logo.svg';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Order">Home</a>
                <a href="/Order">Order</a>
                <a href="/Manage Inventory">Inventory</a>               
                <a href="/Manage Inventory">About Us</a>               
            </div>
        </div>
    );
};

export default Navbar;