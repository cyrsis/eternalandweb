import React, { Component } from 'react'

class TeamSection extends Component {
  render () {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="row">
              {/*<!-- section title -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title">Our Team</h2>
                <span className="section__tagline">Your tagline</span>
              </div>
              {/*<!-- end section title -->*/}
            </div>
          </div>

          {/*<!-- slider -->*/}
          <div className="owl-carousel team team--grey animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
            <div className="item">
              <img className="team__img" src="img/team/member.png" alt=""/>
                <div className="team__meta">
                  <p>Mark</p>
                  <span>CEO</span>
                  <ul className="clearfix">
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
            </div>

            <div className="item">
              <img className="team__img" src="img/team/member.png" alt=""/>
                <div className="team__meta">
                  <p>Jonathan</p>
                  <span>Founder</span>
                  <ul className="clearfix">
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
            </div>

            <div className="item">
              <img className="team__img" src="img/team/member.png" alt=""/>
                <div className="team__meta">
                  <p>John</p>
                  <span>Technologist</span>
                  <ul className="clearfix">
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
            </div>

            <div className="item">
              <img className="team__img" src="img/team/member.png" alt=""/>
                <div className="team__meta">
                  <p>Gregory</p>
                  <span>Economist</span>
                  <ul className="clearfix">
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
            </div>

            <div className="item">
              <img className="team__img" src="img/team/member.png" alt=""/>
                <div className="team__meta">
                  <p>Emily</p>
                  <span>Marketer</span>
                  <ul className="clearfix">
                    <li>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          {/*<!-- end slider -->*/}
        </section>


      </div>
    )
  }
}

export default TeamSection
