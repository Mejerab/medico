import PropTypes from 'prop-types';
import { HiArrowNarrowRight } from 'react-icons/hi';

const BannerHook = ({ first, text1, text2, last }) => {
    return (
        <div className="bg-[url(https://i.ibb.co.com/sdCyv77z/banner.png)] bg-cover bg-center h-[650px] relative">
                <img className='absolute top-44 left-1/2 -translate-1/2' src="https://i.ibb.co.com/1tZFmH81/Group-1000000933.png" alt="" />
            <h3 className="font-semibold text-[50px] lg:text-[146px] max-w-[1320px] mx-auto px-3 2xl:px-0 leading-[110.00000000000001%] pt-24"><p data-aos='fade-left' className="text-left"><span className="text-transparent strokee">{first}</span> {text1}</p><p data-aos='fade-right' className="text-right">{text2} <span className="text-transparent strokee">{last}</span></p></h3>
            <img className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30" src="https://i.ibb.co.com/hJxCdWLv/Doctor.png" alt="" />
            <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#020F3399] to-[#020F3300] text-center z-50 flex justify-center items-end pb-8'>
                <button className="btn button2 relative border-0 shadow-none overflow-hidden w-[289px] h-[57px] rounded-[100px] bg-white text-white hover:text-[#001930] tra"><span className="flex gap-x-2 z-50">Request An Appointment <HiArrowNarrowRight className="p-0.5 ml-1 blue rounded-full bg-white text-xl flex items-center justify-center" /></span></button>
            </div>
        </div>
    );
};
BannerHook.propTypes = {
    text: PropTypes.string,
    text2: PropTypes.string,
    first: PropTypes.string,
    last: PropTypes.string,
}

export default BannerHook;