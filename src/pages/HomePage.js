import Preloader from "../common/components/Preloader";
import Header from "../components/HomePage/Header";
import Banner from "../components/HomePage/Banner";
import About from "../components/HomePage/About";
import ServicesList from "../components/HomePage/Services/ServicesList";
import Partners from "../components/HomePage/Partners";
import ProjectsList from "../components/HomePage/projects/ProjectsList";
import TestimonialsList from "../components/HomePage/testimonials/testimonialsList";
import TeamsList from "../components/HomePage/teams/TeamsList";
import Contact from "../components/HomePage/contact/Contact";
import Footer from "../common/components/Footer";


const HomePage = () => {


    return (
        <div>
            <Preloader/>
            <Header/>
            <Banner/>

            <About/>
            <Partners/>
            <ServicesList/>

            <ProjectsList/>
            <TestimonialsList/>

            <TeamsList/>

            <Contact/>
            <div className="back-to-top">
                <a href="#"> <i className="fas fa-arrow-up"></i> </a>
            </div>


            <Footer/>
        </div>

    );
};

export default HomePage;