import { FaFacebookF, FaInstagram } from "react-icons/fa";
import BannerHook from "../hook/BannerHook";
import { FaXTwitter } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router';
import NewsLetter from './Home1/NewsLetter';
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";

const SingleBlog = () => {
    return (
        <div className="space-y-28">
            <BannerHook first={'Restoring'} text1={'health'} text2={'prevision &'} last={'care'} />
            <div className="max-w-[1320px] mx-auto px-3 2xl:px-0">
                <img data-aos='zoom-in' className="w-full" src="https://i.ibb.co.com/tTQPXgd1/Image-7.png" alt="" />
                <p className="font-medium prime flex items-center gap-x-6 mt-6">
                    <span className="flex items-center gap-x-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.468788 13.1562H2.81253V14.5625C2.81253 14.8213 3.02241 15.0312 3.28128 15.0312H15.5313C15.7901 15.0312 16 14.8213 16 14.5625V2.375C16 2.11612 15.7901 1.90625 15.5313 1.90625H13.1875V1.4375C13.1875 1.17862 12.9776 0.96875 12.7188 0.96875C12.4599 0.96875 12.25 1.17862 12.25 1.4375V1.90625H9.87502V1.4375C9.87502 1.17862 9.66514 0.96875 9.40627 0.96875C9.1474 0.96875 8.93752 1.17862 8.93752 1.4375V1.90625H6.59378V1.4375C6.59378 1.17862 6.3839 0.96875 6.12503 0.96875C5.86615 0.96875 5.65628 1.17862 5.65628 1.4375V1.90625H3.28128C3.02241 1.90625 2.81253 2.11612 2.81253 2.375V5.18749C2.81253 8.64217 1.37676 11.2999 0.168695 12.3274C0.0170703 12.4537 -0.0391483 12.6615 0.0280078 12.8471C0.0952264 13.0326 0.271414 13.1562 0.468788 13.1562ZM15.0625 14.0937H3.75003V13.1562H12.7188C12.8284 13.1562 12.9346 13.1178 13.0189 13.0476C13.5824 12.5782 14.4552 11.4608 15.0625 10.0296V14.0937ZM3.75003 2.84375H5.65628V3.3125C5.65628 3.57137 5.86615 3.78124 6.12503 3.78124C6.3839 3.78124 6.59378 3.57137 6.59378 3.3125V2.84375H8.93752V3.3125C8.93752 3.57137 9.1474 3.78124 9.40627 3.78124C9.66514 3.78124 9.87502 3.57137 9.87502 3.3125V2.84375H12.25V3.3125C12.25 3.57137 12.4599 3.78124 12.7188 3.78124C12.9776 3.78124 13.1875 3.57137 13.1875 3.3125V2.84375H15.0625V4.71874H3.75003V2.84375ZM3.742 5.65593H15.0542C14.9486 8.62952 13.8073 10.9691 12.535 12.2187H1.535C2.97666 10.3818 3.66466 7.99005 3.742 5.65593Z" fill="#3D68F5" />
                        </svg>
                        20 December 2024
                    </span>
                    <span className="flex items-center gap-x-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6667 2.66667H11.9327C11.6227 1.14733 10.276 0 8.66667 0H3.33333C1.49533 0 0 1.49533 0 3.33333V11.9027C0 12.432 0.29 12.916 0.756 13.1653C0.968 13.2793 1.20067 13.3353 1.43267 13.3353C1.71 13.3353 1.98667 13.2547 2.226 13.0953L4.19267 11.784C4.65333 13.074 5.88667 14 7.33333 14H11.1313L13.774 15.762C14.014 15.922 14.29 16.0027 14.5673 16.0027C14.7993 16.0027 15.0313 15.946 15.244 15.832C15.7107 15.5827 16 15.0987 16 14.5693V6C16 4.162 14.5047 2.66667 12.6667 2.66667ZM1.48667 11.986C1.474 11.994 1.43667 12.018 1.38533 11.9907C1.33267 11.9627 1.33267 11.918 1.33267 11.9033V3.33333C1.33267 2.23067 2.23 1.33333 3.33267 1.33333H8.666C9.76867 1.33333 10.666 2.23067 10.666 3.33333V8C10.666 9.10267 9.76867 10 8.666 10H4.666C4.448 10 4.30533 10.106 4.28933 10.1167L1.48667 11.986ZM14.6667 14.57C14.6667 14.584 14.6667 14.6293 14.614 14.6573C14.5613 14.6847 14.5253 14.6607 14.5133 14.6527L11.7033 12.7787C11.594 12.706 11.4653 12.6667 11.3333 12.6667H7.33333C6.464 12.6667 5.72333 12.1093 5.448 11.3333H8.66667C10.5047 11.3333 12 9.838 12 8V4H12.6667C13.7693 4 14.6667 4.89733 14.6667 6V14.57Z" fill="#3D68F5" />
                        </svg>
                        Comments
                    </span>
                </p>
                <h4 className="black font-semibold text-[48px]">Comprehensive dental care for all ages.</h4>
                <div className="mt-3 space-y-6">
                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>

                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>

                    <ol className="prime leading-[180%] ml-4" style={{ listStyleType: 'decimal' }}>
                        <li> Lorem ipsum odor amet, consectetuer adipiscing elit.</li>
                        <li> Porttitor a consequat hendrerit est, tortor finibus ridiculus cras.</li>
                        <li> Phasellus aliquet litora commodo aptent; potenti suspendisse</li>
                        <li> Taciti condimentum. Maximus per donec lectus erat vel accumsan.</li>
                        <li> Sem sagittis hac risus nisi magna imperdiet nullam.</li>
                    </ol>

                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>

                    <h4 className="font-semibold text-[48px] black leading-[114.99999999999999%]">We take a patient-first approach, ensuring that every treatment plan is customized to meet your specific needs.</h4>

                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                    <div className="flex lg:flex-row flex-col justify-between items-center gap-12">
                        <img data-aos='fade-left' className="w-full" src="https://i.ibb.co.com/yczCBjDq/1.png" alt="" />
                        <img data-aos='fade-right' className="w-full" src="https://i.ibb.co.com/jvS1KgRt/2.png" alt="" />
                    </div>
                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                    <div className="bg-[#F5FAFE] rounded-lg p-6 px-12 black flex lg:flex-row flex-col gap-y-6 justify-between">
                        <p className="text-[24px] font-semibold">Share Post:</p>
                        <div className="flex gap-x-4 items-center">
                            <div data-aos='fade-up' className="w-[48px] h-[48px] rounded-full hover:bg-[#020F33] hover:text-white tra cursor-pointer flex items-center justify-center border border-[#0000001F]">
                                <FaFacebookF />
                            </div>
                            <div data-aos='fade-up' data-aos-delay={400} className="w-[48px] h-[48px] rounded-full hover:bg-[#020F33] hover:text-white tra cursor-pointer flex items-center justify-center border border-[#0000001F]">
                                <FaXTwitter />
                            </div>
                            <div data-aos='fade-up' data-aos-delay={600} className="w-[48px] h-[48px] rounded-full hover:bg-[#020F33] hover:text-white tra cursor-pointer flex items-center justify-center border border-[#0000001F]">
                                <FaInstagram />
                            </div>
                            <div data-aos='fade-up' data-aos-delay={800} className="w-[48px] h-[48px] rounded-full hover:bg-[#020F33] hover:text-white tra cursor-pointer flex items-center justify-center border border-[#0000001F]">
                                <LuYoutube className="text-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#EAECF0] h-[1px] w-full my-16"></div>
                </div>
                <div className=''>
                    <div className='flex lg:flex-row flex-col justify-between items-center'>
                        <h4 className='font-semibold text-[48px] black'>Related Post</h4>
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
                        slidesPerView={window.innerWidth<900?1:3}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                            nextEl: '#ne',
                            prevEl: '#pr'
                        }}
                        modules={[Navigation]}
                        className=" mt-12"
                    >
                        <SwiperSlide><div className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                            <img src="https://i.imgur.com/DW6kiPL.png" alt="" />
                            <div className="flex items-center gap-x-4">
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                            </div>
                            <h4 className="text-[20px] font-semibold black leading-[155%]">The ultimate guide to maintaining a healthy lifestyle in a busy world</h4>
                            <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                            <img src="https://i.imgur.com/1acobkC.png" alt="" />
                            <div className="flex items-center gap-x-4">
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                            </div>
                            <h4 className="text-[20px] font-semibold black leading-[155%]">Effective ways to improve mental health and reduce daily stress</h4>
                            <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                            <img src="https://i.imgur.com/aYWTT1H.png" alt="" />
                            <div className="flex items-center gap-x-4">
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                            </div>
                            <h4 className="text-[20px] font-semibold black leading-[155%]">Top nutrition tips to boost immunity and stay energized every day</h4>
                            <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                            <img src="https://i.imgur.com/DW6kiPL.png" alt="" />
                            <div className="flex items-center gap-x-4">
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                            </div>
                            <h4 className="text-[20px] font-semibold black leading-[155%]">The ultimate guide to maintaining a healthy lifestyle in a busy world</h4>
                            <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                            <img src="https://i.imgur.com/1acobkC.png" alt="" />
                            <div className="flex items-center gap-x-4">
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                            </div>
                            <h4 className="text-[20px] font-semibold black leading-[155%]">Effective ways to improve mental health and reduce daily stress</h4>
                            <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                            <img src="https://i.imgur.com/aYWTT1H.png" alt="" />
                            <div className="flex items-center gap-x-4">
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                            </div>
                            <h4 className="text-[20px] font-semibold black leading-[155%]">Top nutrition tips to boost immunity and stay energized every day</h4>
                            <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <NewsLetter />
        </div>
    );
};

export default SingleBlog;