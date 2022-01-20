import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import i18n from '../../../i18n';

// import ar from "../../../assets/imgs/ar.png";
// import en from "../../../assets/imgs/en.png";

import ar from '../../../assets/imgs/uk.svg'
import en from '../../../assets/imgs/eg.svg'

export default function MiddeleHeader() {
  const changeLanguage = (ln) => {
    return () => {
      window.location.reload();
      console.log(`language change to ${ln}`)
      localStorage.setItem('lang', ln);
      i18n.changeLanguage(localStorage.getItem('lang'))

    }
  }

  const { t, i18n } = useTranslation();

  return (
    <>
      <nav className="p-4 bg-light border-bottom " id="Sell-on-Jumia ">
        {/* start row */}
        <div className="row container d-flex justify-content-between m-auto  ">
          {/* col-2 */}
          <div className="col-lg-2 col-md-12">
            <Link to="/Seller" className="text-decoration-none  link-dark ms-4 ">
              <span style={{ color: "#f68b1e", fontWeight: "bold" }}>
                <i className="fad fa-star" /> {t("sell")}
              </span>
            </Link>
          </div>
          {/* col-7 */}
          <div className="col-lg-7 col-md-12">
            <ul className="d-flex justify-content-center list-unstyled ">
              <li className="me-3">
                <a href="#" className="text-decoration-none  link-dark ms-4 ">
                  <span style={{ color: "#f68b1e", fontWeight: "bold" }}>
                    <i className="fad fa-star" />{t("FOOD")}   
                  </span>
                </a>
              </li>
              <li className="me-3">
                <a
                  className="text-secondary text-decoration-none  link-dark ms-4 "
                  href="#"
                >
                  <i className="fas fa-crown" />{t("PRIMO")}
                </a>
              </li>
              <li className="me-3">
                <a
                  role="button"
                  className="text-secondary text-decoration-none  link-dark ms-4 "
                  href="#"
                >
                  <i className="fad fa-star" />{t("REWARDS")}
                </a>
              </li>
              <li>
                <a
                  role="button"
                  className="text-secondary text-decoration-none  link-dark ms-4 "
                  href="#"
                >
                  <i className="fad fa-shield-alt" />{t("PAY")}
                </a>
              </li>
            </ul>
          </div>
          {/* col-3 */}
          <div className="col-lg-3 col-md-12 me-0">
            <ul className="d-flex justify-content-center list-unstyled ">
              <a  onClick={changeLanguage('en')}
                className="text-decoration-none  link-dark me-4 socialIcon"
                value="en"
              role="button"
              >
                <li className="d-flex" >
                  <img
                    className="rounded-circle"
                    width="25px"
                    height="25px"
                    src={ar}
                  />
                  English
                </li>
              </a>
              |
              <a  onClick={changeLanguage('ar')}
                className="text-decoration-none  link-dark ms-4 socialIcon "
                value="ar"
                role="button"
              >
                <li className="d-flex" >
                  <img
                    className="rounded-circle"
                    width="25px"
                    height="25px"
                    src={en}
                  />
                  عربي
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
