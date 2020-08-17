import React from 'react'

// const Modal = () => {
//     return (
//       <div
//         class="modal fade"
//         id="exampleModalCenter"
//         tabindex="-1"
//         role="dialog"
//         aria-labelledby="exampleModalCenterTitle"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-dialog-centered" role="document">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLongTitle">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 class="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div class="modal-body">...</div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" class="btn btn-primary">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
// }

const Publication = (props) => {
    console.log(props.data.authors)
    return (
      <div className="card">
        {/* <img className="card-img-top" width='50' src="https://cdn2.iconfinder.com/data/icons/toilet/520/10-256.png" alt="Card image cap"></img> */}
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">
            {props.data.authors.map((item, index) => {
              return (
                <span key={`author_${index}`}>
                  {(index ? ", " : "") +
                    (item == "Vincent Dutordoir" ? item : item)}
                </span>
              )
            })}
          </p>
          <a class="btn btn-light" href={props.data.url} role="button">
            PDF
          </a>
          <button type="button" class="btn btn-light">
            Bibtex
          </button>
        </div>
      </div>
    )

}

export default Publication