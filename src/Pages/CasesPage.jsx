import { HiArrowNarrowRight } from "react-icons/hi";
import BannerHook from "../hook/BannerHook";
import PointHook from "../hook/PointHook";
import NewsLetter from "./Home1/NewsLetter";
import { Link, useLocation, useNavigate } from "react-router";

const CasesPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="space-y-28">
            <BannerHook first={'Some real'} text1={'stories'} text2={'Real'} last={'recoveries'} />
            <div className="max-w-[1320px] mx-auto px-3 2xl:px-0">
                <PointHook head={'our case studies'} text={'Let’s look our case studies'} center />
                <div className="mt-16 grid lg:grid-cols-3 gap-y-7">
                    <div data-aos='fade-left'className="relative">
                        <img src="https://i.ibb.co.com/5XGjnqFz/1.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={400} className="relative">
                        <img src="https://i.ibb.co.com/9k45bNrK/2.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={600} className="relative">
                        <img src="https://i.ibb.co.com/Kj4dR2Wr/3.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={800} className="relative">
                        <img src="https://i.ibb.co.com/x0S62Ym/1.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={1000} className="relative">
                        <img src="https://i.ibb.co.com/CxVqDFv/2.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={1200} className="relative">
                        <img src="https://i.ibb.co.com/Q7XrQwmL/3.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={1400} className="relative">
                        <img src="https://i.ibb.co.com/B2XpDqG8/1-1.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={1600} className="relative">
                        <img src="https://i.ibb.co.com/Q7FCwvdv/2-1.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                    <div data-aos='fade-left' data-aos-delay={1800} className="relative">
                        <img src="https://i.ibb.co.com/QFkJTb80/3-1.png" alt="" />
                        <div className="absolute bottom-[30px] left-[28px]">
                            <Link to='/special-case' className="btn button2 shadow-none relative overflow-hidden w-[165px] h-[50px] rounded-[100px] border border-[#3D68F5] text-white tra"><span className="flex gap-x-2 z-50">Case Details <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></Link>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-16 space-x-5">
                    <Link to={`/cases?1`} className="btn w-[60px] h-[60px] rounded-full bg-transparent border border-[#EAECF0] hover:text-white hover:bg-[#3D68F5] tra">01</Link>
                    <Link to={`/cases?2`} className="btn w-[60px] h-[60px] rounded-full bg-transparent border border-[#EAECF0] hover:text-white hover:bg-[#3D68F5] tra">02</Link>
                    <Link to={`/cases?3`} className="btn w-[60px] h-[60px] rounded-full bg-transparent border border-[#EAECF0] hover:text-white hover:bg-[#3D68F5] tra">03</Link>
                    <button onClick={()=>location.search.slice(1, 2)==1?navigate('/cases?2'):location.search.slice(1, 2)==2?navigate('/cases?3'):'/cases?3'} className="btn w-[60px] h-[60px] rounded-full bg-transparent border border-[#EAECF0] hover:!text-white hover:bg-[#3D68F5] tra blue ">
                            <svg className="" width="14" height="12" viewBox="0 0 14 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 6.00007C13.9951 5.47397 13.7832 4.97097 13.41 4.60007L9.12 0.30007C8.93264 0.113819 8.67919 0.00927734 8.415 0.00927734C8.15082 0.00927734 7.89736 0.113819 7.71 0.30007C7.61627 0.393033 7.54188 0.503634 7.49111 0.625494C7.44034 0.747353 7.4142 0.878058 7.4142 1.01007C7.4142 1.14208 7.44034 1.27279 7.49111 1.39465C7.54188 1.51651 7.61627 1.62711 7.71 1.72007L11 5.00007H1C0.734784 5.00007 0.48043 5.10543 0.292893 5.29296C0.105357 5.4805 0 5.73485 0 6.00007C0 6.26529 0.105357 6.51964 0.292893 6.70718C0.48043 6.89471 0.734784 7.00007 1 7.00007H11L7.71 10.2901C7.5217 10.477 7.41538 10.7312 7.41444 10.9965C7.41351 11.2619 7.51802 11.5168 7.705 11.7051C7.89198 11.8934 8.1461 11.9997 8.41147 12.0006C8.67683 12.0016 8.9317 11.897 9.12 11.7101L13.41 7.41007C13.7856 7.03672 13.9978 6.52965 14 6.00007Z" />
                            </svg>
                    </button>
                </div>
            </div>
            <NewsLetter />
        </div>
    );
};

export default CasesPage;