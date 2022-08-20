import {Link} from "react-router-dom";

const ServiceItem = props => {

    return (
        <div className="col-lg-3 col-md-6 col-sm-10 wow fadeInLeft" data-wow-delay="0.3s">
            <div className={`service-item-six color-${props.index} text-center mt-30`}>
                <div className="icon">
                    <i className="fal fa-laptop-code"></i>
                </div>
                <h4 className="title" style={{fontSize: "2em"}}>{props.title}</h4>
                <p>{props.description}</p>
                <Link to={`services/${props.title.replace(/\s/g, '')}`} className="service-link"><i
                    className="fal fa-angle-right"></i> Explore
                    More</Link>
                <span className="count">01</span>
            </div>
        </div>
    );
};

export default ServiceItem;