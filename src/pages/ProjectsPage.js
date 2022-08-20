import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import Preloader from "../common/components/Preloader";
import ServicePageTitle from "../components/services/ServicePageTitle";
import BackToTop from "../common/components/BackToTop";
import ProjectDetailsList from "../components/Projects/ProjectDetailsList";

const ProjectsPage = () => {
    const projectDetails = [
        {
            id: 1,
            title: "Operations Consulting",
            image: "assets/img/gemini.png",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id: 2,
            title: "Operations Consulting",
            image: "assets/img/gemini.png",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id: 3,
            title: "Operations Consulting",
            image: "assets/img/gemini.png",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id: 4,
            title: "Operations Consulting",
            image: "assets/img/gemini.png",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
    ]
    return (
        <>
            <Preloader/>
            <Header/>
            <ServicePageTitle title="Projects"/>

            <ProjectDetailsList projectDetails={projectDetails}/>
            <BackToTop/>

            <Footer/>
        </>
    );
};
export default ProjectsPage;