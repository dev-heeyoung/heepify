import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineShopping} from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


export default function Navbar() {
    const [ isHover, setHover ] = useState(false);
    const handleMouseEnter = () => setHover(true)
    const handleMouseLeave = () => isHover && setHover(false) ;

    return (
        <header onMouseLeave={handleMouseLeave} className='text-brand font-basic'> 
            <div className='flex relative'>
                    <Link to='/' className="m-auto text-center py-3">
                        <h1 className="text-5xl p-2 font-brand font-semibold opacity-80">Heepify</h1>
                    </Link>
                    <nav className="flex absolute text-3xl right-0 top-1/4 m-3 items-center opacity-80">
                        <Link to='/' className="hover:text-point"><AiOutlineInstagram /></Link>
                        <Link to='/' className="ml-3 hover:text-point"><AiOutlineFacebook /></Link>
                        <Link to='/cart' className="mx-3 hover:text-point"><AiOutlineShopping /></Link>
                        <Link to='/login' className="mx-2/3 text-2xl hover:text-point"><BsPersonCircle /></Link>
                    </nav>
            </div>
            <nav className='text-center flex justify-center'>
                <Link to='/' className='mx-5 hover:text-point'>HOME</Link>
                <div onMouseEnter={handleMouseEnter} className={`flex item-center mx-5 cursor-pointer ${isHover && 'text-point' }`}>
                    <span>SHOP</span>
                    <span className="pt-1 pl-1"><MdOutlineKeyboardArrowDown /></span>
                </div>
                <Link to='/' className='mx-5 hover:text-point'>FAQ</Link>
                <Link to='/' className='mx-5 hover:text-point'>BLOG</Link>
                <Link to='/' className='mx-5 hover:text-point'>CONTACT</Link>
            </nav>
            <nav className={`text-center transition-all ease-in duration-500 hover:opacity-80 ${isHover? 'h-full py-2 my-1 opacity-100' : 'h-0 overflow-y-hidden opacity-0' }`}>
                <Link to='/products/women' className="mx-3 hover:text-point">WOMEN</Link>
                <Link to='/products/men' className="mx-3 hover:text-point">MEN</Link>
                <Link to='/products/accessories' className="mx-3 hover:text-point">ACCESSORIES</Link>
            </nav>
        </header>
    );
}

