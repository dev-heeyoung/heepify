import React from 'react';
import ProductTitle from './ProductTitle';
import Products from '../../components/Products';

export default function Accessories() {
    return (
        <section className='text-center'>
        <ProductTitle title='ACCESSORIES' subTitle='Discover the Latest Trends' />
        <Products category='accessories' />
    </section>
    );
}

