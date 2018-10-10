import React, { Component } from 'react'

class CounterSection extends Component {
  render () {
    return (
      <div>
        <div className="section section--bg counter" data-bg="img/section-bg/section-bg1.jpg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-lg-3">
                <div className="counter__box">
                  <span className="counter__value">5.7</span>
                  <span className="counter__title">mln transactions</span>
                </div>
              </div>

              <div className="col-xs-12 col-sm-3 col-lg-3">
                <div className="counter__box">
                  <span className="counter__value">70</span>
                  <span className="counter__title">online consultants</span>
                </div>
              </div>

              <div className="col-xs-12 col-sm-3 col-lg-3">
                <div className="counter__box">
                  <span className="counter__value">23</span>
                  <span className="counter__title">countries served</span>
                </div>
              </div>

              <div className="col-xs-12 col-sm-3 col-lg-3">
                <div className="counter__box">
                  <span className="counter__value">2.5</span>
                  <span className="counter__title">mln bitcoin wallets</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CounterSection
