import React from 'react'

export default function TextCenter(props) {
    return (
        <>
            <div className="row ">
                <div className="d-flex pt-2 justify-content-center">
                    <p className="fw-bold fs-5">
                      {props.title}
                    </p>
                </div>
            </div>
            
        </>
    )
}
