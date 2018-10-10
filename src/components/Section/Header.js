import React, { Component } from 'react'

export class Header extends Component {
  render () {
    return <header className='header'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <button className="header__btn" type="button">
              <span className="lnr lnr-menu"></span>
              <span className="lnr lnr-cross"></span>
            </button>
            <a data-scroll href="#home" className="header__logo">
              <img className="header__logo-white" src="img/logo.png" alt="Logo"/>
              <img className="header__logo-dark" src="img/logo--dark.png" alt="Logo"/>
            </a>

            <span className="header__tagline">Everlands<br/>Blockchain for legecy</span>

            <ul className="nav header__nav">
              <li>
                <a data-scroll href="#about">About Us</a>
              </li>
              <li>
                <a data-scroll href="#features">Features</a>
              </li>
              <li>
                <a data-scroll href="#faq">faq</a>
              </li>
              <li>
                <a data-scroll href="#blog">Blog</a>
              </li>
              <li>
                <a data-scroll href="#contacts">Contacts</a>
              </li>
            </ul>
            <a href="#Make legacy" className="header__signin modal-btn">Make legacy</a>
          </div>
        </div>
      </div>

    </header>
  }
}
