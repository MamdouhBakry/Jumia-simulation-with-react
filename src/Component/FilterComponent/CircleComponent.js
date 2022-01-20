import React from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../network";

export default function CircleComponent(props) {
  let lang = localStorage.getItem("lang")

//   const averageRating = async (id) => {
//     // console.log("id averageRating", id);
//     const res = await axiosInstance.get(`/products/${lang}?numericFilters=averageRating=${id}`);
//     props.setratingproducts(res.data);
//     // console.log("res averageRating", res)
//   }
//   onClick = {()=> averageRating()
// }
  // localhost: 5000 / api / v1 / products / en ? numericFilters = averageRating = 5
  return (
    <>
      {props.imgList.map((item, index) => {
        return (
          <Link to="/products" className="Filter-img d-flex mx text-decoration-none" onClick={()=>props.setratingproducts(index + 1)} id={index + 1} >
            <img className="hoverimg rounded-circle" src={props.img}  />
            <img src={item} />
          </Link>
        );
      })}
    </>
  );
}
