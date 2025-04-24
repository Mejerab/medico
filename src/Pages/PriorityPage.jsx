import BannerHook from "../hook/BannerHook";
import Doctors from "./Home1/Doctors";
import NewsLetter from "./Home1/NewsLetter";

const PriorityPage = () => {
    return (
        <div>
            <BannerHook first={'Your dental'} text1={'health'} text2={'is our most'} last={'priority'} />
            <div className="max-w-[1320px] mx-auto px-3 2xl:px-0 space-y-24 mt-24">
                <div className="space-y-4">
                    <img className="w-full h-full" src="https://i.ibb.co.com/GfN6gZQk/Frame-1000009410.png" alt="" />
                    <h4 className="font-semibold text-[48px] black mt-12">Comprehensive dental care for all ages.</h4>
                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                    <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                </div>
                <div className="space-y-4">
                    <h4 className="black leading-[114.99999999999999%] text-[48px] font-semibold">We take a patient-first approach, ensuring that every treatment plan is customized to meet your specific needs.</h4>
                    <div className="mt-12 flex lg:flex-row flex-col gap-y-6 justify-between items-start gap-x-12">
                        <div className="space-y-7">
                            <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet.</p>
                            <p className="prime leading-[180%]"> Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                            <p className="prime leading-[180%]">Lorem ipsum odor amet, consectetuer adipiscing elit. Varius mollis felis pharetra ullamcorper mi convallis. Commodo mauris mattis mauris facilisis ridiculus malesuada porta risus! Ipsum ornare cras ridiculus tincidunt cras cras suscipit consectetur euismod? Class venenatis non mauris leo justo quisque libero maximus? Eu suspendisse ex eget cursus laoreet. Curae mauris ac; pretium conubia interdum ornare nisi. Facilisis pharetra habitant facilisi montes lectus tincidunt. Viverra urna nulla suspendisse imperdiet porttitor facilisis. Aerat cursus orci arcu tristique. At iaculis ullamcorper habitasse lorem sed himenaeos; condimentum dis in. Dapibus dui fusce blandit massa aliquet faucibus.</p>
                        </div>
                        <img src="https://i.ibb.co.com/1g2g8Qg/Frame-1000009414.png" alt="" />
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-[48px] leading-[114.99999999999999%] black">Three simple steps to a healthy smile</h4>
                    <div className="mt-12 flex lg:flex-row flex-col justify-between items-center gap-14">
                        <div data-aos='fade-left' className="space-y-6 border-r border-[#EAECF0] pr-14">
                            <div className="w-[80px] h-[80px] rounded-full border border-[#EAECF0] flex justify-center items-center">
                                <div className="bg-[#F5FAFE] rounded-full p-4">
                                    <svg className="blue" width="24" height="28" viewBox="0 0 24 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9997 14C15.8602 14 18.9997 10.8605 18.9997 7C18.9997 3.1395 15.8602 0 11.9997 0C8.13917 0 4.99967 3.1395 4.99967 7C4.99967 10.8605 8.13917 14 11.9997 14ZM11.9997 2.33333C14.5733 2.33333 16.6663 4.42633 16.6663 7C16.6663 9.57367 14.5733 11.6667 11.9997 11.6667C9.42601 11.6667 7.33301 9.57367 7.33301 7C7.33301 4.42633 9.42601 2.33333 11.9997 2.33333ZM23.6663 26.8333C23.6663 27.4785 23.1448 28 22.4997 28C21.8545 28 21.333 27.4785 21.333 26.8333C21.333 23.583 19.4232 20.769 16.6663 19.4553V22.3673C18.0243 22.8492 18.9997 24.1453 18.9997 25.6667V26.8333C18.9997 27.4785 18.4782 28 17.833 28C17.1878 28 16.6663 27.4785 16.6663 26.8333V25.6667C16.6663 25.0227 16.1437 24.5 15.4997 24.5C14.8557 24.5 14.333 25.0227 14.333 25.6667V26.8333C14.333 27.4785 13.8115 28 13.1663 28C12.5212 28 11.9997 27.4785 11.9997 26.8333V25.6667C11.9997 24.1453 12.975 22.8492 14.333 22.3673V18.7507C13.9515 18.6958 13.5618 18.6667 13.1663 18.6667H10.833C10.0222 18.6667 9.23934 18.7857 8.49967 19.0073V22.4805C9.19734 22.8842 9.66634 23.6378 9.66634 24.5012C9.66634 25.7903 8.62218 26.8345 7.33301 26.8345C6.04384 26.8345 4.99967 25.7903 4.99967 24.5012C4.99967 23.6378 5.46867 22.8842 6.16634 22.4805V20.1367C4.05234 21.6148 2.66634 24.066 2.66634 26.8345C2.66634 27.4797 2.14484 28.0012 1.49967 28.0012C0.854508 28.0012 0.333008 27.4797 0.333008 26.8345C0.333008 21.0443 5.04284 16.3345 10.833 16.3345H13.1663C18.9565 16.3345 23.6663 21.0432 23.6663 26.8333Z" />
                                    </svg>

                                </div>
                            </div>
                            <p className="uppercase text-xs font-bold py-0.5 px-2 rounded-sm bg-[#3D68F5] text-white w-fit">STEP ONE</p>
                            <h5 className="text-[24px] font-semibold black">Consultation & Diagnosis</h5>
                            <p className="prime leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div data-aos='fade-left' data-aos-delay={400} className="space-y-6 border-r border-[#EAECF0] pr-14">
                            <div className="w-[80px] h-[80px] rounded-full border border-[#EAECF0] flex justify-center items-center">
                                <div className="bg-[#F5FAFE] rounded-full p-4">
                                    <svg className="blue" width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.6667 15.1667H2.33333C1.0465 15.1667 0 16.2132 0 17.5V22.1667C0 25.3832 2.61683 28 5.83333 28H22.1667C25.3832 28 28 25.3832 28 22.1667V17.5C28 16.2132 26.9535 15.1667 25.6667 15.1667ZM5.83333 17.5H8.16667V19.8333C8.16667 20.4773 7.64283 21 7 21C6.35717 21 5.83333 20.4773 5.83333 19.8333V17.5ZM10.5 17.5H12.8333V19.8333C12.8333 20.4773 12.3095 21 11.6667 21C11.0238 21 10.5 20.4773 10.5 19.8333V17.5ZM15.1667 17.5H17.5V19.8333C17.5 20.4773 16.9762 21 16.3333 21C15.6905 21 15.1667 20.4773 15.1667 19.8333V17.5ZM19.8333 17.5H22.1667V19.8333C22.1667 20.4773 21.6428 21 21 21C20.3572 21 19.8333 20.4773 19.8333 19.8333V17.5ZM25.6667 22.1667C25.6667 24.0963 24.0963 25.6667 22.1667 25.6667H5.83333C3.90367 25.6667 2.33333 24.0963 2.33333 22.1667V17.5H3.5V19.8333C3.5 21.763 5.07033 23.3333 7 23.3333C7.896 23.3333 8.71383 22.995 9.33333 22.4397C9.95283 22.995 10.7707 23.3333 11.6667 23.3333C12.5627 23.3333 13.3805 22.995 14 22.4397C14.6195 22.995 15.4373 23.3333 16.3333 23.3333C17.2293 23.3333 18.0472 22.995 18.6667 22.4397C19.2862 22.995 20.104 23.3333 21 23.3333C22.9297 23.3333 24.5 21.763 24.5 19.8333V17.5H25.6667V22.1667ZM22.1667 0H5.83333C2.61683 0 0 2.61683 0 5.83333V10.5C0 11.7868 1.0465 12.8333 2.33333 12.8333H25.6667C26.9535 12.8333 28 11.7868 28 10.5V5.83333C28 2.61683 25.3832 0 22.1667 0ZM17.5 10.5H15.1667V7C15.1667 6.356 15.6905 5.83333 16.3333 5.83333C16.9762 5.83333 17.5 6.356 17.5 7V10.5ZM12.8333 10.5H10.5V7C10.5 6.356 11.0238 5.83333 11.6667 5.83333C12.3095 5.83333 12.8333 6.356 12.8333 7V10.5ZM8.16667 10.5H5.83333V8.16667C5.83333 7.52267 6.35717 7 7 7C7.64283 7 8.16667 7.52267 8.16667 8.16667V10.5ZM19.8333 10.5V8.16667C19.8333 7.52267 20.3572 7 21 7C21.6428 7 22.1667 7.52267 22.1667 8.16667V10.5H19.8333ZM24.5 10.5V8.16667C24.5 6.237 22.9297 4.66667 21 4.66667C20.3758 4.66667 19.7902 4.83117 19.2827 5.11933C18.6597 4.1475 17.5712 3.5 16.3333 3.5C15.4373 3.5 14.6195 3.83833 14 4.39367C13.3805 3.83833 12.5627 3.5 11.6667 3.5C10.4288 3.5 9.34033 4.14633 8.71733 5.11933C8.20983 4.83233 7.62417 4.66667 7 4.66667C5.07033 4.66667 3.5 6.237 3.5 8.16667V10.5H2.33333V5.83333C2.33333 3.90367 3.90367 2.33333 5.83333 2.33333H22.1667C24.0963 2.33333 25.6667 3.90367 25.6667 5.83333V10.5H24.5Z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="uppercase text-xs font-bold py-0.5 px-2 rounded-sm bg-[#3D68F5] text-white w-fit">STEP TWO</p>
                            <h5 className="text-[24px] font-semibold black">Treatment & Care</h5>
                            <p className="prime leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div data-aos='fade-left' data-aos-delay={600} className="space-y-6">
                            <div className="w-[80px] h-[80px] rounded-full border border-[#EAECF0] flex justify-center items-center">
                                <div className="bg-[#F5FAFE] rounded-full p-4">
                                    <svg className="blue" width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5605 28C17.6606 27.999 16.798 27.6412 16.1617 27.0049C15.5254 26.3686 15.1676 25.5059 15.1666 24.6061V17.5C15.1666 17.1905 15.0437 16.8938 14.8249 16.675C14.6061 16.4562 14.3094 16.3333 14 16.3333C13.6905 16.3333 13.3938 16.4562 13.175 16.675C12.9562 16.8938 12.8333 17.1905 12.8333 17.5V24.6061C12.8333 25.3511 12.5884 26.0754 12.1361 26.6674C11.6838 27.2594 11.0494 27.6862 10.3307 27.882C9.61189 28.0778 8.84866 28.0317 8.15864 27.7509C7.46862 27.4701 6.89011 26.9702 6.5123 26.3281C3.71696 21.5401 -3.78652e-05 14.3255 -3.78652e-05 6.99996C-0.0352451 6.07126 0.121731 5.14529 0.461056 4.28008C0.80038 3.41487 1.31474 2.62907 1.9719 1.9719C2.62907 1.31474 3.41487 0.80038 4.28008 0.461056C5.14529 0.121731 6.07126 -0.0352451 6.99996 -3.78652e-05C8.55048 0.000558505 10.0914 0.242626 11.5675 0.717462C12.351 0.989178 13.1711 1.14062 14 1.16663C14.8288 1.14062 15.649 0.989178 16.4325 0.717462C17.9084 0.242478 19.4494 0.000406564 21 -3.78652e-05C21.9287 -0.0352451 22.8546 0.121731 23.7198 0.461056C24.5851 0.80038 25.3709 1.31474 26.028 1.9719C26.6852 2.62907 27.1995 3.41487 27.5389 4.28008C27.8782 5.14529 28.0352 6.07126 28 6.99996C28 14.3243 24.283 21.539 21.4876 26.3281C21.1874 26.8375 20.7595 27.2596 20.2461 27.5529C19.7327 27.8461 19.1517 28.0002 18.5605 28ZM14 14C14.9282 14 15.8185 14.3687 16.4748 15.0251C17.1312 15.6815 17.5 16.5717 17.5 17.5V24.6061C17.5004 24.8382 17.5767 25.0637 17.7174 25.2483C17.858 25.4329 18.0551 25.5664 18.2787 25.6284C18.5023 25.6904 18.7401 25.6775 18.9557 25.5917C19.1713 25.506 19.3529 25.352 19.4728 25.1533C22.1316 20.5963 25.6666 13.7585 25.6666 6.99996C25.6913 6.38053 25.5874 5.7627 25.3616 5.18536C25.1358 4.60802 24.793 4.08368 24.3546 3.64532C23.9162 3.20697 23.3919 2.8641 22.8146 2.6383C22.2372 2.4125 21.6194 2.30865 21 2.3333C19.6692 2.33261 18.3467 2.54369 17.0823 2.95863C16.0878 3.29274 15.0488 3.47523 14 3.49996C12.9512 3.47533 11.9121 3.29284 10.9176 2.95863C9.65315 2.54381 8.33075 2.33273 6.99996 2.3333C2.3858 2.3333 2.3333 6.8098 2.3333 6.99996C2.3333 13.7596 5.8683 20.5975 8.5283 25.1533C8.64787 25.3523 8.82937 25.5066 9.045 25.5926C9.26063 25.6786 9.4985 25.6915 9.7222 25.6295C9.94589 25.5674 10.1431 25.4337 10.2835 25.2489C10.424 25.064 10.5 24.8383 10.5 24.6061V17.5C10.5 16.5717 10.8687 15.6815 11.5251 15.0251C12.1815 14.3687 13.0717 14 14 14Z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="uppercase text-xs font-bold py-0.5 px-2 rounded-sm bg-[#3D68F5] text-white w-fit">STEP Three</p>
                            <h5 className="text-[24px] font-semibold black">Follow-Up & Maintenance</h5>
                            <p className="prime leading-[180%]">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-[48px] black">Our dental specialists</h4>
                    <Doctors priority/>
                </div>
                <NewsLetter />
            </div>
        </div>
    );
};

export default PriorityPage;