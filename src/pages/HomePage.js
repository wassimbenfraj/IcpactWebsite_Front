import Preloader from "../common/components/Preloader";
import HomeHeader from "../components/HomePage/HomeHeader";
import Banner from "../components/HomePage/Banner";
import About from "../components/HomePage/About";
import ServicesList from "../components/HomePage/Services/ServicesList";
import Partners from "../components/HomePage/Partners";
import ProjectsList from "../components/HomePage/projects/ProjectsList";
import TestimonialsList from "../components/HomePage/testimonials/testimonialsList";
import TeamsList from "../components/HomePage/teams/TeamsList";
import Contact from "../components/HomePage/contact/Contact";
import Footer from "../common/components/Footer";
import BackToTop from "../common/components/BackToTop";


const HomePage = () => {


    return (
        <div>
            <Preloader/>
            <HomeHeader/>
            <Banner/>

            <About/>
            <Partners/>
            <ServicesList/>

            <ProjectsList/>
            <TestimonialsList/>

            <TeamsList/>

            <Contact/>
            <BackToTop/>
            <Footer/>
        </div>

    );
};

export default HomePage;