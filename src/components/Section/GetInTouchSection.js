import React, { Component } from 'react'

class GetInTouchSection extends Component {
  render () {
    return (
      <div>
        <section id="contacts" className="section">
          <div className="container">
            <div className="row">
              {/*<!-- section title -->*/}
              <div className="col-xs-12 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.2s">
                <h2 className="section__title">Get in Touch</h2>
                <p className="section__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>
              </div>
              {/*<!-- end section title -->*/}

              <div className="col-xs-12 col-sm-6 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.5s">
                {/*<!-- contacts -->*/}
                <div className="contacts">
                  <ul className="contacts__list">
                    <li>
                      <span className="lnr lnr-map"></span>
                      Block Manic Ltd <br/>
                      Hong Kong
                    </li>
                    <li>
                      <span className="lnr lnr-calendar-full"></span>Mon - Fri 08:00 - 19:00
                    </li>
                    <li>
                      <span className="lnr lnr-inbox"></span>
                      <a href="mailto:support@everland.com">support@everland.com</a>
                    </li>
                    <li>
                      <span className="lnr lnr-phone-handset"></span>
                      <a href="tel:+18002345678">+1 (800) 234-5678</a>
                    </li>
                  </ul>
                </div>
                {/*<!-- end contacts -->*/}
              </div>

              <div className="col-xs-12 col-sm-6 animate" data-animate="fadeIn" data-duration="1.0s" data-delay="0.5s">
                {/*<!-- form -->*/}
                <form action="#" className="form form--contacts">
                  <input type="text" className="form__input" placeholder="Name"/>
                    <input type="text" className="form__input" placeholder="Email" />
                      <textarea className="form__textarea" placeholder="Message"></textarea>
                      <button className="form__btn" type="button">Send</button>
                </form>
                {/*<!-- end form -->*/}
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default GetInTouchSection
