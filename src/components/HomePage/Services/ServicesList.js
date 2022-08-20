import ServiceItem from "./ServiceItem";

const ServicesList = () => {

    const services = [
        {
            id: 1,
          title: "Coaching",
          description: "You are executive, manager or a team I-PACT Coaching offers you individual\n" +
              "                                    and collective\n" +
              "                                    support such as: hypnosis, mental preparation, neuroscience coaching. I-PACT\n" +
              "                                    intervenes\n" +
              "                                    in\n" +
              "                                    particular on: Self-confidence, management of emotions, improvement of\n" +
              "                                    performances,...."
        },
        {
            id: 2,
            title: "consulting",
            description: "We provide consulting services focused on clients challenges and\n" +
                "                                    opportunities: strategy,\n" +
                "                                    marketing, organisation, operations, technology, transformation, digital,\n" +
                "                                    advanced\n" +
                "                                    analytics, corporate finance, and more. We deliver a high level of\n" +
                "                                    functional expertise\n" +
                "                                    and\n" +
                "                                    we capture value across the borders and organisation.We have proven the\n" +
                "                                    multiplier\n" +
                "                                    effect of\n" +
                "                                    maximising the sum of the parts and we believe in implementing the changes\n" +
                "                                    which make\n" +
                "                                    the\n" +
                "                                    most impact."
        },
        {
            id: 3,
            title: "IT Development",
            description: "Because you rely on technology to succeed, and because it touches so many\n" +
                "                                    parts of your\n" +
                "                                    business, you can trust in I-PACT IT consulting. I-PACT will help you get\n" +
                "                                    the best value\n" +
                "                                    and\n" +
                "                                    most benefit from your technology investments. Our consultants are leaders\n" +
                "                                    in their\n" +
                "                                    field,\n" +
                "                                    they have the depth of expertise, technology certifications, and business\n" +
                "                                    sense and the\n" +
                "                                    skillsets most businesses need. When your leadership team sits down to\n" +
                "                                    perform strategic\n" +
                "                                    planning, I-PACT IT consulting provides an IT strategy that focuses on your\n" +
                "                                    business\n" +
                "                                    goals\n" +
                "                                    and how to attain them through technology. Our consultants are not only\n" +
                "                                    experts in IT\n" +
                "                                    consultant solutions; they understand how businesses operate."
        },
        {
            id: 4,
            title: "Team As Service",
            description: "Because you rely on technology to succeed, and because it touches so many\n" +
                "                                    parts of your\n" +
                "                                    business, you can trust in I-PACT IT consulting. I-PACT will help you get\n" +
                "                                    the best value\n" +
                "                                    and\n" +
                "                                    most benefit from your technology investments. Our consultants are leaders\n" +
                "                                    in their\n" +
                "                                    field,\n" +
                "                                    they have the depth of expertise, technology certifications, and business\n" +
                "                                    sense and the\n" +
                "                                    skillsets most businesses need. When your leadership team sits down to\n" +
                "                                    perform strategic\n" +
                "                                    planning, I-PACT IT consulting provides an IT strategy that focuses on your\n" +
                "                                    business\n" +
                "                                    goals\n" +
                "                                    and how to attain them through technology. Our consultants are not only\n" +
                "                                    experts in IT\n" +
                "                                    consultant solutions; they understand how businesses operate."
        }
    ];


    return (
        <section className="whu-section section-gap soft-blue-bg" id="services">
            <div className="container">
                <div className="row justify-content-center align-content-center">
                    <div className="col-lg-6 col-md-10 order-lg-2">
                    </div>
                    <div className="col-lg-6 col-md-10 order-lg-1">
                        <div className="section-title mb-50 wow fadeInUp" data-wow-delay="0.3s">
                            <span className="title-tag" style={{color: "#007aff"}}>Services</span>
                            <h2 className="title">Why Choose Us</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row service-items justify-content-center">
                        {services &&
                            <>
                                {
                                    services.map((service, index) => (
                                        <ServiceItem
                                            index={index}
                                            key={service.id}
                                            id={service.id}
                                            title={service.title}
                                            description={service.description}
                                        />
                                    ))

                                }
                            </>}
                    </div>
                </div>
            </div>


        </section>

    );
};

export default ServicesList;