import React from 'react'

//Stateless Components

export const Temp = (props) => {
  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <button className="header__btn" type="button">
                <span className="lnr lnr-menu"></span>
                <span className="lnr lnr-cross"></span>
              </button>
              <a data-scroll href="#home" className="header__logo">
                <img className="header__logo-white" src="img/logo.png" alt="Logo"> </img>
                  <img className="header__logo-dark" src="img/logo--dark.png" alt="Logo"></img>
              </a>

              <span className="header__tagline">BuyCoin<br>Landing Page</br></span>

              <ul className="nav header__nav">
                <li>
                  <a data-scroll href="#about">About Us</a>
                </li>
                <li>
                  <a data-scroll href="#features">Features</a>
                </li>
                <li>
                  <a data-scroll href="#safety">Safety</a>
                </li>
                <li>
                  <a data-scroll href="#blog">Blog</a>
                </li>
                <li>
                  <a data-scroll href="#contacts">Contacts</a>
                </li>
              </ul>

              <a href="#signin" className="header__signin modal-btn">Sign In</a>
            </div>
          </div>
        </div>
      </header>
    </div>
)
}


