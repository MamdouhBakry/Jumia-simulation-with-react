import React from "react";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";

export default function ProductHeader(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="d-flex justify-content-between mt-1 align-items-center ps-2">
        <h5>{props.cat}</h5>
        <p className="d-flex align-items-center">
          <h6 className="mt-3">{t("Sortby")}:</h6>
          <div class="dropdown mt-2">
            <button
              class="btn btn-white dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("Popularity")}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link class="dropdown-item" to="/products" onClick={() => props.setratingproducts(5)}>
                {t('Popularity')}
                </Link>
              </li>
              {/* <li>
                <Link class="dropdown-item" to="/products">
                  {t('NewestArrivals')}
                </Link>
              </li> */}
              <li>
                <Link class="dropdown-item" to="/products" onClick={()=>props.sortPrice('+','false')}>
                  {t('PriceLowtoHigh')}
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/products" onClick={() => props.sortPrice('-','false')}>
                  {t('PriceHightoLow')}
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/products" onClick={() => props.sortProductRatings()} >
                  {t("ProductRating")}
                </Link>
              </li>
            </ul>
          </div>
        </p>
      </div>
    </>
  );
}
