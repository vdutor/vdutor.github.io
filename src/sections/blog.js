import React from "react"

import { graphql, useStaticQuery, Link } from 'gatsby'

const BlogEntry = (props) => {
  return (
    <div className="card">
      <div className="card-header border-0">
        <img
          className="mx-auto d-block"
          src="https://lh3.googleusercontent.com/jq1i1nFKtLmxQI70ss58AfAwZi0Ef44ie62bthVndVBeHrPL04Ea46560tm-Pdki7phe"
          width="200px"
          alt="Card image cap"
        />
      </div>
      <div className="mx-2 card-block px-2">
        <h5 className="mt-3 card-title">{props.title}</h5>
        <p className="card-text">
          The goal of this project is to play Google's offline T-rex Dino game
          Deep Q-Learning algorithm and is implemented in TensorFlow (TF)
          &ndash; hence the name TF-rex ;).
        </p>
          <p className="card-text">
            <small className="text-muted">{props.date}</small>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-light mb-3"
            href=""
            role="button"
          >
            Read more
          </a>
      </div>
    </div>
  )
}


const Blog = () => {

    return (
      <section className="resume-section" id="blog">
        <div className="resume-section-content">
          <h2>Blog and Projects</h2>
          <p className="mb-5">A collection of random thought on papers, technology, software developement, etc. (Read: a graveyard for unfinished, too ambitious projects.)</p>
          <BlogEntry
            title="TF-rex: Playing Google's T-rex game with TensorFlow"
            date="September 2018"
          />
        </div>
      </section>
    )
}

export default Blog