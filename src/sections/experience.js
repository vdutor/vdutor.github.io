import React from 'react'

import { Link, useStaticQuery, graphql } from "gatsby"

const Experience = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            cvUrl
          }
        }
      }
    `)

    return (
      <section className="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h4 class="mb-0">Senior Machine Learning Researcher</h4>
              <div class="subheading mb-3">Secondmind (formerly PROWLER.io)</div>
              <p>
                As part of the probabilistic modelling team, I study Gaussian
                processes and work on improving approximate Bayesian inference
                in terms of robustness and scalability. My work involves doing
                basic research (see <Link to="#publications">Publications</Link>
                ), but also has an applied context to it, e.g. volatility
                prediction of financial markets or demand planning in supply
                chain networks. With my background in software engineering, I'm
                particularly interested in building well-designed machine learning
                frameworks that can be used for basic research, but also for
                developing customer solutions.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">September 2017 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="mb-0">National University of Taiwan</h4>
              <div className="subheading mb-3">Visiting researcher</div>
              <div>
                A 6-month exchange program to the{" "}
                <a href="http://ai.robo.ntu.edu.tw/en/group.php?id=2">
                  Advanced Robotics Group
                </a>{" "}
                to work on machine learning for robotics.
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                September 2016 - January 2017
              </span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h4 class="mb-0">Software Developer (internship)</h4>
              <div class="subheading mb-3">In The Pocket</div>
              <p>
                During the summer of 2015, I interned at "In the Pocket", a
                leading Belgian company in IoT, VR and software development.
                During the internship, I co-developed an Android App (10k+ downloads). The app
                lets you collect loyality points and rewards by shopping in
                affiliated shops.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">Summer 2015</span>
            </div>
          </div>
        <div class="text-center">
          <a
            target="_blank"
            className="btn btn-outline-secondary"
            role="button"
            href={data.site.siteMetadata.cvUrl}
          >
            Download full CV
          </a>
        </div>
        </div>
      </section>
    )
}

export default Experience