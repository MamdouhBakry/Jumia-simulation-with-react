import React from 'react'
import './ProductDetails.scss'
import { useTranslation } from 'react-i18next'

export default function ProductDetails(props) {
  const { t, i18n } = useTranslation();
    return (
        <>
            <div
  className="row testAlign"
  style={{
    backgroundColor: "white",
    padding: 8,
    paddingLeft: 20,
    boxShadow: "0 2px 5px 0 #ededed",
    borderRadius: 4
  }}
>
  <h5>{t('ProductDetails')}</h5>
  <hr />
  <ul style={{ fontSize: 14 }}>
    <li>{props.name}</li>
    <li>{props.size}</li>
    <li>{props.specs1}</li>
    <li>{props.specs2}</li>
    <li>{props.specs3}</li>
    <li id="specifications">
     {props.notes}
    </li>
  </ul>
</div>

            
        </>
    )
}
