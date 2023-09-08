import React from 'react';

export default function ProductCard({ 
    product: { id, imageURL, title, category, price }

 }) {
    return (
        <li id={id} className='items-center'>
            <img src={imageURL} alt={title} className=''/>
            <div className='mt-1'>
                <p className='opacity-70 capitalize'>{category}</p>
                <p>{title}</p>
                <p>${price}</p>
            </div>
        </li>
    );
}

