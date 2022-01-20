import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./MyaccountList.scss";

export default function MyaccountList(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div
        className="col-md-3 me-1"
        style={{
          backgroundColor: "wite",
          borderRadius: 4,
          boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
          height: "100%",
        }}
      >
        <ul className="nav flex-column align-middle aside-nav p-2 myaccount-a">
          <li className="nav-item ">
            <i className="far fa-user    " style={{ fontSize: 20 }} />{" "}
            <NavLink to="/Myaccount">
              <a className="nav-link text-dark active d-inline-block" href="#">
                {t('My Jumia Account')}
              </a>
            </NavLink>
          </li>
          <li className="nav-item">
            <i className="far fa-box" style={{ fontSize: 20 }} />{" "}
            <NavLink to="/orders">
              <a className="nav-link text-dark d-inline-block">{t('Orders')}</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <i className="far fa-envelope" style={{ fontSize: 20 }} />
            <a className="nav-link text-dark d-inline-block" href="#">
             {t('Inbox')}
            </a>
          </li>
          <li className="nav-item">
            <i className="far fa-comment-alt" style={{ fontSize: 20 }} />{" "}
            <a className="nav-link text-dark d-inline-block" href="#">
              {t('Pending Reviews')}
            </a>
          </li>
          <li className="nav-item">
            <i className="far fa-credit-card" style={{ fontSize: 20 }} />{" "}
            <a className="nav-link text-dark d-inline-block" href="#">
              {t("Jumia Credit")}
            </a>
          </li>
          <li className="nav-item">
            <i className="far fa-heart" style={{ fontSize: 20 }} />{" "}
            <a className="nav-link text-dark d-inline-block" href="#">
              {t("Saved Items")}
            </a>
          </li>
          <li className="nav-item">
            <i className="fas fa-history" style={{ fontSize: 20 }} />{" "}
            <a className="nav-link text-dark d-inline-block " href="#">
              {t("Recently Viewed")}
            </a>
          </li>
          <hr />
          <li>
            <a className="nav-link text-dark" href="#">
              {t("Details")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
             {t('Address Book')}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
             {t('Newsletter Preferences')}
            </a>
          </li>
          <hr />
          <div className="text-center align-middle mb-3 ">
            <a
              href
              className="text-decoration-none myaccount-logout p-1"
              style={{ color: "#f68b1e", fontWeight: 500 }}
              onClick={props.logout}
            >
              {t("LOGOUT")}
            </a>
          </div>
        </ul>
      </div>
    </>
  );
}
