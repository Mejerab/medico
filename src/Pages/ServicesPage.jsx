import BannerHook from "../hook/BannerHook";
import Lab from "./Home1/Lab";
import NewsLetter from "./Home1/NewsLetter";
import Ribon from "./Home1/Ribon";
import Services from "./Home1/Services";
import Testimonials from "./Home1/Testimonials";

const ServicesPage = () => {
    return (
        <div className="space-y-28">
            <BannerHook first={'We offer'} text1={'popular'} text2={'medical'} last={'services'} />
            <Services />
            <Ribon />
            <Testimonials />
            <Lab />
            <NewsLetter/>
        </div>
    );
};

export default ServicesPage;