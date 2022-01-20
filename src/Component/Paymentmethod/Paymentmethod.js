import React from 'react'
import { useTranslation } from 'react-i18next'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
export default function Paymentmethod() {
  const { t, i18n } = useTranslation();
    return (
        <div>
            {/*  PAYMENT METHOD */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><CheckCircleRoundedIcon color="disabled"/>3. {t('PAYMENT METHOD')}</h5>
          </div>
        </div>
        </div>
    )
}
