import React, { Component } from 'react'

class OfferSection extends Component {
  render () {
    return (
      <div>
        <div className="section section--pt0">
          <div className="container">
            <div className="row">
              {/*<!-- tabs nav -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.3s">
                <ul className="tabs" role="tablist">
                  <li role="presentation" className="active"><a href="#tab1" aria-controls="tab1" role="tab"
                                                                data-toggle="tab">USD</a></li>
                  <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab" data-toggle="tab">EUR</a></li>
                  <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab" data-toggle="tab">GBP</a></li>
                  <li role="presentation"><a href="#tab4" aria-controls="tab4" role="tab" data-toggle="tab">RUB</a></li>
                </ul>
              </div>
              {/*<!-- end tabs nav -->*/}

              {/*<!-- tabs content -->*/}
              <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-12 col-lg-offset-0 animate"
                   data-animate="fadeIn" data-duration="1.0s" data-delay="0.5s">
                <div className="tab-content">
                  {/*<!-- tab1 -->*/}
                  <div role="tabpanel" className="tab-pane fade in active" id="tab1">
                    <ul className="offers">
                      <li className="offers__item">
                        <span className="get">Get 0.0082 LEGAL</span>
                        <span className="for">for</span>
                        <span className="value">$100</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.0165 LEGAL</span>
                        <span className="for">for</span>
                        <span className="value">$200</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.0412 LEGAL</span>
                        <span className="for">for</span>
                        <span className="value">$500</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.0825 LEGAL</span>
                        <span className="for">for</span>
                        <span className="value">$1000</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="clearfix"></li>
                    </ul>
                  </div>
                  {/*<!-- end tab1 -->*/}

                  {/*<!-- tab2 -->*/}
                  <div role="tabpanel" className="tab-pane fade" id="tab2">
                    <ul className="offers">
                      <li className="offers__item">
                        <span className="get">Get 0.01 LEGAL</span>
                        <span className="for">for</span>
                        <span className="value">€100</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.02 LEGAL</span>
                        <span className="for">for</span>
                        <span className="value">€200</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.05 LEGAL</span>
                        <span className="for">for</span>
                        <span className="value">€500</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.1 LEGAL</span>
                        <span className="for">for</span>
                        <span className="value">€1000</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="clearfix"></li>
                    </ul>
                  </div>
                  {/*<!-- end tab2 -->*/}

                  {/*<!-- tab3 -->*/}
                  <div role="tabpanel" className="tab-pane fade" id="tab3">
                    <ul className="offers">
                      <li className="offers__item">
                        <span className="get">Get 0.0105 BTC</span>
                        <span className="for">for</span>
                        <span className="value">£100</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.0211 BTC</span>
                        <span className="for">for</span>
                        <span className="value">£200</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.0422 BTC</span>
                        <span className="for">for</span>
                        <span className="value">£500</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.1052 BTC</span>
                        <span className="for">for</span>
                        <span className="value">£1000</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="clearfix"></li>
                    </ul>
                  </div>
                  {/*<!-- end tab3 -->*/}

                  {/*<!-- tab4 -->*/}
                  <div role="tabpanel" className="tab-pane fade" id="tab4">
                    <ul className="offers">
                      <li className="offers__item">
                        <span className="get">Get 0.0132 BTC</span>
                        <span className="for">for</span>
                        <span className="value">₽10,000</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.0264 BTC</span>
                        <span className="for">for</span>
                        <span className="value">₽20,000</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.0659 BTC</span>
                        <span className="for">for</span>
                        <span className="value">₽50,000</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="offers__item">
                        <span className="get">Get 0.1318 BTC</span>
                        <span className="for">for</span>
                        <span className="value">₽100,000</span>
                        <a className="button" href="#">Buy</a>
                      </li>
                      <li className="clearfix"></li>
                    </ul>
                  </div>
                  {/*<!-- end tab4 -->*/}
                </div>
              </div>
              {/*<!-- end tabs content -->*/}
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default OfferSection
