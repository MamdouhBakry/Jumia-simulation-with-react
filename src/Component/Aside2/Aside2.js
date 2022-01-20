import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Aside2(props) {
  const { t, i18n } = useTranslation();
    return (
        <div>

<div className="  ms-0">
  <div id="left">
    <div
      style={{
        backgroundColor: "white",
        marginTop: 15,
        padding: 8,
        paddingLeft: 20,
        boxShadow: "0 2px 5px 0 #ededed",
        borderRadius: 4
      }}
    >
      <a
        href="#product-details"
        className="text-dark"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <span>
          <i
            className="far fa-file-alt"
            style={{ fontSize: 20, marginRight: 10 }}
          />{" "}
          {t('ProductDetails')}
        </span>
      </a>
      <hr />
      <a
        href="#specifications"
        className="text-dark"
        style={{ textDecoration: "none" }}
      >
        <span>
          <i
            className="fas fa-list-ul"
            style={{ fontSize: 20, marginRight: 10 }}
          />{" "}
          {t('Specifications')}
        </span>
      </a>
      <hr />
      <a href className="text-dark" style={{ textDecoration: "none" }}>
        <span>
          <i
            className="far fa-comment-alt-exclamation"
            style={{ fontSize: 20, marginRight: 10 }}
          />{" "}
         {t("CustomerFeedback")}
        </span>
      </a>
    </div>
    <div
      className="row single-firstcol "
      style={{
        backgroundColor: "white",
        marginTop: 15,
        marginLeft: 1,
        padding: 8,
        width: "99.95%",
        paddingLeft: 20,
        boxShadow: "0 2px 5px 0 #ededed",
        borderRadius: 4
      }}
    >
      <div className="col-5">
        <img src={props.productImg} width="100%" alt />
      </div>
      <div className="col-7">
        <p className=" d-inline-block mb-2" style={{ fontSize: 11 }}>
          {props.name}
        </p>
        {/* <p class="d-inline-block   " ><i class="far fa-heart  "></i></p> */}
        <div className="single-start m-0"></div>
        <div className="fs-6 fw-bold">
          {props.price}
          <span
            className=" fw-lighter text-decoration-line-through d-block"
            style={{ fontSize: 12 }}
          >
            EGP 100{" "}
            <span
              className="badge "
              style={{ backgroundColor: "#feefde", color: "#f68b1e" }}
            >
              -65%
            </span>
          </span>
        </div>
      </div>
      <button
        style={{
          marginTop: 5,
          border: 0,
          borderRadius: 4,
          paddingBlock: 7,
          backgroundColor: "#f68b1e",
          color: "white",
          textAlign: "start"
        }}
      >
        <i className="far fa-shopping-cart " /> &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; Add to cart
      </button>
    </div>
  </div>
</div>

            
        </div>
    )
}
