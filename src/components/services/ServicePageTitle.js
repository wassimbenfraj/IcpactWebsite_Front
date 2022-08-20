const ServicePageTitle = props => {

    return (
        <section className="page-title-area">
            <div className="container">
                <h2 className="title">{props.title}</h2>
                <ul className="breadcrumb-nav">
                    <li><a href="">Home</a></li>
                    <li className="active">About</li>
                </ul>
            </div>
        </section>
    );
};

export default ServicePageTitle;