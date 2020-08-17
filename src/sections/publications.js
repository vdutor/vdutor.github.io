import React from "react"

import { graphql, useStaticQuery } from 'gatsby'


import Publication from "../components/publication"



const Publications = () => {

    const data = useStaticQuery(graphql`
    query {
        allReference {
        edges {
            node {
            entry_type
            title
            authors
            author
            raw
            pdf
            url
            thumbnail
            abstract
            }
        }
        }
    }
    `)

    console.log(JSON.stringify(data))
    return (
      <section className="resume-section" id="publications">
        <div className="resume-section-content">
          <h2>Publications</h2>
          {data.allReference.edges.map(edge => {
            return <Publication data={edge.node}></Publication>
          })}
          </div>
      </section>
    )
}

export default Publications