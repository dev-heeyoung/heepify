import React from 'react';
import Button from './Button';
import useCart from '../hooks/useCart';

export default function PriceCard() {
    const { cartQuery: {isLoading, data: cartItems} } = useCart();
    if(isLoading) return <p>Loading...</p>

    const hasProducts = cartItems && cartItems.length > 0;
    const subTotal = cartItems.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
    const TAX_RATE = 0.13;
    const tax = subTotal * TAX_RATE;
    const total = subTotal + tax;
    const roundUp = (num) => Math.round(num * 100) / 100;

    return (
        <section className='h-fit w-full mt-10 xl:mt-0 xl:w-1/3 p-5 border border-border'>
            <h1 className='font-semibold py-3 uppercase'>
                Order Summary
            </h1>
            <ul className='border-y border-border py-2'>
                {hasProducts && cartItems.map((item) => <li key={item.id} className='flex justify-between'>
                    <p className='w-2/3'>{item.title}</p>
                    <p className='ml-5'>CAD ${item.price * item.quantity}</p>
                </li>)}
            </ul>
            <div className='flex justify-between pt-2'>
                <h3 className='font-semibold w-2/3'>Subtotal</h3>
                <p className='ml-5'>CAD ${roundUp(subTotal)}</p>
            </div>
            <div className='flex justify-between'>
                <h3 className='font-semibold pb-2'>Tax</h3>
                <p className='ml-5'>CAD ${roundUp(tax)}</p>
            </div>
            <div className='flex justify-between border-t border-border pt-3 pb-5'>
                <h3 className='font-semibold'>Total</h3>
                <p className='ml-5'>CAD ${roundUp(total)}</p>
            </div>
            <Button text='Checkout' className='w-full mb-3'/>
        </section>
    );
}

