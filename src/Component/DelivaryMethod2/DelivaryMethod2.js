import React from "react";
import { useTranslation } from "react-i18next";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export default function DelivaryMethod2() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="card mt-3">
        <div className="d-flex justify-content-between ps-2">
          <div className="d-flex">
            <CheckCircleRoundedIcon style={{ color: "#a3cf62" }} />
            <p className="fw-bold ms-1">2.{t("DELIVERYMETHOD")}</p>
          </div>
          {/* <div className="  me-0">
            <button
              type="button"
              className="btn chngbtn mx-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              CHANGE
            </button>
          </div> */}
        </div>
        <hr />
        <div className="ps-4">
          <p className="fw-bold">{t("DoorDelivery")}</p>
          <p>
            <span className="text-muted">Delivered between</span> Thursday 9 Dec{" "}
            <span className="text-muted">and</span> Thursday 16 Dec.{" "}
            <span className="text-muted">for </span>
            {/* <span className="text-warning">EGP 114</span> */}
          </p>
        </div>
      </div>
    </>
  );
}
