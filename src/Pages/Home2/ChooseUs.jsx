import PointHook from "../../hook/PointHook";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ChooseUs = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/IRCusQ2.jpeg)] bg-cover bg-center">
            <div className="bg-[#001930fa] w-full">
                <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 flex justify-between items-center gap-x-32 h-full pt-32 py-28">
                    <img src="https://i.imgur.com/qAsxKxK.png" alt="" />
                    <div className="space-y-5">
                        <PointHook head={'why choose us?'} text={'Restoring Hope, One Day at a Time'} green_white/>
                        <div data-aos='fade-left' className="w-full bg-white rounded-xl p-7 space-y-3 mt-7">
                            <h4 className="font-semibold text-[21px] text-[#001930] flex items-center gap-x-2"><IoIosCheckmarkCircle className="text-[#2CA784] text-3xl"/> Compassionate & Experienced</h4>
                            <p className="text-[#424544] leading-[180%] text-base">Curabitur egestas ligula ornare sem sagittis tempor. Nam id sem vitae magna cursus accumsan ut id magna.</p>
                        </div>
                        <div data-aos='fade-left' data-aos-delay={400} className="w-full bg-white rounded-xl p-7 space-y-3">
                            <h4 className="font-semibold text-[21px] text-[#001930] flex items-center gap-x-2"><IoIosCheckmarkCircle className="text-[#2CA784] text-3xl"/> Holistic Approach to Well-Being</h4>
                            <p className="text-[#424544] leading-[180%] text-base">Curabitur egestas ligula ornare sem sagittis tempor. Nam id sem vitae magna cursus accumsan ut id magna.</p>
                        </div>
                        <div data-aos='fade-left' data-aos-delay={600} className="w-full bg-white rounded-xl p-7 space-y-3">
                            <h4 className="font-semibold text-[21px] text-[#001930] flex items-center gap-x-2"><IoIosCheckmarkCircle className="text-[#2CA784] text-3xl"/> Safe & Supportive Environment</h4>
                            <p className="text-[#424544] leading-[180%] text-base">Curabitur egestas ligula ornare sem sagittis tempor. Nam id sem vitae magna cursus accumsan ut id magna.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;