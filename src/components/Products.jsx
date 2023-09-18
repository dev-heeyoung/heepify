import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

export default function Products({ category }) {
    const { data, isLoading, error } = useQuery(['products'], getProducts);
    const products = data && data.filter((product) => product.category === category)
    return (
        <section className='max-w-screen-2xl m-auto pb-28 font-basic'>
            <h1 className='text-left my-12'>products {`> ${category}`}</h1>
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            <p className='text-right'> { products ? products.length : 0 } items</p>
            <ul className="grid grid-cols-4 gap-x-2 gap-y-10 mt-5">
            { products && products.map((product) => 
                <ProductCard key={product.id} product={product}/>       
            )}
            </ul>
        </section>
    );
}

