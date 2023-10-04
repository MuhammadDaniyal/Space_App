import { React, useEffect } from "react";
import "./About.css";
import Layout from "../../Layout"
import SideBarAbout from "./SideBarAbout/SideBarAbout";
import AboutCard from "./AboutCard/AboutCard";

const aboutCardData = [
    {
        heading: 'OUR MISSION',
        para: 'Our mission at Ocean Dev is to lead the way in the ever-evolving field of artificial intelligence. We are passionate about harnessing the power of AI to transform industries, drive innovation, and create a positive impact on society.',
        img: './images/Mission.jpg',
    },
    {
        heading: 'OUR VISION',
        para: 'Our vision at Ocean Dev is to be at the forefront of the AI revolution, driving advancements and shaping the future of intelligent technologies. We envision a world where AI is seamlessly integrated into various aspects of our lives. ',
        img: './images/Vision2.jpg',
    },
]


const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <Layout>
                <div style={{ marginTop: "8rem" }}>

                    {/* page1 */}
                    <div className="container">
                        <div className="row">
                            <div className="about-first-col col-11 col-lg-4 col-md-4 mx-auto">
                                <SideBarAbout />
                            </div>

                            <div className="about-second-col col-11 col-lg-8 col-md-8 mx-auto">
                                <div className="row">

                                    {
                                        aboutCardData.map((cardData, i) => {
                                            return (
                                                <>
                                                    <AboutCard {...cardData} key={i} />
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
