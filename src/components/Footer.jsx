import React, { useState }from 'react';
import { BsFacebook, BsTwitter, BsYoutube, BsSend } from 'react-icons/bs';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io'

export default function Footer() {
    const [ togglesStatus, setToggleStatus ] = useState([false, false, false, false]);
    const handleToggle = (e) => {
        switch (e.target.parentNode.innerText) {
            case "SHOPPING WITH US":
                setToggleStatus((prev) => prev.map((status, index) => index === 0 && !status));
                break;
            case "ABOUT US":
                setToggleStatus((prev) => prev.map((status, index) => index === 1 && !status));
                break;
            case "FOLLOW US":
                setToggleStatus((prev) => prev.map((status, index) => index === 2 && !status));
                break;
            case "NEWS LETTER":
                setToggleStatus((prev) => prev.map((status, index) => index === 3 && !status));
                break;
            default:
        }
    }
    return (
        <section className='font-basic py-10 px-10 mx-auto border-t text-sm'>
            <div className="flex flex-col md:flex-row md:justify-between mb-7">
                <div className='md:w-1/4 mb-5 md:mr-3'>
                    <h1 className='mb-5 text-base'>HEEPIFY</h1>
                    <p className='opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, ea tenetur in doloribus rerum ullam iure molestiae cumque possimus obcaecati sit sequi quas reprehenderit dolorum ut soluta quisquam architecto atque.</p>
                </div>
                <div className='md:mr-3'>
                    <h3 className='flex mb-3 text-base items-center'>SHOPPING WITH US<IoIosArrowDown onClick={handleToggle} className='md:hidden ml-2 cursor-pointer'/></h3>
                    <ul className={`${togglesStatus[0] || 'hidden md:block'} opacity-70 mb-5`}>
                        <li className='mb-1 cursor-pointer hover:opacity-70'>Gift Cards</li>
                        <li className='mb-1 cursor-pointer hover:opacity-70'>Returns & Exchanges</li>
                        <li className='mb-1 cursor-pointer hover:opacity-70'>Size Guide</li>
                    </ul>
                </div>
                <div className='md:mr-3'>
                    <h3 className='flex mb-3 text-base items-center'>ABOUT US<IoIosArrowDown onClick={handleToggle} className='md:hidden ml-2 cursor-pointer'/></h3>
                    <ul className={`${togglesStatus[1] || 'hidden md:block'} opacity-70 mb-5`}>
                        <li className='mb-1 cursor-pointer hover:opacity-70'>Store Location</li>
                        <li className='mb-1 cursor-pointer hover:opacity-70'>Contact US</li>
                        <li className='mb-1 cursor-pointer hover:opacity-70'>Blog</li>
                    </ul>
                </div>
                <div className='md:mr-3'>
                    <h3 className='flex mb-3 text-base items-center'>FOLLOW US<IoIosArrowDown onClick={handleToggle} className='md:hidden ml-2 cursor-pointer'/></h3>
                    <ul className={`${togglesStatus[2] || 'hidden'} md:flex flex flex-wrap opacity-70 mb-5`}>
                            <li className="hover:text-point cursor-pointer text-xl mr-3 mb-2"><FaSquareInstagram /></li>
                            <li className="hover:text-point cursor-pointer text-xl mr-3 mb-2"><BsFacebook /></li>
                            <li className="hover:text-point cursor-pointer text-xl mr-3 mb-2"><BsTwitter /></li>
                            <li className="hover:text-point cursor-pointer text-xl mr-3 mb-2"><BsYoutube /></li>
                    </ul>
                </div>
                <div>
                    <h3 className='flex mb-3 text-base items-center'>NEWS LETTER<IoIosArrowDown onClick={handleToggle} className='md:hidden ml-2 cursor-pointer'/></h3>
                    <div className={`${togglesStatus[3] || 'hidden md:block'} opacity-70 mb-5`}>
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
            </div>
            <div className='flex flex-col md:flex-row border-t pt-3 opacity-90'>
                <p className='pr-2 py-1'>© Heepify, all rights reserved</p>
                <div className='flex py-1'>
                    <p className='border-l border-border py-0 px-2 cursor-pointer hover:opacity-70'>Terms of Use</p>
                    <p className='border-l border-border py-0 px-2 cursor-pointer hover:opacity-70'>Privacy Policy</p>
                    <p className='border-l border-border py-0 px-2 cursor-pointer hover:opacity-70'>Cookies Policy</p>
                </div>
            </div>
        </section>
    );
}

