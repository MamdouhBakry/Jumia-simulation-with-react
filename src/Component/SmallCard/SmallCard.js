import React from 'react'
import "./SmallCard.scss"


export default function SmallCard(props) {
    return (
        <>
           {/* <div className="row  d-flex w-25"> */}
  <a href="" className="col me-2  card d-flex flex-row anchor text-dark  p-1">
    <img
      src={props.pic}
      alt
      className=" col- d-inline-block py-1 me-3"
      style={{ width: 50 }}
    />
    <span className="col-  d-inline-block mt-3 fw-bold fs-6 ">
      {props.statement}
    </span>
  </a>
  

  
{/* </div> */}



        </>

    )
}
