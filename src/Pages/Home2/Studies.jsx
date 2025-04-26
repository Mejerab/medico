import PointHook from "../../hook/PointHook";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';
const Studies = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3 2xl:px-0">
            <div className="lg:w-6/12 mx-auto">
                <PointHook head={'our case studies'} text={'Dive Into Our Some Case Studies and See Real Success Stories!'} green center />
            </div>
            <div className="mt-16">
                <Swiper
                    slidesPerView={window.innerWidth<900?1:3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true
                    }}
                    modules={[Autoplay]}
                    className="text-white"
                >
                    <SwiperSlide className="cursor-pointer"><div className="relative group">
                        <img src="https://i.imgur.com/Espndx8.png" alt="" />
                        <div className="group-hover:opacity-100 tra opacity-0 absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#203A42] via-[#203A42AD] to-[#203A42AD00] flex flex-col justify-end rounded-b-xl pb-5">
                            <div className="flex items-center justify-between px-8">
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold">Case Heading Here</h5>
                                    <p className="text-[#E1EBE8] text-sm px-2 py-1 border border-[#FFFFFF24] rounded-full w-fit">Mental Health</p>
                                </div>
                                <div className="flex items-center">
                                    <HiOutlineArrowLongRight className="text-5xl" />
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide className="cursor-pointer"><div className="relative group">
                        <img className="h-[367px] w-full rounded-xl" src="https://i.imgur.com/l7gBw6C_d.webp?maxwidth=1520&fidelity=grand" alt="" />
                        <div className="group-hover:opacity-100 tra opacity-0 absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#203A42] via-[#203A42AD] to-[#203A42AD00] flex flex-col justify-end rounded-b-xl pb-5">
                            <div className="flex items-center justify-between px-8">
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold">Case Heading Here</h5>
                                    <p className="text-[#E1EBE8] text-sm px-2 py-1 border border-[#FFFFFF24] rounded-full w-fit">Mental Health</p>
                                </div>
                                <div className="flex items-center">
                                    <HiOutlineArrowLongRight className="text-5xl" />
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide className="cursor-pointer"><div className="relative group">
                        <img src="https://i.imgur.com/cEX0rRY.png" alt="" />
                        <div className="group-hover:opacity-100 tra opacity-0 absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#203A42] via-[#203A42AD] to-[#203A42AD00] flex flex-col justify-end rounded-b-xl pb-5">
                            <div className="flex items-center justify-between px-8">
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold">Case Heading Here</h5>
                                    <p className="text-[#E1EBE8] text-sm px-2 py-1 border border-[#FFFFFF24] rounded-full w-fit">Mental Health</p>
                                </div>
                                <div className="flex items-center">
                                    <HiOutlineArrowLongRight className="text-5xl" />
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide className="cursor-pointer"><div className="relative group">
                        <img src="https://i.imgur.com/Espndx8.png" alt="" />
                        <div className="group-hover:opacity-100 tra opacity-0 absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#203A42] via-[#203A42AD] to-[#203A42AD00] flex flex-col justify-end rounded-b-xl pb-5">
                            <div className="flex items-center justify-between px-8">
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold">Case Heading Here</h5>
                                    <p className="text-[#E1EBE8] text-sm px-2 py-1 border border-[#FFFFFF24] rounded-full w-fit">Mental Health</p>
                                </div>
                                <div className="flex items-center">
                                    <HiOutlineArrowLongRight className="text-5xl" />
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide className="cursor-pointer"><div className="relative group">
                        <img className="h-[367px] w-full rounded-xl" src="https://i.imgur.com/l7gBw6C_d.webp?maxwidth=1520&fidelity=grand" alt="" />
                        <div className="group-hover:opacity-100 tra opacity-0 absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#203A42] via-[#203A42AD] to-[#203A42AD00] flex flex-col justify-end rounded-b-xl pb-5">
                            <div className="flex items-center justify-between px-8">
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold">Case Heading Here</h5>
                                    <p className="text-[#E1EBE8] text-sm px-2 py-1 border border-[#FFFFFF24] rounded-full w-fit">Mental Health</p>
                                </div>
                                <div className="flex items-center">
                                    <HiOutlineArrowLongRight className="text-5xl" />
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide className="cursor-pointer"><div className="relative group">
                        <img src="https://i.imgur.com/cEX0rRY.png" alt="" />
                        <div className="group-hover:opacity-100 tra opacity-0 absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-[#203A42] via-[#203A42AD] to-[#203A42AD00] flex flex-col justify-end rounded-b-xl pb-5">
                            <div className="flex items-center justify-between px-8">
                                <div className="space-y-2">
                                    <h5 className="text-[24px] font-semibold">Case Heading Here</h5>
                                    <p className="text-[#E1EBE8] text-sm px-2 py-1 border border-[#FFFFFF24] rounded-full w-fit">Mental Health</p>
                                </div>
                                <div className="flex items-center">
                                    <HiOutlineArrowLongRight className="text-5xl" />
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
                <div className="text-center mt-20">
                    <button className="btn button-green relative overflow-hidden w-[244px] h-[58px] rounded-[100px] border border-[#2CA784] bg-white text-white hover:text-[#001930] tra"><span className="flex gap-x-2 z-50">View All Case Studies <HiArrowNarrowRight className="p-0.5 ml-1 text-[#2CA784] rounded-full bg-[#fff] text-xl flex items-center justify-center" /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Studies;