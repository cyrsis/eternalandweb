import React, { Component } from 'react'

class FeaturesSection extends Component {
  render () {
    return (
      <div>
        <section id="features" className="section">
          <div className="container">
            <div className="row">
              {/*<!-- section title -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title">BuyCoin Template</h2>
                <span className="section__tagline">Excellent for your business</span>
              </div>
              {/*<!-- end section title -->*/}

              <div className="col-xs-12 col-sm-6 col-md-4">
                {/*<!-- box (style 2) -->*/}
                <div className="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.4s">
                  <span className="lnr lnr-diamond box2__icon"></span>
                  <h3 className="box2__title">Modern Design</h3>
                  <p className="box2__text"> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
                {/*<!-- end box (style 2) -->*/}
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4">
                {/*<!-- box (style 2) -->*/}
                <div className="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
                  <span className="lnr lnr-magic-wand box2__icon"></span>
                  <h3 className="box2__title">Easy Costomize</h3>
                  <p className="box2__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator.</p>
                </div>
                {/*<!-- end box (style 2) -->*/}
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4">
                {/*<!-- box (style 2) -->*/}
                <div className="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.8s">
                  <span className="lnr lnr-leaf box2__icon"></span>
                  <h3 className="box2__title">Clean Code</h3>
                  <p className="box2__text">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                {/*<!-- end box (style 2) -->*/}
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4">
                {/*<!-- box (style 2) -->*/}
                <div className="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.4s">
                  <span className="lnr lnr-laptop-phone box2__icon"></span>
                  <h3 className="box2__title">Fully Responsive</h3>
                  <p className="box2__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                </div>
                {/*<!-- end box (style 2) -->*/}
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4">
                {/*<!-- box (style 2) -->*/}
                <div className="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
                  <span className="lnr lnr-layers box2__icon"></span>
                  <h3 className="box2__title">20+ Color Schemes</h3>
                  <p className="box2__text">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                {/*<!-- end box (style 2) -->*/}
              </div>

              <div className="col-xs-12 col-sm-6 col-md-4">
                {/*<!-- box (style 2) -->*/}
                <div className="box2 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.8s">
                  <span className="lnr lnr-rocket box2__icon"></span>
                  <h3 className="box2__title">Excellent purchase</h3>
                  <p className="box2__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                </div>
                {/*<!-- end box (style 2) -->*/}
              </div>
            </div>
          </div>
        </section>


      </div>
    )
  }
}

export default FeaturesSection
