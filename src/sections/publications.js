import React from "react"

import { graphql, useStaticQuery, Link } from 'gatsby'


import Publication from "../components/publication"



const Publications = () => {

    const data = useStaticQuery(graphql`
    query {
        allReference {
        edges {
            node {
            key
            title
            authors
            author
            booktitle
            year
            raw
            pdf
            url
            }
        }
        }
    }
    `)

    return (
      <section className="resume-section" id="publications">
        <div className="resume-section-content">
          <h2>Selected Publications</h2>
          {data.allReference.edges.map(edge => {
            return <Publication data={edge.node}></Publication>
          })}
          <div class="text-center">
            <a
              target="_blank"
              className="btn btn-outline-secondary"
              role="button"
              href="https://scholar.google.com/citations?user=JXzAGfoAAAAJ&hl=en"
            >
              All publications (Google scholar)
            </a>
          </div>
        </div>
      </section>
    )
}

export default Publications