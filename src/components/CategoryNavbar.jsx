import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryNavbar({ category }) {
    const [ isHover, setHover ] = useState(false);

    const handleMouseLeave = () => isHover && setHover(false);
    const handleMouseEnter = () => setHover(true);
    return (
        <section onMouseLeave={handleMouseLeave} className='relative w-fit' >
            <h1 className='text-left mt-10 pb-1 capitalize'>
                <Link to='/products/all' onMouseEnter={handleMouseEnter} className='hover:opacity-60 cursor-pointer'>products</Link>
                <span className='ml-2'>{`>`}</span><span className='text-point ml-2 capitalize'>{category}</span>
            </h1>
            <ul className={`transition-all ease-in duration-500 flex justify-start ${isHover? 'absolute' : 'hidden' }`}>
                <Link to='/products/women' className='border border-border rounded-sm cursor-pointer hover:opacity-70 text-sm text-center px-2 py-0.5 mr-1'>women</Link>
                <Link to='/products/men' className='border border-border rounded-sm cursor-pointer hover:opacity-70 text-sm text-center px-2 py-0.5 mr-1'>men</Link>
                <Link to='/products/accessories' className='border border-border rounded-sm cursor-pointer hover:opacity-70 text-sm text-center px-2 py-0.5'>accessories</Link>
            </ul>
        </section>
    );
}

