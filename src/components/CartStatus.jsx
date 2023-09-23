import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
    const { cartQuery: {data: cartItems} } = useCart();
    return (
        <Link to='/cart' className="relative flex items-center ml-4 hover:text-point">
            <AiOutlineShopping />
            <span className='absolute -top-0.5 -right-2 rounded-full bg-red-600 text-white font-semibold w-5 h-5 text-center text-sm leading-5'>
                {cartItems ? cartItems.length : 0} 
            </span>
        </Link>  
    );
}

