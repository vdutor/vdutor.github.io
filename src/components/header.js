import React from "react"

import { Link } from "gatsby"

import me from "../../assets/me.jpg"


const Header = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Vincent Dutordoir</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={me}
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to="#publications">
                Publications
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                CV
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
