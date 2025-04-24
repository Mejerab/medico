import { FaUserDoctor } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";
import PropTypes from 'prop-types';

const Card = ({ home }) => {
    return (
        <div className={`${home?'':'bg-[#F5FAFE] py-16'}`}>
            <div className={`max-w-[1574px] mx-auto px-3 2xl:px-7 ${home?'relative -top-32':''} grid grid-cols-1 lg:grid-cols-4 items-center justify-between gap-4 2xl:gap-x-7`}>
                <div data-aos='fade-left' className={`w-full lg:w-[371px] h-[226px] ${home?'bg-[#F5FAFE]':'bg-white'} border-2 rounded-xl p-7 2xl:p-10 border-white space-y-4 hover:-translate-y-1 hover:bg-[#3D68F5] tra hover:!text-white group`}>
                    <h4 className="font-semibold text-[24px] flex items-center gap-x-2"><MdOutlineMedicalInformation />Visitor Information</h4>
                    <p className="prime group-hover:!text-white text-[16px] leading-[29px] tra">View all information of the visitors and
                        follow all terms & conditions.</p>
                    <button className="flex items-center gap-x-3">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 group-hover:text-[#3D68F5] group-hover:bg-white tra text-white rounded-full bg-[#020F33] text-lg flex items-center justify-center" /></button>
                </div>
                <div data-aos='fade-down' className={`w-full lg:w-[371px] h-[226px] ${home?'bg-[#F5FAFE]':'bg-white'} border-2 rounded-xl p-7 2xl:p-10 border-white space-y-4 hover:-translate-y-1 hover:bg-[#3D68F5] tra hover:!text-white group`}>
                    <h4 className="font-semibold text-[24px] flex items-center gap-x-2"><FaUserDoctor />Find a doctor</h4>
                    <p className="prime group-hover:!text-white text-[16px] leading-[29px] tra">View all information of the visitors and
                        follow all terms & conditions.</p>
                    <button className="flex items-center gap-x-3">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 group-hover:text-[#3D68F5] group-hover:bg-white tra text-white rounded-full bg-[#020F33] text-lg flex items-center justify-center" /></button>
                </div>
                <div data-aos='fade-up' className={`w-full lg:w-[371px] h-[226px] ${home?'bg-[#F5FAFE]':'bg-white'} border-2 rounded-xl p-7 2xl:p-10 border-white space-y-4 hover:-translate-y-1 hover:bg-[#3D68F5] tra hover:!text-white group`}>
                    <h4 className="font-semibold text-[24px] flex items-center gap-x-2"><GrLocation />Our Location</h4>
                    <p className="prime group-hover:!text-white text-[16px] leading-[29px] tra">View all information of the visitors and
                        follow all terms & conditions.</p>
                    <button className="flex items-center gap-x-3">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 group-hover:text-[#3D68F5] group-hover:bg-white tra text-white rounded-full bg-[#020F33] text-lg flex items-center justify-center" /></button>
                </div>
                <div data-aos='fade-right' className={`w-full lg:w-[371px] h-[226px] ${home?'bg-[#F5FAFE]':'bg-white'} border-2 rounded-xl p-7 2xl:p-10 border-white space-y-4 hover:-translate-y-1 hover:bg-[#3D68F5] tra hover:!text-white group`}>
                    <h4 className="font-semibold text-[24px] flex items-center gap-x-2"><TbPlugConnected />Connect With Us</h4>
                    <p className="prime group-hover:!text-white text-[16px] leading-[29px] tra">View all information of the visitors and
                        follow all terms & conditions.</p>
                    <button className="flex items-center gap-x-3">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 group-hover:text-[#3D68F5] group-hover:bg-white tra text-white rounded-full bg-[#020F33] text-lg flex items-center justify-center" /></button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    home: PropTypes.bool
}

export default Card;