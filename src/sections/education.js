import React from 'react'

const Education = () => {
    return (
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="mb-0">University of Cambridge</h4>
              <div className="subheading mb-3">
                Ph.D. in Probabilistic Machine Learning
              </div>
              <div>
                Supervisor: prof. Zoubin Ghahramani <br />
                Topics: (Deep) Gaussian processes &ndash; Approximate Bayesian
                inference &ndash; Bayesian optimisation
                {/* Model-based
                Reinformcement Learning */}
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">October 2020 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="mb-0">University of Ghent (Belgium)</h4>
              <div className="subheading mb-3">
                M. Sc. in Computer Science Engineering
              </div>
              <div>
                Focus on signal processing (SP) and machine learning (ML) <br />
                Master thesis:{" "}
                <a href="https://lib.ugent.be/fulltxt/RUG01/002/367/115/RUG01-002367115_2017_0001_AC.pdf">
                  Deep Gaussian processes for surrogate modelling of
                  non-stationary surfaces
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2015 - July 2017</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="mb-0">University of Ghent (Belgium)</h4>
              <div className="subheading mb-3">
                B. Sc. in Computer Science Engineering
              </div>
              <div>
                {" "}
                Focus on math, information and communation theory, signal
                processing, and software developement.{" "}
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2012 - July 2015</span>
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

export default Education