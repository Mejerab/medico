import { HiArrowNarrowRight } from "react-icons/hi";
import Footer1 from "../Components/Footer1";
import Navbar1 from "../Components/Navbar1";
import BannerHook from "../hook/BannerHook";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="font">
            <Navbar1 />
            <BannerHook first={'This page'} text1={'has a'} text2={'looks weak'} last={'pulse!'} />
            <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 my-28 flex flex-col justify-center items-center gap-y-6">
                <img src="https://i.ibb.co.com/gZ1CR584/404.png" alt="" />
                <h4 className="text-center font-semibold text-[48px] black leading-[128%] mt-12">Page Not Found... <br />
                    But Your Health is in Good Hands!</h4>
                <p className="prime leading-[180%] text-center">It looks like this page had a little heart trouble and couldn't be found. But don't worry, our expert <br /> team is always here to guide you back to the right path.</p>
                <Link to='/' className="btn button2 relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#3D68F5] text-white hover:text-[#020F33] hover:bg-white tra"><span className="flex gap-x-2 z-50"><HiArrowNarrowRight className="p-0.5 mr-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center rotate-180" /> Back To Home</span></Link>
            </div>
            <Footer1 />
        </div>
    );
};

export default ErrorPage;