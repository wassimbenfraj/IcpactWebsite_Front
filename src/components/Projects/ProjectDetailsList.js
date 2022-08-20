import ProjectDetailsItem from "./ProjectsDetailsItem";

const ProjectDetailsList = props => {
    return(
        <>
            <section className="service-section-two section-gap-top pb-90">
                <div className="container">
                    <div className="row service-items justify-content-center">
                        {props.projectDetails &&
                            <>
                                {
                                    props.projectDetails.map((projectDetail, index) => (
                                        <ProjectDetailsItem
                                            index={index}
                                            key={projectDetail.id}
                                            id={projectDetail.id}
                                            title={projectDetail.title}
                                            image={projectDetail.image}
                                            description={projectDetail.description}
                                        />
                                    ))

                                }
                            </>}
                    </div>
                </div>
            </section>
        </>
    );
};
export default ProjectDetailsList;