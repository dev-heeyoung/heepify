import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import useCart from '../hooks/useCart';


export default function Cart() {
    const { cartQuery: {isLoading, data: cartItems} } = useCart();
    const { user } = useAuthContext();

    if(!user) return <div className='text-center my-10'>Need login for this page</div>
    if(isLoading) return <p className='text-center my-10'>Loading...</p>

    const hasProducts = cartItems && cartItems.length > 0;

    return (
        <section className='my-20 mx-12 mb-40 xl:mx-24'>
            <h1 className='text-left text-2xl mb-7'>Shopping Cart</h1>
            <section className='flex flex-col xl:flex-row xl:justify-between'>
                <div className='xl:w-3/5'>
                    <ul className='grid grid-cols-8 gap-5 uppercase border-y border-border text-center font-semibold text-sm py-3 mb-5'>
                        <li className='col-span-3 text-left'>Product(s)</li>
                        <li className='hidden md:block'>Option</li>
                        <li className='hidden md:block'>Price</li>
                        <li className='hidden md:block'>Quantity</li>
                        <li className='hidden md:block text-right'>Sub total</li>
                    </ul>
                    {!hasProducts && <p>No product(s) in your cart.</p>}
                    {hasProducts && (
                        <ul>
                            {cartItems.map((product) => 
                                <CartItem key={product.id} product={product}/>
                            )}
                        </ul>
                    )}
                </div>
                {hasProducts && 
                    <PriceCard className='ml-16 xl:w-2/5'/>
                }
            </section>
        </section>
    );
}

