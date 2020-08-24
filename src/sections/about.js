import React from 'react'

import { graphql, useStaticQuery } from "gatsby"

import {FaLinkedinIn, FaTwitter, FaGithub} from 'react-icons/fa'


const About = () => {
    const data = useStaticQuery(graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
          html
        }
        site {
          siteMetadata {
            twitter
            github
            linkedin
          }
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
          <div style={{marginBottom: "2rem"}}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
          {/* </p> */}
          <div className="social-icons">
            <a className="social-icon" href={data.site.siteMetadata.github}>
              <FaGithub/>
            </a>
            <a className="social-icon" href={data.site.siteMetadata.twitter}>
              <FaTwitter/>
            </a>
            <a className="social-icon" href={data.site.siteMetadata.linkedin}>
              <FaLinkedinIn/>
            </a>
          </div>
        </div>
      </section>
    )
}

export default About


