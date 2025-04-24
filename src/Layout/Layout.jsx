import { Outlet, useLocation } from "react-router";
import Navbar1 from "../Components/Navbar1";
import Footer1 from "../Components/Footer1";
import Footer2 from "../Components/Footer2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Layout = () => {
    const location = useLocation();
    useEffect(()=>{
        AOS.init({
            delay: 100,
            once: true
        });
    }, [])
    return (
        <div className="font black overflow-hidden" data-theme='light'>
            {location.pathname!=='/home2'&&<Navbar1 />}
            <Outlet />
            {location.pathname==='/home2'?<Footer2 />:<Footer1 />}
        </div>
    );
};

export default Layout;