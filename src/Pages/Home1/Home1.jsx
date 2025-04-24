import About from "./About";
import Articles from "./Articles";
import Card from "./Card";
import Doctors from "./Doctors";
import Hero1 from "./Hero1";
import Lab from "./Lab";
import NewsLetter from "./NewsLetter";
import Ribon from "./Ribon";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home1 = () => {
    return (
        <div className="space-y-28">
            <div>
                <Hero1 />
                <Card home/>
                <About />
            </div>
            <div>
                <Services home/>
                <Ribon home/>
            </div>
            <Testimonials />
            <Lab />
            <Doctors />
            <NewsLetter home/>
            <Articles />
            <div></div>
        </div>
    );
};

export default Home1;