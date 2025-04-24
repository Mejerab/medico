import { Rating } from "@mui/material";
import PointHook from "../../hook/PointHook";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonials = () => {
    return (
        <div className="max-w-[1320px] mx-auto 2xl:px-0 px-3 grid grid-cols-1 gap-y-12 lg:grid-cols-5">
            <div className="col-span-3">
                <div data-aos='fade-up'>
                    <PointHook head={['happy patients']} text={['Stories of Healing and Trust from Our Valued Patients']} />
                </div>
                <div className="mt-12">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={{
                            nextEl: '#next',
                            prevEl: '#prev',
                        }}
                        autoplay={{
                            delay: 2000,
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="space-y-5 relative pb-7">
                                <Rating className="!text-[17px] !text-[#F59E0B]" name="read-only" value={2} readOnly />
                                <p className="prime text-[20px] italic w-[90%] font-medium leading-[175%]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <span className="black">labore et dolore magna aliqua. Ut enim ad minim</span> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <span className="black">consequat culpa qui officia</span> deserunt mollit anim id est laborum.”</p>
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold blakc">Norman Jones</h5>
                                    <p className="blue text-[16px]">CEO at Mediko</p>
                                </div>
                                <img className="absolute -bottom-0 right-28" src="https://i.ibb.co.com/CpVKk3nP/Vector.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="space-y-5 relative pb-7">
                                <Rating className="!text-[17px] !text-[#F59E0B]" name="read-only" value={2} readOnly />
                                <p className="prime text-[20px] italic w-[90%] font-medium leading-[175%]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <span className="black">labore et dolore magna aliqua. Ut enim ad minim</span> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <span className="black">consequat culpa qui officia</span> deserunt mollit anim id est laborum.”</p>
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold blakc">Norman Jones</h5>
                                    <p className="blue text-[16px]">CEO at Mediko</p>
                                </div>
                                <img className="absolute -bottom-0 right-28" src="https://i.ibb.co.com/CpVKk3nP/Vector.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="space-y-5 relative pb-7">
                                <Rating className="!text-[17px] !text-[#F59E0B]" name="read-only" value={2} readOnly />
                                <p className="prime text-[20px] italic w-[90%] font-medium leading-[175%]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <span className="black">labore et dolore magna aliqua. Ut enim ad minim</span> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <span className="black">consequat culpa qui officia</span> deserunt mollit anim id est laborum.”</p>
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold blakc">Norman Jones</h5>
                                    <p className="blue text-[16px]">CEO at Mediko</p>
                                </div>
                                <img className="absolute -bottom-0 right-28" src="https://i.ibb.co.com/CpVKk3nP/Vector.png" alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="space-y-5 relative pb-7">
                                <Rating className="!text-[17px] !text-[#F59E0B]" name="read-only" value={2} readOnly />
                                <p className="prime text-[20px] italic w-[90%] font-medium leading-[175%]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <span className="black">labore et dolore magna aliqua. Ut enim ad minim</span> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <span className="black">consequat culpa qui officia</span> deserunt mollit anim id est laborum.”</p>
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold blakc">Norman Jones</h5>
                                    <p className="blue text-[16px]">CEO at Mediko</p>
                                </div>
                                <img className="absolute -bottom-0 right-28" src="https://i.ibb.co.com/CpVKk3nP/Vector.png" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="flex items-center gap-x-7">
                        <button id="prev" className="w-[60px] cursor-pointer h-[60px] hover:bg-[#3D68F5] hover:!text-white tra rounded-full bg-[#F5FAFE] flex justify-center items-center text-xl blue"><FaArrowRightLong className="-rotate-180" /></button>
                        <button id="next" className="w-[60px] cursor-pointer h-[60px] hover:bg-[#3D68F5] hover:!text-white tra rounded-full bg-[#F5FAFE] flex justify-center items-center text-xl blue"><FaArrowRightLong /></button>
                    </div>
                </div>
            </div>
            <div data-aos='fade-left' className='col-span-2 ml-auto space-y-4'>
                <div className="w-[291px] h-[165px] flex flex-col justify-center items-center bg-[#F5FAFE] border border-[#E2ECF3] rounded-xl">
                    <h4 className="black font-semibold text-[48px]"><Rating className="!text-[36px] mr-2 !text-[#F59E0B]" name="read-only" value={1} max={1} readOnly />4.8</h4>
                    <p className="text-sm font-semibold black">AVERATE GOOGLE RATING</p>
                </div>
                <img className="w-[452px] h-[350px] lg:h-[390px]" src="https://i.ibb.co.com/LDYDF791/Bg.png" alt="" />
            </div>
        </div>
    );
};

export default Testimonials;