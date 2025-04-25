import { useState } from "react";
import BannerHook from "../hook/BannerHook";
import PointHook from "../hook/PointHook";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Checkbox } from "@mui/material";
import Swal from "sweetalert2";
import { Map, Marker } from "pigeon-maps";

const Contacts = () => {
    const [date, setDate] = useState();
    const handleSubmit = e => {
        e.preventDefault();
        const select = e.target.select.value;
        if (select === 'Select Age') {
            Swal.fire({
                title: 'Error!',
                text: 'Select your age range first.',
                icon: 'error',
                background: '#3D68F5',
                color: '#fff',
                confirmButtonColor: '#3D68F5f2',
                customClass: {
                    confirmButton: 'confirmButton'
                },
                confirmButtonText: 'Return'
            })
        }
        else {
            Swal.fire({
                title: 'Success',
                text: 'Your message has been sent successfully.',
                icon: 'success',
                background: '#3D68F5',
                color: '#fff',
                confirmButtonColor: '#3D68F5f2',
                customClass: {
                    confirmButton: 'confirmButton'
                },
                confirmButtonText: 'Continue',
            })
            e.target.reset();
        }
    }
    return (
        <div className="space-y-28">
            <BannerHook first={'Speak with'} text1={'our'} text2={'medical'} last={'team'} />
            <div>
                <div className="w-full lg:w-1/2 mx-auto">
                    <PointHook head={'Let’s Talk'} text={'We’re Here to Help! Contact Us for Personalized Care'} center />
                </div>
                <div className="mt-16 bg-[#F5FAFE] rounded-xl max-w-[1320px] mx-auto px-3 2xl:px-0">
                    <div className="p-3 space-y-12 lg:p-16 lg:grid grid-cols-6 gap-12 items-start">
                        <div data-aos='fade-left' className="bg-white w-full col-span-2 rounded-xl pb-12">
                            <div className="border rounded-xl tra border-[#EAECF0] m-10 hover:bg-[#3D68F5] space-y-3 p-6 group">
                                <h5 className="font-semibold text-[24px] black group-hover:!text-white">Call Us <span className="blue group-hover:!text-white">Today:</span></h5>
                                <p className="flex items-center group-hover:text-white border-t border-[#EAECF0] pt-2 gap-x-3"><svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_79_10870)">
                                        <path d="M9.74999 0.749977C9.74999 0.551065 9.82901 0.360299 9.96966 0.219647C10.1103 0.0789947 10.3011 -2.29772e-05 10.5 -2.29772e-05C12.4884 0.00216072 14.3948 0.793038 15.8009 2.19909C17.2069 3.60514 17.9978 5.51152 18 7.49998C18 7.69889 17.921 7.88966 17.7803 8.03031C17.6397 8.17096 17.4489 8.24998 17.25 8.24998C17.0511 8.24998 16.8603 8.17096 16.7197 8.03031C16.579 7.88966 16.5 7.69889 16.5 7.49998C16.4982 5.90923 15.8655 4.38414 14.7407 3.25931C13.6158 2.13448 12.0907 1.50176 10.5 1.49998C10.3011 1.49998 10.1103 1.42096 9.96966 1.28031C9.82901 1.13965 9.74999 0.948889 9.74999 0.749977ZM10.5 4.49998C11.2956 4.49998 12.0587 4.81605 12.6213 5.37866C13.1839 5.94127 13.5 6.70433 13.5 7.49998C13.5 7.69889 13.579 7.88966 13.7197 8.03031C13.8603 8.17096 14.0511 8.24998 14.25 8.24998C14.4489 8.24998 14.6397 8.17096 14.7803 8.03031C14.921 7.88966 15 7.69889 15 7.49998C14.9988 6.30687 14.5243 5.16297 13.6807 4.31931C12.837 3.47566 11.6931 3.00117 10.5 2.99998C10.3011 2.99998 10.1103 3.07899 9.96966 3.21965C9.82901 3.3603 9.74999 3.55106 9.74999 3.74998C9.74999 3.94889 9.82901 4.13966 9.96966 4.28031C10.1103 4.42096 10.3011 4.49998 10.5 4.49998ZM17.3197 12.5542C17.7544 12.9901 17.9984 13.5805 17.9984 14.196C17.9984 14.8115 17.7544 15.4019 17.3197 15.8377L16.6372 16.6245C10.4947 22.5052 -4.45276 7.56148 1.33724 1.39948L2.19974 0.649477C2.63607 0.226985 3.22119 -0.00673617 3.82852 -0.00112185C4.43585 0.00449248 5.01655 0.248991 5.44499 0.679477C5.46824 0.702727 6.85799 2.50798 6.85799 2.50798C7.27036 2.9412 7.49992 3.51667 7.49894 4.11478C7.49796 4.71288 7.26653 5.28761 6.85274 5.71948L5.98424 6.81148C6.46488 7.97931 7.17154 9.04066 8.06362 9.93455C8.9557 10.8284 10.0156 11.5372 11.1825 12.0202L12.2812 11.1465C12.7132 10.733 13.2878 10.5018 13.8857 10.501C14.4836 10.5002 15.0589 10.7297 15.492 11.142C15.492 11.142 17.2965 12.531 17.3197 12.5542ZM16.2877 13.6447C16.2877 13.6447 14.493 12.264 14.4697 12.2407C14.3152 12.0875 14.1065 12.0016 13.8889 12.0016C13.6713 12.0016 13.4625 12.0875 13.308 12.2407C13.2877 12.2617 11.775 13.467 11.775 13.467C11.673 13.5481 11.5517 13.6013 11.423 13.6213C11.2942 13.6413 11.1625 13.6274 11.0407 13.581C9.52908 13.0182 8.15604 12.137 7.01462 10.9973C5.87319 9.85754 4.99004 8.4858 4.42499 6.97498C4.37489 6.85157 4.35855 6.71704 4.37767 6.58523C4.39678 6.45342 4.45065 6.32907 4.53374 6.22498C4.53374 6.22498 5.73899 4.71148 5.75924 4.69198C5.91244 4.53747 5.9984 4.32869 5.9984 4.1111C5.9984 3.89352 5.91244 3.68474 5.75924 3.53023C5.73599 3.50773 4.35524 1.71148 4.35524 1.71148C4.19841 1.57086 3.99374 1.49555 3.78317 1.50099C3.57261 1.50643 3.3721 1.5922 3.22274 1.74073L2.36024 2.49073C-1.87126 7.57873 11.082 19.8135 15.5407 15.6L16.224 14.8125C16.3841 14.6642 16.4803 14.4594 16.4922 14.2415C16.5041 14.0236 16.4308 13.8096 16.2877 13.6447Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_79_10870">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                    <a className="prime group-hover:!text-white" href="tel:+008695698372">+00 (869) 569 - 8372</a></p>
                            </div>
                            <div className="border rounded-xl tra border-[#EAECF0] m-10 hover:bg-[#3D68F5] space-y-3 p-6 group">
                                <h5 className="font-semibold text-[24px] black group-hover:!text-white">Email<span className="blue group-hover:!text-white"> Us:</span></h5>
                                <p className="flex items-center group-hover:text-white border-t border-[#EAECF0] pt-2 gap-x-3">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.25 0.75H3.75C2.7558 0.751191 1.80267 1.14666 1.09966 1.84966C0.396661 2.55267 0.00119089 3.5058 0 4.5L0 13.5C0.00119089 14.4942 0.396661 15.4473 1.09966 16.1503C1.80267 16.8533 2.7558 17.2488 3.75 17.25H14.25C15.2442 17.2488 16.1973 16.8533 16.9003 16.1503C17.6033 15.4473 17.9988 14.4942 18 13.5V4.5C17.9988 3.5058 17.6033 2.55267 16.9003 1.84966C16.1973 1.14666 15.2442 0.751191 14.25 0.75ZM3.75 2.25H14.25C14.6991 2.25088 15.1376 2.38614 15.5092 2.63835C15.8808 2.89057 16.1684 3.24821 16.335 3.66525L10.5915 9.4095C10.1688 9.83049 9.59656 10.0669 9 10.0669C8.40344 10.0669 7.83118 9.83049 7.4085 9.4095L1.665 3.66525C1.83161 3.24821 2.11921 2.89057 2.49079 2.63835C2.86236 2.38614 3.30091 2.25088 3.75 2.25ZM14.25 15.75H3.75C3.15326 15.75 2.58097 15.5129 2.15901 15.091C1.73705 14.669 1.5 14.0967 1.5 13.5V5.625L6.348 10.47C7.05197 11.1722 8.00569 11.5665 9 11.5665C9.99431 11.5665 10.948 11.1722 11.652 10.47L16.5 5.625V13.5C16.5 14.0967 16.2629 14.669 15.841 15.091C15.419 15.5129 14.8467 15.75 14.25 15.75Z" />
                                    </svg>
                                    <a className="prime group-hover:!text-white" href="mailto:supportxenon@gmail.com">supportxenon@gmail.com</a></p>
                            </div>
                            <div className="border rounded-xl tra border-[#EAECF0] m-10 hover:bg-[#3D68F5] space-y-3 p-6 group">
                                <h5 className="font-semibold text-[24px] black group-hover:!text-white">Our <span className="blue group-hover:!text-white">Location:</span></h5>
                                <div className="flex items-center group-hover:text-white border-t border-[#EAECF0] pt-2 gap-x-3">
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.9684 18.006L7.44559 17.5579C6.72486 16.9544 0.431641 11.5193 0.431641 7.54372C0.431641 3.38129 3.80597 0.00695801 7.9684 0.00695801C12.1308 0.00695801 15.5052 3.38129 15.5052 7.54372C15.5052 11.5194 9.21195 16.9544 8.4942 17.5609L7.9684 18.006ZM7.9684 1.63663C4.70755 1.64032 2.06504 4.28284 2.06134 7.54368C2.06134 10.0413 5.93317 14.0311 7.9684 15.8572C10.0037 14.0303 13.8755 10.0382 13.8755 7.54368C13.8718 4.28284 11.2293 1.64035 7.9684 1.63663Z" />
                                        <path d="M7.96798 10.5312C6.31802 10.5312 4.98047 9.19361 4.98047 7.54366C4.98047 5.89371 6.31802 4.55615 7.96798 4.55615C9.61793 4.55615 10.9555 5.89371 10.9555 7.54366C10.9555 9.19361 9.61796 10.5312 7.96798 10.5312ZM7.96798 6.04987C7.143 6.04987 6.47422 6.71865 6.47422 7.54363C6.47422 8.3686 7.143 9.03738 7.96798 9.03738C8.79295 9.03738 9.46173 8.3686 9.46173 7.54363C9.46173 6.71865 8.79299 6.04987 7.96798 6.04987Z" />
                                    </svg>
                                    <p className="prime group-hover:!text-white">2240 Melbourne Ave <br />Dexter, Michigan(MI), 48130</p></div>
                            </div>
                        </div>
                        <form data-aos='fade-right' onSubmit={handleSubmit} className="col-span-4 space-y-5">
                            <div className="flex items-center gap-x-5 w-full">
                                <div className="space-y-2 w-full">
                                    <p className="black">First Name <span className="text-[#FF5900]">*</span></p>
                                    <input required type="text" id="first" className="input w-full h-[56px] placeholder:text-[#6D758E] prime hover:text-[#6D758E] text-base rounded-[6px] border border-[#EAECF0] focus:outline-[#3D68F5]" placeholder="Leslie" />
                                </div>
                                <div className="space-y-2 w-full">
                                    <p className="black">Last Name <span className="text-[#FF5900]">*</span></p>
                                    <input required type="text" className="input w-full h-[56px] placeholder:text-[#6D758E] prime hover:text-[#6D758E] text-base rounded-[6px] border border-[#EAECF0] focus:outline-[#3D68F5]" placeholder="Alexander" />
                                </div>
                            </div>
                            <div className="space-y-2 w-full">
                                <p className="black">Email Address <span className="text-[#FF5900]">*</span></p>
                                <input required type="email" className="input w-full h-[56px] placeholder:text-[#6D758E] prime hover:text-[#6D758E] text-base rounded-[6px] border border-[#EAECF0] focus:outline-[#3D68F5]" placeholder="info@mediko.com" />
                            </div>
                            <div className="flex items-center gap-x-5 w-full">
                                <div className="space-y-2 w-full">
                                    <p className="black">First Name <span className="text-[#FF5900]">*</span></p>
                                    <select required name="select" defaultValue="Select Age" className="select w-full h-[56px] placeholder:text-[#6D758E] prime hover:text-[#6D758E] text-base rounded-[6px] border border-[#EAECF0] focus:outline-[#3D68F5]">
                                        <option disabled={true}>Select Age</option>
                                        <option>0 - 18</option>
                                        <option>19-25</option>
                                        <option>26-40</option>
                                    </select>
                                </div>
                                <div className="space-y-2 w-full">
                                    <p className="black">Choose Date <span className="text-[#FF5900]">*</span></p>
                                    <div className="relative" onBlur={() => setDate(false)} onFocus={() => setDate(true)}>
                                        <input required type={date ? 'date' : 'text'} id="date" name="date" className="input w-full h-[56px] placeholder:text-[#6D758E] prime hover:text-[#6D758E] relative text-base rounded-[6px] border border-[#EAECF0] focus:outline-[#3D68F5]" placeholder="Choose date" />
                                        <svg onFocus={() => setDate(true)} className={`cursor-pointe pointer-events-none absolute top-5 right-3 ${date ? 'opacity-100 visible' : 'opacity-0 invisible'}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2070_1796)">
                                                <path d="M14.25 1.5H13.5V0.75C13.5 0.551088 13.421 0.360322 13.2803 0.21967C13.1397 0.0790176 12.9489 0 12.75 0C12.5511 0 12.3603 0.0790176 12.2197 0.21967C12.079 0.360322 12 0.551088 12 0.75V1.5H6V0.75C6 0.551088 5.92098 0.360322 5.78033 0.21967C5.63968 0.0790176 5.44891 0 5.25 0C5.05109 0 4.86032 0.0790176 4.71967 0.21967C4.57902 0.360322 4.5 0.551088 4.5 0.75V1.5H3.75C2.7558 1.50119 1.80267 1.89666 1.09966 2.59966C0.396661 3.30267 0.00119089 4.2558 0 5.25L0 14.25C0.00119089 15.2442 0.396661 16.1973 1.09966 16.9003C1.80267 17.6033 2.7558 17.9988 3.75 18H14.25C15.2442 17.9988 16.1973 17.6033 16.9003 16.9003C17.6033 16.1973 17.9988 15.2442 18 14.25V5.25C17.9988 4.2558 17.6033 3.30267 16.9003 2.59966C16.1973 1.89666 15.2442 1.50119 14.25 1.5ZM1.5 5.25C1.5 4.65326 1.73705 4.08097 2.15901 3.65901C2.58097 3.23705 3.15326 3 3.75 3H14.25C14.8467 3 15.419 3.23705 15.841 3.65901C16.2629 4.08097 16.5 4.65326 16.5 5.25V6H1.5V5.25ZM14.25 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V7.5H16.5V14.25C16.5 14.8467 16.2629 15.419 15.841 15.841C15.419 16.2629 14.8467 16.5 14.25 16.5Z" fill="#6D758E" />
                                                <path d="M9 12.375C9.62132 12.375 10.125 11.8713 10.125 11.25C10.125 10.6287 9.62132 10.125 9 10.125C8.37868 10.125 7.875 10.6287 7.875 11.25C7.875 11.8713 8.37868 12.375 9 12.375Z" fill="#6D758E" />
                                                <path d="M5.25 12.375C5.87132 12.375 6.375 11.8713 6.375 11.25C6.375 10.6287 5.87132 10.125 5.25 10.125C4.62868 10.125 4.125 10.6287 4.125 11.25C4.125 11.8713 4.62868 12.375 5.25 12.375Z" fill="#6D758E" />
                                                <path d="M12.75 12.375C13.3713 12.375 13.875 11.8713 13.875 11.25C13.875 10.6287 13.3713 10.125 12.75 10.125C12.1287 10.125 11.625 10.6287 11.625 11.25C11.625 11.8713 12.1287 12.375 12.75 12.375Z" fill="#6D758E" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2070_1796">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2 w-full">
                                <p className="black">Phone <span className="text-[#6D758E80]">(Optional)</span></p>
                                <input type="tel" className="input w-full h-[56px] placeholder:text-[#6D758E] prime hover:text-[#6D758E] text-base rounded-[6px] border border-[#EAECF0] focus:outline-[#3D68F5]" placeholder="00 895 463 597 50" />
                            </div>
                            <div className="space-y-2 w-full">
                                <p className="black">Message</p>
                                <textarea required rows={6} className="textarea w-full placeholder:text-[#6D758E] prime hover:text-[#6D758E] text-base rounded-[6px] border border-[#EAECF0] focus:outline-[#3D68F5]" placeholder="Write your message..."></textarea>
                            </div>
                            <div className="flex lg:flex-row flex-row-reverse justify-between mt-8">
                                <button className="btn button2 relative overflow-hidden w-[183px] h-[56px] rounded-[100px] border border-[#3D68F5] text-white hover:text-[#020F33] hover:bg-white tra"><span className="flex gap-x-2 z-50">Submit Now <HiArrowNarrowRight className="p-0.5 ml-1 bg-white rounded-full text-[#3D68F5] text-xl flex items-center justify-center" /></span></button>
                                <div className="flex items-center">
                                    <Checkbox sx={{
                                        '&.Mui-checked': {
                                            color: '#3D68F5',
                                        },
                                    }} />
                                    <p className="prime">Email me with news and offer</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="-mb-2">
                <Map height={600} defaultCenter={[40.7128, -74.0060]} defaultZoom={11}>
                </Map>
            </div>
        </div>
    );
};

export default Contacts;