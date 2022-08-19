import TeamMember from "./TeamMember";

const TeamsList = () => {

    return (
        <section className="team-area section-gap soft-blue-bg position-relative">
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-lg-5">
                        <div className="section-title text-center mb-60">
                            <h2 className="title mb-10">Our Team </h2>
                            <p className="text-color-2">
                                Does any industry face a more complex audience journey and marketing sales
                                process than
                                B2B
                                technology.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row team-members team-slider-two">
                    <div className="col">
                        <TeamMember/>
                    </div>
                </div>
                <div className="team-slider-two-arrow"></div>
            </div>
        </section>
    );

}
export default TeamsList;