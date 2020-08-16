import React from "react"

import Header from "../components/header"
import About from "../sections/about"
import Publications from "../sections/publications"

import "../styles/styles.scss"

const IndexPage = () => {
  return (
    <div id="page-top">
      <Header></Header>
      <div className="container-fluid p-0">
        <About></About>
        <Publications></Publications>
      </div>
    </div>
  )
}

export default IndexPage
