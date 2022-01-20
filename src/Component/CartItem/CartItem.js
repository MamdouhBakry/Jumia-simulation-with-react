import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import image from "../../assets/imgs/jumia-brand.webp";
import { useTranslation } from "react-i18next";
import "./CartItem.scss";

export default function CartItem(props) {
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

  const { t, i18n } = useTranslation();

  const handleQty = (e) => {
    updateItemQuantity(props.item.id, e.target.value);
  };

  const lang = localStorage.getItem("lang") || "en";

  return (
    <>
      <div className="row mb-3 p-3">
        <div className="col-6 border-end">
          <div className="d-flex">
            <img
              style={{ width: "5rem", height: "5rem" }}
              src={props.item.image}
            />
            <div className="">
              {/* <p>Seller: Bazicz</p> */}
              <p>{props.item.name}</p>
              <div className="d-flex">
                <span style={{ cursor: "pointer", color: "#f68b1e" }}>
                  <i
                    className="far fa-heart"
                    style={{ cursor: "pointer", color: "#f68b1e" }}
                  />{" "}
                  {t("MOVETOSAVEDITEMS")}
                </span>
                <span
                  onClick={() => removeItem(props.item.id)}
                  className="ps-4 "
                  style={{ cursor: "pointer", color: "#f68b1e" }}
                >
                  <i
                    className="fas fa-trash me-2 primarycolor"
                    style={{ cursor: "pointer", color: "#f68b1e" }}
                  />{" "}
                  {t("REMOVE")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 border-end mt-2">
          <select
            onChange={handleQty}
            value={props.item.quantity}
            className="form-select w-100"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="col-2 border-end mt-2 text-center">
          {" "}
          {props.item.price} {t("EGP")}
        </div>
        <div className="col-2 mt-2 text-center" style={{ color: "#f68b1e" }}>
          {props.item.price * props.item.quantity}
        </div>
      </div>
    </>
  );
}
