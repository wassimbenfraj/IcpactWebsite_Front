const About = () => {

    return (
        <section className="counter-faq-section mb-100 mt-50">
            <div className="container" id="about">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="section-title mb-50">
                            <span className="title-tag">Best agency for you</span>
                            <h2 className="title">Why Choose Us</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 mt-100">
                        <div className="section-title mb-50">
                            <div className="accordion-one" id="accordionExample">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <a className="" href="#" data-toggle="collapse" data-target="#collapseOne"
                                           aria-expanded="true" aria-controls="collapseOne">
                                            <i className="fal fa-long-arrow-right"></i> About Us
                                        </a>
                                    </div>

                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                         data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div>I-PACT Consult is a team of professionals specialized in the field
                                                of
                                                technology
                                                and communication as well as coaching and human development.
                                                We operate internationally to advise and support our clients in the
                                                realization
                                                of their projects. Our story begins in 2019, year of development of
                                                the concept
                                                I-PACT Consult by its founder Mr. Khaled Junior Hafaiedh.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <a className="collapsed" href="#" data-toggle="collapse"
                                           data-target="#collapseTwo"
                                           aria-expanded="false" aria-controls="collapseTwo">
                                            <i className="fal fa-long-arrow-right"></i> Our Philosophy

                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                         data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p>To analyze and optimize the functioning of the organization by
                                                piloting its human
                                                and technological resources according to a strategic action plan.
                                                -Accompany companies and coach individuals in the achievement of
                                                their
                                                objectives while reinforcing their professional and personal
                                                skills.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">

                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                         data-parent="#accordionExample">
                                        <div className="card-body">
                                            <p><strong>Respect :</strong> <br/>

                                                We treat every client, candidate and employee with fairness and
                                                courtesy.<br/>
                                                <strong> Accountability :</strong><br/>

                                                We are passionately committed to all your projects in order to to
                                                achieve the
                                                expected goals with quality and on time. on time.
                                                <br/>
                                                <strong>Integrity :</strong> <br/>

                                                We give meaning to our action through effective and measurable
                                                results.<br/>

                                                <strong> Flexibility :</strong><br/>

                                                To satisfy you at best, we show innovation and originality
                                                innovation and
                                                originality during each mission to find and to find and implement
                                                innovative
                                                solutions in order to bring a real added to bring a real added
                                                value.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;