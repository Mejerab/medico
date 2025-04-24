import { HiArrowNarrowRight } from "react-icons/hi";
import PointHook from "../../hook/PointHook";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const NewsLetter = ({ home }) => {
    const handleSubmit = e => {
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
        else {
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
        <div className={`max-w-[1320px] mx-auto px-3 2xl:px-0 grid gap-y-6 lg:grid-cols-2 items-center justify-between lg:h-[524px] gap-x-7 ${home ? '' : 'mb-28'}`}>
            <div className="bg-[url(https://i.imgur.com/mWUMzaX.jpeg)] bg-cover bg-center rounded-xl text-white h-[424px] lg:h-full">
                <div className="bg-gradient-to-t from-[#020F33] via-[#020F337D]  to-[#020F3300] flex flex-col justify-end items-center rounded-xl w-full h-full space-y-4 pb-8">
                    <p className="text-[14px] font-semibold p-2 border border-[#FFFFFF33] rounded-full bg-[#020F3333] py-0.5 w-fit uppercase">08+ years of experience</p>
                    <h3 className="text-[48px] font-semibold leading-[115%] text-center">Dr. Rasika is dedicated to helping others heal.</h3>
                    <button className="btn shadow-none button relative overflow-hidden w-[243px] h-[56px] rounded-[100px] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Book an Appointment <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#3D68F5] text-xl flex items-center justify-center" /></span></button>
                </div>
            </div>
            <div className="bg-[url(https://i.imgur.com/XtVtzEw.png)] bg-cover bg-center rounded-xl h-full">
                <div className="bg-gradient-to-r from-[#3D68F5] via-[#3D68F599] to-[#3D68F5] w-full h-full rounded-xl flex flex-col justify-center items-center py-8 px-5 lg:p-12 space-y-4 text-white">
                    <PointHook head={['Subscribe to newsletter']} text={['Let’s Subscribe To Get Our Newsletter.']} white />
                    <p className="text-base leading-[180%]">Experience comprehensive healthcare at Meca, where your well-being is our priority. We provide personalized, compassionate medical services, ensuring exceptional care tailored to your </p>
                    <form onSubmit={handleSubmit} className="w-full relative">
                        <input required type="email" name="email" className="input text-sm lg:text-base focus:outline-none focus:border-0 px-6 rounded-full h-[60px] w-full text-[#525252] placeholder:text-[#525252]" placeholder="Your email address" />
                        <span className="absolute top-1.5 right-1.5"><button className="btn button3 relative overflow-hidden w-[183px] h-[48px] rounded-[100px] border border-[#020F33] bg-white hover:text-white tra"><span className="flex gap-x-2 z-50">Subscribe Now <HiArrowNarrowRight className="p-0.5 ml-1 text-white rounded-full bg-[#020F33] text-xl flex items-center justify-center" /></span></button></span>
                    </form>
                </div>
            </div>
        </div>
    );
};

NewsLetter.propTytpes = {
    home: PropTypes.bool
}
export default NewsLetter;