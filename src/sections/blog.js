import React from "react"

import { graphql, useStaticQuery, Link } from 'gatsby'


const BlogEntry = (props) => {
  return (
    <div className="card mb-4">
      <div className="card-header border-0">
        <img
          className="mx-auto d-block"
          src={props.data.frontmatter.thumbnail}
          width="200px"
          height="200px"
          alt="Card image cap"
        />
      </div>
      <div className="mx-2 card-block px-2">
        <h5 className="mt-3 card-title">{props.data.frontmatter.title}</h5>
        <p className="card-text">{props.data.excerpt}</p>
        <p className="card-text">
          <small className="text-muted">{props.data.frontmatter.date}</small>
        </p>
        {props.data.frontmatter.url ? (
          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-light mb-3"
            href={props.data.frontmatter.url}
            role="button"
          >
            Read more
          </a>
        ) : null}
        {props.data.frontmatter.github ? (
          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-light mb-3 mx-2"
            href={props.data.frontmatter.github}
            role="button"
          >
            Github
          </a>
        ) : null}
      </div>
    </div>
  )
}


const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath:  {regex: "/blog/" }}) {
        edges {
          node {
            frontmatter {
              title
              thumbnail
              github
              url
              date
            }
            excerpt
          }
        }
      }
    }
  `)

    return (
      <section className="resume-section" id="blog">
        <div className="resume-section-content">
          <h2>Blog and Projects</h2>
          <p className="mb-5">A collection of random thought on papers, technology, software projects, ... Read: a graveyard for unfinished, too ambitious projects.</p>
          {data.allMarkdownRemark.edges.map(edge => {
            return <BlogEntry data={edge.node} />
          })}
        </div>
      </section>
    )
}

export default Blog