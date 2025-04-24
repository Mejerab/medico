import { HiArrowNarrowRight } from "react-icons/hi";
import PointHook from "../../hook/PointHook";
import { FaArrowRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Rating } from "@mui/material";

const Slide = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 relative">
            <div className="flex justify-between items-center">
                <div className="w-1/2">
                    <PointHook head={'HOW WE WORK?'} text={'Stories of Healing and Trust from Our Valued Patients.'} green />
                </div>
                <button className="btn button-green relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#2CA784] bg-white text-white hover:text-[#001930] tra"><span className="flex gap-x-2 z-50">Leave a Review <HiArrowNarrowRight className="p-0.5 ml-1 text-[#2CA784] rounded-full bg-[#fff] text-xl flex items-center justify-center" /></span></button>
            </div>
            <Swiper
                scrollbar={{
                    draggable: true
                }}
                autoplay={{
                    disableOnInteraction: true,
                    delay: 2000
                }}
                navigation={{
                    prevEl: '#prevv',
                    nextEl: '#nexxtt',
                }}
                modules={[Scrollbar, Navigation, Autoplay]}
                className="mt-16 h-[620px] relative"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-4 gap-6">
                        <div className="space-y-6">
                            <div className="w-full h-[195px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Robert Fox</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[249px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Bessie Cooper</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[222px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Jacob Jones</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[276px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Albert Flores</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[168px] bg-[#F3F8F6] p-6 rounded-xl">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Jacob Jones</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[330px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Savannah Nguyen</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[222px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                            <h4 className="text-[#001930] font-semibold text-[20px]">Jane Cooper</h4>
                                    <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                    <p className="text-[#424544] leading-[180%]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="w-full h-[249px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                            <h4 className="text-[#001930] font-semibold text-[20px]">Darrell Steward</h4>
                                    <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                    <p className="text-[#424544] leading-[180%]">Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-4 gap-6">
                        <div className="space-y-6">
                            <div className="w-full h-[195px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Robert Fox</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[249px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Bessie Cooper</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[222px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Jacob Jones</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[276px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Albert Flores</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[168px] bg-[#F3F8F6] p-6 rounded-xl">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Jacob Jones</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[330px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Savannah Nguyen</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[222px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                            <h4 className="text-[#001930] font-semibold text-[20px]">Jane Cooper</h4>
                                    <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                    <p className="text-[#424544] leading-[180%]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="w-full h-[249px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                            <h4 className="text-[#001930] font-semibold text-[20px]">Darrell Steward</h4>
                                    <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                    <p className="text-[#424544] leading-[180%]">Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-4 gap-6">
                        <div className="space-y-6">
                            <div className="w-full h-[195px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Robert Fox</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[249px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Bessie Cooper</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[222px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Jacob Jones</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[276px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Albert Flores</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[168px] bg-[#F3F8F6] p-6 rounded-xl">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Jacob Jones</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="w-full h-[330px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                                <h4 className="text-[#001930] font-semibold text-[20px]">Savannah Nguyen</h4>
                                <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                <p className="text-[#424544] leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-full h-[222px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                            <h4 className="text-[#001930] font-semibold text-[20px]">Jane Cooper</h4>
                                    <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                    <p className="text-[#424544] leading-[180%]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="w-full h-[249px] bg-[#F3F8F6] rounded-xl p-6 space-y-3">
                            <h4 className="text-[#001930] font-semibold text-[20px]">Darrell Steward</h4>
                                    <Rating readOnly value={5} sx={{ fontSize: '17px', color: '#2CA784' }} />
                                    <p className="text-[#424544] leading-[180%]">Fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <button id="prevv" className="absolute bg-white cursor-pointer hover:bg-[#ffffff99] z-100 bottom-3 left-64 w-[50px] h-[50px] flex justify-center items-center rounded-full border border-[#E1EBE8]"><FaArrowRight className="text-xl -rotate-180" /></button>
            <button id="nexxtt" className="absolute bg-white cursor-pointer hover:bg-[#ffffff99] z-100 bottom-3 right-64 w-[50px] h-[50px] flex justify-center items-center rounded-full border border-[#E1EBE8]"><FaArrowRight className="text-xl " /></button>
        </div>
    );
};

export default Slide;