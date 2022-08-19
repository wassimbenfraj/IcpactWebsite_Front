import Footer from "../common/components/Footer";
import Header from "../common/components/Header";
import ContactForm from "../components/services/ContactForm";
import ServiceDetails from "../components/services/ServiceDetails";
import Preloader from "../common/components/Preloader";
import ServicePageTitle from "../components/services/ServicePageTitle";
import BackToTop from "../common/components/BackToTop";
import SubServicesList from "../components/services/subServices/SubServicesList";

const CoachingPage = () => {


    const description = "Does any industry face a more complex audience journey and marketing sales process\n" +
        "                                than B2B technology? Consider the number of people who influence a sale, the length\n" +
        "                                of the decision-making cycle, the competing interests of the people who purchase,\n" +
        "                                implement, manage, and use the technology. It’s a lot meaningful content here.";

    const subServices= [
        {
            id:1,
            title :"Executive Coaching",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:2,
            title :"Personal Coaching",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:3,
            title :"Team Building",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:4,
            title :"Familial Coaching",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:5,
            title :"Educational Coaching",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        },
        {
            id:6,
            title :"Political Coaching",
            description: "Today, the term Information Technology (IT) has ballooned to encompass is real. Today, the term Information Technology (IT) has ballooned to encompass is real.Today, the term Information Technology (IT) has ballooned to encompass is real.",
        }
    ]
    return (
        <div>
            <Preloader/>
            <Header/>
            <ServicePageTitle title="Coaching"/>

            <ServiceDetails description={description}/>

            <SubServicesList subServices={subServices} />
            <ContactForm title={"Coaching"}/>

            <BackToTop/>

            <Footer/>
        </div>
    );
};

export default CoachingPage;