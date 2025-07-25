import React, {JSX} from "react";
import SliderVideo from "../components/SliderVideo/SliderVideo"
import SliderTopFive from "../components/SliderTopFive/SliderTopFive";
import SliderTopNext from "../components/SliderTopNext/SliderTopNext";

const Home = () : JSX.Element => {
    return (
        <main className="content">
            <div className="main">
                <SliderVideo/>
                <SliderTopFive/>
                <SliderTopNext/>
            </div>
        </main>
    );
}

export default Home;