import React from "react";
import { useTranslation } from "react-i18next";

export default function ShipmentDetails(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="card-body">
        <p className="card-title fw-bolder DeliveredDes ">
          Shipment {props.index}
        </p>
        <p className="card-text DeliveredDes">
          {props.item.quantity}x {props.item.name}
        </p>
        <p className="DeliveredDes">
          Delivered between <span className="delevaryDays"> 17 Dec</span> and
          <span className="delevaryDays"> 21 Dec</span>{" "}
        </p>
      </div>
    </>
  );
}
