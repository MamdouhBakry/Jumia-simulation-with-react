import React from 'react'
import img from "../../assets/imgs/Loader.gif"

export default function Loader() {
    return (
        <div className="text-center mt-2">
            <img width="80" src={img} alt="loader" />
        </div>
    )
}