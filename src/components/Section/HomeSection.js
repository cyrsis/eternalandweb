import React, { Component } from 'react'

class HomeSection extends Component {
  render () {
    return (
      <div>
        <section id="home" className="home section--bg" data-bg="img/home/slide.jpg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="home__content-wrap animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.5s">
                  <div className="home__content">
                    <h1 className="home__title">Everland Landing Page</h1>

                    <p className="home__text">Secure & Easy Way To Leave your Will</p>

                    <a data-scroll href="#about" className="home__btn">Learn More</a>

                    <a data-scroll href="#about" className="home__btn home__btn--color">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default HomeSection
