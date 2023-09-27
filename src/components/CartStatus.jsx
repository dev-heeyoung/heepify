import React from 'react';
import { Link } from 'react-router-dom';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import useCart from '../hooks/useCart';

export default function CartStatus() {
    const { cartQuery: {data: cartItems} } = useCart();
    return (
        <Link to='/cart' className="relative flex items-center ml-2 hover:text-point">
            <LiaShoppingBagSolid className='text-2xl'/>
            <span className='absolute -top-1 -right-2.5 rounded-full bg-red-600 text-white font-semibold w-5 h-5 text-center text-sm leading-5'>
                {cartItems ? cartItems.length : 0} 
            </span>
        </Link>  
    );
}

