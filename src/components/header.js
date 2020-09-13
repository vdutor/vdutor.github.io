import React from "react"

import { Link } from "gatsby"

import me from "../../assets/me2.jpg"


class Header extends React.Component {
  constructor() {
    super()
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const classDropdownMenu = 'navbar-collapse' + (this.state.collapsed ? ' collapse' : '')

    return (
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand" href="#page-top">
            <span className="d-block d-lg-none">Vincent Dutordoir</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded mx-auto mb-2"
                src={me}
                alt=""
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={this.toggleNavbar}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={classDropdownMenu} id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNavbar} to="#about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNavbar} to="#publications">
                  Publications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNavbar} to="#experience">
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNavbar} to="#education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={this.toggleNavbar} to="#blog">
                  Blog / Projects
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
