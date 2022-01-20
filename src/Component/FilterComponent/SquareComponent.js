import React from "react";

export default function SquareComponent(props) {
  return (
    <>
      {props.textList.map((item) => {
        return (
          <a
            href="#"
            className="Filter-img d-flex m-1 text-decoration-none text-dark"
          >
            <img className="hoverimg rounded-circle" src={props.img} />
            <p className="m-1">{item}</p>
          </a>
        );
      })}
    </>
  );
}
