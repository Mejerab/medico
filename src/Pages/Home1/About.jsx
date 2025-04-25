import { FaCheckDouble } from "react-icons/fa6";
import PointHook from "../../hook/PointHook";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const About = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between items-start gap-16 max-w-[1320px] mx-auto 2xl:px-0 px-3 relative lg:pb-0 pb-16">
            <img data-aos='fade-left' src="https://i.imgur.com/xwoHyhb.png" alt="" />
            <div data-aos='fade-up' className="space-y-7 mt-auto">
                <PointHook head={['ABOUT Mediko']} text={['Advancing Medical Solutions for Health.']} />
                <p className="prime text-[16px] leading-[180%]">Experience comprehensive healthcare at Meca, where your well-being is our priority. We provide personalized, compassionate medical services, ensuring exceptional care tailored to your </p>
                <div className="flex justify-between">
                    <ul className="space-y-5">
                        <li className="text-[16px] font-medium black flex gap-x-2 items-center"><FaCheckDouble className="blue text-lg" /> AI-Powered Diagnostics</li>
                        <li className="text-[16px] font-medium black flex gap-x-2 items-center"><FaCheckDouble className="blue text-lg" /> Real-Time Monitoring</li>
                        <li className="text-[16px] font-medium black flex gap-x-2 items-center"><FaCheckDouble className="blue text-lg" /> Secure Data Encryption</li>
                        <li className="text-[16px] font-medium black flex gap-x-2 items-center"><FaCheckDouble className="blue text-lg" /> User-Friendly Interface</li>
                    </ul>
                    <ul className="space-y-5">
                        <li className="text-[16px] font-medium black flex gap-x-2 items-center"><FaCheckDouble className="blue text-lg" /> Telemedicine Integration</li>
                        <li className="text-[16px] font-medium black flex gap-x-2 items-center"><FaCheckDouble className="blue text-lg" /> Seamless Cloud Storage</li>
                        <li className="text-[16px] font-medium black flex gap-x-2 items-center"><FaCheckDouble className="blue text-lg" /> Multi-Device Accessibility</li>
                        <li className="text-[16px] font-medium black flex gap-x-2 items-center"><FaCheckDouble className="blue text-lg" /> 24/7 Patient Support</li>
                    </ul>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-x-10">
                    <button className="btn button2 relative overflow-hidden w-[192px] h-[56px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-[#020F33] text-white tra"><span className="flex gap-x-2 z-50">More About us <HiArrowNarrowRight className="p-0.5 ml-1 text-[#3D68F5] rounded-full bg-white text-xl flex items-center justify-center" /></span></button>
                    <div className="flex items-center gap-x-4">
                        <div className="border border-[#EAECF0] rounded-full flex justify-center items-center w-[64px] h-[64px]">
                            <div className="w-[48px] h-[48px] flex justify-center items-center rounded-full bg-[#F5FAFE]">
                                <FiPhoneCall className="text-[#3D68F5] text-lg" />
                            </div>
                        </div>
                        <div>
                            <p className="prime font-medium text-[16px]">Need help?</p>
                            <a href="tel:8085550111" className="black font-semibold text-[20px]">(808) 555-0111</a>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos='fade-right' className="w-3/5 relative z-30">
                <img className="" src="https://i.imgur.com/87WIa9Y.png" alt="" />
                <div className="w-[196px] h-[196px] rounded-full border-4 bg-[#020F33] -bottom-8 right-1/2 translate-1/2 absolute border-white text-white font-semibold text-center pt-6">
                    <h4 className="text-[48px]">24/7</h4>
                    <div className="w-3/5 h-0.5 bg-white mb-3 mx-auto"></div>
                    <p className="text-[13px] w-11/12 pl-4">EMERGENCY <br /> PATIENT SUPPORT</p>
                </div>
            </div>
            <img src="https://i.imgur.com/pKPbyak.png" className="absolute -bottom-24 z-10 right-0" alt="" />
        </div>
    );
};

export default About;