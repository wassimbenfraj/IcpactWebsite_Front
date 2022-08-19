const Contact = () => {

    return (
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
    );
};

export default Contact;