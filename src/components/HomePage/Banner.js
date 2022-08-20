const Banner = () => {

    return(
        <section className="banner-section-three" style={{backgroundImage: "url(assets/img/banner/banner-03.jpg)"}}
                 id="home">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="banner-content text-center">
                            <span className="title-tag wow fadeInDown" data-wow-delay="0.3s">IPACT</span>
                            <h1 className="title wow fadeInLeft mb-45" data-wow-delay="0.5s">For A Better
                                Impact</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shapes">
                <img className="shape-one" src={"./assets/img/banner/banner-shape-1.png"} alt=""/>
                <img className="shape-two" src={"./assets/img/banner/banner-shape-2.png"} alt=""/>
            </div>

        </section>
    );
};

export default Banner;