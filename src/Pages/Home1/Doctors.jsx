import PointHook from "../../hook/PointHook";
import PropTypes from 'prop-types';

const Doctors = ({priority}) => {
    return (
        <div className="max-w-[1320px] mx-auto 2xl:px-0 px-3">
            <div className={`${priority?'hidden':'grid lg:grid-cols-2 gap-y-6 justify-between items-center'}`}>
                <div>
                    <PointHook head={['professional doctors']} text={['Highly Skilled Doctors, Committed to Excellence']} />
                </div>
                <div data-aos='fade-left' className="space-x-5">
                    <button className="w-[150px] h-[44px] rounded-full border border-[#EAECF0] black font-medium text-base cursor-pointer hover:!text-white hover:bg-[#3D68F5] tra">Cardiologist</button>
                    <button className="w-[150px] h-[44px] rounded-full border border-[#EAECF0] black font-medium text-base cursor-pointer hover:!text-white hover:bg-[#3D68F5] tra">Orthopedist</button>
                    <button className="w-[150px] h-[44px] rounded-full border border-[#EAECF0] black font-medium text-base cursor-pointer hover:!text-white hover:bg-[#3D68F5] tra">Nutritionist</button>
                    <button className="w-[150px] h-[44px] rounded-full border border-[#EAECF0] black font-medium text-base cursor-pointer hover:!text-white hover:bg-[#3D68F5] tra">Gynocologist</button>
                </div>
            </div>
            <div className={`flex lg:flex-row flex-col justify-between items-center ${priority?'mt-7':'mt-14'}`}>
                <div data-aos='fade-left' className="relative">
                    <img className={`w-[303px] h-[390px] rounded-xl bg-white ${priority&&'border border-[#E0E2E7]'}`} src="https://i.ibb.co.com/n8PH0PN0/doc.png" alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                        <h5 className="font-semibold text-[24px]">Dr. Alex Dolmand</h5>
                        <p>Designation</p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay={400} className="relative">
                    <img className={`w-[303px] h-[390px] rounded-xl bg-white ${priority&&'border border-[#E0E2E7]'}`} src="https://i.ibb.co.com/mrwpNcRR/doc2.png" alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                        <h5 className="font-semibold text-[24px]">Dr. Leslie Alexander</h5>
                        <p>Designation</p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay={600} className="relative">
                    <img className={`w-[303px] h-[390px] rounded-xl bg-white ${priority&&'border border-[#E0E2E7]'}`} src="https://i.ibb.co.com/cXxb7rtX/doc3.png" alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                        <h5 className="font-semibold text-[24px]">Dr. Guy Hawkins</h5>
                        <p>Designation</p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay={800} className="relative">
                    <img className={`w-[303px] h-[390px] rounded-xl bg-white ${priority&&'border border-[#E0E2E7]'}`} src="https://i.ibb.co.com/pvPppNnf/doc4.png" alt="" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020F33CC] via-[#020F337A] to-[#F5FAFE00] rounded-b-xl text-white text-center flex flex-col justify-end pb-7">
                        <h5 className="font-semibold text-[24px]">Dr. Esther Howard</h5>
                        <p>Designation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Doctors.propTypes = {
    priority: PropTypes.bool
}
export default Doctors;