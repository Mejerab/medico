import { HiArrowNarrowRight } from "react-icons/hi";
import PointHook from "../../hook/PointHook";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";

const Articles2 = () => {
    return (
        <div className="bg-[#F3F8F6] py-28">
            <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 flex lg:flex-row flex-col gap-y-6 justify-between items-center">
                <div className="space-y-5 lg:pr-20">
                    <PointHook head={'latest news & articles'} text={'Trending Topics in Mental Health and Support.'} green />
                    <p className="text-[#424544] leading-[180%]">Experience comprehensive healthcare at Mediko, where your well-being is our priority.</p>
                    <button className="btn button-green relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#2CA784] bg-white text-white hover:text-[#001930] tra"><span className="flex gap-x-2 z-50">View All Post <HiArrowNarrowRight className="p-0.5 ml-1 text-[#2CA784] rounded-full bg-[#fff] text-xl flex items-center justify-center" /></span></button>
                </div>
                <div className="flex lg:flex-row flex-col justify-between items-center gap-7">
                    <div className="lg:w-[408px] h-[470px] rounded-xl bg-white p-4 space-y-5">
                        <img src="https://i.imgur.com/lKtNCtK.png" alt="" />
                        <div className="flex items-center gap-x-4">
                            <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="green -mt-0.5" />20 December 2024</p>
                            <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="green text-lg -mt-0.5" />Comments</p>
                        </div>
                        <h4 className="text-[#001930] text-[20px] font-semibold">The ultimate guide to maintaining a healthy lifestyle in a busy world</h4>
                        <button className="btn button-green2 relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border-0 bg-[#F3F8F6] text-[#001930] hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#001930] text-xl flex items-center justify-center" /></span></button>
                    </div>
                    <div className="lg:w-[408px] h-[470px] rounded-xl bg-white p-4 space-y-5">
                        <img src="https://i.ibb.co.com/BVZHwf2k/Image-1.png" alt="" />
                        <div className="flex items-center gap-x-4">
                            <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="green -mt-0.5" />20 December 2024</p>
                            <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="green text-lg -mt-0.5" />Comments</p>
                        </div>
                        <h4 className="text-[#001930] text-[20px] font-semibold">Effective ways to improve mental health and reduce daily stress</h4>
                        <button className="btn button-green2 relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border-0 bg-[#F3F8F6] text-[#001930] hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#001930] text-xl flex items-center justify-center" /></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles2;