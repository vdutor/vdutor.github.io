import React from "react"

import Header from "../components/header"
import About from "../sections/about"

import "../styles/styles.scss"

const IndexPage = () => {
  return (
    <body id="page-top">
      <Header></Header>
      <div class="container-fluid p-0">
        <About></About>
      </div>
    </body>
  )
}

export default IndexPage
