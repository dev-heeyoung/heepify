import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

export default function Products({ category }) {
    const [ isHover, setHover ] = useState(false);
    const { productsQuery: { isLoading, error, data }} = useProducts();

    const products = data && data.filter((product) => {
        return (category === 'all') ? product : (product.category === category)
    });

    const handleMouseLeave = () => isHover && setHover(false);
    const handleMouseEnter = () => setHover(true);

    return (
        <section onMouseLeave={handleMouseLeave} className='max-w-screen-2xl m-auto pb-28 font-basic'>
            <div className='relative w-fit' >
                <h1 className='text-left mt-10 my-2'>
                    <Link to='/products/all' onMouseEnter={handleMouseEnter} className='hover:opacity-70 cursor-pointer'>products</Link>
                    {` > ${category}`}
                </h1>
                <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`transition-all ease-in duration-500 flex justify-start ${isHover? 'absolute' : 'hidden' }`}>
                    <Link to='/products/women' className='border border-border rounded-sm cursor-pointer hover:opacity-80 text-sm text-center px-2 py-0.5 mr-1'>women</Link>
                    <Link to='/products/men' className='border border-border rounded-sm cursor-pointer hover:opacity-80 text-sm text-center px-2 py-0.5 mr-1'>men</Link>
                    <Link to='/products/accessories' className='border border-border rounded-sm cursor-pointer hover:opacity-80 text-sm text-center px-2 py-0.5'>accessories</Link>
                </ul>
            </div>
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            <p className='text-right'> { products ? products.length : 0 } items</p>
            <ul className="grid grid-cols-4 gap-x-5 gap-y-10 mt-5">
            { products && products.map((product) => 
                <ProductCard key={product.id} product={product}/>       
            )}
            </ul>
        </section>
    );
}

