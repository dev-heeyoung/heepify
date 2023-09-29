import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';
import CategoryNavbar from './CategoryNavbar';
import RevealOnScroll from '../pages/RevealOnScroll';

export default function Products({ category }) {
    const { productsQuery: { isLoading, error, data }} = useProducts();

    const products = data && data.filter((product) => {
        return (category === 'all') ? product : (product.category === category)
    });

    return (
        <section className='max-w-screen-2xl mx-auto pb-28 mb-28 px-10'>
            <CategoryNavbar category={category}/>
            <p className='text-right'> { products ? products.length : 0 } items</p>
            { isLoading && <div className='my-10 text-left'>Loading...</div>}
            { error && <div className='my-10 text-left'>{error}</div>}
            
            { !(products?.length) && <div className='my-10 text-left'>No Product(s) in this category.</div>}
            <RevealOnScroll>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 mt-5">
                { products && products.map((product) => 
                    <ProductCard key={product.id} product={product}/>       
                )}
                </ul>
            </RevealOnScroll>
        </section>
    );
}

