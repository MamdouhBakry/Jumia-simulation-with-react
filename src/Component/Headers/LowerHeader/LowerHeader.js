import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "./LowerHeader.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../Store/actions/authen/authen";
import { useCart } from "react-use-cart";
import { getCartItems } from "../../../Store/actions/OrdrActions/orderActions";
import SearchBar from "../../Search/Search";
import BasicPopover from "../../CategoryPopoverList/CategoryPopoverList";

import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

import JumiaLogo from "../../../assets/imgs/Jumia.PNG";

export default function LowerHeader(props) {
  // test search
  const [Search, setSearch] = useState();
  const handleFormChange = (e) => {
    // console.log(e.target.value, e.target.name);
    setSearch(e.target.value);
  };
  const handleFormSubmit = () => {
    // console.log(Search);
    localStorage.setItem("SearchValue", Search);
  };

  // test search

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

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    var element = document.getElementById("navBarFixed");
    var height = window.scrollY;
    if (height >= 111) {
      element.style.position = "sticky";
      element.style.top = 0;
      element.style.left = 0;
      element.style.width = "100%";
    }
  };

  // check if logged in
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
    navigate("/");
  };

  const token = localStorage.getItem("token");
  let user = JSON.parse(localStorage.getItem("user"));

  // add to cart
  const cart = useSelector((state) => state.Orders);
  // add to cart

  const orders = useSelector((state) => state.Orders);
  const dispatch2 = useDispatch();
  useEffect(() => {
    dispatch2(getCartItems());
  }, []);
  // console.log("all orders from cart", orders);

  const MenuItem = styled.div`
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  `;

  return (
    <>
      {/* {console.log("JSON.parse user", user)} */}
      {/* test */}
      <header
        className="pb-1 pt-2 mb-4 border-bottom  header-underNav"
        id="navBarFixed"
        style={{
          backgroundColor: "white",
          top: "5rem",
          left: 0,
          zIndex: "1030",
        }}
      >
        <nav
          id="navBarFixed"
          className="navbar navbar-expand-lg navbar-light bg-white"
        >
          <div className="container">
            <NavLink
              className="d-flex align-items-center text-decoration-none  link-dark me-4 socialIcon"
              to="/"
            >
              <img src={JumiaLogo} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse ms-5"
              id="navbarSupportedContent"
            >
              <div className="me-auto" style={{ width: "60%" }}>
                {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  style={{ backgroundColor: "#f2800e" }}
                  className="btn text-white"
                  type="submit"
                >
                  Search
                </button>
              </form> */}
                <SearchBar />
              </div>

              <ul className="navbar-nav d-flex align-items-center mb-lg-0">
                <li className="">
                  <div className="dropdown">
                    {user ? (
                      <a
                        href="#"
                        className="text-truncate hoverAnchor text-decoration-none  link-dark me-4 dropdown-toggle fw-bold socialIcon"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="far fa-user" />
                        {t("hi")}, {user?.name}
                      </a>
                    ) : (
                      <a
                        href="#"
                        className="hoverAnchor text-decoration-none  link-dark me-4 dropdown-toggle fw-bold socialIcon"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="far fa-user" /> {t("login")}
                      </a>
                    )}
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        {!token && (
                          <Link className="dropdown-item" to="/login">
                            <button className="text-light btn px-5 py-1 btn-warning">
                              {t("Sign")}
                            </button>
                          </Link>
                        )}
                      </li>
                      <li>
                        {token ? (
                          <Link className="dropdown-item" to="/Myaccount">
                            <i className="far fa-user" />
                            My Acount
                          </Link>
                        ) : (
                          <Link className="dropdown-item" to="/login">
                            <i className="far fa-user" />
                            {t("Account")}
                          </Link>
                        )}
                      </li>
                      {user && (
                        <li>
                          <Link className="dropdown-item" to="/orders">
                            <i className="far fa-bags-shopping" /> Orders
                          </Link>
                        </li>
                      )}
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="far fa-heart" /> {t("SavedItems")}
                        </a>
                      </li>
                      <li>
                        {token && (
                          <Link className="dropdown-item" to="/">
                            <span
                              onClick={logout}
                              className=" btn px-5 py-1 fs-5 text-warning"
                            >
                              Log out
                            </span>
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="">
                  <div className="dropdown">
                    <a
                      href="#"
                      className="hoverAnchor text-decoration-none  link-dark me-4 dropdown-toggle fw-bold socialIcon"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="far fa-question-circle" /> {t("help")}
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          {t("cart")}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Place &amp; Track Order
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Oreder Collection
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Return &amp; Refunds
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Payment &amp; Jumia Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <button
                            className="text-light btn px-5 py-1 btn-warning"
                            onClick={props.LiveChat}
                          >
                            <i className="far fa-comment-alt-dots" /> LIVE HELP
                          </button>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/cart">
                    {/* <i
                    style={{ fontSize: "1.5rem" }}
                    className="cart fal fa-shopping-cart mt-1 me-2"
                  />
                  <strong className="fw-bold d-inline-block">
                    {t("cart")}
                  </strong>
                  <span class="cartBadge translate-middle badge rounded-pill bg-danger">
                    {totalUniqueItems}
                    <span class="visually-hidden">unread messages</span>
                  </span> */}
                    <MenuItem>
                      <Badge badgeContent={totalUniqueItems} color="secondary">
                        <span className="badgeStyle" style={{ color: "black" }}>
                          <ShoppingCartOutlined />
                        </span>
                      </Badge>
                      <strong className="fw-bold d-inline-block ms-2">
                        {t("cart")}
                      </strong>
                    </MenuItem>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
