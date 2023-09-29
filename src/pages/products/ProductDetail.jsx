import React, { useState } from 'react';
import { useLocation } from 'react-router-dom' 
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs';
import { FaSquareInstagram } from 'react-icons/fa6';
import Button from '../../components/Button';
import useCart from '../../hooks/useCart';
import CategoryNavbar from '../../components/CategoryNavbar';

export default function ProductDetail({ state }) {
    const {
        state: { product: {id, imageURL, title, description, category, price, sizeOption }}
    } = useLocation();
    const [ selectedOption, setSelectedOption ] = useState(sizeOption[0]); 
    const { addOrUpdateItem } = useCart();

    const handleSelect = (e) => setSelectedOption(e.target.value);
    const handleClick = (e) => {
        const product = { id, imageURL, title, category, price, selectedOption, sizeOption, quantity: 1 };
        addOrUpdateItem.mutate(product, {
            onSuccess: () => {
                alert('Added to your cart');
            }
        })
    }

    return (
        <section className='lg:max-w-screen-lg mx-auto px-10 mt-12 lg:mt-24'>
            <CategoryNavbar category={category} classNam=''/>
            <section className=' flex flex-col lg:flex-row relative mt-12 mb-40 '>
                
                <img src={imageURL} alt={title} className='h-96 md:h-160 lg:h-full lg:w-96 shadow-lg object-cover'/>
                <div className='flex flex-col flex-wrap ml-0 lg:ml-10'>
                    <p className='flex opacity-80 capitalize mt-10'>{category}</p>
                    <h3 className='text-2xl mt-4'>{title}</h3>
                    <h2 className='mt-3'>CAD ${price}</h2>
                    <p className='mt-10'>{description}</p>
                    <div>
                        <h3 className='font-semibold mt-10 mb-3'>SIZE</h3>
                        <div className='flex'>
                        {sizeOption &&
                            sizeOption?.map((option, index) => {
                                return (
                                <label key={index}>
                                    <input type='radio' name='size' onChange={handleSelect} value={option} defaultChecked={option === sizeOption[0]} className='sr-only peer'/>
                                    <div className='w-16 h-8 border flex items-center justify-center px-2 mr-3 peer-checked:bg-brand peer-checked:text-white cursor-pointer'>{option}</div>
                                </label>
                                )
                            })}
                        </div>
                    </div>
                    <Button text='ADD TO CART' className='mt-10 w-full' onClick={handleClick}/>
                    <div className='mt-10'>
                        <h3 className='font-semibold'>SHARE</h3>
                        <ul className='flex mt-3 ml-1 opacity-70'>
                            <li className="hover:text-point cursor-pointer scale-150 mr-5"><FaSquareInstagram /></li>
                            <li className="hover:text-point cursor-pointer scale-150 mr-5"><BsFacebook /></li>
                            <li className="hover:text-point cursor-pointer scale-150 mr-5"><BsTwitter /></li>
                            <li className="hover:text-point cursor-pointer scale-150 mr-5"><BsPinterest /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    );
}

