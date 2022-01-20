import React from "react";
import { useTranslation } from 'react-i18next';
export default function SearchComponent(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h5>{props.heading}</h5>
      <input
        className="rounded-pill w-100 form-control"
        type="text"
        placeholder={t('search')}
      />
    </>
  );
}
