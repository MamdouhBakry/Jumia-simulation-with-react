import React from 'react'
import { useTranslation } from 'react-i18next'
export default function OrderSummary(props) {
    const { t, i18n } = useTranslation();
    return (
        <>
             <div className=" card-body container">
                    <div className=" card-text row">
                        <div className="col-4">
                            
                            <img src={props.item.image} alt="" className="img-fluid" />
                            
                            
                        </div>
                        <div className=" col-8">
                            <p className="fw-normal">{props.item.name}</p>
                            <p className="fw-normal price">{t('nEGP')} {props.item.price*props.item.quantity}</p>
                            <p className="fw-normal">{t('Qty')}: {props.item.quantity}</p>
                        </div>
                    </div>
             </div>
            
        </>
    )
}
