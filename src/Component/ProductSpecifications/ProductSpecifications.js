import React from 'react'
import { useTranslation } from 'react-i18next'
import './ProductSpecifications.scss'

export default function ProductSpecifications(props) {
  const { t, i18n } = useTranslation();
    return (
        <>
            <div
          className=" testAlign "
  style={{
    backgroundColor: "white",
    padding: 8,
    paddingLeft: 20,
    boxShadow: "0 2px 5px 0 #ededed",
    borderRadius: 4
  }}
>
  <h6 className="ps-3">{t('Specifications')}</h6>
  <hr />
  <p>
    <b>SKU</b>:{props.sku}
  </p>
  <p>
    <b>{t('Model')}</b>:{props.model}
  </p>
  <p>
    <b>{t("ProductionCountry")}</b>:{props.country}
  </p>
  <p>
    <b>{t("Size")} (L x W x H cm)</b>:{props.size}
  </p>
  <p>
    <b>{t("color")}</b>:{props.color}
  </p>
  <p>
    <b>{t("MainMaterial")}</b>:{props.material}
  </p>
</div>

            
        </>
    )
}
