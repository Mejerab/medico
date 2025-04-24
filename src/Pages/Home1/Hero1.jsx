import { HiArrowNarrowRight } from "react-icons/hi";

const Hero1 = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/FNRtGuU.png)] bg-no-repeat w-full bg-cover bg-left lg:bg-right pt-32 pb-52">
            <div className="max-w-[1320px] mx-auto 2xl:px-0 px-3 h-full flex justify-center flex-col">
                <div data-aos='fade-up' className="w-2/3 space-y-6">
                    <h4 className="text-[#020F33] text-[60px] lg:text-[76px] font-semibold leading-[70px] lg:leading-[90px]">Enhancing Lives, Reviving <span className="text-[#3D68F5]">Health</span> for <span className="text-[#3D68F5]">Better</span> Tomorrow.</h4>
                    <p className="text-[#6D758E] text-[16px] w-5/6">Discover a world of holistic healthcare where your well-being comes first. At Meca, we deliver personalized, compassionate medical services designed to</p>
                    <button className="btn button2 relative overflow-hidden w-[269px] h-[56px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-[#020F33] text-white tra"><span className="flex gap-x-2 z-50">Request An Appointment <HiArrowNarrowRight className="p-0.5 ml-1 text-[#3D68F5] rounded-full bg-white text-xl flex items-center justify-center" /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Hero1;