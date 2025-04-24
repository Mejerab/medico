import { HiArrowNarrowRight } from "react-icons/hi";
import PointHook from "../../hook/PointHook";

const InTouch = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3 2xl:px-0  bg-[#2CA784] w-full rounded-xl h-[430px]">
            <div className="bg-[url(https://i.imgur.com/JgmI7oz.png)] bg-cover bg-top rounded-xl h-full p-24">
                <div className="w-1/2 space-y-6">
                    <PointHook head={'get in touch'} text={'Today Book Your Appointment with Us for Your Health.'} white2 />
                    <button className="btn button-green2 relative overflow-hidden w-[243px] h-[56px] rounded-[100px] border-0 bg-white text-[#001930] hover:text-white tra"><span className="flex gap-x-2 z-50">Book an Appointment <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#2CA784] text-xl flex items-center justify-center" /></span></button>
                </div>
            </div>
        </div>
    );
};

export default InTouch;