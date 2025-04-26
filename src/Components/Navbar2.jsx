import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router";

const Navbar2 = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.getElementById('it').addEventListener('click', () => {
            setShow(false);
        })
    }, [])
    const links = <>
        <li onClick={() => setShow(true)} onBlur={() => setShow(false)} className="relative cursor-pointer tra">Home
            <ul className={`${show ? 'opacity-100 visible !top-8' : 'opacity-0 invisible'} tra absolute bg-white w-32 p-7 space-y-3 rounded-xl left-0 top-24 z-[100] border border-[#67676799]`}>
                <li className="hover:text-[#2CA784] tra"><Link to='/'>Home1</Link></li>
                <li className="hover:text-[#2CA784] tra"><Link to='/home2'>Home2</Link></li>
            </ul>
        </li>
        <li className="hover:text-[#2CA784] tra"><Link to='/about-us'>About Us</Link></li>
        <li className="hover:text-[#2CA784] tra"><Link to='/services'>Services</Link></li>
        <li className="hover:text-[#2CA784] tra"><Link to='/priority'>Priority</Link></li>
        <li className="hover:text-[#2CA784] tra"><Link to='/cases?1'>Cases</Link></li>
        <li className="hover:text-[#2CA784] tra"><Link to='/blogs?1'>Blog</Link></li>
        <li className="hover:text-[#2CA784] tra"><Link to='/contacts'>Contact</Link></li>
    </>;
    return (
        <div className="mx-3">
            <div className="max-w-[1320px] bg-white expand lg:mx-auto px-3 2xl:px-0 z-40 rounded-full relative">
                <div data-aos='fade-up' data-aos-delay={600} className="navbar w-full p-4 pl-2 px-6">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-xl hover:bg-transparent border-0 shadow-none"><img src="https://i.imgur.com/Zjj7meK.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="flex items-center gap-x-8 text-[#020F33] text-[16px] font-medium">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn lg:flex hidden button-green relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#2CA784] bg-white text-white hover:text-[#001930] tra"><span className="flex gap-x-2 z-50">Emergency <HiArrowNarrowRight className="p-0.5 ml-1 text-[#2CA784] rounded-full bg-[#fff] text-xl flex items-center justify-center" /></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;