const ProjectsList = () => {

    return (
        <section className="portfolio-area section-gap" id="projects">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-8 col-sm-10">
                        <div className="section-title-two text-center mb-50">
                            <span className="title-tag">Projects</span>
                            <h2 className="title">We Have Done So Much Stuffs </h2>
                        </div>
                    </div>
                </div>

                <div className="portfolio-items justify-content-center row">
                    <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="portfolio-item-two mt-30">
                            <img src={"./assets/img/gemini.png"} alt="Image"/>
                            <div className="portfolio-content">

                                <h5 className="title"><a href="#">Project Members</a></h5>
                                <p>
                                    Mohamed Amin Laribi <br/>
                                    Sofien Ressaissi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="portfolio-item-two mt-30">
                            <img src={"./assets/img/gemini.png"} alt="Image"/>
                            <div className="portfolio-content">

                                <h5 className="title"><a href="#">Project Members</a></h5>
                                <p>
                                    Mohamed Amin Laribi <br/>
                                    Sofien Ressaissi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="portfolio-item-two mt-30">
                            <img src={"./assets/img/gemini.png"} alt="Image"/>
                            <div className="portfolio-content">

                                <h5 className="title"><a href="#">Project Members</a></h5>
                                <p>
                                    Mohamed Amin Laribi <br/>
                                    Sofien Ressaissi
                                </p>
                            </div>
                        </div>
                    </div>
                    <a data-animation="fadeInUp" data-delay="1.1s"
                       className="main-btn rounded-btn icon-right small-size" href=""
                       style={{marginTop: "5%"}}>
                        Our Projects <i className="fal fa-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsList;