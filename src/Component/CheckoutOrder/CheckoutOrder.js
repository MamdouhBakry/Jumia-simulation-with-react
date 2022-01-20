import React from "react";

import "./CheckOrder.scss";
import { useCart } from "react-use-cart";
import OrderSummary from "../OrderSummary/OrderSummary";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function CheckoutOrder() {
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
  console.log(items);

  return (
    <div>
      <h6 style={{ "font-size": "14px", color: "#ABABAB" }}>
        {t("ORDER SUMMARY")}
      </h6>
      <div className="card  px-2">
        <p
          className=" card-header bg-white fw-bold ps-0"
          style={{ "font-size": "14px", fontWeight: "500" }}
        >
          {t("YOUR ORDER")}
          <span>
            ({totalItems} {t("item")})
          </span>
        </p>
        <div></div>
        {items.map((item, index) => {
          return (
            <div className="card mb-2">
              <OrderSummary item={item} />
            </div>
          );
        })}

        <div className="border-bottom border-top p-1  ">
          <p
            className="d-flex justify-content-between"
            style={{ "font-size": "14px" }}
          >
            <span>{t("Subtotal")}:</span>
            <span className="">
              {cartTotal}
              {t("nEGP")}
            </span>
          </p>
          <p
            className="d-flex justify-content-between"
            style={{ "font-size": "14px" }}
          >
            <span>{t("Shipping amount")}</span>
            <span>
              {20}
              {t("nEGP")}
            </span>
          </p>
        </div>

        <div className="fw-bolder d-flex justify-content-between p-1">
          <span>{t("Total")} :</span>
          <span className=" modfybtn">
            {cartTotal + 20} {t("nEGP")}
          </span>
        </div>

        <div className="text-center ">
          <Link to="/cart">
            <button className="text-center btn  p-2 fw-bolder modfybtn ">
              {t("MODIFY CART")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
