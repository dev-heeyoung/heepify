import React from 'react';
import { Link } from 'react-router-dom';
import { TbJewishStarFilled } from 'react-icons/tb';
import { FaShippingFast, FaMoneyBillWave } from 'react-icons/fa'
import { AiFillCustomerService, AiOutlineArrowRight } from 'react-icons/ai'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { BsSend } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import Button from '../components/Button'
import Timer from '../components/Timer'
import main_1_1 from '../images/main_1_1.jpg'
import main_1_2 from '../images/main_1_2.jpg'
import main_1_3 from '../images/main_1_3.jpg'
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';

export default function Home() {
    const NUM_OF_ITEM_TO_SHOW = 10;
    const { productsQuery: { data } } = useProducts();
    const itemsToShow = data && data.slice(0, NUM_OF_ITEM_TO_SHOW);

    return (
        <section className='relative'>
            <section className='animate-opacity relative flex m-auto items-end mb-10 pt-16'>
                <h1 className='absolute top-16 z-10 text-center left-1/2 -translate-x-1/2 font-brand font-semibold text-9xl text-transparent bg-gradient-to-r from-brand to-point bg-clip-text whitespace-nowrap'>Top Fashion Brand</h1>
                <div className='w-1/3 flex justify-end pr-10 pb-16'>
                    <p className='w-2/3 text-right '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod aliquid ab eos doloremque distinctio laboriosam quaerat, consectetur fugit quis ut aspernatur impedit. Unde tempore similique placeat quae fugiat quisquam?</p>
                </div>
                <div className='w-1/3 z-0 max-h-[52rem]'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className='mySwiper swiper1 rounded-tl-full rounded-tr-full'
                    >
                        <SwiperSlide className='flex justify-center align-middle max-h-[48rem]'><img src={main_1_1} alt='' className='object-cover'/></SwiperSlide>
                        <SwiperSlide className='flex justify-center align-middle max-h-[48rem]'><img src={main_1_2} alt='' className='object-cover'/></SwiperSlide> 
                        <SwiperSlide className='flex justify-center align-middle max-h-[48rem]'><img src={main_1_3} alt='' className='object-cover'/></SwiperSlide> 
                    </Swiper>
                </div>
                <div className='w-1/3'>
                    <div className='animate-opacity flex'>
                        <Button text='show now' className='align-bottom ml-10 w-36 font-basic' />
                        <div className='flex ml-0.5 w-0.5 bg-point'></div>
                    </div>
                    <div className='flex text-brand items-end justify-end mr-10 mb-16'>
                        <div className='animate-bounce flex flex-col items-center'>
                            <p className="text-sm [writing-mode:vertical-lr] whitespace-nowrap rotate-180 mb-2">SCROLL DOWN</p>
                            <span className='[writing-mode:vertical-lr]'><HiOutlineChevronDoubleDown /></span>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='text-center mt-48'> 
                <h1 className='text-4xl font-brand font-semibold mb-3'>Our Products</h1>
                <p className='opacity-80 mb-10'>Meet our bestsellers</p>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="mySwiper swiper2 max-w-screen-2xl"
                    >
                    { itemsToShow && itemsToShow.map((product, index) => (
                        <SwiperSlide key={index} className='flex justify-center align-middle pb-24'>
                            <ProductCard key={product.id} product={product}/>
                        </SwiperSlide>
                    )  
                    )}
                </Swiper>
                <Button text='more products' className='mt-5'/>
            </section>

            <section className='flex bg-brand text-white font-semibold py-4 my-20 font-brand overflow-hidden flex-nowrap'>
                <div className='flex animate-slide justify-center text-xl whitespace-nowrap'>
                    <div className='flex'>
                        <p className='text-center flex items-center'>NEW COLLECTION FOR FALL-WINTER 2023/24<span className='mx-5 text-point text-center'><TbJewishStarFilled /></span></p> 
                        <p className='text-center flex items-center'>NEW COLLECTION FOR FALL-WINTER 2023/24<span className='mx-5 text-point text-center'><TbJewishStarFilled /></span></p> 
                        <p className='text-center flex items-center'>NEW COLLECTION FOR FALL-WINTER 2023/24<span className='mx-5 text-point text-center'><TbJewishStarFilled /></span></p>
                        <p className='text-center flex items-center'>NEW COLLECTION FOR FALL-WINTER 2023/24<span className='mx-5 text-point text-center'><TbJewishStarFilled /></span></p>
                    </div>
                    <div className='flex'>
                        <p className='text-center flex items-center'>NEW COLLECTION FOR FALL-WINTER 2023/24<span className='mx-5 text-point text-center'><TbJewishStarFilled /></span></p> 
                        <p className='text-center flex items-center'>NEW COLLECTION FOR FALL-WINTER 2023/24<span className='mx-5 text-point text-center'><TbJewishStarFilled /></span></p> 
                        <p className='text-center flex items-center'>NEW COLLECTION FOR FALL-WINTER 2023/24<span className='mx-5 text-point text-center'><TbJewishStarFilled /></span></p>
                        <p className='text-center flex items-center'>NEW COLLECTION FOR FALL-WINTER 2023/24<span className='mx-5 text-point text-center'><TbJewishStarFilled /></span></p>
                    </div>
                </div>
            </section>



            <section className='relative flex items-center px-40 justify-end my-10 py-10'>
                <div className='w-1/2 absolute mr-72 float-left'>
                    <p><b>DEAL</b> OF THE WEEK</p>
                    <h1 className='relative text-7xl font-brand font-semibold opacity-80 my-10 z-20'>Stay Warm and Trendy</h1>
                    <div>
                        <Timer />
                    </div>
                    <Button text='Shop Now' className='mt-10'/>
                </div>
                <div className='relative w-1/2'>
                    <div className='absolute border-4 border-brand bottom-10 right-10 w-full h-[48rem] opacity-80 z-0'></div>
                    <img src={main_1_1} alt='' className='relative object-cover h-[48rem] w-full z-10 shadow-lg'/>
                </div>
            </section>

            <section className='flex px-10'>
                <div className='p-3 m-10'>
                    <FaShippingFast className='text-point w-16 h-16'/>
                    <h1 className='my-5 text-lg font-semibold'>FREE SHIPPING</h1>
                    <div className='w-full h-0.5 bg-brand mt-3 mb-5'></div>
                    <p className='opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum id, reprehenderit voluptate excepturi dolore fuga dolor incidunt voluptatem, corrupti esse consequuntur praesentium distinctio aut blanditiis? Nemo et mollitia possimus.</p>
                </div>
                <div className='p-3 m-10'>
                    <AiFillCustomerService className='text-point w-16 h-16' />
                    <h1 className='my-5 text-lg font-semibold'>7/24 CUSTOMER SERVICE</h1>
                    <div className='w-full h-0.5 bg-brand mt-3 mb-5'></div>
                    <p className='opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum id, reprehenderit voluptate excepturi dolore fuga dolor incidunt voluptatem, corrupti esse consequuntur praesentium distinctio aut blanditiis? Nemo et mollitia possimus.</p>
                </div>
                <div className='p-3 m-10'>
                    <FaMoneyBillWave className='text-point w-16 h-16' />
                    <h1 className='my-5 text-lg font-semibold'>REASONABLE PRICE</h1>
                    <div className='w-full h-0.5 bg-brand mt-3 mb-5'></div>
                    <p className='opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum id, reprehenderit voluptate excepturi dolore fuga dolor incidunt voluptatem, corrupti esse consequuntur praesentium distinctio aut blanditiis? Nemo et mollitia possimus.</p>
                </div>
            </section>

            <section className='w-full my-28'>
                <div className='flex flex-col h-80 justify-center items-center bg-banner grayscale bg-fixed bg-cover bg-no-repeat'>
                    <p className='mb-5 uppercase font-semibold opacity-70'>our blog</p>
                    <h1 className='text-2xl mb-10 uppercase'>you want to dress better, but don't know where to start?</h1>
                    <Button text='click here' className='whitespace-nowrap bg-transparent border-2 uppercase' />
                </div>
            </section>

            <section className='flex text-center mx-28 my-36'>
                <div className='flex flex-col w-1/3 h-196 items-center mx-12'>
                    <div className='relative flex w-full h-full'>
                        <div className='absolute bg-womenImg w-full h-full scale-95 left-3 top-3 bg-center bg-cover z-10'></div>
                        <div className='absolute bg-brand w-full h-full scale-95 right-3 bottom-3 z-0'></div>
                    </div>
                    <h1 className='uppercase font-semibold text-xl mt-7 mb-5'>women</h1>
                    <p className='opacity-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, et recusandae temporibus rerum possimus libero commodi sequi quisquam ex numquam fugit ea dolorem modi. Molestias beatae provident unde enim nam!</p>
                    <Link to='/products/women' className='flex align-middle items-center mt-5 hover:scale-105 transition-transform ease-linear'>
                        <p className='uppercase font-semibold mr-2'>shop now</p>
                        <AiOutlineArrowRight className='text-xl'/>
                    </Link>
                </div>
                <div className='flex flex-col w-1/3 h-196 items-center mx-12'>
                    <div className='relative flex w-full h-full'>
                        <div className='absolute bg-menImg w-full h-full scale-95 left-3 top-3 bg-center bg-cover z-10'></div>
                        <div className='absolute bg-brand w-full h-full scale-95 right-3 bottom-3 z-0'></div>
                    </div>
                    <h1 className='uppercase font-semibold text-xl mt-7 mb-5'>men</h1>
                    <p className='opacity-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, et recusandae temporibus rerum possimus libero commodi sequi quisquam ex numquam fugit ea dolorem modi. Molestias beatae provident unde enim nam!</p>
                    <Link to='/products/men' className='flex align-middle items-center mt-5 hover:scale-105 transition-transform ease-linear'>
                        <p className='uppercase font-semibold mr-2'>shop now</p>
                        <AiOutlineArrowRight className='text-xl'/>
                    </Link>
                </div>
                <div className='flex flex-col w-1/3 h-196 items-center mx-12'>
                    <div className='relative flex w-full h-full'>
                        <div className='absolute bg-accessoriesImg w-full h-full scale-95 left-3 top-3 bg-center bg-cover z-10'></div>
                        <div className='absolute bg-brand w-full h-full scale-95 right-3 bottom-3 z-0'></div>
                    </div>
                    <h1 className='uppercase font-semibold text-xl mt-7 mb-5'>accessories</h1>
                    <p className='opacity-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, et recusandae temporibus rerum possimus libero commodi sequi quisquam ex numquam fugit ea dolorem modi. Molestias beatae provident unde enim nam!</p>
                    <Link to='/products/accessories' className='flex align-middle items-center mt-5 hover:scale-105 transition-transform ease-linear'>
                        <p className='uppercase font-semibold mr-2'>shop now</p>
                        <AiOutlineArrowRight className='text-xl'/>
                    </Link>
                </div>
            </section>

            <section className='w-full'>
                <div className='flex flex-col h-72 justify-center items-center bg-beige bg-fixed bg-cover bg-no-repeat'>
                    <p className='mb-5 uppercase font-semibold opacity-70'>our news letter</p>
                    <h1 className='text-2xl mb-5 uppercase'>be the first to know about new collections and exclusive offers.</h1>
                    <div className='flex border-brand border-2 items-center w-1/5 mt-5'>
                        <input type='email' placeholder='Email' className='text-sm w-full mr-2 pr-3 my-1 bg-transparent border-transparent focus:border-transparent focus:ring-0'/>
                        <div className='scale-125 mr-3 hover:cursor-pointer'><BsSend /></div>
                    </div>
                </div>
            </section>
        </section>
    );
}
