import React from 'react'
import { useTranslation } from 'react-i18next';
import img from '../../assets/imgs/jumia-brand.webp'
import './Footer2.scss'
export default function Footer2() {
  const { t, i18n } = useTranslation();
    return (
        <div>
            ;<>
  {/* start all footers */}
  <footer className="  footerOne ">
    <div className="container text-start">
      {/* first row  */}
      <div className="row align-items-center align-items-stretch   ">
        <div className="col-md-6 py-4 py-md-4   ">
          <div className="row g-1 ">
            <div className="col-sm-3">
              <img src={img} alt="" className="w-75 rounded" />
            </div>
            <div className="col-sm">
              <div className="text-1 ">Jumia in your pocket!</div>
              <p className="text-2  ">Get Jumia app and order on the go</p>
              <p className="text-3  ">
                FREE DOWNLOAD NOW
                <span>
                  <i className="fab fa-apple" />
                </span>
                <span>
                  <i className="fab fa-android" />
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* two */}
        <div className="col-md-6 py-4 py-md-4 aside-stretch ">
          <div className="text-5">Subscribe to our communications!</div>
          <p className="text-6">
            Subscribe to receive special offers and latest news.
          </p>
          <div className="row g-3">
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
                aria-label="City"
              />
            </div>
            <div className="col-sm ">
              <button
                type="button"
                name="gender"
                value="male"
                className=" form-control btn btn-outline-light formBtn"
              >
                <span>{t('mmale')}</span>
              </button>
            </div>
            <div className="col-sm">
              <button
                type="button"
                name="gender"
                value="female"
                className=" form-control btn btn-outline-light formBtn"
              >
                <span>{t('fmale')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end first row */}
    </div>
  </footer>
  <footer
    className="footer2  pb-5 px-3 "
    style={{ backgroundColor: "#434343" }}
  >
    <div className="container">
      {/* row */}
      <div className="row py-4">
        {/* one */}
        <div className="col-lg-3 col-md-6  mb-md-0 mb-4">
          
          <ul className="list-unstyled pt-3">
          <span className="footer-heading ">LET US HELP YOU</span>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/help/"
              >
                {t('helpMe')}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/contact/"
              >
                {t('contactUs')}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/how-to-shop/"
              >
                {t('howtobuyonJumia')}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/how-to-pay/"
              >
                {t('HowtopayonJumia')}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/delivery-timelines/"
              >
                {t('deliverytimelines')}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/sp-returns-refunds/"
              >
                {t('returnPolicy')}{" "}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/jumia-corporate/"
              >
                {t('corporateServices')}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://docs.google.com/forms/d/1poBfqrj0bXCtkvJIm_24mLCTdvKJNebDB7-ATHZwRW4/edit"
              >
                 {t('reportaProduct')}
              </a>
            </li>
          </ul>
        </div>
        {/* two */}
        <div className="col-lg-3 col-md-6  mb-md-0 mb-4">
          
          <ul className="list-unstyled pt-3">
          <span className="footer-heading ">{t('aBOUTJUMIAEGYPT' )}</span>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/about_us/?internal=footer"
              >
                {t('aboutus')}
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/careers/?internal=footer"
              >
                   {t('jumiaCareers' )}
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/terms-of-use/?internal=footer"
              >
                 {t('termsandConditions' )}
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/privacy/?internal=footer"
              >
                   {t('privacyPolicy' )}
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/jumia-express/?internal=footer"
              >
                Jumia Express
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/jumia-mall/?internal=footer"
              >
                {t('mall' )}
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/sp-jumia-services/?internal=footer"
              >
                {t('jumiaLogisticsServices' )}
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/mlp-black-friday/"
              >
                 {t('JumiaBlackFriday' )}
              </a>
            </li>
          </ul>
        </div>
        {/* three */}
       
        <div className="col-lg-3 col-md-6 mb-md-0 mb-4">
          
          <div className=" row row-cols-2">
          
            <ul className="list-unstyled pt-3">
            <span className="footer-heading ">{t('nJUMIAINTERNATIONAL')}</span> 
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.dz/"
                >
                  {t('nAlgeria' )}{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.ci/"
                >
                  {t('nIvoryCoast' )}{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.com.gh/"
                >
                  {t('nGhana' )}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.co.ke/"
                >
                 {t('nKenya' )}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.ma/"
                >
                   {t('nMorocco' )}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.com.ng/"
                >
                   {t('nNigeria' )}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.sn/"
                >
                   {t('nSenegal' )}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.com.tn/"
                >
                   {t('nTunisia' )}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.ug/"
                >
                 {t('nUganda')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* four */}
        <div className="col-lg-3 col-md-6  mb-md-0 mb-4">
          <span className="footer-heading ">JOIN US ON</span>
          <div className="list-unstyled pt-2 pb-4">
            <a
              className=" text-decoration-none me-3 fs-4 link-light"
              href="https://www.jumia.com.eg/help/"
            >
              <i className="fab fa-facebook-f  socialIcon " />
            </a>
            <a
              className=" text-decoration-none me-3 fs-4 link-light"
              href="https://www.jumia.com.eg/help/"
            >
              <i className="fab fa-twitter socialIcon  " />
            </a>
            <a
              className=" text-decoration-none me-3 fs-4 link-light"
              href="https://www.jumia.com.eg/help/"
            >
              <i className="fab fa-instagram socialIcon" />
            </a>
            <a
              className=" text-decoration-none me-3 fs-4 link-light"
              href="https://www.jumia.com.eg/help/"
            >
              <i className="fab fa-youtube socialIcon" />
            </a>
          </div>
          <span className="footer-heading ">PAYMENT METHODS</span>
         
          <div className="list-unstyled pt-2  pb-4">
            <a
              href="https://www.jumia.com.eg/help/"
              className=" text-decoration-none me-3 fs-4 link-light"
              title="Payment on delivery"
            >
              <i className="fas fa-hand-holding socialIcon " />
            </a>
            <a
              href="https://www.jumia.com.eg/help/"
              className=" text-decoration-none me-3 fs-4 link-light"
              title="Mastercard"
            >
              <i className="fab fa-cc-mastercard  socialIcon " />
            </a>
            <a
              href="https://www.jumia.com.eg/help/"
              className=" text-decoration-none me-3 fs-4 link-light"
              title="Visa"
            >
              <i className="fab fa-cc-visa  socialIcon " />
            </a>
            <a
              href="https://www.jumia.com.eg/help/"
              className=" text-decoration-none me-3 fs-4 link-light"
              title="Fawry"
            >
              <i className="fas fa-money-bill-wave socialIcon" />
            </a>
          </div>
        </div>
        
      </div>
      {/* second row */}
      <div className="row py-4 border-bottom border-secondary  ">
        {/* one */}
        <div className="col-lg-3 col-md-6  mb-md-0 mb-4">
          <span className="footer-heading ">{t('MakeMoney')}</span>
          <ul className="list-unstyled pt-3">
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://vendorhub.jumia.com.eg/terms-and-agreements/"
              >
               {t('sell' )}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/logistics-service-partner/?internal=footer"
              >
               {t('nBecomeaLogistics' )}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/jforce-consultant/"
              >
                {t('nBecomeaSalesConsultant' )} (J-Force )
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end row tow */}
    </div>
  </footer>
</>

        </div>
    )
}
