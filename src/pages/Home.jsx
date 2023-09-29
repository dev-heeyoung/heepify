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
import RevealOnScroll from './RevealOnScroll'

export default function Home() {
    const NUM_OF_ITEM_TO_SHOW = 10;
    const { productsQuery: { data } } = useProducts();
    const itemsToShow = data && data.slice(0, NUM_OF_ITEM_TO_SHOW);

    return (
        <section className='relative'>
            {/* Main Section */}
            <section className='animate-opacity relative flex flex-col lg:flex-row m-auto items-end pb-20 pt-20 h-screen'>
                <h1 className='absolute top-7 lg:top-16 z-10 text-center left-1/2 -translate-x-1/2 font-brand font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-gradient-to-r from-brand to-point bg-clip-text whitespace-nowrap'>Top Fashion Brand</h1>
                <div className='w-full lg:w-1/4 flex justify-center lg:justify-end pr-0 pb-10 mt-7 md:mt-10'>
                    <p className='px-10 text-center lg:text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quod aliquid ab eos doloremque distinctio laboriosam quaerat, consectetur fugit quis ut aspernatur impedit. </p>
                </div>
                <div className='w-full lg:w-2/4 z-0 px-10'>
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
                        className='mySwiper swiper1 rounded-tl-full rounded-tr-full border-2 border-transparent ring-2 ring-point'
                    >
                        <SwiperSlide className='flex justify-center align-middle max-h-[48rem]'><img src={main_1_1} alt='' className='object-cover'/></SwiperSlide>
                        <SwiperSlide className='flex justify-center align-middle max-h-[48rem]'><img src={main_1_2} alt='' className='object-cover'/></SwiperSlide> 
                        <SwiperSlide className='flex justify-center align-middle max-h-[48rem]'><img src={main_1_3} alt='' className='object-cover'/></SwiperSlide> 
                    </Swiper>
                </div>
                <div className='w-full h-full lg:h-fit lg:w-1/4 absolute lg:relative'>
                    <div className='animate-opacity flex absolute right-5 top-36 lg:top-0 lg:relative mb-16'>
                        <Button text='show now' className='ml-10 w-36' />
                        <div className='flex ml-0.5 w-0.5 bg-point'></div>
                    </div>
                    <div className='flex w-full h-4/5 items-end justify-end pr-3 lg:pr-5 mb-5'>
                        <div className='animate-bounce flex flex-col items-center'>
                            <p className="text-sm block [writing-mode:vertical-lr] whitespace-nowrap rotate-180 mb-2">SCROLL DOWN</p>
                            <span className='[writing-mode:vertical-lr]'><HiOutlineChevronDoubleDown /></span>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Products */}
            <RevealOnScroll>
                <section className='text-center mt-24 px-10'> 
                    <h1 className='text-4xl font-brand font-semibold mb-3'>Our Products</h1>
                    <p className='opacity-80 mb-10'>Meet our bestsellers</p>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        freeMode={true}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            0: {
                            slidesPerView: 1,
                            },
                            640: {
                            slidesPerView: 2,
                            },
                            768: {
                            slidesPerView: 3,
                            },
                            1024: {
                            slidesPerView: 4,
                            },
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
            </RevealOnScroll>

            {/* Text Slider */}
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

            {/* Deal of the week */}
            <RevealOnScroll>
                <section className='relative flex items-center px-10 md:px-20 justify-end my-10 py-10'>
                    <div className='w-1/2 absolute left-10 md:left-36'>
                        <p><b>DEAL</b> OF THE WEEK</p>
                        <h1 className='relative text-7xl font-brand font-semibold opacity-80 my-10 z-20'>Stay Warm and Trendy</h1>
                        <div className=''>
                            <Timer />
                        </div>
                        <Button text='Shop Now' className='mt-10'/>
                    </div>
                    <div className='relative w-1/2'>
                        <div className='absolute border-4 border-brand bottom-5 right-5 w-full h-128 md:h-160 opacity-80 z-0'></div>
                        <img src={main_1_1} alt='' className='relative object-cover h-128 md:h-160 w-full z-10 shadow-lg'/>
                    </div>
                </section>
            </RevealOnScroll>
            
            {/* Benefit */}
            <RevealOnScroll>
                <section className='grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-20 px-20 py-20'>
                    <div>
                        <FaShippingFast className='text-point text-5xl md:text-6xl'/>
                        <h1 className='my-3 text-lg font-semibold whitespace-nowrap'>FREE SHIPPING</h1>
                        <div className='w-full h-0.5 bg-brand mt-3 mb-5'></div>
                        <p className='opacity-70 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum id, reprehenderit voluptate excepturi dolore fuga dolor incidunt voluptatem, corrupti esse consequuntur praesentium distinctio aut blanditiis? Nemo et mollitia possimus.</p>
                    </div>
                    <div>
                        <AiFillCustomerService className='text-point text-5xl md:text-6xl' />
                        <h1 className='my-3 text-lg font-semibold whitespace-nowrap'>7/24 CUSTOMER SERVICE</h1>
                        <div className='w-full h-0.5 bg-brand mt-3 mb-5'></div>
                        <p className='opacity-70 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum id, reprehenderit voluptate excepturi dolore fuga dolor incidunt voluptatem, corrupti esse consequuntur praesentium distinctio aut blanditiis? Nemo et mollitia possimus.</p>
                    </div>
                    <div>
                        <FaMoneyBillWave className='text-point text-5xl md:text-6xl' />
                        <h1 className='my-3 text-lg font-semibold whitespace-nowrap'>REASONABLE PRICE</h1>
                        <div className='w-full h-0.5 bg-brand mt-3 mb-5'></div>
                        <p className='opacity-70 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum id, reprehenderit voluptate excepturi dolore fuga dolor incidunt voluptatem, corrupti esse consequuntur praesentium distinctio aut blanditiis? Nemo et mollitia possimus.</p>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Banner1 */}
            <section className='w-full my-20'>
                <div className='flex flex-col text-center h-80 justify-center items-center bg-banner grayscale bg-fixed bg-cover bg- bg-no-repeat p-10'>
                    <p className='mb-5 uppercase font-semibold opacity-70'>our blog</p>
                    <h1 className='text-2xl mb-10 uppercase'>you want to dress better, but don't know where to start?</h1>
                    <Button text='click here' className='whitespace-nowrap bg-transparent border-2 uppercase hover:bg-brand' />
                </div>
            </section>

            {/* Category Introduction */}
            <RevealOnScroll>
                <section className='grid grid-cols-1 md:grid-cols-3 gap-20 text-center mx-20 my-36'>
                    <div className='flex flex-col h-160 md:h-196 items-center'>
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
                    <div className='flex flex-col h-160 md:h-196 items-center'>
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
                    <div className='flex flex-col h-160 md:h-196 items-center'>
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
            </RevealOnScroll>

            {/* Banner2 */}
            <section className='w-full'>
                <div className='flex flex-col text-center h-72 justify-center items-center bg-beige bg-fixed bg-cover bg-no-repeat p-10'>
                    <p className='mb-5 uppercase font-semibold opacity-70'>our news letter</p>
                    <h1 className='text-2xl mb-5 uppercase flex-wrap'>be the first to know about new collections and exclusive offers.</h1>
                    <div className='flex border-brand border-2 items-center w-full md:w-1/5 mt-5'>
                        <input type='email' placeholder='Email' className='text-sm w-full mr-2 pr-3 my-1 bg-transparent border-transparent focus:border-transparent focus:ring-0'/>
                        <div className='scale-125 mr-3 hover:cursor-pointer'><BsSend /></div>
                    </div>
                </div>
            </section>
        </section>
    );
}
