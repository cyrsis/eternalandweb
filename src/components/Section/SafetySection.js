import React, { Component } from 'react'

class SafetySection extends Component {
  render () {
    return (
      <div>
        <section id="safety" className="section">
          <div className="container">
            <div className="row">
              {/*<!-- section title -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title section__title--underline">It is for now <br/>and forever</h2>
              </div>
              {/*<!-- end section title -->*/}

              <div className="col-xs-12 col-sm-4">
                {/*<!-- box (style 3) -->*/}
                <div className="box3 box3--line animate" data-animate="zoomIn" data-duration="1.0s" data-delay="0.4s">
                  <div className="box3__icon">
                    <span className="lnr lnr-lock"></span>
                  </div>
                  <h3 className="box3__title">Security</h3>
                  <p className="box3__text">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                {/*<!-- end box (style 3) -->*/}
              </div>

              <div className="col-xs-12 col-sm-4">
                {/*<!-- box (style 3) -->*/}
                <div className="box3 box3--line animate" data-animate="zoomIn" data-duration="1.0s" data-delay="0.6s">
                  <div className="box3__icon">
                    <span className="lnr lnr-license"></span>
                  </div>
                  <h3 className="box3__title">License</h3>
                  <p className="box3__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                </div>
                {/*<!-- end box (style 3) -->*/}
              </div>

              <div className="col-xs-12 col-sm-4">
                {/*<!-- box (style 3) -->*/}
                <div className="box3 animate" data-animate="zoomIn" data-duration="1.0s" data-delay="0.8s">
                  <div className="box3__icon">
                    <span className="lnr lnr-thumbs-up"></span>
                  </div>
                  <h3 className="box3__title">Result</h3>
                  <p className="box3__text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
                {/*                <!-- end box (style 3) -->*/}
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default SafetySection
