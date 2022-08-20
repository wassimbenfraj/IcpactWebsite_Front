import Slider from "react-slick";

const Partners = () => {

    const settings = {
        infinite: true,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    };

    return (
        <section className="about-section" >
            <div className="container">
                <div className="col-lg-6 col-md-10 order-lg-1">
                    <div className="section-title mb-50 wow fadeInUp" data-wow-delay="0.3s">

                        <h2 className="title" style={{textAlign: "center"}}>Our Partners</h2>
                    </div>
                </div>
                <section className="customer-logos slider" style={{marginBottom: "5%"}} >
                    <Slider  {...settings}>

                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/ITeam.cf742183.jpg"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/ihet.78938c3f.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/UOttawa.56c7ff0d.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/universidade-de-brasilia-logo.36f4d495.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/tek_up_logo.d853ef1a.jpg"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/MP2.c6ad4e97.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/CD2.cbd85af7.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/tunivision.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/gat.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/rotary.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/rotaract.659d7fbe.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/nextSlide.694bb42e.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/JET.25b1c94c.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/interact.10a71253.png"}/></div>
                        <div className="slide"><img height="100px" src={"./assets/img/sidebar/IOM.992aa495.png"}/></div>
                        <div className="slide" ></div>
                        <div className="slide" ></div>

                    </Slider>

                </section>
            </div>
        </section>

    );
};

export default Partners;