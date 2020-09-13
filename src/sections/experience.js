import React from 'react'

import { Link } from "gatsby"

const Experience = () => {
    return (
      <section className="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h4 class="mb-0">Senior Machine Learning Researcher</h4>
              <div class="subheading mb-3">PROWLER.io</div>
              <p>
                As part of the probabilistic modelling team, I study Gaussian
                processes and work on improving approximate Bayesian inference
                in terms of robustness and scalability. My work involves doing
                basic research (see <Link to="#publications">Publications</Link>
                ), but also has an applied context to it, e.g. volatility
                prediction of financial markts or demand planning in supply
                chain networks. With my background in software development, I'm
                particualy interested in building well-designed machine learning
                frameworks that can be used for basic research and but also for
                developing customer solutions.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">September 2017 - Present</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h4 class="mb-0">Software Developer (internship)</h4>
              <div class="subheading mb-3">In The Pocket</div>
              <p>
                During the summer of 2015, I interned at "In the Pocket", a
                leading Belgian company in IoT, VR and software development.
                During the internship, I co-developed an Android App &ndash;
                "Citie" &ndash; which is reaching 10.000 downloads. The app
                lets you collect loyality points and rewards by shopping in
                affiliated malls.
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
            href="https://drive.google.com/file/d/1AuKgKV-Si52LyYL0in8zPLGsFLt1XyVa/view?usp=sharing"
          >
            Download full CV
          </a>
        </div>
        </div>
      </section>
    )
}

export default Experience