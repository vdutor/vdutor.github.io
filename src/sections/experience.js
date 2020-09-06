import React from 'react'

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
                in terms of robustness and scalability. In particular, I focus
                on deep Gaussian processes and lead the development of an
                internal software library for Bayesian deep learning built on
                top of Keras and TensorFlow. 
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
                During the internship, I co-developed an Android App,
                "Citie", which is reaching 10.000 downloads :). The app lets you
                collect points and eventually rewards by shopping in associated
                malls in Belgian cities.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">Summer 2015</span>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Experience