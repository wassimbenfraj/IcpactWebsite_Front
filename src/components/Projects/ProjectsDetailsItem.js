const ProjectDetailsItem = props => {
    return (
        <>

            <div className="col-lg-4 col-md-6 col-sm-8">
                <div className="service-item-eight mb-30">
                    <div className="service-img">
                        <img src={props.image} alt="Image"/>
                    </div>
                    <div className="services-overlay">
                        <div className="icon"><i className="fal fa-eye-dropper"></i></div>
                        <h4 className="title"><a href="#">{props.title}</a></h4>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>


        </>
    );
}
export default ProjectDetailsItem;