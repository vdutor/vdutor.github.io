import React from 'react'

const Experience = () => {
    return (
      <section className="resume-section" id="experience">
        <div class="resume-section-content">
          <h2 class="mb-5">Experience</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Senior Machine Learning Researcher</h3>
              <div class="subheading mb-3">PROWLER.io</div>
              <p>
                At Prowler.io I'm part of the awesome probabilistic modeling
                team, led by James Hensman. We mainly work on large scale Cox
                Processes, denisty estimation, model-based Reinforcement
                Learning and our favorite (opensource) toolbox GPflow.
              </p>
            </div>
            <div class="flex-shrink-0">
              <span class="text-primary">September 2017 - Present</span>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="flex-grow-1">
              <h3 class="mb-0">Intern Android Developer</h3>
              <div class="subheading mb-3">In The Pocket</div>
              <p>
                During the summer of 2015 I interned at "In the Pocket", a
                leading Belgian company in IoT, VR and software development.
                During the internship I co-developed an Android App, called
                Citie, which is reaching 10.000 downloads :). The app lets you
                collect points and eventually rewards by shopping in associated
                malls in Belgian cities. Besides this I researched the
                implications on apps when the smartphone was updated from
                Lollopop to Marshmallow Android OS.
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