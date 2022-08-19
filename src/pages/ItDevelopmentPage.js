import Preloader from "../common/components/Preloader";
import Header from "../common/components/Header";
import ServicePageTitle from "../components/services/ServicePageTitle";
import ServiceDetails from "../components/services/ServiceDetails";
import ContactForm from "../components/services/ContactForm";
import ItSubServiceList from "../components/services/subServices/itDevelopment/ItSubServiceList";

const ItDevelopmentPage = () => {
    const description = "Does any industry face a more complex audience journey and marketing sales process\n" +
        "                                than B2B technology? Consider the number of people who influence a sale, the length\n" +
        "                                of the decision-making cycle, the competing interests of the people who purchase,\n" +
        "                                implement, manage, and use the technology. It’s a lot meaningful content here.";

    const subServices= [
        {
            id:1,
            title :"Operations Consulting",
            image:"assets/img/Website-Development-Process.jpg",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:2,
            title :"Operations Consulting",
            image:"assets/img/e-Commerce-Development.jpg",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:3,
            title :"Operations Consulting",
            image:"assets/img/Content-Management-System.png",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:4,
            title :"Operations Consulting",
            image:"assets/img/Custom-Web-Development.jpg",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
    ]

    return (
        <>
            <Preloader/>
            <Header/>

            <ServicePageTitle title="IT Development"/>
            <ServiceDetails description={description}/>

            <ItSubServiceList subServices={subServices}/>

            <ContactForm title="Application"/>

        </>
    );
};

export default ItDevelopmentPage;