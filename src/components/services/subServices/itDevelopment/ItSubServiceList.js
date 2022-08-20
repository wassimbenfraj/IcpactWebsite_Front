import ItSubServiceItem from "./ItSubServiceItem";

const ItSubServiceList = props => {

    return (
      <>
          <section className="history-section section-gap">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-6">
                          <div className="section-title text-center mb-80">
                              <h2 className="title mb-10">Our speciality</h2>
                              <p className="text-color-2">
                                  Does any industry face a more complex audience journey and marketing sales process
                                  than B2B
                                  technology.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="history-timeline history-isotope">
                      {props.subServices &&
                          <>
                              {
                                  props.subServices.map((subService, index) => (
                                      <ItSubServiceItem
                                          index={index}
                                          key={subService.id}
                                          id={subService.id}
                                          title={subService.title}
                                          image={subService.image}
                                          description={subService.description}
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

export default ItSubServiceList;