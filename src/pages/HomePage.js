import Preloader from "../common/components/Preloader";
import Header from "../components/HomePage/Header";
import Banner from "../components/HomePage/Banner";
import About from "../components/HomePage/About";
import ServicesList from "../components/HomePage/Services/ServicesList";
import Partners from "../components/HomePage/Partners";
import ProjectsList from "../components/HomePage/projects/ProjectsList";


const HomePage = () => {


    return (
        <div>
            <Preloader/>
            <Header/>
            <Banner/>

            <About/>
            <Partners/>
            <ServicesList/>

            <div className="avie">
                <div className="container-fluid px-2 px-md-4 py-5 mx-auto">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-8">
                            <div className="card card-main border-0 text-center">
                                <h5 className="font-weight-bold mb-4">What our clients are saying<br/>about us.</h5>
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"
                                            className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item">
                                            <div className="card border-0 card-0">
                                                <div className="card profile py-3 px-4">
                                                    <div className="text-center">
                                                        <img src="https://i.imgur.com/gazoShk.jpg"
                                                             className="img-fluid profile-pic"/>
                                                    </div>
                                                    <h6 className="mb-0 mt-2">Marielle Haag</h6>
                                                    <small>Backend Developer</small>
                                                </div>
                                                <img className="img-fluid open-quotes"
                                                     src="https://i.imgur.com/Hp91vdT.png"
                                                     width="20"
                                                     height="20"/>
                                                <p className="content mb-0">Excepteur sint occaecat cupidatat
                                                    non
                                                    proident,
                                                    sunt
                                                    in
                                                    culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <img className="img-fluid close-quotes ml-auto"
                                                     src="https://i.imgur.com/iPcHyJK.png"
                                                     width="20" height="20"/>
                                            </div>
                                        </div>
                                        <div className="carousel-item active">
                                            <div className="card border-0 card-0">
                                                <div className="card profile py-3 px-4">
                                                    <div className="text-center">
                                                        <img src="https://i.imgur.com/oW8Wpwi.jpg"
                                                             className="img-fluid profile-pic"/>
                                                    </div>
                                                    <h6 className="mb-0 mt-2">Ximena Vegara</h6>
                                                    <small>UI/UX Designer</small>
                                                </div>
                                                <img className="img-fluid open-quotes"
                                                     src="https://i.imgur.com/Hp91vdT.png"
                                                     width="20"
                                                     height="20"/>
                                                <p className="content mb-0">Lorem ipsum dolor sit amet,
                                                    consectetur
                                                    adipisicing
                                                    elit,
                                                    sed do eiusmod incididunt ut labore et dolore magna
                                                    aliqua.</p>
                                                <img className="img-fluid close-quotes ml-auto"
                                                     src="https://i.imgur.com/iPcHyJK.png"
                                                     width="20" height="20"/>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="card border-0 card-0">
                                                <div className="card profile py-3 px-4">
                                                    <div className="text-center">
                                                        <img src="https://i.imgur.com/ndQx2Rg.jpg"
                                                             className="img-fluid profile-pic"/>
                                                    </div>
                                                    <h6 className="mb-0 mt-2">John Paul</h6>
                                                    <small>UI/UX Designer</small>
                                                </div>
                                                <img className="img-fluid open-quotes"
                                                     src="https://i.imgur.com/Hp91vdT.png"
                                                     width="20"
                                                     height="20"/>
                                                <p className="content mb-0">Duis aute irure dolor in
                                                    reprehenderit
                                                    in
                                                    voluptate
                                                    velit
                                                    esse cillum dolore eu fugiat nulla pariatur.</p>
                                                <img className="img-fluid close-quotes ml-auto"
                                                     src="https://i.imgur.com/iPcHyJK.png"
                                                     width="20" height="20"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="team-area section-gap soft-blue-bg position-relative">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-5">
                            <div className="section-title text-center mb-60">
                                <h2 className="title mb-10">Our Team </h2>
                                <p className="text-color-2">
                                    Does any industry face a more complex audience journey and marketing sales
                                    process than
                                    B2B
                                    technology.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row team-members team-slider-two">
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-1.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Harry Garrett</a></h5>
                                        <span className="position">Design Expert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-2.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Rosalina Devid</a></h5>
                                        <span className="position">Marketer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-3.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Kemina Dvlin</a></h5>
                                        <span className="position">CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-4.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Harry Garrett</a></h5>
                                        <span className="position">Design Expert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-5.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Rosalina Devid</a></h5>
                                        <span className="position">Marketer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-6.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Kemina Dvlin</a></h5>
                                        <span className="position">CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-7.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Harry Garrett</a></h5>
                                        <span className="position">Design Expert</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-8.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Rosalina Devid</a></h5>
                                        <span className="position">Marketer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="team-member-three mb-30">
                                <div className="member-inner">
                                    <img src="assets/img/team/leadership-9.jpg" alt="Member-Photo"/>
                                    <div className="team-content">
                                        <h5 className="name"><a href="#">Kemina Dvlin</a></h5>
                                        <span className="position">CEO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-slider-two-arrow"></div>
                </div>
            </section>

            <section className="conatct-section-three soft-blue-bg section-gap" id="contact">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="section-title-two text-left mb-45">
                                <span>Get In Touch</span>
                                <h2 className="title">Contact Us.</h2>
                            </div>
                            <div className="form-area">
                                <form action="#">
                                    <div className="input-box">
                                        <input type="text" placeholder="Enter your name"/>
                                    </div>
                                    <div className="input-box mt-20">
                                        <input type="email" placeholder="Enter your email"/>
                                    </div>
                                    <div className="input-box mt-20">
                                        <textarea placeholder="Enter your message"></textarea>
                                    </div>
                                    <div className="input-box mt-20">
                                        <button className="main-btn" type="submit">Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="contact-map-two mt-md-gap-50">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993207.564767118!2d-77.9807899414373!3d42.92219345357043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1569310771254!5m2!1sen!2sbd"
                                    allowFullScreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="back-to-top">
                <a href="#"> <i className="fas fa-arrow-up"></i> </a>
            </div>




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

        </div>

    );
};

export default HomePage;