import Preloader from "../common/components/Preloader";
import Header from "../common/components/Header";
import ServicePageTitle from "../components/services/ServicePageTitle";
import ServiceDetails from "../components/services/ServiceDetails";
import SubServicesList from "../components/services/subServices/SubServicesList";
import ContactForm from "../components/services/ContactForm";
import BackToTop from "../common/components/BackToTop";
import Footer from "../common/components/Footer";

const ConsultingPage = () => {

    const description = "Does any industry face a more complex audience journey and marketing sales process\n" +
        "                                than B2B technology? Consider the number of people who influence a sale, the length\n" +
        "                                of the decision-making cycle, the competing interests of the people who purchase,\n" +
        "                                implement, manage, and use the technology. It’s a lot meaningful content here.";

    const subServices= [
        {
            id:1,
            title :"Operations Consulting",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:2,
            title :"Financial Consulting",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:3,
            title :"Human Resources Consulting",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:4,
            title :"Educational consulting",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:5,
            title :"Communication & Marketing Consulting",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:6,
            title :"Real Estate Consulting",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        }
    ]

    return (
        <>
            <Preloader/>
            <Header/>
            <ServicePageTitle title="Consulting"/>

            <ServiceDetails description={description}/>

            <SubServicesList subServices={subServices}/>
            <ContactForm title={"Consulting"}/>

            <BackToTop/>

            <Footer/>
        </>
    );
}

export default ConsultingPage;