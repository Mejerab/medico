import { Link } from "react-router";

const Footer1 = () => {
    return (
        <div className="bg-[url(https://i.imgur.com/Jx34qyT.jpeg)] bg-cover text-white">
            <div className="w-full py-28 bg-[#020F33f2]">
                <div data-aos='fade-left' className="max-w-[1320px] mx-auto px-3 2xl:px-0 grid lg:grid-cols-5 gap-y-12 items-center">
                    <div className="space-y-7">
                        <button className="cursor-pointer"><img src="https://i.imgur.com/oRXUhoO.png" alt="" /></button>
                        <p className="text-base leading-[180%]">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                        <div className="flex items-center gap-x-4">
                            <img src="https://i.imgur.com/LuMfBfb.png" alt="" />
                            <span>
                                <h5 className="text-[20px] font-semibold">Alex Anderson</h5>
                                <p className="text-[16px] blue">Co Founder</p>
                            </span>
                        </div>
                    </div>
                    <ul data-aos='fade-left' data-aos-delay={400} className="text-base lg:mx-auto space-y-5">
                        <h4 className="font-semibold text-[24px]">Company</h4>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span> Home </Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  About Us</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span> Customer</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span> Service</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  Collections</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  Best Seller</Link></li>
                    </ul>
                    <div data-aos='fade-left' data-aos-delay={600} className="text-base lg:ml-auto">
                        <h4 className="font-semibold text-[24px]">Get In Touch</h4>
                        <h6 className="font-semibold text-[20px] mt-6 mb-4">Location</h6>
                        <p className="text-base leading-[30px]">1615 Lyon Avenue <br />
                        Framingham, MA 01702 </p>
                        <h6 className="font-semibold text-[20px] mt-6 mb-4">Location</h6>
                        <p>Phone : <a className="blue" href="tel:508-872-7876">508-872-7876</a></p>
                        <p className="mt-2">Email : <a className="blue" href="mailto:mediko@gmail.com"> mediko@gmail.com</a></p>
                    </div>
                    <ul data-aos='fade-left' data-aos-delay={800} className="text-base lg:ml-auto space-y-5">
                        <h4 className="font-semibold text-[24px]">Information</h4>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  How It’s Work </Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>   Partners </Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  Testimonials</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  key areas</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>   case Studies</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>   Pricing </Link></li>
                    </ul>
                    <ul data-aos='fade-left' data-aos-delay={1000} className="text-base lg:ml-auto space-y-5">
                        <h4 className="font-semibold text-[24px]">Quick Links</h4>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span> Careers </Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  Infrastructure</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span> Client support</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span> Privacy Policy</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  Terms Of Use</Link></li>
                        <li className="group hover:text-[#3D68F5] tra hover:-ml-1"><Link><span className="group-hover:opacity-0 tra">-</span>  Sitemap</Link></li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#102356] text-base text-center py-4 w-full">
                <p>Copyright © 2025 <span className="blue">Mediko </span>|| All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer1;