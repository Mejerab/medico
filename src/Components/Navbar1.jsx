import { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router";

const Navbar1 = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.getElementById('it').addEventListener('click', () => {
            setShow(false);
        })
    }, [])
    const links = <>
        <li onClick={() => setShow(true)} onBlur={() => setShow(false)} className="tra relative group cursor-pointer"><a>Home</a>
            <ul className={`${show ? 'opacity-100 visible !top-8' : 'opacity-0 invisible'} tra absolute bg-white w-32 p-7 space-y-3 rounded-xl left-0 top-24 z-[100] border border-[#67676799]`}>
                <li className="hover:text-[#3D68F5] tra"><Link to='/'>Home1</Link></li>
                <li className="hover:text-[#3D68F5] tra"><Link to='/home2'>Home2</Link></li>
            </ul>
        </li>
        <li className="hover:text-[#3D68F5] tra"><Link to='/about-us'>About Us</Link></li>
        <li className="hover:text-[#3D68F5] tra"><Link to='/services'>Services</Link></li>
        <li className="hover:text-[#3D68F5] tra"><Link to='/priority'>Priority</Link></li>
        <li className="hover:text-[#3D68F5] tra"><Link to='/cases?1'>Cases</Link></li>
        <li className="hover:text-[#3D68F5] tra"><Link to='/blogs?1'>Blog</Link></li>
        <li className="hover:text-[#3D68F5] tra"><Link to='/contacts'>Contact</Link></li>
    </>;
    return (
        <div className="max-w-[1320px] mx-auto 2xl:px-0 px-3 bg-white relative z-[100]">
            <div className="border-b lg:flex hidden text-[16px] py-3 items-center justify-between border-[#EAECF0]">
                <div className="flex">
                    <div className="flex gap-x-4 items-center border-r pr-8 border-[#6D758E36]">
                        <FiPhoneCall className="text-[#3D68F5] text-lg" />
                        <p className="text-[#6D758E]">(00) 875 784 5682</p>
                    </div>
                    <div className="flex gap-x-4 items-center border-r px-8 border-[#6D758E36]">
                        <IoMailOpenOutline className="text-[#3D68F5] text-lg" />
                        <a href="mailto:togetoinfo@gmail.com" className="text-[#6D758E]">togetoinfo@gmail.com</a>
                    </div>
                    <div className="flex gap-x-4 items-center pl-8">
                        <CiLocationOn className="text-[#3D68F5] text-lg" />
                        <a className="text-[#6D758E]">238, Arimantab, Moska  - USA.</a>
                    </div>
                </div>
                <div className="text-[#6D758E] flex gap-x-10 items-center">
                    <p>Help / support / contact</p>
                    <div className="flex items-center gap-x-5">
                        <Link to='https://www.facebook.com'><FaFacebookF className="text-base hover:text-[#3D68F5] tra" /></Link>
                        <Link to='https://www.facebook.com'><FaSkype className="text-lg hover:text-[#3D68F5] tra" /></Link>
                        <Link to='https://www.facebook.com'><FaTwitter className="text-lg hover:text-[#3D68F5] tra" /></Link>
                        <Link to='https://www.facebook.com'><FaLinkedin className="text-lg hover:text-[#3D68F5] tra" /></Link>
                    </div>
                </div>
            </div>
            <div className="navbar px-0 border-0 lg:py-3 py-5 relative z-50">
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
                    <Link to='/' className="btn btn-ghost text-xl p-0 hover:bg-transparent border-0 shadow-none"><img src="https://i.imgur.com/pWgKbz6.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-x-8 text-[#020F33] text-[16px] font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn lg:flex hidden button relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#3D68F5] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Emergency <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar1;