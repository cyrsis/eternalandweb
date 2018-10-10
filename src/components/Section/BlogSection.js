import React, { Component } from 'react'

class BlogSection extends Component {
  render () {
    return (
      <div>
        <section id="blog" className="section section--grey">
          <div className="container">
            <div className="row">
              {/*<!-- section title -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title">Blog</h2>
                <span className="section__tagline">Our publications</span>
              </div>
              {/*<!-- end section title -->*/}

              {/*<!-- article -->*/}
              <div className="col-xs-12 col-sm-6 col-md-4 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.4s">
                <article className="article">
                  <figure className="article__img">
                    <a href="#">
                      <img src="img/blog/article.jpg" alt=""/>
                    </a>
                  </figure>

                  <header className="article__header">
                    <h3 className="article__title">
                      <a href="#">Blockchain</a>
                    </h3>
                  </header>

                  <div className="article__content">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.</p>
                  </div>
                </article>
              </div>
              {/*<!-- end article -->*/}


              {/*<!-- article -->*/}
              <div className="col-xs-12 col-sm-6 col-md-4 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.6s">
                <article className="article">
                  <figure className="article__img">
                    <a href="#">
                      <img src="img/blog/article.jpg" alt=""/>
                    </a>
                  </figure>

                  <header className="article__header">
                    <h3 className="article__title">
                      <a href="#">Finance</a>
                    </h3>
                  </header>

                  <div className="article__content">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.</p>
                  </div>
                </article>
              </div>
              {/*<!-- end article -->*/}

              {/*<!-- article -->*/}
              <div className="col-xs-12 col-sm-6 col-md-4 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.8s">
                <article className="article">
                  <figure className="article__img">
                    <a href="#">
                      <img src="img/blog/article.jpg" alt=""/>
                    </a>
                  </figure>

                  <header className="article__header">
                    <h3 className="article__title">
                      <a href="#">Business</a>
                    </h3>
                  </header>

                  <div className="article__content">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't.</p>
                  </div>
                </article>
              </div>
              {/*<!-- end article -->*/}
            </div>
          </div>
        </section>


      </div>
    )
  }
}

export default BlogSection
