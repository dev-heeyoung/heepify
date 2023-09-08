import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ 
    product,
    product: { id, imageURL, title, category, price }
 }) {
    const navigate = useNavigate();

    return (
        <li 
        onClick={() => {
            navigate(`/products/${id}`, { state: {product} })
        }} 
        className='items-center cursor-pointer'>
            <img src={imageURL} alt={title} />
            <div className='mt-1'>
                <p className='opacity-70 capitalize'>{category}</p>
                <p>{title}</p>
                <p>${price}</p>
            </div>
        </li>
    );
}

