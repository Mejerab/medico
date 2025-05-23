import { Link, useNavigate } from "react-router";
import BannerHook from "../hook/BannerHook";
import Articles from "./Home1/Articles";
import NewsLetter from "./Home1/NewsLetter";

const BlogsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="space-y-28">
            <BannerHook first={'Our latest'} text1={'news'} text2={'and'} last={'insights'} />
            <Articles blog />
            <div className="text-center -mt-12 space-x-5">
                <Link to={`/blogs?1`} className="btn w-[60px] h-[60px] rounded-full bg-transparent border border-[#EAECF0] hover:text-white hover:bg-[#3D68F5] tra">01</Link>
                <Link to={`/blogs?2`} className="btn w-[60px] h-[60px] rounded-full bg-transparent border border-[#EAECF0] hover:text-white hover:bg-[#3D68F5] tra">02</Link>
                <Link to={`/blogs?3`} className="btn w-[60px] h-[60px] rounded-full bg-transparent border border-[#EAECF0] hover:text-white hover:bg-[#3D68F5] tra">03</Link>
                <button onClick={() => location.search.slice(1, 2) == 1 ? navigate('/blogs?2') : location.search.slice(1, 2) == 2 ? navigate('/blogs?3') : '/blogs?3'} className="btn w-[60px] h-[60px] rounded-full bg-transparent border border-[#EAECF0] hover:!text-white hover:bg-[#3D68F5] tra blue ">
                    <svg className="" width="14" height="12" viewBox="0 0 14 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6.00007C13.9951 5.47397 13.7832 4.97097 13.41 4.60007L9.12 0.30007C8.93264 0.113819 8.67919 0.00927734 8.415 0.00927734C8.15082 0.00927734 7.89736 0.113819 7.71 0.30007C7.61627 0.393033 7.54188 0.503634 7.49111 0.625494C7.44034 0.747353 7.4142 0.878058 7.4142 1.01007C7.4142 1.14208 7.44034 1.27279 7.49111 1.39465C7.54188 1.51651 7.61627 1.62711 7.71 1.72007L11 5.00007H1C0.734784 5.00007 0.48043 5.10543 0.292893 5.29296C0.105357 5.4805 0 5.73485 0 6.00007C0 6.26529 0.105357 6.51964 0.292893 6.70718C0.48043 6.89471 0.734784 7.00007 1 7.00007H11L7.71 10.2901C7.5217 10.477 7.41538 10.7312 7.41444 10.9965C7.41351 11.2619 7.51802 11.5168 7.705 11.7051C7.89198 11.8934 8.1461 11.9997 8.41147 12.0006C8.67683 12.0016 8.9317 11.897 9.12 11.7101L13.41 7.41007C13.7856 7.03672 13.9978 6.52965 14 6.00007Z" />
                    </svg>
                </button>
            </div>
            <NewsLetter />
        </div>
    );
};

export default BlogsPage;