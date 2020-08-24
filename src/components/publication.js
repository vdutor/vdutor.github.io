import React from 'react'

import ClipboardJS from 'clipboard'
import { FaCopy, FaAdobe, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa"


function extractShortNameFromBooktitle(booktitle) {
  // Assumes the short name of a conference is inside paranthesis
  // Example: booktitle: International Conference on Machine Learning (ICML)
  // return: ICML
  return booktitle.match(/\(([^)]+)\)/)[1];
}

const Publication = (props) => {
    new ClipboardJS('.btn-cpy');
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
                  {item === "Vincent Dutordoir" ? <strong>{item}</strong> : item}
                </span>
              )
            })}
          </p>
          <a
            key={`paper_btn_${props.data.key}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
            href={props.data.url}
            role="button"
          >
            <FaExternalLinkAlt/> Paper
          </a>
          <a
            key={`pdf_btn_${props.data.key}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
            href={props.data.pdf}
            role="button"
          >
            <FaFilePdf/> PDF
          </a>
          <button
            key={`bibtex_btn_${props.data.key}`}
            type="button"
            className="btn btn-light btn-cpy"
            data-clipboard-text={props.data.raw}
            onClick={() => {
              // navigator.clipboard.writeText(props.data.raw)
              alert("Successfully copied bibtex to clipboard")
            }}
          >
            <FaCopy /> Copy Bibtex
          </button>
        </div>
      </div>
    )

}

export default Publication