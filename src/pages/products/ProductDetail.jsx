import React from 'react';
import { useLocation, Link } from 'react-router-dom' 
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs';
import { FaSquareInstagram } from 'react-icons/fa6';


import Button from '../../components/Button';


export default function ProductDetail({ state }) {
    const {
        state: { product: {imageURL, title, description, category, price, sizeOption }}
    } = useLocation();

    return (
        <section className='max-w-screen-xl mx-auto flex border font-basic relative mt-24'>
                <img src={imageURL} alt={title}/>
                <div className='ml-10'>
                    <p className='opacity-80 capitalize mt-10'>{category}</p>
                    <h3 className='text-3xl font-semibold mt-4'>{title}</h3>
                    <h2 className='text-2xl font-semibold mt-3'>${price}</h2>
                    <p className='mt-10'>{description}</p>
                    <div>
                        <h3 className='font-semibold mt-10 mb-3'>SIZE</h3>
                        <div className='flex'>
                        {sizeOption &&
                            sizeOption.map((option, index) => {
                                return (
                                <label key={index}>
                                    <input type='radio' name='size' value={option} defaultChecked={option === sizeOption[0]} className='sr-only peer'/>
                                    <div className='w-16 h-8 border flex items-center justify-center px-2 mr-3 peer-checked:bg-brand peer-checked:text-white cursor-pointer'>{option}</div>
                                </label>
                                )
                            })}
                        </div>
                    </div>
                    <Link to='/cart'>
                        <Button text='ADD TO CART' className='mt-10'/>
                    </Link>
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
    );
}

