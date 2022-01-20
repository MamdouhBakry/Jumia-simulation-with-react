import React, { useEffect, useState } from "react";
import "./ProductDetailsAndRating.scss";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";

import r1 from "../../assets/imgs/Rate1.PNG";
import r2 from "../../assets/imgs/Rate2.PNG";
import r3 from "../../assets/imgs/Rate3.PNG";
import r4 from "../../assets/imgs/Rate4.PNG";
import r5 from "../../assets/imgs/Rate5.PNG";
export default function ProductDetailsAndRating(props) {
  const { t, i18n } = useTranslation();
  const {
    addItem,
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const [cartItemNum, setCartItemNum] = useState(totalUniqueItems);
  const [Buttonflag, setButtonflag] = useState(false);
  const [flag, setFlag] = useState(true);

  const hide = () => {
    setFlag(false);
  };

  const disableFunc = () => {
    setButtonflag(true);
  };

  const incCurrentItemQty = () => {
    items.map((item, index) => {
      if (item.id === props.product.id) {
        if (item.quantity >= 5 || item.quantity === props.product.quantity) {
          disableFunc();
        } else {
          updateItemQuantity(item.id, item.quantity + 1);
        }
      }
    });
  };
  const decCurrentItemQty = () => {
    items.map((item, index) => {
      if (item.id === props.product.id) {
        if (item.quantity === 1) {
          // document.getElementById("add").style.visibility = "visible";
          // document.getElementById("IncAndDecQty").style.visibility = "hidden";
          setFlag(true);
        }
        if (item.quantity === 5 || item.quantity === props.product.quantity) {
          setButtonflag(false);
        }
        updateItemQuantity(item.id, item.quantity - 1);
      }
    });
  };
  const additemToCart = () => {
    hide();
    addItem(props.product);
    // document.getElementById("IncAndDecQty").style.visibility = "visible";
    // document.getElementById("add").style.visibility = "hidden";
  };

  return (
    <>
      <p className="fs-5 d-inline-block mb-2">{props.product?.name}</p>
      {/* <p class="d-inline-block   " ><i class="far fa-heart  "></i></p> */}
      <div className="single-start m-0">
        {/* <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" /> */}
        {props.product?.averageRating === 1 ? (
          <img className="d-block" src={r1} />
        ) : props.product?.averageRating === 2 ? (
          <img className="d-block" src={r2} />
        ) : props.product?.averageRating === 3 ? (
          <img className="d-block" src={r3} />
        ) : props.product?.averageRating === 4 ? (
          <img className="d-block" src={r4} />
        ) : props.product?.averageRating === 5 ? (
          <img className="d-block" src={r5} />
        ) : (
          <div className="d-block">
            <br />
          </div>
        )}
        <p className="d-inline-block">
          <a className="ps-2" style={{ textDecoration: "none" }}>
            Number of reviews ({props.product?.numOfReviews})
          </a>
        </p>
        <hr className="m-0" />
      </div>
      <div className="fs-4 fw-bold">
        {props.product?.price} EGP
        <span className="fs-6 fw-lighter text-decoration-line-through d-block">
          {props?.discountedPrice}{" "}
          <span
            className="badge "
            style={{ backgroundColor: "#feefde", color: "#f68b1e" }}
          >
            {props?.discountPer}
          </span>
        </span>
        <span className="fw-normal" style={{ fontSize: 12 }}>
          {props?.shippingPrice}
        </span>
        <div className="mt-2">
          {!flag && (
            <div
              style={{ width: "15rem" }}
              id="IncAndDecQty"
              className="IncAndDecQty d-flex justify-content-between"
            >
              <div href className="me-2">
                <button
                  onClick={() => decCurrentItemQty()}
                  className="btn btn-transparent border-0"
                >
                  <i
                    className="fas fa-minus-square"
                    style={{
                      color: "#f68b1e",
                      fontSize: 35,
                      fill: "#f68b1e",
                    }}
                  />
                </button>
              </div>
              <span className="mt-2" id="count">
                {/* <div style={{ fontSize: 15, display: "inline-block" }}> </div> */}

                {items.map((item, index) => {
                  if (item.id === props.product.id) {
                    return item?.quantity;
                  }
                })}
              </span>
              <div className="ms-2 d-inline-block">
                <button
                  onClick={() => incCurrentItemQty()}
                  className="btn btn-white border-0"
                >
                  <i
                    className="fas fa-plus-square"
                    style={{
                      color: "#f68b1e",
                      fontSize: 35,
                      fill: "#f68b1e",
                    }}
                  />
                </button>
              </div>
            </div>
          )}
          {flag && (
            <button
              id="add"
              onClick={() => additemToCart()}
              style={{ width: "15rem", backgroundColor: "#f68b1e" }}
              className="add btn btn-warning mx-auto mb-1 text-white mb-2 p-2"
            >
              {t("ADDTOCART")}
            </button>
          )}
          {items.map((item) => {
            if (item.id === props.product.id) {
              if (item.quantity > 0) {
                setTimeout(() => {
                  setFlag(false);
                }, 100);
              }
            }
          })}
        </div>
        <div>
          <span style={{ fontSize: 13, fontWeight: 500 }}>
            {props?.quantity} (item(s) added) {props.product.quantity}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
}
