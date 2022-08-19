const Footer = () => {

    return (
        <footer className="footer-area   footer-area-two">
            <div className="container">
                <div className="row footer-widgets">
                    <div className="col-lg-4 col-md-6 col-md-7">
                        <div className="widget about-widget">
                            <div className="logo">
                                <img src="assets/img/ipact.png" width="150" alt=""/>
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
                                    <li><a href="#"><i className="fal fa-angle-right"></i> About</a></li>
                                    <li><a href="#"><i className="fal fa-angle-right"></i> Services</a></li>
                                    <li><a href="#"><i className="fal fa-angle-right"></i> Projects</a></li>
                                    <li><a href="#"><i className="fal fa-angle-right"></i> Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-md-6">
                        <div className="widget contact-widget">
                            <h4 className="widget-title">Contact</h4>
                            <ul>
                                <li>Email : test@test.com</li>
                                <li>Phone : 123456789</li>
                                <li>Address : Lac Tunis, Tunisia</li>
                            </ul>
                            <p><span>For more then 30 years,</span> IT Service has been a reliable partner in
                                the field
                                of
                                logistics and cargo forwarding.</p>
                            <a href="#"><i className="fal fa-angle-right"></i>Discover More</a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright <a href="#">IPACT Consul</a> - 2022</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;