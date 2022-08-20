const ContactForm = props => {

    return (
        <section className="conatct-section-two section-gap"
                 style={{backgroundImage: "url('assets/img/contact-bg-2.jpg')"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title white-color text-center mb-40">
                            <h2 className="title mb-10">Get Your {props.title}</h2>
                            <p className="text-color-2"> You are executive, manager or a team </p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="contact-form">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-group mt-30">
                                            <input type="text" placeholder="Full Name Here"/> <span className="icon"><i
                                            className="fal fa-user"></i></span></div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group mt-30">
                                            <input type="email" placeholder="Email Here"/> <span className="icon"><i
                                            className="fal fa-envelope-open"></i></span></div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group textarea-group mt-30">
                                            <textarea placeholder="Message Us"></textarea> <span className="icon"><i
                                            className="fal fa-pencil"></i></span></div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group textarea-group mt-30">
                                            <button className="main-btn small-size ml-auto mr-auto">Get Your
                                                {props.title}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;