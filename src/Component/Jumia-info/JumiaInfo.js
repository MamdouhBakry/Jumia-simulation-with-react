import React from 'react';
import './Jumia-info.scss';
import { useTranslation } from 'react-i18next'

export default function JumiaInfo() {
  const { t, i18n } = useTranslation();

    return (
      <div>
        <section className="p-5 ">
          <div className="container card p-4 ">
            <div className="row ">
              <section className=" HomePage-img px-2 ">
                <div className="row  ">
                <h2 className="info-heading">
                  <strong
                    >
                      {/* Jumia Egypt &ndash; Biggest Online Shopping Website */}
                      {t("Et1")}
                    
                    </strong>
                </h2>

                <p  className="desc"> 
                  {/* Online shopping sites are now part of our everyday lives,
                  because everyone enjoys the possibility of being able to buy
                  whatever they need, whether it&rsquo;s clothing or 
                  <a  className="black-link" href="https://www.jumia.com.eg/electronics/"
                    ><strong> electronics </strong></a
                  >, without having to move an inch. It&rsquo;s even better when
                  you can buy everything you&rsquo;re looking for, all from the
                  same store. This is what Jumia Egypt offers and that&rsquo;s
                  what makes it one of the best online shopping websites in
                  Egypt. */}
                  {t('Et2')}
                </p>

                <h2 className="info-heading"><strong> {t('Et3')} </strong></h2>

                <p  className="desc">
                  {/* Jumia is an easy platform to use when you&rsquo;re online
                  shopping for any type of products you&rsquo;re looking for.
                  Even if you&rsquo;re just browsing, we assure you that you
                  will find something you like in our catalog. Our
                  <strong> clothing store </strong> provides you with over one
                  million products and variations to choose from! You can shop
                  for anything you need from women fashion to baby clothes and
                  get the latest
                  <a  className="black-link" href="https://www.jumia.com.eg/category-fashion-by-jumia/"
                    ><strong> fashion </strong></a>.
                     Jumia Egypt is one of the biggest online shopping sites
                  because we always try to expand our catalog to provide any
                  possible products or gadgets our customer could be searching
                  to buy online! */}
                  {t('Et4')}
                </p>

                <h2 className="info-heading"><strong>{t('Et5')}</strong></h2>

                <h2 className="info-heading">
                  <strong>{t('Et6')}</strong>
                </h2>

                <p  className="desc">
                  {/* Check off your <strong> grocery </strong> list with our
                  <a  className="black-link" href="https://www.jumia.com.eg/groceries/"
                    ><strong> online supermarket </strong></a>
                  which is filled with all the canned goods and fresh foods you
                  could possibly think of. You can easily shop for all
                  variations of
                  <a className="black-link" href="https://www.jumia.com.eg/home-office-appliances/"
                    ><strong> appliances </strong></a>
                  for your home from a large selection which include appliances
                  such as a
                  <a className="black-link"
                    href="https://www.jumia.com.eg/appliances-fridges-freezers/"
                    ><strong> fridge </strong></a>, washing machine or
                  <a  className="black-link" href="https://www.jumia.com.eg/air-conditioning/"
                    ><strong> air conditioner </strong></a>, for example. */}
                {t('Et7')}
                
                </p>

                <p  className="desc">
                {t('Et8')}
                </p>

                <h2 className="info-heading">
                  <strong>{t('Et9')}</strong>
                </h2>

                <p  className="desc">
                {t('Et10')}
                </p>

                <p className="desc">
                {t('Et11')}
                </p>

                <h2 className="info-heading"><strong>{t('Et12')}</strong></h2>

                <p  className="desc">
                {t('Et13')}
                </p>

                <p  className="desc">
                {t('Et14')}
                </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
}


