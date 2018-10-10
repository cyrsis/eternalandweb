import React, { Component } from 'react'

class InfoSection extends Component {
  render () {
    return (
      <div>
        <section className="section section--grey">
          <div className="container">
            <div className="row">
              {/*<!-- section title -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title">Template Features</h2>
                <span className="section__tagline">Your tagline</span>
              </div>
              {/*<!-- end section title -->*/}

              <div
                className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 animate"
                data-animate="fadeIn" data-duration="1.0s" data-delay="0.4s">
                {/*<!-- info content -->*/}
                <div className="info__text">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                    readable English.</p>

                  <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

                  <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                    humour and the like).</p>
                </div>
                {/*<!-- end info content -->*/}
              </div>

              {/*<!-- section button -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.6s">
                <a href="#" className="section__btn">purchase now</a>
              </div>
              {/*<!-- end section button -->*/}
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default InfoSection
