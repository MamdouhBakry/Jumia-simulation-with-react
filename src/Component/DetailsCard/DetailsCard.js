import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./DetailCard.scss";

export default function DetailsCard(props) {
  console.log("user info", props);
  return (
    <>
      <div className="col-md-6 ">
        <div className="card">
          <div className="card-body">
            <h6 className="card-title">{props.header}</h6>
            <hr />
            <p className="card-text">{props.main}</p>
            <p className="text-secondary">{props.secondary}</p>
            <Link
              to="/updatePassword"
              className="card-link text-decoration-none"
              style={{ color: "#f68b1e", fontWeight: 500 }}
            >
              {props.orangePart}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
