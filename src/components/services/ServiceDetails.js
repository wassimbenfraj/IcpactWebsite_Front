const ServiceDetails = props => {

    return (
        <section className="service-details-section section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="services-details-imgs mb-md-gap-50">
                            <div className="img-one">
                                <img src={"./assets/img/service-img/services-op-1.jpg"} alt="img"/>
                            </div>
                            <div className="img-two text-right">
                                <img src={"./assets/img/service-img/services-op-2.jpg"} alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="service-details-text-block">
                            <div className="section-title with-right-border mb-40">
                                <span className="title-tag">Search Enging Optimization</span>
                                <h2 className="title">General Description.</h2>
                            </div>
                            <p className="text-color-2">
                                {props.description}
                            </p>
                            <div className="service-support-btn">
                                <p>Make A Call</p>
                                <span>897 876 76 56 4</span>
                                <i className="fal fa-phone"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;