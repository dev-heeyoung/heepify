import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube, BsSend } from 'react-icons/bs';
import { FaSquareInstagram } from 'react-icons/fa6';

export default function Footer() {
    return (
        <section className='font-basic py-10 px-10 mx-auto border-t text-sm'>
            <div className="flex justify-between mb-7">
                <div className='w-1/4 mr-3'>
                    <h1 className='mb-5 text-base'>HEEPIFY</h1>
                    <p className='opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, ea tenetur in doloribus rerum ullam iure molestiae cumque possimus obcaecati sit sequi quas reprehenderit dolorum ut soluta quisquam architecto atque.</p>
                </div>
                <div className='mr-5'>
                    <h3 className='mb-3 text-base'>SHOPPING WITH US</h3>
                    <ul className='opacity-70'>
                        <li className='mb-1'>Gift Cards</li>
                        <li className='mb-1'>Returns & Exchanges</li>
                        <li className='mb-1'>Size Guide</li>
                    </ul>
                </div>
                <div className='mr-5'>
                    <h3 className='mb-3 text-base'>ABOUT US</h3>
                    <ul className='opacity-70'>
                        <li className='mb-1'>Store Location</li>
                        <li className='mb-1'>Contact US</li>
                        <li className='mb-1'>Blog</li>
                    </ul>
                </div>
                <div className='mr-5'>
                    <h3 className='mb-5 text-base'>FOLLOW US</h3>
                    <ul className='flex ml-1 opacity-70'>
                            <li className="hover:text-point cursor-pointer scale-150 mr-5"><FaSquareInstagram /></li>
                            <li className="hover:text-point cursor-pointer scale-150 mr-5"><BsFacebook /></li>
                            <li className="hover:text-point cursor-pointer scale-150 mr-5"><BsTwitter /></li>
                            <li className="hover:text-point cursor-pointer scale-150 mr-5"><BsYoutube /></li>

                        </ul>
                </div>
                <div>
                    <h3 className='mb-3 text-base'>NEWS LETTER</h3>
                    <p className='opacity-70'>Subscribe to be the first to hear about deals, offers and upcoming collections.</p>
                    <div className='mt-5'>
                        <h5>Enter your email</h5>
                        <div className='flex border-b m-auto place-items-center'>
                            <input type='email' className='text-sm w-full mr-2 pr-3 mt-1 bg-transparent border-transparent focus:border-transparent focus:ring-0'/>
                            <div className='scale-125 mr-3'><BsSend /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex border-t pt-3 opacity-90'>
                <p className='pr-2'>© Heepify, all rights reserved</p>
                <p className='border-l border-brand py-0 px-2'>Terms of Use</p>
                <p className='border-l border-brand py-0 px-2'>Privacy Policy</p>
                <p className='border-l border-brand py-0 px-2'>Cookies Policy</p>
            </div>
        </section>
    );
}

