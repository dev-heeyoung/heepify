import React from 'react';
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
            <section className='flex flex-col text-center justify-center items-center mb-20 lg:h-screen lg:mb-0'>
                <Link to='/' className='text-5xl mb-10 font-brand text-point font-semibold mt-10 lg:mt-0 lg:mb-20'>Heefify</Link>
                <div className='opacity-80 mb-10 lg:mb-20'>
                    <h1 className='font-brand font-semibold mb-2 text-xl lg:mb-5 lg:text-3xl'>Sorry, we couldn't find that page for you.</h1>
                    <p className='text-sm md:text-base mx-5'>Let us help you find something else and discover some helpful resources blow.</p>
                </div>
                <div className='grid grid-col-1 gap-5 lg:grid-cols-3 text-center align-middle'>
                    <div className='mb-7'>
                        <div className='bg-womenImg bg-cover shadow-lg w-96 h-72'></div>
                        <h2 className='mt-5 mb-3 text-lg'>Need New Clothes?</h2>
                        <Link to='products/all' className='underline underline-offset-8 opacity-80 capitalize'>Shopping With Us</Link>
                    </div>
                    <div className='mb-7'>
                        <div className='bg-accessoriesImg bg-cover shadow-lg w-96 h-72'></div>
                        <h2 className='mt-5 mb-3 text-lg'>Want to Know New Trend?</h2>
                        <Link to='/' className='underline underline-offset-8 opacity-80 capitalize'>Check Our Blog</Link>
                    </div>
                    <div className='mb-7'>
                        <div className='bg-banner bg-cover shadow-lg w-96 h-72'></div>
                        <h2 className='mt-5 mb-3 text-lg'>Need Help?</h2>
                        <Link to='/' className='underline underline-offset-8 opacity-80 capitalize'>Contact US</Link>
                    </div>
                </div>
            </section>
    );
}

