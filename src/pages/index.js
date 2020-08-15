import React from "react"

import Header from "../components/header"
import About from "../components/about"

import "../styles/styles.scss"

const IndexPage = () => {
  return (
    <body id="page-top">
      <Header></Header>
      <div class="container-fluid p-0">
        <About></About>
      </div>
      {/* <div id="experiences">
        <h2>Experiences</h2>
        <p>I have a lot of experience</p>
      </div>
      <div id="publications">
        <h2>Publications</h2>
        <p>I have many publications and very good ones as well :)</p>
      </div> */}
    </body>
  )
}

export default IndexPage
