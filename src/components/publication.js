import React from 'react'
import { Link } from 'gatsby'


function extractShortNameFromBooktitle(booktitle) {
  // Assumes the short name of a conference is inside paranthesis
  // Example: booktitle: International Conference on Machine Learning (ICML)
  // return: ICML
  return booktitle.match(/\(([^)]+)\)/)[1];
}

const Publication = (props) => {
    console.log(props.data.authors)
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-badge">
            {extractShortNameFromBooktitle(props.data.booktitle)}
          </div>
          <h5 className="card-title">{props.data.title}</h5>
          <p class="card-subtitle mb-2 text-muted">
            {props.data.booktitle}, {props.data.year}
          </p>
          <p className="card-text">
            {props.data.authors.map((item, index) => {
              return (
                <span key={`author_${props.data.key}_${index}`}>
                  {index ? ", " : ""}
                  {item == "Vincent Dutordoir" ? <strong>{item}</strong> : item}
                </span>
              )
            })}
          </p>
          <Link
            key={`paper_btn_${props.data.key}`}
            target="_blank"
            className="btn btn-light"
            to={props.data.url}
            role="button"
          >
            Paper
          </Link>
          <a
            key={`pdf_btn_${props.data.key}`}
            target="_blank"
            className="btn btn-light"
            href={props.data.pdf}
            role="button"
          >
            PDF
          </a>
          <button
            key={`bibtex_btn_${props.data.key}`}
            type="button"
            className="btn btn-light"
            onClick={() => {
              navigator.clipboard.writeText(props.data.raw)
              alert("Successfully copied bibtex to clipboard")
            }}
          >
            Copy Bibtex to Clipboard
          </button>
        </div>
      </div>
    )

}

export default Publication