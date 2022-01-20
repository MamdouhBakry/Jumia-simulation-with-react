import React from "react";
import { useTranslation } from "react-i18next";
import "./DelivaryMethod.scss";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import ShipmentDetails from "../ShipmentDetails/ShipmentDetails";

export default function DelivaryMethod() {
  const { t, i18n } = useTranslation();
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <div>
      <>
        {/* Hello world */}
        <div className="card my-3 pb-3  px-2">
          <div className="card-header bg-white fw-bolder ps-0">
            <CheckCircleRoundedIcon color="disabled" />
            <span style={{ fontSize: "14px", fontWeight: "500" }}>
              {" "}
              2.{t("DELIVERYMETHOD")}
            </span>
          </div>

          <div className="card-body px-4">
            <h5 className="card-title  fw-bolder fs-6 ">
              {t("orderDelivered")}
            </h5>
            <div className="form-check  pt-3 ">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label fw-bolder"
                htmlFor="flexRadioDefault1"
              >
                {t("DoorDelivery")}
              </label>
              <p className="DeliveredDes">
                Delivered between <span className="delevaryDays"> 17 Dec</span>{" "}
                and
                <span className="delevaryDays"> 21 Dec</span> . for{" "}
                <span className="cash">EGP {cartTotal + 20}</span>
              </p>
              <div className="border p-2 mb-2 fw-bolder doortxt ">
                <p>
                  *{" "}
                  {t(
                    "Living in Cairo, Giza or Alexandria, JUMIA PRIMO Members enjoy free delivery on all local orders and Jumia Food."
                  )}
                </p>
                <p>
                  {t(
                    "*Please make sure you have entered your home address, not your office one, so that we can deliver your order successfully"
                  )}
                </p>
              </div>
            </div>
            {/* <div className="form-check  pt-3 ps-5">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label fw-bolder" htmlFor="flexRadioDefault1">
            Pickup Station
            </label>
            <p>ready for pick up between Sunday 28 Nov and Tuesday 14 Dec with cheaper shipping fees.</p>
            <div className="border p-2 mb-2 fw-bolder doortxt ">
                <p>
                Select the nearest location to you, and enjoy Free shipping on your order when you use JumiaPay.
                </p>
            </div>
          </div> */}
            <div className="card  mt-4">
              <div className="card-header  bg-white fw-bolder ">
                <p style={{ fontSize: "13px" }}>{t("SHIPMENT DETAILS")}</p>
              </div>
              {items.map((item, index) => {
                return (
                  <div className="card mb-3">
                    <ShipmentDetails item={item} key={index} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" px-4">
            <p className="fw-light d-flex justify-content-between">
              <span>{t("Subtotal")} :</span>
              <span>
                {cartTotal} {t("nEGP")}
              </span>
            </p>
            <p className="fw-light  d-flex justify-content-between">
              <span> {t("Shipping amount")}</span>
              <span className="fw-bold ">
                {" "}
                {20}
                {t("nEGP")}
              </span>
            </p>
            <hr />

            <p className="fw-bold  d-flex justify-content-between">
              <span>{t("Total")} :</span>
              <span style={{ color: "#F17E0A" }}>
                {cartTotal + 20} {t("nEGP")}
              </span>
            </p>
          </div>

          <p className="text-center vouchertxt">
            {t("You will be able to add a voucher in the next step")}
          </p>

          <div className="mx-4">
            <Link to="/nextcheckout">
              <button
                type="button"
                class="btn proceedBtn text-white fw-bolder  "
              >
                {t("PROCEED TO NEXT STEP")}
              </button>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
