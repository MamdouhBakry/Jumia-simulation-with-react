import React from "react";

export default function ImageContainer(props) {
  return (
    <>
      <div style={{ backgroundColor: props.color }} id="ads">    
        <img className={props.wid} src={props.img} />
      </div>
    </>
  );
}
