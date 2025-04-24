import { HiArrowNarrowRight } from "react-icons/hi";
import PointHook from "../../hook/PointHook";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";
import PropTypes from 'prop-types';
import NewsLetter from "./NewsLetter";
import { Link } from "react-router-dom";

const Articles = ({ blog }) => {
    
    return (
        <div className="max-w-[1320px] mx-auto px-3 2xl:px-0">
            {blog ?
                <div className="lg:w-1/2 mx-auto">
                    <PointHook head={['latest news & articles']} text={['Trending Topics in Medicine and Wellness']} center />
                </div> :
                <div className="grid lg:grid-cols-2 justify-between items-center">
                    <PointHook head={['latest news & articles']} text={['Trending Topics in Medicine and Wellness']} />
                    <button className="btn button ml-auto relative overflow-hidden w-[167px] h-[50px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">View All Post <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></button>
                </div>
            }
            <div className="mt-14 grid lg:grid-cols-3 justify-between gap-8">
                {
                    blog ?
                        <>
                            <div  data-aos='fade-left' className="bg-[#F5FAFE]h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.imgur.com/DW6kiPL.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">The ultimate guide to maintaining a healthy lifestyle in a busy world</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div  data-aos='fade-left' data-aos-delay={400} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.imgur.com/1acobkC.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">Effective ways to improve mental health and reduce daily stress</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div  data-aos='fade-left' data-aos-delay={600} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.imgur.com/aYWTT1H.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">Top nutrition tips to boost immunity and stay energized every day</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div  data-aos='fade-left' data-aos-delay={800} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.ibb.co.com/KjWJRYB4/Image-1.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">The ultimate guide to maintaining a healthy lifestyle in a busy world</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div  data-aos='fade-left' data-aos-delay={1000} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.ibb.co.com/WN4Sndgk/Image-2.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">Effective ways to improve mental health and reduce daily stress</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div  data-aos='fade-left' data-aos-delay={1200} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.ibb.co.com/Lz3jt6X9/Image-3.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">Top nutrition tips to boost immunity and stay energized every day</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div  data-aos='fade-left' data-aos-delay={1400} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.ibb.co.com/RprhfHtz/Image-4.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">The ultimate guide to maintaining a healthy lifestyle in a busy world</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div  data-aos='fade-left' data-aos-delay={1600} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.ibb.co.com/VWDK9b2j/Image-5.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">Effective ways to improve mental health and reduce daily stress</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div  data-aos='fade-left' data-aos-delay={1800} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.ibb.co.com/ZRjjKfVn/Image-6.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">Top nutrition tips to boost immunity and stay energized every day</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </> :
                        <>
                            <div data-aos='fade-left' className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.imgur.com/DW6kiPL.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">The ultimate guide to maintaining a healthy lifestyle in a busy world</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div data-aos='fade-left' data-aos-delay={400} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.imgur.com/1acobkC.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">Effective ways to improve mental health and reduce daily stress</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                            <div data-aos='fade-left' data-aos-delay={600} className="bg-[#F5FAFE] h-[544px] rounded-xl p-8 space-y-5">
                                <img src="https://i.imgur.com/aYWTT1H.png" alt="" />
                                <div className="flex items-center gap-x-4">
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><IoCalendarClearOutline className="blue -mt-0.5" />20 December 2024</p>
                                    <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="blue text-lg -mt-0.5" />Comments</p>
                                </div>
                                <h4 className="text-[20px] font-semibold black leading-[155%]">Top nutrition tips to boost immunity and stay energized every day</h4>
                                <Link to='/blog' className="btn button relative overflow-hidden w-[169px] h-[49px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Learn More <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                            </div>
                        </>
                }
            </div>
            
        </div>
    );
};

Articles.propTypes = {
    blog: PropTypes.bool
}
export default Articles;