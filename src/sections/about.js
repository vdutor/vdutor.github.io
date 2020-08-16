import React from 'react'

import { graphql, useStaticQuery } from "gatsby"


const About = () => {
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              html
            }
          }
        }
      }
    `)


    return (
      <section class="resume-section" id="about">
        <div class="resume-section-content">
          <h1 class="mb-0">
            Vincent
            <span class="text-primary" style={{ "margin-left": "20px" }}>
              Dutordoir
            </span>
          </h1>
          <div class="subheading mb-5">
            Senior Machine Learning Researcher in Probabilistic Modelling
          </div>
          <p class="lead mb-5">
          <div
            dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}
          />
          </p>
          <div class="social-icons">
            <a class="social-icon" href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="social-icon" href="#">
              <i class="fab fa-github"></i>
            </a>
            <a class="social-icon" href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="social-icon" href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    )
}

export default About


