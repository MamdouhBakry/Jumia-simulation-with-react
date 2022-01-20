
import React, { Suspense } from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

import AddProduct from "../../Pages/AddProduct/AddProduct"
import AboutUs from "../AboutUs/AboutUs";
export default function SideBar() {
  return (
    <>

      <div className="col-">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a
                  href="/"
                  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </a>
                    <ul
                      className="collapse show nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link  to="addproduct" className="nav-link px-0">
                          <span className="d-none d-sm-inline">
                            Add Product
                          </span>
                        </Link >
                      </li>
                      <li>
                        <Link  to="aboutus" className="nav-link px-0">
                          <span className="d-none d-sm-inline">aboutus</span> 
                        </Link >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="aboutus" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Orders</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-people"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Customers</span>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
            <div className="col py-3">
                <Outlet />
             </div>
          </div>
        </div>
        </div>

    </>
   );
 }












 
