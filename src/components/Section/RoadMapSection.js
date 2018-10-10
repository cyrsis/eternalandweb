import React, { Component } from 'react'

class RoadMapSection extends Component {
  render () {
    return (
      <div>
        <section className="section section--grey">
          <div className="container-fluid">
            <div className="row">
              {/*<!-- section title -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title">Roadmap</h2>
                <span className="section__tagline">Thorny path</span>
              </div>
              {/*<!-- end section title -->*/}

              {/*<!-- roadmap -->*/}
              <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-12 col-lg-offset-0">
                <ul className="roadmap animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.4s">
                  <li>
                    <span>Q3 2018</span>
                    <p>Project start-up. Product conception. System architecture development.</p>
                  </li>
                  <li>
                    <span>Q4 2018</span>
                    <p>Connection to stock exchanges. Development of trading platform and the system’s core elements.</p>
                  </li>
                  <li>
                    <span>Q1 2019</span>
                    <p>Test environment launch for algorithm creators. Development of the first algorithms.</p>
                  </li>
                  <li>
                    <span>Q2 2019</span>
                    <p>Tradingene public product launch for algorithm creators. Broadening of financial instruments for algorithm creation.</p>
                  </li>
                  <li>
                    <span>Q3 2019</span>
                    <p>Development of user interface prototype for investors.</p>
                  </li>
                </ul>
              </div>
              {/*<!-- end roadmap -->*/}

              {/*<!-- section button -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.6s">
                <a href="" target="_blank" className="section__btn">purchase now</a>
              </div>
              {/*<!-- end section button -->*/}
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default RoadMapSection
