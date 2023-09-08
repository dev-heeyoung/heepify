import React from 'react';
import Products from '../../components/Products'
import ProductTitle from './ProductTitle';

export default function Women() {
    return (
        <section className='text-center'>
            <ProductTitle title='WOMEN' subTitle='Discover the Latest Trends in Women Fashion.' />
            <Products category='women' />
        </section>
    );
}

