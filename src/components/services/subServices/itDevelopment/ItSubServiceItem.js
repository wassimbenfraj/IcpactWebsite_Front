const ItSubServiceItem = props => {

    return (
        <div className="history-item wow fadeInUp" data-wow-delay="0.3s">
            <div className="history-thumb"
                 style={{backgroundImage: `url(${props.image})`}} />
            <div className="history-content">
                <span className="history-year">{props.title}</span>
                <h4 className="title">Website Development Process</h4>
                <p>{props.description}</p>
            </div>
            <div className="number-box">
                <span>01</span>
            </div>
        </div>

    );
}

export default ItSubServiceItem;