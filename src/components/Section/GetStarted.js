import React, { Component } from 'react'

class GetStarted extends Component {
  render () {
    return (
      <div>

        <section className="section section--pt0">
          <div className="container">
            <div className="row">
              {/*<!-- section title -->*/}

              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title">How To Get Started</h2>
                <span className="section__tagline">Your tagline</span>
              </div>
              {/*<!-- end section title -->*/}


              <div className="col-xs-12 col-sm-4">
                {/*<!-- box (style 4) -->*/}
                <div className="box4 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.4s">
                  <span className="box4__number">01</span>
                  <h3 className="box4__title">Sign up for Everland</h3>
                  <p className="box4__text">There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or <b>randomised words</b> which
                    don't look even slightly.</p>
                </div>
                {/*<!-- end box (style 4) -->*/}
              </div>

              <div className="col-xs-12 col-sm-4">
                {/*<!-- box (style 4) -->*/}
                <div className="box4 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.6s">
                  <span className="box4__number">02</span>
                  <h3 className="box4__title">Connect Your Ethereum Wallet</h3>
                  <p className="box4__text">There are many variations of passages of Lorem Ipsum available, <b>but the
                    majority have suffered</b> alteration in some form, by injected humour, or randomised words which
                    don't look even slightly.</p>
                </div>
                {/*<!-- end box (style 4) -->*/}
              </div>

              <div className="col-xs-12 col-sm-4">
                {/*<!-- box (style 4) -->*/}
                <div className="box4 animate" data-animate="flipInX" data-duration="1.0s" data-delay="0.8s">
                  <span className="box4__number">03</span>
                  <h3 className="box4__title">Buy and Sell lands</h3>
                  <p className="box4__text">There are many variations of passages of Lorem Ipsum available, but the
                    majority <a href="#">have suffered</a> alteration in some form, by injected humour, or randomised
                    words which don't look even slightly.</p>
                </div>
                {/*<!-- end box (style 4) -->*/}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default GetStarted
