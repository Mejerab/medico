import { HiArrowNarrowRight } from "react-icons/hi";
import BannerHook from "../hook/BannerHook";
import About from "./Home1/About";
import Card from "./Home1/Card";
import Doctors from "./Home1/Doctors";
import Articles from "./Home1/Articles";
import NewsLetter from "./Home1/NewsLetter";
import Ribon from "./Home1/Ribon";

const AboutPage = () => {
    return (
        <div className="space-y-28">
            <BannerHook first={'We are'} text1={'dedicated'} text2={'to supporting'} last={'you'} />
            <About />
            <div id="about" className="max-w-[1320px] mx-auto px-3 2xl:px-0">
                <h4 className="black text-[35px] lg:text-[46px] font-semibold leading-[114.99999999999999%]">At <span className="blue italic">Mediko</span>, our mission is to provide compassionate, high-quality healthcare <span className="blue italic">that improves the well-being</span> of our patients. We are committed to delivering advanced medical care with a personal touch.</h4>
                <div className="mt-16 flex lg:flex-row flex-col items-end gap-y-12 gap-x-28">
                    <img src="https://i.ibb.co.com/N2jd4HP9/image.png" alt="" />
                    <div className="space-y-6">
                        <div data-aos='fade-left' className="grid grid-cols-9 gap-x-4 border-b border-[#EAECF0] pb-6">
                            <div className="w-[80px] h-[80px] lg:col-span-1 col-span-2 rounded-full border border-[#F5FAFE] flex justify-center items-center">
                                <div className="bg-[#F5FAFE] p-4 w-fit rounded-full">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6668 2.33333C11.6668 1.04417 12.711 0 14.0002 0C15.2893 0 16.3335 1.04417 16.3335 2.33333C16.3335 3.6225 15.2893 4.66667 14.0002 4.66667C12.711 4.66667 11.6668 3.6225 11.6668 2.33333ZM10.9108 10.4767C11.549 10.5957 12.158 10.1955 12.2875 9.5655C12.452 8.75467 13.173 8.16667 14.0013 8.16667C14.8297 8.16667 15.5507 8.75467 15.7152 9.5655C15.8283 10.1185 16.3148 10.5 16.8573 10.5C16.9332 10.5 17.0125 10.4918 17.0907 10.4767C17.7218 10.3483 18.1302 9.73233 18.0018 9.1C17.6168 7.2065 15.9345 5.83217 14.0002 5.83217C12.0658 5.83217 10.3835 7.2065 9.99851 9.1C9.87134 9.73233 10.2785 10.3472 10.9097 10.4767H10.9108ZM23.9168 7C25.206 7 26.2502 5.95583 26.2502 4.66667C26.2502 3.3775 25.206 2.33333 23.9168 2.33333C22.6277 2.33333 21.5835 3.3775 21.5835 4.66667C21.5835 5.95583 22.6277 7 23.9168 7ZM5.79734 11.8988C5.91051 12.4518 6.39701 12.8333 6.93951 12.8333C7.01534 12.8333 7.09468 12.8252 7.17284 12.81C7.80401 12.6817 8.21234 12.0657 8.08401 11.4333C7.69901 9.53983 6.01668 8.1655 4.08234 8.1655C2.14801 8.1655 0.466844 9.541 0.0818442 11.4345C-0.0453224 12.0668 0.361844 12.6817 0.993011 12.8112C1.63118 12.9325 2.24018 12.53 2.36968 11.9C2.53418 11.0892 3.25518 10.5012 4.08351 10.5012C4.91184 10.5012 5.63284 11.088 5.79734 11.8988ZM4.08351 7C5.37268 7 6.41684 5.95583 6.41684 4.66667C6.41684 3.3775 5.37268 2.33333 4.08351 2.33333C2.79434 2.33333 1.75018 3.3775 1.75018 4.66667C1.75018 5.95583 2.79434 7 4.08351 7ZM27.9185 11.4345C27.5335 9.541 25.8512 8.16667 23.9168 8.16667C21.9825 8.16667 20.3002 9.541 19.9152 11.4345C19.788 12.0668 20.1952 12.6817 20.8263 12.8112C21.4645 12.9325 22.0735 12.53 22.203 11.9C22.3675 11.0892 23.0885 10.5012 23.9168 10.5012C24.7452 10.5012 25.4662 11.0892 25.6307 11.9C25.7438 12.453 26.2303 12.8345 26.7728 12.8345C26.8487 12.8345 26.928 12.8263 27.0062 12.8112C27.6373 12.6828 28.0468 12.0668 27.9185 11.4345ZM23.057 21.644L17.5083 19.5638V14.126C17.5083 12.3573 16.253 10.8185 14.5882 10.5478C13.5627 10.3822 12.5255 10.6668 11.7427 11.3342C10.9587 12.0003 10.5083 12.9722 10.5083 14.0012V22.8247L9.32418 21.882C9.31601 21.875 9.30434 21.8738 9.29618 21.868C7.88334 20.6407 5.73901 20.7317 4.45218 22.1107C3.13384 23.52 3.20851 25.739 4.60384 27.0457L5.25484 27.6733C5.47184 27.8833 5.76234 28 6.06451 28C7.11451 28 7.63018 26.7225 6.87418 25.9933L6.21151 25.354C5.74134 24.913 5.71684 24.1722 6.15784 23.702C6.59534 23.233 7.33384 23.2108 7.80284 23.646C7.81451 23.6565 7.82968 23.6588 7.84134 23.6693C7.85418 23.6798 9.87018 25.2957 9.87018 25.2957C10.4255 25.7378 11.1675 25.8207 11.8068 25.5138C12.4462 25.2047 12.844 24.5723 12.844 23.863V14C12.844 13.657 12.9945 13.3327 13.2558 13.1098C13.5218 12.8858 13.8625 12.7902 14.2148 12.8497C14.755 12.9372 15.1773 13.4972 15.1773 14.1248V20.3712C15.1773 20.8577 15.4795 21.2928 15.9333 21.4643L22.2392 23.828C23.5342 24.3133 24.4232 25.5185 24.5037 26.901C24.5398 27.5205 25.0543 27.9988 25.6668 27.9988C25.6902 27.9988 25.7123 27.9988 25.7368 27.9965C26.3797 27.9592 26.8708 27.4073 26.8323 26.7633C26.6982 24.4615 25.2153 22.4513 23.0582 21.6417L23.057 21.644Z" fill="#3D68F5" />
                                    </svg>

                                </div>
                            </div>
                            <div className="col-span-7 lg:col-span-8 space-y-3">
                                <h4 className="font-semibold text-[24px] black">Who We Are</h4>
                                <p className="prime leading-[180%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="prime leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div data-aos='fade-left' data-aos-delay={400} className="grid grid-cols-9 gap-x-4 border-b border-[#EAECF0] pb-6">
                            <div className="w-[80px] h-[80px] lg:col-span-1 col-span-2 rounded-full border border-[#F5FAFE] flex justify-center items-center">
                                <div className="bg-[#F5FAFE] p-4 w-fit rounded-full">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.6238 9.5165C23.0102 9.35783 22.3638 9.73233 22.2028 10.3565C22.0418 10.9795 22.4187 11.6165 23.0428 11.7775C24.5875 12.1753 25.6667 13.5683 25.6667 15.1667V17.5H11.6667V15.1667C11.6667 13.237 13.237 11.6667 15.1667 11.6667C15.8118 11.6667 16.3333 11.1452 16.3333 10.5C16.3333 9.85483 15.8118 9.33333 15.1667 9.33333C12.9267 9.33333 10.9772 10.6038 10.0007 12.4612C9.324 11.9618 8.4875 11.6667 7.58333 11.6667C5.33167 11.6667 3.5 13.4983 3.5 15.75C3.5 16.3753 3.64233 16.9692 3.89433 17.5H2.33333V5.83333C2.33333 5.18817 1.81183 4.66667 1.16667 4.66667C0.5215 4.66667 0 5.18817 0 5.83333V26.8333C0 27.4785 0.5215 28 1.16667 28C1.81183 28 2.33333 27.4785 2.33333 26.8333V24.5H25.6667V26.8333C25.6667 27.4785 26.1882 28 26.8333 28C27.4785 28 28 27.4785 28 26.8333V15.1667C28 12.5043 26.201 10.1815 23.6238 9.5165ZM5.83333 15.75C5.83333 14.7852 6.6185 14 7.58333 14C8.54817 14 9.33333 14.7852 9.33333 15.75C9.33333 16.7148 8.54817 17.5 7.58333 17.5C6.6185 17.5 5.83333 16.7148 5.83333 15.75ZM2.33333 22.1667V19.8333H25.6667V22.1667H2.33333ZM8.16667 4.66667C8.16667 4.0215 8.68817 3.5 9.33333 3.5H13.9592L15.946 0.519166C16.184 0.159832 16.604 -0.0338344 17.0298 0.00583227C17.458 0.0466656 17.829 0.321999 17.9935 0.717499L20.1693 5.94067L21.8528 3.92C22.0745 3.654 22.4035 3.50117 22.75 3.50117H26.8333C27.4785 3.50117 28 4.02267 28 4.66783C28 5.313 27.4785 5.8345 26.8333 5.8345H23.2972L20.7305 8.91567C20.5077 9.18283 20.1763 9.3345 19.8333 9.3345C19.775 9.3345 19.7167 9.32983 19.6595 9.32167C19.2558 9.25983 18.914 8.99267 18.7577 8.617L16.6798 3.6295L15.5552 5.31533C15.3382 5.63967 14.9742 5.8345 14.5845 5.8345H9.3345C8.68933 5.8345 8.16783 5.313 8.16783 4.66783L8.16667 4.66667Z" fill="#3D68F5" />
                                    </svg>
                                </div>
                            </div>
                            <div className="col-span-7 lg:col-span-8 space-y-3">
                                <h4 className="font-semibold text-[24px] black">Who We Are</h4>
                                <p className="prime leading-[180%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="prime leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div data-aos='fade-left' data-aos-delay={600} className="grid grid-cols-9 gap-x-4">
                            <div className="w-[80px] h-[80px] lg:col-span-1 col-span-2 rounded-full border border-[#F5FAFE] flex justify-center items-center">
                                <div className="bg-[#F5FAFE] p-4 w-fit rounded-full">
                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0002 14C15.8607 14 19.0002 10.8605 19.0002 7C19.0002 3.1395 15.8607 0 12.0002 0C8.13966 0 5.00016 3.1395 5.00016 7C5.00016 10.8605 8.13966 14 12.0002 14ZM12.0002 2.33333C14.5738 2.33333 16.6668 4.42633 16.6668 7C16.6668 9.57367 14.5738 11.6667 12.0002 11.6667C9.4265 11.6667 7.3335 9.57367 7.3335 7C7.3335 4.42633 9.4265 2.33333 12.0002 2.33333ZM23.6668 26.8333C23.6668 27.4785 23.1453 28 22.5002 28C21.855 28 21.3335 27.4785 21.3335 26.8333C21.3335 23.583 19.4237 20.769 16.6668 19.4553V22.3673C18.0248 22.8492 19.0002 24.1453 19.0002 25.6667V26.8333C19.0002 27.4785 18.4787 28 17.8335 28C17.1883 28 16.6668 27.4785 16.6668 26.8333V25.6667C16.6668 25.0227 16.1442 24.5 15.5002 24.5C14.8562 24.5 14.3335 25.0227 14.3335 25.6667V26.8333C14.3335 27.4785 13.812 28 13.1668 28C12.5217 28 12.0002 27.4785 12.0002 26.8333V25.6667C12.0002 24.1453 12.9755 22.8492 14.3335 22.3673V18.7507C13.952 18.6958 13.5623 18.6667 13.1668 18.6667H10.8335C10.0227 18.6667 9.23983 18.7857 8.50016 19.0073V22.4805C9.19783 22.8842 9.66683 23.6378 9.66683 24.5012C9.66683 25.7903 8.62266 26.8345 7.3335 26.8345C6.04433 26.8345 5.00016 25.7903 5.00016 24.5012C5.00016 23.6378 5.46916 22.8842 6.16683 22.4805V20.1367C4.05283 21.6148 2.66683 24.066 2.66683 26.8345C2.66683 27.4797 2.14533 28.0012 1.50016 28.0012C0.854996 28.0012 0.333496 27.4797 0.333496 26.8345C0.333496 21.0443 5.04333 16.3345 10.8335 16.3345H13.1668C18.957 16.3345 23.6668 21.0432 23.6668 26.8333Z" fill="#3D68F5" />
                                    </svg>
                                </div>
                            </div>
                            <div className="col-span-7 lg:col-span-8 space-y-3">
                                <h4 className="font-semibold text-[24px] black">Who We Are</h4>
                                <p className="prime leading-[180%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="prime leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <button className="btn button2 relative border-0 shadow-none overflow-hidden w-[289px] h-[57px] rounded-[100px] bg-white text-white hover:text-[#001930] tra"><span className="flex gap-x-2 z-50">Request An Appointment <HiArrowNarrowRight className="p-0.5 ml-1 blue rounded-full bg-white text-xl flex items-center justify-center" /></span></button>
                    </div>
                </div>
            </div>
            <Card />
            <Doctors />
            <Ribon />
            <Articles />
            <NewsLetter />
        </div>
    );
};

export default AboutPage;