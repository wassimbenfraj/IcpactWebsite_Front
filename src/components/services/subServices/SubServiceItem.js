const SubServiceItem = props => {

    const element = props.index === 0 ?
        (
            <>
                <div className="card-header" id="headingOne-2">
                    <a className="" href="#" data-toggle="collapse"
                       data-target={`#collapse${props.index}`}
                       aria-expanded="true" aria-controls={`collapse${props.index}`}> <i
                        className="fal fa-magic"></i>{props.title}</a>
                </div>
                <div id={`collapse${props.index}`} className="collapse show" aria-labelledby="headingOne-2"
                     data-parent="#accordionExampleTwo">
                    <div className="card-body">
                        <p>{props.description}</p>
                    </div>
                </div>
            </>

        ) :
        (
            <>
                <div className="card-header" id="headingOne-2">
                    <a className="collapsed" href="#" data-toggle="collapse"
                       data-target={`#collapse${props.index}`}
                       aria-expanded="false" aria-controls={`collapse${props.index}`}> <i
                        className="fal fa-magic"></i>{props.title}</a>
                </div>
                <div id={`collapse${props.index}`} className="collapse" aria-labelledby="headingOne-2"
                     data-parent="#accordionExampleTwo">
                    <div className="card-body">
                        <p>{props.description}</p>
                    </div>
                </div>
            </>
        )

    return (
        <div className="card">
            {element}
        </div>

    );
};

export default SubServiceItem;