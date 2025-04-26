import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedin, FaSkype, FaTwitter } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { SlClock } from "react-icons/sl";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Footer2 = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        if (email) {
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
        else{
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
    }
    return (
        <div className="bg-[url(https://i.ibb.co.com/60mf7Q8L/bg.jpg)] bg-cover bg-center ">
            <div className="w-full h-full bg-[#001930e6]">
                <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 pt-24">
                    <div className="text-white grid gap-y-9 lg:grid-cols-9 justify-between">
                        <div data-aos='fade-left' className="font-semibold space-y-8 col-span-2">
                            <h4 className="text-[24px] font-semibold">Get In Touch</h4>
                            <div className="flex gap-x-5">
                                <svg className="mt-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 40C8.97167 40 0 31.0283 0 20C0 8.97167 8.97167 0 20 0C31.0283 0 40 8.97167 40 20C40 31.0283 31.0283 40 20 40ZM20 1.66667C9.89167 1.66667 1.66667 9.89167 1.66667 20C1.66667 30.1083 9.89167 38.3333 20 38.3333C30.1083 38.3333 38.3333 30.1083 38.3333 20C38.3333 9.89167 30.1083 1.66667 20 1.66667ZM24.6667 28.1667C25.035 27.89 25.11 27.3683 24.835 27L20.0017 20.555V9.16667C20.0017 8.70667 19.6283 8.33333 19.1683 8.33333C18.7083 8.33333 18.335 8.70667 18.335 9.16667V20.8333C18.335 21.0133 18.3933 21.1883 18.5017 21.3333L23.5017 28C23.6667 28.2183 23.9167 28.3333 24.1683 28.3333C24.3417 28.3333 24.5167 28.2783 24.6667 28.1667Z" fill="#2CA784" />
                                </svg>
                                <div className="space-y-2">
                                    <h5 className="text-[20px]">Opening Hours</h5>
                                    <p className="font-normal leading-[180%]">Friday - Saturday : <span className="green">08 am - 10 pm</span> <br />
                                        Sunday : <span className="green">Close</span></p>
                                </div>
                            </div>
                            <div className="flex gap-x-5">
                                <svg className="mt-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 39.9983L18.8266 39.0067C15.1566 35.9017 3.18164 25.1267 3.18164 16.8183C3.18164 7.545 10.7266 0 20 0C29.2733 0 36.8183 7.545 36.8183 16.8183C36.8183 25.1267 24.8433 35.9017 21.1733 39.0067L20 39.9983ZM20 1.66667C11.645 1.66667 4.84831 8.46333 4.84831 16.8183C4.84831 24.605 17.3883 35.6067 19.9016 37.735L20 37.8183L20.0983 37.735C22.6116 35.6083 35.1516 24.605 35.1516 16.8183C35.1516 8.46333 28.355 1.66667 20 1.66667Z" fill="#2CA784" />
                                    <path d="M20.0002 23.3333C16.3235 23.3333 13.3335 20.3433 13.3335 16.6667C13.3335 12.99 16.3235 10 20.0002 10C23.6768 10 26.6668 12.99 26.6668 16.6667C26.6668 20.3433 23.6768 23.3333 20.0002 23.3333ZM20.0002 11.6667C17.2435 11.6667 15.0002 13.91 15.0002 16.6667C15.0002 19.4233 17.2435 21.6667 20.0002 21.6667C22.7568 21.6667 25.0002 19.4233 25.0002 16.6667C25.0002 13.91 22.7568 11.6667 20.0002 11.6667Z" fill="#2CA784" />
                                </svg>
                                <div className="space-y-2">
                                    <h5 className="text-[20px]">Our Location</h5>
                                    <p className="font-normal leading-[180%]">1615 Lyon Avenue <br />
                                        Framingham, MA 01702 </p>
                                </div>
                            </div>
                            <div className="flex gap-x-5">
                                <svg className="mt-3" width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.8502 12.855C28.9302 6.22663 23.4285 0.864961 16.7668 0.101628C12.5918 -0.378372 8.53515 0.836628 5.34849 3.51829C2.20349 6.16496 0.263485 10.0283 0.0268186 14.1183C0.000151943 14.5783 0.350152 14.9733 0.810152 14.9983C1.27015 15.035 1.66349 14.675 1.69015 14.215C1.90015 10.5783 3.62515 7.14496 6.42182 4.79163C9.25349 2.40996 12.8602 1.32829 16.5768 1.75829C22.4935 2.43496 27.3818 7.19829 28.2002 13.0833C28.5202 15.395 28.2518 17.7366 27.4218 19.855C26.6085 21.935 24.4618 23.3333 22.0802 23.3333H17.8852C18.1702 22.8433 18.3335 22.2733 18.3335 21.6666C18.3335 19.8283 16.8385 18.3333 15.0002 18.3333C13.1618 18.3333 11.6668 19.8283 11.6668 21.6666C11.6668 23.505 13.1618 25 15.0002 25H22.0802C25.1402 25 27.9118 23.1766 28.9752 20.4633C29.9085 18.0766 30.2102 15.4466 29.8502 12.855ZM13.3335 21.6666C13.3335 20.7466 14.0818 20 15.0002 20C15.9185 20 16.6668 20.7466 16.6668 21.6666C16.6668 22.5866 15.9185 23.3333 15.0002 23.3333C14.0818 23.3333 13.3335 22.5866 13.3335 21.6666ZM22.4252 18.7866C23.0268 17.6083 23.3335 16.335 23.3335 15C23.3335 10.405 19.5952 6.66663 15.0002 6.66663C10.4052 6.66663 6.66682 10.405 6.66682 15C6.66682 16.9316 7.34348 18.815 8.57182 20.3033C8.86515 20.6583 8.81515 21.1833 8.46015 21.4766C8.30515 21.605 8.11682 21.6666 7.93015 21.6666C7.69015 21.6666 7.45182 21.5633 7.28682 21.3633C5.81349 19.5783 5.00015 17.3183 5.00015 15C5.00015 9.48496 9.48515 4.99996 15.0002 4.99996C20.5152 4.99996 25.0002 9.48496 25.0002 15C25.0002 16.6016 24.6335 18.1316 23.9102 19.5466C23.6985 19.9566 23.1918 20.1166 22.7885 19.91C22.3785 19.7 22.2152 19.195 22.4252 18.7866ZM15.0002 28.3333C8.57015 28.3333 2.96849 32.8166 1.68349 38.9966C1.59015 39.4483 1.90682 40 2.50015 40C2.88682 40 3.23348 39.73 3.31515 39.3366C3.89848 36.5266 5.50515 34.1183 7.70515 32.4516L9.87848 35.71C10.6768 36.9083 12.6552 36.9083 13.4552 35.71L14.9452 33.3083L16.5452 35.71C16.9435 36.3083 17.6135 36.6666 18.3335 36.6666C19.0535 36.6666 19.7235 36.3083 20.1218 35.71L22.2935 32.4516C24.4935 34.1183 26.1002 36.5266 26.6852 39.3366C26.7785 39.7883 27.2285 40.0833 27.6702 39.9833C28.1218 39.89 28.4102 39.45 28.3168 38.9983C27.0318 32.8183 21.4318 28.335 15.0018 28.335L15.0002 28.3333ZM18.7352 34.785C18.6068 34.9783 18.4118 35 18.3335 35C18.2552 35 18.0602 34.9783 17.9318 34.785L16.3302 32.3816C15.7368 31.4933 14.2652 31.4916 13.6702 32.3816L12.0685 34.7833C11.9385 34.9766 11.7452 34.9983 11.6668 34.9983C11.5885 34.9983 11.3952 34.9766 11.2652 34.7833L9.10015 31.5366C10.8552 30.555 12.8752 29.9983 15.0002 29.9983C17.1252 29.9983 19.1452 30.555 20.8985 31.5366L18.7352 34.785Z" fill="#2CA784" />
                                </svg>
                                <div className="space-y-2">
                                    <h5 className="text-[20px]">Contact Us</h5>
                                    <p className="font-normal leading-[180%]">Phone : <a className="green" href="tel:5088727876">508-872-7876</a> <br /> Email : <a className="green" href="mailto:mediko@gmail.com">Mediko@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul data-aos='fade-left' data-aos-delay={400} className="lg:ml-auto space-y-[23px] col-span-2">
                            <h4 className="text-[24px] font-semibold mb-6">All Departments:</h4>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Cardiology</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Neurology</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Orthopedics</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Dermatology</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Pediatrics</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Gastroenterology</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Oncology</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Endocrinology</Link></li>
                        </ul>
                        <ul data-aos='fade-left' data-aos-delay={600} className="lg:mx-auto space-y-[23px] col-span-2">
                            <h4 className="text-[24px] font-semibold mb-6">Quick links:</h4>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Careers</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Infrastructure</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Client support</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Privacy Policy</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Terms Of Use</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  How It’s Work</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Partners</Link></li>
                            <li><Link className="hover:text-[#2CA784] transition-all group hover:-ml-1"><span className="group-hover:opacity-0 opacity-100">-</span>  Case Studies</Link></li>
                        </ul>
                        <div data-aos='fade-left' data-aos-delay={800} className="lg:pl-6 space-y-12 col-span-3">
                            <h4 className="font-semibold text-[24px]">Latest News:</h4>
                            <div className="flex items-start gap-x-5">
                                <img src="https://i.ibb.co.com/H5KF4SN/Image-2.png" alt="" />
                                <div className="space-y-2">
                                    <div className="flex items-center gap-x-4">
                                        <p className="flex items-center gap-x-2 prime text-base font-medium"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.468788 12.6562H2.81253V14.0625C2.81253 14.3213 3.02241 14.5312 3.28128 14.5312H15.5313C15.7901 14.5312 16 14.3213 16 14.0625V1.875C16 1.61612 15.7901 1.40625 15.5313 1.40625H13.1875V0.937499C13.1875 0.678625 12.9776 0.46875 12.7188 0.46875C12.4599 0.46875 12.25 0.678625 12.25 0.937499V1.40625H9.87502V0.937499C9.87502 0.678625 9.66514 0.46875 9.40627 0.46875C9.1474 0.46875 8.93752 0.678625 8.93752 0.937499V1.40625H6.59378V0.937499C6.59378 0.678625 6.3839 0.46875 6.12503 0.46875C5.86615 0.46875 5.65628 0.678625 5.65628 0.937499V1.40625H3.28128C3.02241 1.40625 2.81253 1.61612 2.81253 1.875V4.68749C2.81253 8.14217 1.37676 10.7999 0.168695 11.8274C0.0170703 11.9537 -0.0391483 12.1615 0.0280078 12.3471C0.0952264 12.5326 0.271414 12.6562 0.468788 12.6562ZM15.0625 13.5937H3.75003V12.6562H12.7188C12.8284 12.6562 12.9346 12.6178 13.0189 12.5476C13.5824 12.0782 14.4552 10.9608 15.0625 9.52961V13.5937ZM3.75003 2.34375H5.65628V2.8125C5.65628 3.07137 5.86615 3.28124 6.12503 3.28124C6.3839 3.28124 6.59378 3.07137 6.59378 2.8125V2.34375H8.93752V2.8125C8.93752 3.07137 9.1474 3.28124 9.40627 3.28124C9.66514 3.28124 9.87502 3.07137 9.87502 2.8125V2.34375H12.25V2.8125C12.25 3.07137 12.4599 3.28124 12.7188 3.28124C12.9776 3.28124 13.1875 3.07137 13.1875 2.8125V2.34375H15.0625V4.21874H3.75003V2.34375ZM3.742 5.15593H15.0542C14.9486 8.12952 13.8073 10.4691 12.535 11.7187H1.535C2.97666 9.88183 3.66466 7.49005 3.742 5.15593Z" fill="#2CA784" />
                                        </svg>20 December 2024</p>
                                        <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="green text-lg -mt-0.5" />Comments</p>
                                    </div>
                                    <h6 className="font-semibold">Effective ways to improve mental health and reduce daily stress</h6>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-5">
                                <img src="https://i.ibb.co.com/YBhm1j5W/Image-3.png" alt="" />
                                <div className="space-y-2">
                                    <div className="flex items-center gap-x-4">
                                        <p className="flex items-center gap-x-2 prime text-base font-medium"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.468788 12.6562H2.81253V14.0625C2.81253 14.3213 3.02241 14.5312 3.28128 14.5312H15.5313C15.7901 14.5312 16 14.3213 16 14.0625V1.875C16 1.61612 15.7901 1.40625 15.5313 1.40625H13.1875V0.937499C13.1875 0.678625 12.9776 0.46875 12.7188 0.46875C12.4599 0.46875 12.25 0.678625 12.25 0.937499V1.40625H9.87502V0.937499C9.87502 0.678625 9.66514 0.46875 9.40627 0.46875C9.1474 0.46875 8.93752 0.678625 8.93752 0.937499V1.40625H6.59378V0.937499C6.59378 0.678625 6.3839 0.46875 6.12503 0.46875C5.86615 0.46875 5.65628 0.678625 5.65628 0.937499V1.40625H3.28128C3.02241 1.40625 2.81253 1.61612 2.81253 1.875V4.68749C2.81253 8.14217 1.37676 10.7999 0.168695 11.8274C0.0170703 11.9537 -0.0391483 12.1615 0.0280078 12.3471C0.0952264 12.5326 0.271414 12.6562 0.468788 12.6562ZM15.0625 13.5937H3.75003V12.6562H12.7188C12.8284 12.6562 12.9346 12.6178 13.0189 12.5476C13.5824 12.0782 14.4552 10.9608 15.0625 9.52961V13.5937ZM3.75003 2.34375H5.65628V2.8125C5.65628 3.07137 5.86615 3.28124 6.12503 3.28124C6.3839 3.28124 6.59378 3.07137 6.59378 2.8125V2.34375H8.93752V2.8125C8.93752 3.07137 9.1474 3.28124 9.40627 3.28124C9.66514 3.28124 9.87502 3.07137 9.87502 2.8125V2.34375H12.25V2.8125C12.25 3.07137 12.4599 3.28124 12.7188 3.28124C12.9776 3.28124 13.1875 3.07137 13.1875 2.8125V2.34375H15.0625V4.21874H3.75003V2.34375ZM3.742 5.15593H15.0542C14.9486 8.12952 13.8073 10.4691 12.535 11.7187H1.535C2.97666 9.88183 3.66466 7.49005 3.742 5.15593Z" fill="#2CA784" />
                                        </svg>20 December 2024</p>
                                        <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="green text-lg -mt-0.5" />Comments</p>
                                    </div>
                                    <h6 className="font-semibold">Effective ways to improve mental health and reduce daily stress</h6>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-5">
                                <img src="https://i.ibb.co.com/r261DkZ0/Image-4.png" alt="" />
                                <div className="space-y-2">
                                    <div className="flex items-center gap-x-4">
                                        <p className="flex items-center gap-x-2 prime text-base font-medium"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.468788 12.6562H2.81253V14.0625C2.81253 14.3213 3.02241 14.5312 3.28128 14.5312H15.5313C15.7901 14.5312 16 14.3213 16 14.0625V1.875C16 1.61612 15.7901 1.40625 15.5313 1.40625H13.1875V0.937499C13.1875 0.678625 12.9776 0.46875 12.7188 0.46875C12.4599 0.46875 12.25 0.678625 12.25 0.937499V1.40625H9.87502V0.937499C9.87502 0.678625 9.66514 0.46875 9.40627 0.46875C9.1474 0.46875 8.93752 0.678625 8.93752 0.937499V1.40625H6.59378V0.937499C6.59378 0.678625 6.3839 0.46875 6.12503 0.46875C5.86615 0.46875 5.65628 0.678625 5.65628 0.937499V1.40625H3.28128C3.02241 1.40625 2.81253 1.61612 2.81253 1.875V4.68749C2.81253 8.14217 1.37676 10.7999 0.168695 11.8274C0.0170703 11.9537 -0.0391483 12.1615 0.0280078 12.3471C0.0952264 12.5326 0.271414 12.6562 0.468788 12.6562ZM15.0625 13.5937H3.75003V12.6562H12.7188C12.8284 12.6562 12.9346 12.6178 13.0189 12.5476C13.5824 12.0782 14.4552 10.9608 15.0625 9.52961V13.5937ZM3.75003 2.34375H5.65628V2.8125C5.65628 3.07137 5.86615 3.28124 6.12503 3.28124C6.3839 3.28124 6.59378 3.07137 6.59378 2.8125V2.34375H8.93752V2.8125C8.93752 3.07137 9.1474 3.28124 9.40627 3.28124C9.66514 3.28124 9.87502 3.07137 9.87502 2.8125V2.34375H12.25V2.8125C12.25 3.07137 12.4599 3.28124 12.7188 3.28124C12.9776 3.28124 13.1875 3.07137 13.1875 2.8125V2.34375H15.0625V4.21874H3.75003V2.34375ZM3.742 5.15593H15.0542C14.9486 8.12952 13.8073 10.4691 12.535 11.7187H1.535C2.97666 9.88183 3.66466 7.49005 3.742 5.15593Z" fill="#2CA784" />
                                        </svg>20 December 2024</p>
                                        <p className="flex items-center gap-x-2 prime text-base font-medium"><LiaComments className="green text-lg -mt-0.5" />Comments</p>
                                    </div>
                                    <h6 className="font-semibold">Effective ways to improve mental health and reduce daily stress</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos='fade-up' className="bg-[url(https://i.ibb.co.com/VWL7ZW9v/bgbg.jpg)] bg-center bg-cover w-full rounded-xl lg:h-[171px] my-20">
                        <div className="bg-[#2CA784E6] lg:py-0  py-5 w-full h-full rounded-xl flex lg:flex-row flex-col justify-between items-center px-12 text-white gap-y-6">
                            <h6 className="font-semibold text-[30px] leading-[40px] lg:text-[48px]">Subscribe to newsletter</h6>
                            <form onSubmit={handleSubmit} className="relative w-full lg:w-5/12">
                                <input type="email" required name="email" className="w-full h-[61px] rounded-lg placeholder:text-[#424544] black focus:border-0 focus:outline-0 input pl-6" placeholder="Enter your email" />
                                <button className="btn w-[43px] h-[43px] rounded-[6px] text-white hover:text-[#001930] hover:bg-white group tra absolute top-2 right-2 bg-[#001930]">
                                    <svg width="15" height="15" viewBox="0 0 15 15" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 1.5L13.5 7.5M13.5 7.5L7.5 13.5M13.5 7.5L1.5 7.5" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-[#153655]">
                    <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 py-4 text-white flex justify-between items-center">
                        <p>Copyright © 2025 <span className="green">Mediko</span> || All Rights Reserved</p>
                        <div className="text-[#FFFFFF4D]">
                            <Link className="text-white hover:text-[#ffffff99] tra">Help</Link> /
                            <Link className="text-white hover:text-[#ffffff99] tra"> support</Link> /
                            <Link className="text-white hover:text-[#ffffff99] tra"> contact</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link className="w-[25px] h-[25px] hover:bg-[#2CA784] rounded-full tra cursor-pointer tra text-sm flex justify-center items-center text-white"><FaFacebookF /></Link>
                            <Link className="w-[25px] h-[25px] hover:bg-[#2CA784] rounded-full tra cursor-pointer tra text-sm flex justify-center items-center text-white"><FaSkype /></Link>
                            <Link className="w-[25px] h-[25px] hover:bg-[#2CA784] rounded-full tra cursor-pointer tra text-sm flex justify-center items-center text-white"><FaTwitter /></Link>
                            <Link className="w-[25px] h-[25px] hover:bg-[#2CA784] rounded-full tra cursor-pointer tra text-sm flex justify-center items-center text-white"><FaLinkedin /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer2;