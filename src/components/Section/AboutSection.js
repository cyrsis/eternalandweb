import React, { Component } from 'react'

class AboutSection extends Component {
  render () {
    return (
      <div>

        <section id="about" className="about about--wave section--gradient">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title section__title--white section__title--margin">About Everland</h2>
              </div>

              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.5s">
                <div className="about__text">
                  <p><b>There are many variations of passages</b> of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or <b>randomised words</b> which don't look even slightly believable.</p>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. <b>All the Lorem Ipsum generators on the Internet</b> tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AboutSection
