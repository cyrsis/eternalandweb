import React, { Component } from 'react'

class VideoSection extends Component {
  render () {
    return (
      <div>
        <section className="section section--bg video" data-bg="img/section-bg/section-bg1.jpg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                <a href="https://vimeo.com/45830194" className="video__btn animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s"><i className="fa fa-play-circle"></i></a>
                <h4 className="video__title animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.4s">Video Review</h4>
                <p className="video__text animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.6s">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default VideoSection
