import React from 'react'

import { Link, graphql, useStaticQuery } from "gatsby"


const About = () => {
    const data = useStaticQuery(graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
          html
        }
      }
    `)

    return (
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Vincent Dutordoir
            {/* <span className="text-primary" style={{ marginLeft: "20px" }}> */}
              {/* Dutordoir */}
            {/* </span> */}
          </h1>
          <div className="subheading mb-5">
            Senior Machine Learning Researcher in Probabilistic Modelling
          </div>
          {/* <p className="lead mb-5"> */}
          <div
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          {/* </p> */}
          <div className="social-icons">
            <Link className="social-icon" to="#">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link className="social-icon" to="#">
              <i className="fab fa-github"></i>
            </Link>
            {/* <a className="social-icon" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="social-icon" href="#">
              <i className="fab fa-facebook-f"></i>
            </a> */}
          </div>
        </div>
      </section>
    )
}

export default About


