import React from "react"

import About from "../sections/about"
import Blog from "../sections/blog"
import Education from "../sections/education"
import Experience from "../sections/experience"
import Header from "../components/header"
import Publications from "../sections/publications"

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
        <hr class="m-0" />
        <Blog></Blog>
      </div>
    </div>
  )
}

export default IndexPage