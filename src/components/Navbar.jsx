import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu} from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { LiaFacebookSquare, LiaInstagram } from 'react-icons/lia'
import { LuFolderEdit } from 'react-icons/lu'
import { CiSquareRemove } from 'react-icons/ci'
import { GoPerson } from 'react-icons/go'
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
    const [ isHover, setHover ] = useState(false);
    const [ isClicked, setIsClicked ] = useState(false);
    const { user, login, logout } = useAuthContext();
    
    const handleMenuClick = () => setIsClicked((prev) => !prev)
    const handleMouseEnter = () => setHover(true)
    const handleMouseLeave = () => isHover && setHover(false);

    return (
        <header className='relative text-brand font-basic px-5'> 
            {/* <div onMouseEnter={handleMouseLeave} className='grid grid-cols-3 items-center'>
                <div><AiOutlineMenu onClick={setIsClicked} className='block text-xl cursor-pointer lg:hidden' /></div>
                <Link to='/' className="m-auto text-center py-2">
                    <h1 className="text-3xl p-2 font-brand font-semibold opacity-80 items-center">Heepify</h1>
                </Link>   
                <nav className="flex justify-end text-3xl items-center opacity-80">
                    <Link to='/' className="hover:text-point hidden lg:block"><AiOutlineInstagram /></Link>
                    <Link to='/' className="ml-4 hover:text-point hidden lg:block"><AiOutlineFacebook /></Link>
                    { user && user.isAdmin && (
                        <Link to='/products/newProduct' className="ml-4 hover:text-point">
                            <AiOutlineEdit />
                        </Link>
                    )}
                    { user && !(user.isAdmin) && 
                        <CartStatus />
                    }
                    { user && (
                        <>
                            <div className='flex items-center'>
                                <div className="hover:text-point w-7 h-7 ml-4"><img src={user.photoURL} alt='profile' className='rounded-full'></img></div>
                                <div className="text-base ml-3 hidden xl:block">{user?.displayName}</div>
                            </div>
                            <div onClick={logout} className='hover:text-point text-base text-center ml-4 cursor-pointer'>LOGOUT</div>
                        </>
                    )}    
                    { !user && 
                    <div onClick={login} className='hover:text-point text-base text-center ml-4 cursor-pointer'>LOGIN</div>
                    }
                </nav>                    
            </div> */}
            <div className='grid grid-cols-3 items-center'>
                <div><AiOutlineMenu onClick={handleMenuClick} className='block text-xl cursor-pointer lg:hidden' /></div>
                <Link to='/' className="m-auto text-center py-2">
                    <h1 className="text-3xl p-2 font-brand font-semibold opacity-80 items-center">Heepify</h1>
                </Link>   
                <nav className="flex justify-end text-3xl items-center opacity-80">
                    <Link to='/' className="hover:text-point hidden lg:block"><LiaInstagram /></Link>
                    <Link to='/' className="ml-2 hover:text-point hidden lg:block"><LiaFacebookSquare /></Link>
                    { user && user.isAdmin && (
                        <Link to='/products/newProduct' className="ml-3 hover:text-point text-2xl">
                            <LuFolderEdit />
                        </Link>
                    )}
                    { user && !(user.isAdmin) && 
                        <CartStatus />
                    }
                    { user && (
                        <>
                            <div className='relative flex text-base text-center items-center'>
                                <div className='flex cursor-pointer items-center'>
                                    <div className='h-full'>
                                        <div className="hover:text-point w-6 h-6 ml-4"><img src={user.photoURL} alt='profile' className='rounded-full'></img></div></div>
                                    <div className=" ml-3 hidden text-start lg:block">{user?.displayName}</div>
                                </div>
                                <div onClick={logout} className='hover:text-point cursor-pointer w-fit ml-4 text-sm'>LOGOUT</div>
                            </div>
                            
                        </>
                    )}    
                    { !user && 
                    <div onClick={login} className='hover:text-point text-base text-center ml-4 cursor-pointer'><GoPerson className='text-2xl'/></div>
                    }
                </nav>                    
            </div>
            <div className={`animate-opacity lg:animate-none absolute top-0 left-0 w-96 h-screen  bg-brand text-basic block ${isClicked ? 'block' : 'hidden lg:block'} lg:h-fit lg:relative lg:w-full lg:bg-transparent lg:text-brand z-50`}>
                <nav className='flex flex-col lg:text-center lg:flex-row lg:justify-center m-3 lg:m-0'>
                    <CiSquareRemove onClick={handleMenuClick} className='text-3xl mr-1 self-end cursor-pointer lg:hidden' />
                    <Link to='/' onClick={handleMenuClick} className='m-5 lg:mx-5 lg:my-0 hover:text-point w-fit'>HOME</Link>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col lg:flex-row relative justify-start lg:justify-center lg:items-center p-5 lg:px-5 lg:py-0 cursor-pointer'>
                        <span className={`flex ${isHover && 'text-point'}`}>SHOP<MdOutlineKeyboardArrowDown className='text-xl ml-1' /></span>
                        <nav className={`flex text-center animate-opacity left-0 z-50 -bottom-2 ${isHover? 'block pt-5 lg:absolute lg:-bottom-9' : 'hidden' }`}>
                            <Link to='/products/all' onClick={handleMenuClick} className="mr-1 hover:text-point border border-border px-1 rounded-md">ALL</Link>
                            <Link to='/products/women' onClick={handleMenuClick} className="mx-1 hover:text-point border border-border px-1 rounded-md">WOMEN</Link>
                            <Link to='/products/men' onClick={handleMenuClick} className="mx-1 hover:text-point border border-border px-1 rounded-md">MEN</Link>
                            <Link to='/products/accessories' onClick={handleMenuClick} className="mx-1 hover:text-point border border-border px-1 rounded-md">ACCESSORIES</Link>
                        </nav>
                    </div>
                    <Link to='/' onClick={handleMenuClick} className='p-5 lg:px-5 lg:py-0 hover:text-point w-fit'>FAQs</Link>
                    <Link to='/' onClick={handleMenuClick} className='p-5 lg:px-5 lg:py-0 hover:text-point w-fit'>BLOG</Link>
                    <Link to='/' onClick={handleMenuClick} className='p-5 lg:px-5 lg:py-0 hover:text-point w-fit'>CONTACT</Link>
                </nav>
                
            </div>
        </header>
    );
}

