import { FaArrowRightLong } from "react-icons/fa6";
import PointHook from "../../hook/PointHook";
import { LuSyringe } from "react-icons/lu";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { GiBrain } from "react-icons/gi";

const Lab = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/cyLQary.jpeg)] bg-cover bg-right">
            <div className="bg-[#F5FAFEe6] py-24">
                <div className="lg:w-2/6 mx-auto">
                    <PointHook head={['LAB TEST']} text={['We have lab test facilities, so book yours today!']} center />
                </div>
                <div className="mt-14 max-w-[1320px] mx-auto px-3 2xl:px-0 flex lg:flex-row flex-col gap-y-6 items-center justify-between">
                    <img data-aos='fade-right' src="https://i.imgur.com/zhdLmBA.png" alt="" />
                    <div className="space-y-4">
                        <button id="pre" className="w-[60px] cursor-pointer h-[60px] hover:bg-[#3D68F5] hover:!text-white tra rounded-full bg-white flex justify-center items-center text-xl black"><FaArrowRightLong className="-rotate-180" /></button>
                        <button id="nex" className="w-[60px] cursor-pointer h-[60px] hover:bg-[#3D68F5] hover:!text-white tra rounded-full bg-white flex justify-center items-center text-xl black"><FaArrowRightLong /></button>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        loop={true}
                        navigation={{
                            nextEl: '#nex',
                            prevEl: '#pre'
                        }}
                        modules={[Navigation]}
                        className="!mx-0 lg:w-[48%] w-[75%]"
                    >
                        <SwiperSlide className="!w-fit"><div className="w-[289px] h-[443px] border flex flex-col justify-center items-center gap-y-4 border-[#E0E2E799] rounded-xl bg-white">
                            <h5 className="black font-bold text-[24px]">Blood Test</h5>
                            <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-white border border-[#EAECF0] relative">
                                <p className="bg-[#FF3B30] text-[12px] font-bold p-0.5 text-white -top-2 px-2 rounded-full absolute">20% OFF</p>
                                <LuSyringe className="text-4xl blue -rotate-90" />
                            </div>
                            <h5 className="black font-semibold text-[17px]">Starting From <span className="blue text-[27px]">$30</span></h5>
                            <button className="btn button2 relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#3D68F5] bg-white text-white hover:text-[#3D68F5] tra"><span className="flex gap-x-2 z-50">Book A Test <HiArrowNarrowRight className="p-0.5 ml-1 blue rounded-full bg-white text-xl flex items-center justify-center" /></span></button>
                            <p className="text-[#525252] text-[16px] px-5 leading-[180%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div></SwiperSlide>
                        <SwiperSlide className="!w-fit"><div className="w-[289px] h-[443px] border flex flex-col justify-center items-center gap-y-4 border-[#E0E2E799] rounded-xl bg-white">
                            <h5 className="black font-bold text-[24px]">CT Scan</h5>
                            <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-white border border-[#EAECF0] relative">
                                <p className="bg-[#FF3B30] text-[12px] font-bold p-0.5 text-white -top-2 px-2 rounded-full absolute">18% OFF</p>
                                <GiBrain className="text-4xl blue " />
                            </div>
                            <h5 className="black font-semibold text-[17px]">Starting From <span className="blue text-[27px]">$30</span></h5>
                            <button className="btn button2 relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#3D68F5] bg-white text-white hover:text-[#3D68F5] tra"><span className="flex gap-x-2 z-50">Book A Test <HiArrowNarrowRight className="p-0.5 ml-1 blue rounded-full bg-white text-xl flex items-center justify-center" /></span></button>
                            <p className="text-[#525252] text-[16px] px-5 leading-[180%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div></SwiperSlide>
                        <SwiperSlide className="!w-fit"><div className="w-[289px] h-[443px] border flex flex-col justify-center items-center gap-y-4 border-[#E0E2E799] rounded-xl bg-white">
                            <h5 className="black font-bold text-[24px]">Blood Test</h5>
                            <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-white border border-[#EAECF0] relative">
                                <p className="bg-[#FF3B30] text-[12px] font-bold p-0.5 text-white -top-2 px-2 rounded-full absolute">20% OFF</p>
                                <LuSyringe className="text-4xl blue -rotate-90" />
                            </div>
                            <h5 className="black font-semibold text-[17px]">Starting From <span className="blue text-[27px]">$30</span></h5>
                            <button className="btn button2 relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#3D68F5] bg-white text-white hover:text-[#3D68F5] tra"><span className="flex gap-x-2 z-50">Book A Test <HiArrowNarrowRight className="p-0.5 ml-1 blue rounded-full bg-white text-xl flex items-center justify-center" /></span></button>
                            <p className="text-[#525252] text-[16px] px-5 leading-[180%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div></SwiperSlide>
                        <SwiperSlide className="!w-fit"><div className="w-[289px] h-[443px] border flex flex-col justify-center items-center gap-y-4 border-[#E0E2E799] rounded-xl bg-white">
                            <h5 className="black font-bold text-[24px]">CT Scan</h5>
                            <div className="w-[90px] h-[90px] flex justify-center items-center rounded-full bg-white border border-[#EAECF0] relative">
                                <p className="bg-[#FF3B30] text-[12px] font-bold p-0.5 text-white -top-2 px-2 rounded-full absolute">18% OFF</p>
                                <GiBrain className="text-4xl blue " />
                            </div>
                            <h5 className="black font-semibold text-[17px]">Starting From <span className="blue text-[27px]">$30</span></h5>
                            <button className="btn button2 relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#3D68F5] bg-white text-white hover:text-[#3D68F5] tra"><span className="flex gap-x-2 z-50">Book A Test <HiArrowNarrowRight className="p-0.5 ml-1 blue rounded-full bg-white text-xl flex items-center justify-center" /></span></button>
                            <p className="text-[#525252] text-[16px] px-5 leading-[180%] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Lab;