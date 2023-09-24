import React from 'react';
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
            <section className='flex flex-col justify-center items-center font-basic w-screen min-h-screen text-brand'>
                <Link to='/' className='text-5xl mb-20 font-brand text-point font-semibold'>Heefify</Link>
                <div className='opacity-80 mb-20'>
                    <h1 className='font-brand font-semibold text-3xl mb-5'>Sorry, we couldn't find that page for you.</h1>
                    <p className=''>Let us help you find something else and discover some helpful resources blow.</p>
                </div>
                <div className='flex flex-wrap text-center'>
                    <div className='mx-10'>
                        <div className='bg-womenImg w-96 h-72 bg-cover shadow-lg'></div>
                        <h2 className='mt-5 mb-3 text-lg'>Need New Clothes?</h2>
                        <Link to='products/all' className='underline underline-offset-8 opacity-80 capitalize'>Shopping With Us</Link>
                    </div>
                    <div className='mx-10'>
                        <div className='bg-accessoriesImg w-96 h-72 bg-cover shadow-lg'></div>
                        <h2 className='mt-5 mb-3 text-lg'>Want to Know New Trend?</h2>
                        <Link to='/' className='underline underline-offset-8 opacity-80 capitalize'>Check Our Blog</Link>
                    </div>
                    <div className='mx-10'>
                        <div className='bg-banner w-96 h-72 bg-cover shadow-lg'></div>
                        <h2 className='mt-5 mb-3 text-lg'>Need Help?</h2>
                        <Link to='/' className='underline underline-offset-8 opacity-80 capitalize'>Contact US</Link>
                    </div>
                </div>
            </section>
    );
}

