import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import Navbar2 from "../../Components/Navbar2";
import { FiPhoneCall } from "react-icons/fi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaFacebookF, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
const Hero2 = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="h-[750px] lg:h-[850px] relative "
        >
            <SwiperSlide className=""><div className="h-full bg-[url(https://i.imgur.com/d949y7T.jpeg)] bg-center bg-cover w-full"></div></SwiperSlide>
            <SwiperSlide className=""><div className="h-full bg-[url(https://i.imgur.com/d949y7T.jpeg)] bg-center bg-cover w-full"></div></SwiperSlide>
            <SwiperSlide className=""><div className="h-full bg-[url(https://i.imgur.com/d949y7T.jpeg)] bg-center bg-cover w-full"></div></SwiperSlide>
            <SwiperSlide className=""><div className="h-full bg-[url(https://i.imgur.com/d949y7T.jpeg)] bg-center bg-cover w-full"></div></SwiperSlide>
            <SwiperSlide className=""><div className="h-full bg-[url(https://i.imgur.com/d949y7T.jpeg)] bg-center bg-cover w-full"></div></SwiperSlide>
            <div className="bg-[#001930A1] w-full h-full pt-4 absolute top-0 left-0 z-100">
            <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 relative z-100">
                <div className="absolute top-[520px] lg:top-64 right-1/2 translate-1/2 lg:translate-0 lg:right-3 2xl:right-0 flex flex-col items-center gap-y-2 z-100">
                    <div className="bg-[#FFFFFF2E] h-[60px] w-[1px] lg:block hidden"></div>
                    <div className="flex lg:flex-col items-center gap-2">
                        <Link className="w-[48px] h-[48px] rounded-full bg-transparent border border-[#FFFFFF33] hover:text-[#ffffff99] cursor-pointer tra text-sm flex justify-center items-center text-white"><FaFacebookF /></Link>
                        <Link className="w-[48px] h-[48px] rounded-full bg-transparent border border-[#FFFFFF33] hover:text-[#ffffff99] cursor-pointer tra text-sm flex justify-center items-center text-white"><FaSkype /></Link>
                        <Link className="w-[48px] h-[48px] rounded-full bg-transparent border border-[#FFFFFF33] hover:text-[#ffffff99] cursor-pointer tra text-sm flex justify-center items-center text-white"><FaTwitter /></Link>
                        <Link className="w-[48px] h-[48px] rounded-full bg-transparent border border-[#FFFFFF33] hover:text-[#ffffff99] cursor-pointer tra text-sm flex justify-center items-center text-white"><FaLinkedin /></Link>
                    </div>
                    <div className="bg-[#FFFFFF2E] h-[60px] w-[1px] lg:block hidden"></div>
                </div>
            </div>
                <div className="w-[1000px] h-[1000px] left-1/2 -translate-1/2 rounded-full bg-gradient-to-b from-[#ffffff99] to-[#ffffff00] absolute top-48"></div>
                <Navbar2 />
                <div data-aos='fade-up' className='flex flex-col justify-center gap-y-5 px-3 items-center text-white pt-28 lg:pt-40'>
                    <p className="flex lg:flex-row flex-col items-center">Average rating 4.9/5 <span className="flex items-center gap-x-0 text-[#E59E05] mx-1 -mt-0.5"><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarHalf /></span> See our 250 + trusted reviews on Google</p>
                    <h3 className="font-semibold text-center leading-[108%] text-[30px] lg:text-[76px]">Embracing <span className="text-[#2CA784]">Your Wellness</span> <br /> Together Daily with Us.</h3>
                    <p className="lg:w-6/12 text-center leading-[180%]">Logistics ensures the efficient movement of goods, managing transportation, storage, and delivery. It plays a vital role in connecting businesses.</p>
                    <button className="btn button-green relative overflow-hidden w-[246px] h-[57px] rounded-[100px] border border-[#2CA784] bg-white text-white hover:text-[#001930] tra"><span className="flex gap-x-2 z-50">Book An Appointment <HiArrowNarrowRight className="p-0.5 ml-1 text-[#2CA784] rounded-full bg-[#fff] text-xl flex items-center justify-center" /></span></button>
                </div>
                <div className="max-w-[1320px] mx-auto mt-24 lg:mt-32 px-3 2xl:px-0">
                    <div className="flex items-center gap-x-4">
                        <div className="w-[68px] h-[68px] rounded-full border border-[#EAECF0B2] flex justify-center items-center">
                            <div className="w-[52px] h-[52px] rounded-full bg-white flex justify-center items-center"><FiPhoneCall className="text-xl text-[#2CA784]" /></div>
                        </div>
                        <div>
                            <p className="text-[#2CA784] font-semibold">Need help?</p>
                            <h6 className="text-[24px] font-bold text-white"><a href="tel:8085550111">(808) 555-0111</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </Swiper >
    );
};

export default Hero2;