import About2 from "./About2";
import Articles2 from "./Articles2";
import ChooseUs from "./ChooseUs";
import Doctors2 from "./Doctors2";
import Hero2 from "./Hero2";
import InTouch from "./InTouch";
import Services2 from "./Services2";
import Slide from "./Slide";
import Stats from "./Stats";
import Studies from "./Studies";
import Work from "./Work";

const Home2 = () => {
    return (
        <div className="space-y-28">
            <Hero2 />
            <Stats />
            <About2 />
            <Services2 />
            <Work />
            <ChooseUs />
            <Studies />
            <Doctors2 />
            <Slide />
            <InTouch />
            <Articles2 />
        </div>
    );
};

export default Home2;