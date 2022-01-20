import React from 'react'
import Footer1 from '../../Component/Footer1/Footer1'
import MiddleHeader from '../../Component/Headers/MiddleHeader/MiddeleHeader';
import LowerHeader from '../../Component/Headers/LowerHeader/LowerHeader';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

export default function NotFound() {
    const { t, i18n } = useTranslation();

    return (
        <div  style={{"backgroundColor":"#F5F5F5"}}>
            <MiddleHeader/>
            <LowerHeader/>
            <div class="container " style={{"height":"600px", "backgroundColor":"#F5F5F5"}}>
                <div className="row ">
                    <div className="col-lg-6  ps-5"
                    style={{"paddingTop":"160px" }}> 
                        <h3>{t('NotFound')}</h3>
                        <h6 className="py-3">{t('couldntfind')} <br/>{t('lookingfor')}</h6>
                        <p>{t('moreShopping')}<br/>{t('foryoutobrowse!')}</p>
                         <Link to="/">
                             <button className="btn  text-center text-white fw-bold"
                             style={{"backgroundColor":"#F17E0A"}}>{t('GOHOMEPAGE')}</button>
                         </Link>
                    </div>
                    <div className="col-lg-6"> 
                       <img src="https://www.jumia.com.eg/assets_he/images/people.9416a3fb.svg" className="img-fluid" alt="not found"/>
                    </div>
                </div>
            </div>
           <Footer1/>
        </div>
    )
}