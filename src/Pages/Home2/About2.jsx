import { HiArrowNarrowRight } from "react-icons/hi";
import PointHook from "../../hook/PointHook";

const About2 = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 grid grid-cols-3 items-start gap-6 gap-y-24">
            <img src="https://i.imgur.com/wCBYvDF.png" alt="" />
            <div className="space-y-6 mt-6">
                <PointHook head={'ABOUT Mediko'} text={'Transforming Lives Through Mental Wellness'} green />
                <p className="text-[#424544] leading-[180%]">Our mission is to support mental well-being by providing resources, guidance, and a safe space for growth. Together, we empower individuals to overcome challenges and embrace a healthier, happier life.</p>
                <button className="btn button-green relative overflow-hidden w-[192px] h-[57px] rounded-[100px] border border-[#2CA784] bg-white text-white hover:text-[#001930] tra"><span className="flex gap-x-2 z-50">Emergency <HiArrowNarrowRight className="p-0.5 ml-1 text-[#2CA784] rounded-full bg-[#fff] text-xl flex items-center justify-center" /></span></button>
            </div>
            <img className="row-span-2 mt-auto" src="https://i.imgur.com/rZAiQ3p.png" alt="" />
            <div className="col-span-2 w-[780px] h-[148px] rounded-[10px] bg-[#F3F8F6] grid grid-cols-4 justify-between items-center">
                <div data-aos='fade-right' className="pl-10 border-r border-[#0019301A] w-full">
                    <h4 className="black2 font-semibold text-[48px]">25<span className="text-[19px]">+</span></h4>
                    <div className="text-[#424544] flex gap-x-1  tracking-[0.7px]"><div className="w-[7px] h-[7px] rounded-full bg-[#2CA784] mt-1.5"></div><span>Incredible <br /> doctors</span></div>
                </div>
                <div data-aos='fade-right' data-aos-delay={400} className="pl-10 border-r border-[#0019301A] w-full">
                    <h4 className="black2 font-semibold text-[48px]">98<span className="text-[19px]">+</span></h4>
                    <div className="text-[#424544] flex gap-x-1  tracking-[0.7px]"><div className="w-[7px] h-[7px] rounded-full bg-[#2CA784] mt-1.5"></div><span>Number of <br /> practitioners</span></div>
                </div>
                <div data-aos='fade-right' data-aos-delay={600} className="pl-10 border-r border-[#0019301A] w-full">
                    <h4 className="black2 font-semibold text-[48px]">18<span className="text-[19px]">+</span></h4>
                    <div className="text-[#424544] flex gap-x-1  tracking-[0.7px]"><div className="w-[7px] h-[7px] rounded-full bg-[#2CA784] mt-1.5"></div><span>Total years <br /> of experience</span></div>
                </div>
                <div data-aos='fade-right' data-aos-delay={800} className="pl-10 w-full">
                    <h4 className="black2 font-semibold text-[48px]">115<span className="text-[19px]">+</span></h4>
                    <div className="text-[#424544] flex gap-x-1  tracking-[0.7px]"><div className="w-[7px] h-[7px] rounded-full bg-[#2CA784] mt-1.5"></div><span>Treatment <br /> rooms</span></div>
                </div>
            </div>
        </div>
    );
};

export default About2;