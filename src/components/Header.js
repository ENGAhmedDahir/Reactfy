import React from 'react';
import '../index.css'
import { Link } from 'react-router-dom';
import useShop from '../ShopContext';
import { FaCartShopping } from 'react-icons/fa6';


const Header = ()=>{
    const {products } =  useShop();
    return(
    <div className='menu'> 
    <Link to ="/" className='logo'> Reactfy</Link>
    <div className='links'>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/cart">Cart</Link>
    </div>
    <Link to= "/cart" > <span className='cart'> {products.length}
        <FaCartShopping style={{
        fontSize: '1.5rem',
        color: '#fff',
        marginLeft: '10px'
    }} /> </span></Link>
    </div>
    )
}

export default Header;