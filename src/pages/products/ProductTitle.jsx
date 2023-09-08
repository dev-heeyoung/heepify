import React from 'react';

export default function ProductTitle({ title, subTitle }) {
    return (
        <section className='border-b border-neutral-200 m-5 p-10'>
        <h1 className='font-brand font-semibold text-4xl text-center mb-4'>{title}</h1>
        <p className='text-center'>{subTitle}</p>
    </section>
    );
}

