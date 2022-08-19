import ServiceItem from "../../HomePage/Services/ServiceItem";
import SubServiceItem from "./SubServiceItem";

const SubServicesList = props => {



    return (
        <section className="faq-section-two soft-blue-bg section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="intro-video-with-shape mb-md-gap-60">
                            <img
                                src="assets/img/about-intro-thumb.jpg" alt="Image"/>
                            <a href="src/components/services/subServices/SubServicesList#" className="video-popup"><i className="fas fa-play"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="accordion-four" id="accordionExampleTwo">
                            {props.subServices &&
                                <>
                                    {
                                        props.subServices.map((subService, index) => (
                                            <SubServiceItem
                                                index={index}
                                                key={subService.id}
                                                id={subService.id}
                                                title={subService.title}
                                                description={subService.description}
                                            />
                                        ))

                                    }
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SubServicesList;