import React from 'react'

const Education = () => {
    return (
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h4 className="mb-0">University of Cambridge</h4>
              <div className="subheading mb-3">Ph.D. in Engineering</div>
              <div>Probabilistic machine learning // zoubin</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">October 2020 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h4 className="mb-0">University of Ghent (Belgium)</h4>
              <div className="subheading mb-3">
                M. Sc. in Computer Science Engineering
              </div>
              <div> Text </div>
              <p>Summa Cum Laude</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2015 - July 2017</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h4 className="mb-0">National University of Taiwan</h4>
              <div className="subheading mb-3">
                Exchange program
              </div>
              <div> Text </div>
              <p>Cum Laude</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2016 - January 2017</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h4 className="mb-0">University of Ghent (Belgium)</h4>
              <div className="subheading mb-3">
                B. Sc. in Computer Science Engineering
              </div>
              <div> Text </div>
              <p>Cum Laude</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">September 2012 - July 2015</span>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Education