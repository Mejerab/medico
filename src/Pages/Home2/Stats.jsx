import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineStar } from "react-icons/md";
import { RiTempColdLine } from "react-icons/ri";
import { LuBrain } from "react-icons/lu";
import { GiHeartPlus } from "react-icons/gi";
import { HiOutlineSignal } from "react-icons/hi2";

const Stats = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 flex justify-between">
            <div data-aos='fade-right' className="relative">
                <img src="https://i.imgur.com/3twmGbh.png" alt="" />
                <div className="flex items-center gap-x-4 absolute bottom-10 left-10">
                    <div className="w-[68px] h-[68px] rounded-full border border-[#EAECF0B2] flex justify-center items-center">
                        <div className="w-[52px] h-[52px] rounded-full bg-white flex justify-center items-center"><FiPhoneCall className="text-xl text-[#2CA784]" /></div>
                    </div>
                    <div>
                        <p className="text-[#2CA784] font-semibold">Need help?</p>
                        <h6 className="text-[24px] font-bold text-white"><a href="tel:8085550111">(808) 555-0111</a></h6>
                    </div>
                </div>
                <div className="bg-gradient-to-r font-semibold from-[#F5FAFE99] to-[#F5FAFE00] rounded-lg w-[250px] h-[100px] absolute bottom-5 right-5 pl-6">
                    <h4 className="text-[48px] leading-[68px] text-[#2CA784]"><MdOutlineStar className="text-[#F59E0B] inline-block -mt-2" />4.8</h4>
                    <p className="text-sm text-white">AVERATE GOOGLE RATING</p>
                </div>
            </div>
            <div data-aos='fade-left' className="grid grid-cols-2 justify-between gap-7">
                <div className="w-[278px] h-[273px] border p-6 border-[#E1EBE8] space-y-4 rounded-[10px]">
                    <div className="w-[70px] h-[70px] text-[#2CA784] text-3xl rounded-full border border-[#E1EBE8] flex justify-center items-center">
                        <RiTempColdLine />
                    </div>
                    <h4 className="black2 font-semibold text-[21px]">Stress Management</h4>
                    <p className="text-[#424544] leading-[180%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="w-[278px] h-[273px] border p-6 border-[#E1EBE8] space-y-4 rounded-[10px]">
                    <div className="w-[70px] h-[70px] text-[#2CA784] text-3xl rounded-full border border-[#E1EBE8] flex justify-center items-center">
                        <LuBrain />
                    </div>
                    <h4 className="black2 font-semibold text-[21px]">Cognitive Resilience</h4>
                    <p className="text-[#424544] leading-[180%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="w-[278px] h-[273px] border p-6 border-[#E1EBE8] space-y-4 rounded-[10px]">
                    <div className="w-[70px] h-[70px] text-[#2CA784] text-3xl rounded-full border border-[#E1EBE8] flex justify-center items-center">
                        <GiHeartPlus />
                    </div>
                    <h4 className="black2 font-semibold text-[21px]">Positive Relationships</h4>
                    <p className="text-[#424544] leading-[180%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className="w-[278px] h-[273px] border p-6 border-[#E1EBE8] space-y-4 rounded-[10px]">
                    <div className="w-[70px] h-[70px] text-[#2CA784] text-3xl rounded-full border border-[#E1EBE8] flex justify-center items-center">
                        <HiOutlineSignal />
                    </div>
                    <h4 className="black2 font-semibold text-[21px]">Mindful Awareness</h4>
                    <p className="text-[#424544] leading-[180%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;