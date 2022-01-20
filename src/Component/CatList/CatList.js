import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./CatList.scss";

export default function CatList() {
  const { t, i18n } = useTranslation();
  // localhost: 5000/api/v1/products?categoryparent=Fashion
  const StoreCategory = (cat) => {
    // e.preventDefault();
    // console.log("eCat", e);
    const category = localStorage.setItem("category", cat);
  };

  return (
    <>
      {/* <div className="col-lg-2   rounded "> */}

      <div className="  d-none d-lg-block ">
        <Link to="/products/" className="aa">
          <i className="fas fa-apple-alt" style={{ padding: "4px" }}></i>
          <span className="ms-2" style={{ fontSize: "12px" }}>
            {" "}
            {t("suber")}
          </span>
        </Link>
        <br />

        <Link
          to="/products"
          className="aa"
          value="Fashion"
          onClick={(e) => StoreCategory("Fashion")}
        >
          <i className="fas fa-tshirt" style={{ padding: "4px" }}></i>
          <span style={{ fontSize: "12px" }}> {t("fasion")}</span>
        </Link>
        <br />

        <Link
          to="/products"
          className="aa"
          onClick={(e) => StoreCategory("Gaming")}
        >
          <i className="fas fa-gamepad" style={{ padding: "4px" }}></i>
          <span className="ms-1" style={{ fontSize: "12px" }}>
            {t("game")}
          </span>
        </Link>
        <br />

        <Link
          to="/products"
          className="aa"
          onClick={(e) => StoreCategory("smartPhone")}
        >
          <i className="fas fa-mobile-alt" style={{ padding: "4px" }}></i>
          <span className="ms-3" style={{ fontSize: "12px" }}>
            {" "}
            {t("phones")}
          </span>
        </Link>
        <br />

        <Link
          to="/products"
          className="aa"
          onClick={(e) => StoreCategory("Fashion")}
        >
          <i className="fas fa-feather-alt" style={{ padding: "4px" }}></i>
          <span className="ms-2" style={{ fontSize: "12px" }}>
            {t("healty")}
          </span>
        </Link>
        <br />

        <Link to="/products" className="aa" onClick={(e) => StoreCategory("")}>
          <i className="fas fa-laptop" style={{ padding: "4px" }}></i>
          <span className="ms-1" style={{ fontSize: "12px" }}>
            {t("electro")}
          </span>
        </Link>
        <br />
        <Link to="/products" className="aa" onClick={(e) => StoreCategory("")}>
          <i className="fas fa-child" style={{ padding: "4px" }}></i>
          <span className="ms-3" style={{ fontSize: "12px" }}>
            {t("baby")}
          </span>
        </Link>
        <br />

        <Link to="/category" className="aa" onClick={(e) => StoreCategory("")}>
          <i className="fas fa-home" style={{ padding: "4px" }}></i>
          <span className="ms-2" style={{ fontSize: "12px" }}>
            {t("nhome")}
          </span>
        </Link>
        <br />

        <Link to="/products" className="aa" onClick={(e) => StoreCategory("")}>
          <i className="fas fa-desktop" style={{ padding: "4px" }}></i>
          <span className="ms-1" style={{ fontSize: "12px" }}>
            {" "}
            {t("computer")}
          </span>
        </Link>
        <br />

        <Link to="/products" className="aa" onClick={(e) => StoreCategory("")}>
          <i className="fas fa-dumbbell" style={{ padding: "4px" }}></i>
          <span className="ms-1" style={{ fontSize: "12px" }}>
            {t("sport")}
          </span>
        </Link>
        <br />

        <Link to="/products" className="aa" onClick={(e) => StoreCategory("")}>
          <i className="fas fa-car" style={{ padding: "4px" }}></i>
          <span className="ms-1" style={{ fontSize: "12px" }}>
            {" "}
            {t("outomobile")}
          </span>
        </Link>
        <br />

        <Link to="/products" className="aa" onClick={(e) => StoreCategory("")}>
          <i className="fas fa-ellipsis-h" style={{ padding: "4px" }}></i>
          <span className="ms-1" style={{ fontSize: "12px" }}>
            {" "}
            {t("other")}
          </span>
        </Link>
        <br />
      </div>

      {/* test */}
      {/* <ul className="list-group border-0 ">
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-apple-alt" aria-hidden="true" />
                    <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                        Supermarket
                    </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-tshirt" />{" "}
                        <NavLink to="/products" className="nav-link text-dark d-inline-block fs-6 fw-light" >
                            Fashion
                        </NavLink>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-feather-alt" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Health &amp; Beauty
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-child" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Baby Products
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-home" aria-hidden="true" />
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Home &amp; Office
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-laptop" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Electronics
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-desktop" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Computing
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-dumbbell" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Sporting Goods
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-headset" />
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Gaming
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-car" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Automobile
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-ellipsis-h" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Other categories
                        </a>
                    </div>
                </li>
            </ul> */}
      {/* test */}
    </>
  );
}

//   <li className=" row list-group-item d-flex justify-content-center align-item-center align-items-start border-0  p-0">
//                     <i className="fas fa-apple-alt mt-2 ms-2  col-2" aria-hidden="true" />
//                         <a className=" col-8 nav-link text-dark mt-0 fs-6 fw-light" href="#">
//                             Supermarket
//                         </a>
//                 </li>
//                 <li className=" row list-group-item d-flex justify-content-center align-item-center align-items-start border-0  p-0">
//                     <i className="fas fa-apple-alt  mt-2 ms-2  col-2" aria-hidden="true" />
//                         <a className=" col-8 nav-link text-dark fs-6 fw-light" href="#">
//                             Supermarket
//                         </a>
//                 </li>
//                 <li className=" row list-group-item d-flex justify-content-center align-item-center align-items-start border-0  p-0">
//                     <i className="fas fa-apple-alt mt-2  ms-2  col-2" aria-hidden="true" />
//                         <a className=" col-8 nav-link text-dark fs-6 fw-light" href="#">
//                             Supermarket
//                         </a>
//                 </li>
