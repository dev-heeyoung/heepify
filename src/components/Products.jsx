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
    console.log(products)
    const handleMouseLeave = () => isHover && setHover(false);
    const handleMouseEnter = () => setHover(true);

    return (
        <section onMouseLeave={handleMouseLeave} className='max-w-screen-2xl mx-auto pb-28 mb-28 font-basic px-10'>
            <div className='relative w-fit' >
                <h1 className='text-left mt-10 my-2 capitalize'>
                    <Link to='/products/all' onMouseEnter={handleMouseEnter} className='hover:opacity-70 cursor-pointer'>products</Link>
                    {` > ${category}`}
                </h1>
                <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`transition-all ease-in duration-500 flex justify-start ${isHover? 'absolute' : 'hidden' }`}>
                    <Link to='/products/women' className='border border-border rounded-sm cursor-pointer hover:opacity-80 text-sm text-center px-2 py-0.5 mr-1'>women</Link>
                    <Link to='/products/men' className='border border-border rounded-sm cursor-pointer hover:opacity-80 text-sm text-center px-2 py-0.5 mr-1'>men</Link>
                    <Link to='/products/accessories' className='border border-border rounded-sm cursor-pointer hover:opacity-80 text-sm text-center px-2 py-0.5'>accessories</Link>
                </ul>
            </div>
            <p className='text-right'> { products ? products.length : 0 } items</p>
            { isLoading && <div className='my-10 text-left'>Loading...</div>}
            { error && <div className='my-10 text-left'>{error}</div>}
            { !(products?.length) && <div className='my-10 text-left'>No Product(s) in this category.</div>}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-5">
            { products && products.map((product) => 
                <ProductCard key={product.id} product={product}/>       
            )}
            </ul>
        </section>
    );
}

