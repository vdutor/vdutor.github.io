import React from "react"

import Header from "../components/header"
import About from "../sections/about"
import Publications from "../sections/publications"
import Experience from "../sections/experience"
import Education from "../sections/education"

import "../styles/styles.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}


const IndexPage = () => {
  return (
    <div id="page-top">
      <Header></Header>
      <div className="container p-0">
        <About></About>
        <hr class="m-0" />
        <Publications></Publications>
        <hr class="m-0" />
        <Experience></Experience>
        <hr class="m-0" />
        <Education></Education>
      </div>
    </div>
  )
}

export default IndexPage