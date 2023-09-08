import React from 'react';
import ProductTitle from './ProductTitle';
import Products from '../../components/Products';

export default function Men() {
    return (
        <section className='text-center'>
            <ProductTitle title='MEN' subTitle='Discover the Latest Trends in Men Fashion.' />
            <Products category='men' />
        </section>
    );
}

