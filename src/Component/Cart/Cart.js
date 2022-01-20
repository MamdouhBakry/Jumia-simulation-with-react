import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  getCartItems,
} from "../../Store/actions/OrdrActions/orderActions";
import "./Cart.scss";
import image1 from "../../assets/imgs/ads.jpeg";
import CartItem from "../CartItem/CartItem";
import Footer2 from "../Footer2/Footer2";
import ImageContainer from "../ImageContainer/ImageContainer";
import MiddeleHeader from "../Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../Headers/LowerHeader/LowerHeader";

import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Cart(props) {
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

  const token = localStorage.getItem("token");
  let user = JSON.parse(localStorage.getItem("user"));

  console.log("items from addItem function", items);
  const orders = useSelector((state) => state.Orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  console.log("ooooorderssss", orders);
  // {
  //   orders.orderItems.map((item, index) => {
  //     return (
  //       <div className="col-md-2 mb-4" key={index}>
  //         <ProductCard product={item} />
  //         {/* {console.log("item", item)} */}
  //       </div>
  //     );
  //   })
  // }
  const lang = localStorage.getItem("lang") || "en";
  return (
    <>
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />
      <section className="cart bg-light">
        <div className="container mb-3">
          <h3>
            {t("cart")} ({totalUniqueItems}
            {t("nitems")})
          </h3>
          {/* frist row titles */}
          <div className="row  title" style={{ color: "#8E8EAC" }}>
            <div className="col-6 ">
              <span>{t("Item")}</span>
            </div>
            <div className="col-2 text-center">
              <span> {t("QUANTITY")}</span>
            </div>
            <div className="col-2 text-center">
              <span>{t("UNITPRICE")}</span>
            </div>
            <div className="col-2 text-center">
              <span> {t("SUBTOTAL")}</span>
            </div>
          </div>
          {/* sechond rpw cart description */}

          {items.map((item, index) => {
            return (
              <div className="card mb-3">
                <CartItem item={item} key={index} />
              </div>
            );
          })}

          {/* <div className="card mb-3">
      <CartItem />
    </div>
    <div className="card mb-3">
      <CartItem />
    </div> */}
          {/* third row total price */}
          <div className="row m-3 text-end">
            <p style={{ color: "#f68b1e", fontWeight: "bold" }}>
              {t("nTotal")}: {t("PRICSEGP")} {cartTotal}
            </p>
            <p>{t("Shippingfeesnot")}</p>
          </div>
        </div>
      </section>

      {/* shopping &  */}
      <section>
        <div className="container-fluid   bg-white">
          <div className="row  p-4">
            <div className="text-end">
              <Link to="/">
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#FF9800",
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                  type="button"
                  className="btn  w-25 me-5  shadow rounded"
                >
                  {t("ContinueShopping")}
                </button>
              </Link>

              {token ? (
                <Link to="/checkout">
                  <button
                    style={{
                      backgroundColor: "#FF9800",
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    type="button"
                    className="btn  w-25 shadow rounded ms-2"
                  >
                    {t("ContinuetoCheckout")}
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    style={{
                      backgroundColor: "#FF9800",
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    type="button"
                    className="btn  w-25 shadow rounded"
                  >
                    {t("ContinuetoCheckout")}
                  </button>
                </Link>
              )}

              {/* {token ? (
                <Link to="/checkout">
                  <button
                    style={{
                      backgroundColor: "#FF9800",
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    type="button"
                    className="btn  w-25 shadow rounded"
                  >
                    Continue to Checkout
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    style={{
                      backgroundColor: "#FF9800",
                      color: "#fff",
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                    type="button"
                    className="btn  w-25 shadow rounded"
                  >
                    متابعة الشراء
                  </button>
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </section>

      <Footer2 />
    </>
  );
}
