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
        className='flex flex-col items-center'>
            <img src={imageURL} alt={title} className='cursor-pointer hover:grayscale object-cover h-96 w-full'/>
            <div className='flex flex-col mt-1'>
                <p className='opacity-70 uppercase text-sm border-y border-border mt-2 mb-1 w-fit text-center mx-auto px-3'>{category}</p>
                <p className='uppercase my-1'>{title}</p>
                <p>${price}</p>
            </div>
        </li>
    );
}

