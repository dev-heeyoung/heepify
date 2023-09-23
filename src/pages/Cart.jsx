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
        <section className='font-basic my-20 mx-24 mb-40'>
            <h1 className='text-left text-2xl mb-7'>Shopping Cart</h1>
            <section className='flex justify-between'>
                <div className='w-3/5'>
                    <ul className='grid grid-cols-8 gap-5 uppercase border-y border-border text-center font-semibold text-sm py-3 my-5'>
                        <li className='col-span-3 text-left'>Products</li>
                        <li className=''>Option</li>
                        <li className=''>Price</li>
                        <li className=''>Quantity</li>
                        <li className='text-right'>Sub total</li>
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
                    <PriceCard className='w-2/5'/>
                }
            </section>
        </section>
    );
}

