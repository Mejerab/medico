import { MdOutlineMedicalServices } from "react-icons/md";
import PropTypes from 'prop-types';

const PointHook = ({ head, text, center, white, green, green_white, white2 }) => {
    return (
        <div data-aos='fade-up' className={`flex flex-col justify-center ${center && 'items-center'} ${white?'!text-white':green?'green':green_white?'green':white2?'text-white':'blue'} gap-y-3 gap-x-2`}>
            <div className="flex gap-x-2 items-center">
                <MdOutlineMedicalServices className="text-lg -mt-1" />
                <h4 className="uppercase font-semibold text-[14px]">{head}</h4>
            </div>
            <h3 className={`font-semibold text-[48px] leading-[115%] ${white?'text-white':green?'text-[#203A42]':green_white?'text-white':white2?'text-white':'black'} ${center&&'text-center'}`}>{text}</h3>
        </div>
    );
};

PointHook.propTypes = {
    head: PropTypes.string,
    center: PropTypes.string,
    white: PropTypes.bool,
    green: PropTypes.bool,
    green_white: PropTypes.bool,
}
export default PointHook;