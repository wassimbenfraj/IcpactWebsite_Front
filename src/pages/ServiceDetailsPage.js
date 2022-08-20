const ServiceDetailsPage = () => {


    return (
        <div>
            <div id="preloader">
                <div className="loader-cubes">
                    <div className="loader-cube1 loader-cube"></div>
                    <div className="loader-cube2 loader-cube"></div>
                    <div className="loader-cube4 loader-cube"></div>
                    <div className="loader-cube3 loader-cube"></div>
                </div>
            </div>
            <header className="header-two header-full-width sticky-header">
                <div className="header-navigation">
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <div className="header-left">
                            <div className="site-logo">
                                <a href="index-2.html"><img src="assets/img/ipact2.png" width="150" alt="Ipact"/></a>
                            </div>
                        </div>
                        <div className="site-nav-menu">
                            <ul className="primary-menu onepage-nav">
                                <li className="current"><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <a href="#" className="nav-close"><i className="fal fa-times"></i></a>
                        </div>
                        <div className="header-extra d-flex align-items-center">
                            <div className="nav-toggler">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="navbar-btn">
                                <a href="#">Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="page-title-area">
                <div className="container">
                    <h2 className="title">Services Details</h2>
                    <ul className="breadcrumb-nav">
                        <li><a href="index-2.html">Home</a></li>
                        <li className="active">About</li>
                    </ul>
                </div>
            </section>

            <section className="service-details-section section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="services-details-imgs mb-md-gap-50">
                                <div className="img-one">
                                    <img src="assets/img/service-img/services-op-1.jpg" alt="img"/>
                                </div>
                                <div className="img-two text-right">
                                    <img src="assets/img/service-img/services-op-2.jpg" alt="img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="service-details-text-block">
                                <div className="section-title with-right-border mb-40">
                                    <span className="title-tag">Search Enging Optimization</span>
                                    <h2 className="title">Nothing to do anything.</h2>
                                </div>
                                <p className="text-color-2">
                                    Does any industry face a more complex audience journey and marketing sales process
                                    than B2B technology? Consider the number of people who influence a sale, the length
                                    of the decision-making cycle, the competing interests of the people who purchase,
                                    implement, manage, and use the technology. It’s a lot meaningful content here.
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

            <section className="intro-video-area" style={{backgroundImage: "url(assets/img/intro-video-bg.jpg)"}}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="intro-video-content mb-md-gap-50">
                                <span>Intro Video</span>
                                <h2 className="title">How we growth our business.</h2>
                                <p className="text-1">The introduction of cloud and mobile technologies into enterprise
                                    software.
                                </p>
                                <p className="text-2">hether you are building an enterprise web portal or a
                                    state-of-the-art
                                    website, you always need the right modern tools. Well-built and maintained PHP
                                    frameworks
                                    provide those tools in abundance, allowing maintained PHP frameworks provide those
                                    tools in
                                    abundance, allowing developers to save time, re-use code, and streamline the back
                                    end. As
                                    software development tools continuously.</p>

                                <a className="main-btn wow fadeInLeft" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="intro-thumb">
                                <img src="assets/img/intro-thumb.jpg" alt=""/>
                                <a className="video-popup" href="https://www.youtube.com/watch?v=t8mvutAh4AE"><i
                                    className="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-section section-gap soft-blue-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-title with-right-border mb-50">
                                <span className="title-tag">plans</span>
                                <h2 className="title">Our Plans</h2>
                            </div>
                        </div>
                        <div className="col-auto">
                            <ul className="nav nav-pills pricing-tab-btn" id="pricingOneTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#monthly-item"
                                       role="tab">Monthly</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#yearly-item">Yearly</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content" id="pricingOneTabContent">
                        <div className="tab-pane fade show active" id="monthly-item" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                    <div className="pricing-plan-item"
                                         style={{backgroundImage: "url(assets/img/plans-thumb.jpg)"}}>
                                        <p className="plan-name">Early Birds</p>
                                        <h3 className="price">$ <span>9</span></h3>
                                        <span className="plan-duration">Per Month</span>
                                        <p>The functional goal of technical content is to help people use a product
                                            successfully.</p>
                                        <a className="plans-btn" href="#">Purchase Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                    <div className="pricing-plan-item"
                                         style={{backgroundImage: "url(assets/img/plans-thumb.jpg)"}}>
                                        <p className="plan-name">Team</p>
                                        <h3 className="price">$ <span>32</span></h3>
                                        <span className="plan-duration">Per Month</span>
                                        <p>The functional goal of technical content is to help people use a product
                                            successfully.</p>
                                        <a className="plans-btn" href="#">Purchase Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                    <div className="pricing-plan-item"
                                         style={{backgroundImage: "url(assets/img/plans-thumb.jpg)"}}>
                                        <p className="plan-name">Personal</p>
                                        <h3 className="price">$ <span>69</span></h3>
                                        <span className="plan-duration">Per Month</span>
                                        <p>The functional goal of technical content is to help people use a product
                                            successfully.</p>
                                        <a className="plans-btn" href="#">Purchase Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                    <div className="pricing-plan-item"
                                         style={{backgroundImage: 'url(assets/img/plans-thumb.jpg)'}}>
                                        <p className="plan-name">Plutinum</p>
                                        <h3 className="price">$ <span>99</span></h3>
                                        <span className="plan-duration">Per Month</span>
                                        <p>The functional goal of technical content is to help people use a product
                                            successfully.</p>
                                        <a className="plans-btn" href="#">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="yearly-item" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                    <div className="pricing-plan-item"
                                         style={{backgroundImage: "url(assets/img/plans-thumb.jpg)"}}>
                                        <p className="plan-name">Early Birds</p>
                                        <h3 className="price">$ <span>56</span></h3>
                                        <span className="plan-duration">Per Year</span>
                                        <p>The functional goal of technical content is to help people use a product
                                            successfully.</p>
                                        <a className="plans-btn" href="#">Purchase Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                    <div className="pricing-plan-item"
                                         style={{backgroundImage: "url(assets/img/plans-thumb.jpg)"}}>
                                        <p className="plan-name">Team</p>
                                        <h3 className="price">$ <span>99</span></h3>
                                        <span className="plan-duration">Per Year</span>
                                        <p>The functional goal of technical content is to help people use a product
                                            successfully.</p>
                                        <a className="plans-btn" href="#">Purchase Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                    <div className="pricing-plan-item"
                                         style={{backgroundImage: "url(assets/img/plans-thumb.jpg)"}}>
                                        <p className="plan-name">Personal</p>
                                        <h3 className="price">$ <span>133</span></h3>
                                        <span className="plan-duration">Per Year</span>
                                        <p>The functional goal of technical content is to help people use a product
                                            successfully.</p>
                                        <a className="plans-btn" href="#">Purchase Now</a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-8 mt-30">
                                    <div className="pricing-plan-item"
                                         style={{backgroundImage: "url(assets/img/plans-thumb.jpg)"}}>
                                        <p className="plan-name">Plutinum</p>
                                        <h3 className="price">$ <span>599</span></h3>
                                        <span className="plan-duration">Per Year</span>
                                        <p>The functional goal of technical content is to help people use a product
                                            successfully.</p>
                                        <a className="plans-btn" href="#">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            >
            <div className="back-to-top">
                <a href="#"> <i className="fas fa-arrow-up"></i> </a>
            </div>
            ->
            <footer className="footer-area footer-area-two" style={{backgroundImage: "url(assets/img/footer-bg.jpg)"}}>
                <div className="container">
                    <div className="row footer-widgets">
                        <div className="col-lg-4 col-md-6 col-md-7">
                            <div className="widget about-widget">
                                <div className="logo">
                                    <img src="assets/img/logo-1.1.png" alt="Image"/>
                                </div>
                                <p>The web has changed a lot since Vitaly posted his first article back in 2006. The
                                    team at
                                    Smashing has changed too, as have the things that we bring to our community
                                    onferences,
                                    books, and our membership added to the online magazine.</p>
                                <p>One thing that hasn’t changed is that we’re a small team — with most of us not
                                    working</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 offset-xl-1">
                            <div className="widget nav-widget">
                                <h4 className="widget-title">Pages</h4>
                                <div className="footer-list">
                                    <ul>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Home</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Services</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> About</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Career</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Refund</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Terms</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Details</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Contact</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Business</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i> Affiliate</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-md-6">
                            <div className="widget contact-widget">
                                <h4 className="widget-title">Working Hours</h4>
                                <ul>
                                    <li>Monday - Friday: 7:00 - 17:00</li>
                                    <li>Saturday: 7:00 - 12:00</li>
                                    <li>Sunday and holidays: 8:00 - 10:00</li>
                                </ul>
                                <p><span>For more then 30 years,</span> IT Service has been a reliable partner in the
                                    field of
                                    logistics and cargo forwarding.</p>
                                <a href="#"><i className="fal fa-angle-right"></i>Discover More</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>Copyright <a href="https://demo.webtend.net/cdn-cgi/l/email-protection"
                                        className="__cf_email__"
                                        data-cfemail="b9fbc0f9">[email&#160;protected]</a> <a href="#">WebTend</a> -
                            2021</p>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default ServiceDetailsPage;