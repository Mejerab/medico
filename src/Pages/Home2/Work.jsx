import { HiArrowNarrowRight } from "react-icons/hi";
import PointHook from "../../hook/PointHook";

const Work = () => {
    return (
        <div className="max-w-[1320px] mx-auto px-3 2xl:px-0">
            <div className="flex justify-between items-center">
                <PointHook head={'HOW WE WORK?'} text={'Our Patient Care Approach Explained'} green />
                <div className="ml-80 space-y-3">
                    <p className="text-[#424544] leading-[180%]">Experience comprehensive healthcare at Mediko, where your well-being is our priority.</p>
                    <button className="btn relative overflow-hidden w-[204px] h-[57px] rounded-[100px] border border-[#203A42] bg-[#203A42] text-white hover:text-[#203A42] hover:bg-transparent tra group"><span className="flex gap-x-2 z-50">Get consult now <HiArrowNarrowRight className="p-0.5 ml-1 group-hover:text-white group-hover:bg-[#203A42] tra text-[#203A42] rounded-full bg-[#fff] text-xl flex items-center justify-center" /></span></button>
                </div>
            </div>
            <div className="mt-20 text-[24px] flex items-center justify-between">
                <div className="w-[330px] h-[340px] cursor-pointer bg-[#F3F8F6] hover:bg-[#2CA784] group tra rounded-xl text-center p-10 space-y-5">
                    <div className="border-2 rounded-full mx-auto border-dotted border-[#00193033] w-[86px] h-[86px] flex justify-center items-center">
                        <div className="w-[70px] h-[70px] rounded-full bg-[#001930] mx-auto flex justify-center items-center">
                            <span className="font-bold text-white">01</span>
                        </div>
                    </div>
                    <h4 className="group-hover:text-white tra text-[#001930] font-semibold text-center">Listen & Understand</h4>
                    <p className="group-hover:text-white tra text-[#424544] text-base leading-[180%]">spendisse dapibus quam vitae porta eleifend. Pellentesque aliquet lobortis turpis sit amet pharetra. Mauris sed</p>
                </div>
                <svg width="71" height="50" viewBox="0 0 71 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.94243 24.4839C11.3896 30.5596 19.7724 34.048 28.5711 34.4386C37.0541 34.8482 45.5599 32.4685 52.741 28.0775C56.712 25.6216 60.3552 22.4567 63.3034 18.795C63.8003 18.0999 64.8836 17.1478 65.6942 17.9862C66.4083 18.7987 65.8458 20.5115 65.349 21.2066C53.9237 35.6413 33.8813 43.212 15.9618 37.0646C10.7786 35.1581 6.0733 32.2409 2.10979 28.4871C0.797242 27.2037 3.29528 22.9037 4.94243 24.4839Z" fill="#001930" />
                    <path d="M54.8909 18.508L70.9327 16.5947L63.7644 31.756L54.8909 18.508Z" fill="#001930" />
                </svg>
                <div className="w-[330px] h-[340px] cursor-pointer bg-[#F3F8F6] hover:bg-[#2CA784] group tra rounded-xl text-center p-10 space-y-5">
                    <div className="border-2 rounded-full mx-auto border-dotted border-[#00193033] w-[86px] h-[86px] flex justify-center items-center">
                        <div className="w-[70px] h-[70px] rounded-full bg-[#001930] mx-auto flex justify-center items-center">
                            <span className="font-bold text-white">02</span>
                        </div>
                    </div>
                    <h4 className="group-hover:text-white tra text-[#001930] font-semibold text-center">Create a Tailored Plan</h4>
                    <p className="group-hover:text-white tra text-[#424544] text-base leading-[180%]">spendisse dapibus quam vitae porta eleifend. Pellentesque aliquet lobortis turpis sit amet pharetra. Mauris sed</p>
                </div>
                <svg width="71" height="50" viewBox="0 0 71 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.94243 25.5161C11.3896 19.4404 19.7724 15.952 28.5711 15.5614C37.0541 15.1518 45.5599 17.5315 52.741 21.9225C56.712 24.3784 60.3552 27.5433 63.3034 31.205C63.8003 31.9001 64.8836 32.8522 65.6942 32.0138C66.4083 31.2013 65.8458 29.4885 65.349 28.7934C53.9237 14.3587 33.8813 6.78804 15.9618 12.9354C10.7786 14.8419 6.0733 17.7591 2.10979 21.5129C0.797242 22.7963 3.29528 27.0963 4.94243 25.5161Z" fill="#001930" />
                    <path d="M54.8909 31.492L70.9327 33.4053L63.7644 18.244L54.8909 31.492Z" fill="#001930" />
                </svg>
                <div className="w-[330px] h-[340px] cursor-pointer bg-[#F3F8F6] hover:bg-[#2CA784] group tra rounded-xl text-center p-10 space-y-5">
                    <div className="border-2 rounded-full mx-auto border-dotted border-[#00193033] w-[86px] h-[86px] flex justify-center items-center">
                        <div className="w-[70px] h-[70px] rounded-full bg-[#001930] mx-auto flex justify-center items-center">
                            <span className="font-bold text-white">03</span>
                        </div>
                    </div>
                    <h4 className="group-hover:text-white tra text-[#001930] font-semibold text-center">Support & Empower</h4>
                    <p className="group-hover:text-white tra text-[#424544] text-base leading-[180%]">spendisse dapibus quam vitae porta eleifend. Pellentesque aliquet lobortis turpis sit amet pharetra. Mauris sed</p>
                </div>
            </div>
        </div>
    );
};

export default Work;