import React from 'react';
import BannerHook from '../hook/BannerHook';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import NewsLetter from './Home1/NewsLetter';

const SpecialCase = () => {
    return (
        <div className='space-y-24'>
            <BannerHook first={'Life saving'} text1={'heart'} text2={'surgery'} last={'cases'} />
            <div className='max-w-[1320px] mx-auto px-3 2xl:px-0 space-y-24'>
                <img data-aos='zoom-in' className='w-full' src="https://i.ibb.co.com/XxfdbBwn/Image.png" alt="" />
                <div className='mt-16 lg:grid space-y-6 grid-cols-3'>
                    <div data-aos='fade-left' className='bg-[#F5FAFE] rounded-xl border border-[#EAECF0] p-12 w-[370px] h-[450px]'>
                        <p className='prime'>Category</p>
                        <h6 className='font-semibold text-[20px] black py-3 border-b border-[#020F3317]'>Health & Wellness</h6>
                        <p className='prime mt-5'>Patients</p>
                        <h6 className='font-semibold text-[20px] black py-3 border-b border-[#020F3317]'>Leslie Alexander</h6>
                        <p className='prime mt-5'>Medical charge</p>
                        <h6 className='font-semibold text-[20px] black py-3 border-b border-[#020F3317]'>$4,000.00</h6>
                        <p className='prime mt-5'>Date</p>
                        <h6 className='font-semibold text-[20px] black py-3'>06 November 2024</h6>
                    </div>
                    <div data-aos='fade-right' className='w-full lg:col-span-2'>
                        <div className='space-y-5'>
                            <h3 className='font-semibold text-[48px] black'>Transforming lives through expert cardiac care</h3>
                            <p className='prime leading-[180%]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                            <p className='prime leading-[180%]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                            <p className='prime leading-[180%]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                        </div>
                        <div className='mt-8 space-y-6'>
                            <h4 className='black text-[48px] font-semibold'>Innovative techniques</h4>
                            <div className='flex lg:flex-row flex-col gap-y-6 justify-between items-start gap-x-4'>
                                <div>
                                    <p className='py-0.5 px-2 text-white bg-[#3D68F5] w-fit rounded-sm font-bold text-[12px]'>STEP ONE</p>
                                    <p className='prime leading-[180%] mt-2'>Elementum purus nascetur tristique fames pretium quisque dictumst non. Elit vestibulum nisl vehicula mus lectus; ullamcorper justo nec. Finibus nunc consectetur lectus pellentesque fringilla nibh parturient.</p>
                                    <p className='py-0.5 px-2 mt-10 text-white bg-[#3D68F5] w-fit rounded-sm font-bold text-[12px]'>STEP ONE</p>
                                    <p className='prime leading-[180%] mt-2'>Elementum purus nascetur tristique fames pretium quisque dictumst non. Elit vestibulum nisl vehicula mus lectus; ullamcorper justo nec. Finibus nunc consectetur lectus pellentesque fringilla nibh parturient.</p>
                                    <p className='py-0.5 px-2 mt-10 text-white bg-[#3D68F5] w-fit rounded-sm font-bold text-[12px]'>STEP ONE</p>
                                    <p className='prime leading-[180%] mt-2'>Elementum purus nascetur tristique fames pretium quisque dictumst non. Elit vestibulum nisl vehicula mus lectus; ullamcorper justo nec. Finibus nunc consectetur lectus pellentesque fringilla nibh parturient.</p>
                                </div>
                                <img src="https://i.ibb.co.com/9m30g0zR/Frame-1000009414.png" alt="" />
                            </div>
                        </div>
                        <div className='mt-12'>
                            <h4 className='black font-semibold text-[48px]'>Final results of the case</h4>
                            <p className='prime leading-[180%]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi.</p>
                            <p className='prime leading-[180%]'>Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi.</p>
                        </div>
                        <div className='mt-12'>
                            <h4 className='black font-semibold text-[48px]'>Those involve with the case</h4>
                            <Swiper
                                slidesPerView={window.innerWidth<900?1:3}
                                spaceBetween={window.innerWidth<900?15:30}
                                loop={true}
                                navigation={{
                                    nextEl: '#nextttttt',
                                    prevEl: '#previous'
                                }}
                                modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false
                                }}
                                className='lg:w-full w-[70%] lg:mt-0 mt-12'
                            >
                                <SwiperSlide>
                                    <div className="relative">
                                        <img className={`w-[277px] h-[357px] rounded-xl bg-white border border-[#E0E2E7]`} src="https://i.ibb.co.com/n8PH0PN0/doc.png" alt="" />
                                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                                            <h5 className="font-semibold text-[24px]">Dr. Alex Dolmand</h5>
                                            <p>Designation</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide> <div className="relative">
                                    <img className={`w-[277px] h-[357px] rounded-xl bg-white border border-[#E0E2E7]`} src="https://i.ibb.co.com/mrwpNcRR/doc2.png" alt="" />
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                                        <h5 className="font-semibold text-[24px]">Dr. Leslie Alexander</h5>
                                        <p>Designation</p>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="relative">
                                    <img className={`w-[277px] h-[357px] rounded-xl bg-white border border-[#E0E2E7]`} src="https://i.ibb.co.com/cXxb7rtX/doc3.png" alt="" />
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                                        <h5 className="font-semibold text-[24px]">Dr. Guy Hawkins</h5>
                                        <p>Designation</p>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative">
                                        <img className={`w-[277px] h-[357px] rounded-xl bg-white border border-[#E0E2E7]`} src="https://i.ibb.co.com/n8PH0PN0/doc.png" alt="" />
                                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                                            <h5 className="font-semibold text-[24px]">Dr. Alex Dolmand</h5>
                                            <p>Designation</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide> <div className="relative">
                                    <img className={`w-[277px] h-[357px] rounded-xl bg-white border border-[#E0E2E7]`} src="https://i.ibb.co.com/mrwpNcRR/doc2.png" alt="" />
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                                        <h5 className="font-semibold text-[24px]">Dr. Leslie Alexander</h5>
                                        <p>Designation</p>
                                    </div>
                                </div></SwiperSlide>
                                <SwiperSlide><div className="relative">
                                    <img className={`w-[277px] h-[357px] rounded-xl bg-white border border-[#E0E2E7]`} src="https://i.ibb.co.com/cXxb7rtX/doc3.png" alt="" />
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                                        <h5 className="font-semibold text-[24px]">Dr. Guy Hawkins</h5>
                                        <p>Designation</p>
                                    </div>
                                </div></SwiperSlide>
                            </Swiper>
                            <div className='w-full h-[1px] bg-[#EAECF0] my-16'></div>
                            <div className='flex justify-between items-center'>
                                <button id='previous' className="btn button3 hover:!text-white hover:border-[#020F33] relative overflow-hidden w-[160px] h-[49px] rounded-[100px] border border-[#EAECF0] black font-medium text-[16px] tra"><span className="flex gap-x-2 z-50"><HiArrowNarrowRight className="p-0.5 mr-1 mt-0.5 text-white rounded-full bg-[#020F33] text-xl flex items-center justify-center rotate-180" /> Previous</span></button>
                                <button id='nextttttt' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra hover:bg-white hover:text-[#3D68F5]"><span className="flex gap-x-2 z-50">Next <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex lg:flex-row flex-col justify-between items-center'>
                        <h4 className='font-semibold text-[48px] black'>You may also like</h4>
                        <div className='space-x-7'>
                            <button id='pr' className='btn rounded-full border border-[#EAECF0] hover:border-[#3D68F5] black hover:!text-[#3D68F5] tra bg-transparent w-[60px] h-[60px]'>
                                <svg className='' width="14" height="12" viewBox="0 0 14 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-1.90735e-06 6.00007C0.00486469 5.47397 0.216843 4.97097 0.589998 4.60007L4.88 0.30007C5.06736 0.113819 5.32081 0.00927734 5.585 0.00927734C5.84918 0.00927734 6.10264 0.113819 6.29 0.30007C6.38373 0.393033 6.45812 0.503634 6.50889 0.625494C6.55966 0.747353 6.5858 0.878058 6.5858 1.01007C6.5858 1.14208 6.55966 1.27279 6.50889 1.39465C6.45812 1.51651 6.38373 1.62711 6.29 1.72007L3 5.00007H13C13.2652 5.00007 13.5196 5.10543 13.7071 5.29296C13.8946 5.4805 14 5.73485 14 6.00007C14 6.26529 13.8946 6.51964 13.7071 6.70718C13.5196 6.89471 13.2652 7.00007 13 7.00007H3L6.29 10.2901C6.4783 10.477 6.58462 10.7312 6.58556 10.9965C6.58649 11.2619 6.48198 11.5168 6.295 11.7051C6.10802 11.8934 5.8539 11.9997 5.58853 12.0006C5.32317 12.0016 5.0683 11.897 4.88 11.7101L0.589998 7.41007C0.214411 7.03672 0.00223064 6.52965 -1.90735e-06 6.00007Z" />
                                </svg>
                            </button>
                            <button id='ne' className='btn rounded-full border border-[#EAECF0] hover:border-[#3D68F5] black hover:!text-[#3D68F5] tra bg-transparent w-[60px] h-[60px] rotate-180'>
                                <svg className='' width="14" height="12" viewBox="0 0 14 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-1.90735e-06 6.00007C0.00486469 5.47397 0.216843 4.97097 0.589998 4.60007L4.88 0.30007C5.06736 0.113819 5.32081 0.00927734 5.585 0.00927734C5.84918 0.00927734 6.10264 0.113819 6.29 0.30007C6.38373 0.393033 6.45812 0.503634 6.50889 0.625494C6.55966 0.747353 6.5858 0.878058 6.5858 1.01007C6.5858 1.14208 6.55966 1.27279 6.50889 1.39465C6.45812 1.51651 6.38373 1.62711 6.29 1.72007L3 5.00007H13C13.2652 5.00007 13.5196 5.10543 13.7071 5.29296C13.8946 5.4805 14 5.73485 14 6.00007C14 6.26529 13.8946 6.51964 13.7071 6.70718C13.5196 6.89471 13.2652 7.00007 13 7.00007H3L6.29 10.2901C6.4783 10.477 6.58462 10.7312 6.58556 10.9965C6.58649 11.2619 6.48198 11.5168 6.295 11.7051C6.10802 11.8934 5.8539 11.9997 5.58853 12.0006C5.32317 12.0016 5.0683 11.897 4.88 11.7101L0.589998 7.41007C0.214411 7.03672 0.00223064 6.52965 -1.90735e-06 6.00007Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={window.innerWidth<900?1:2}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                            nextEl: '#ne',
                            prevEl: '#pr'
                        }}
                        modules={[Navigation]}
                        className=" mt-12"
                    >
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/5XGjnqFz/1.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/9k45bNrK/2.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/Kj4dR2Wr/3.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/x0S62Ym/1.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/CxVqDFv/2.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/Q7XrQwmL/3.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/B2XpDqG8/1-1.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/Q7FCwvdv/2-1.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="relative">
                            <img src="https://i.ibb.co.com/QFkJTb80/3-1.png" alt="" />
                            <div className="absolute bottom-[30px] left-[30px]">
                                <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[161px] h-[47px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
                <NewsLetter />
            </div>
        </div>
    );
};

export default SpecialCase;