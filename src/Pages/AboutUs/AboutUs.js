import { ClassNames } from '@emotion/react';
import React from 'react'
import image1 from "../../assets/imgs/ads.jpeg";
import AboutusComponents from '../../Component/AboutUsComponents/AboutusComponents';
import Footer1 from '../../Component/Footer1/Footer1';
import LowerHeader from '../../Component/Headers/LowerHeader/LowerHeader';
import MiddeleHeader from '../../Component/Headers/MiddleHeader/MiddeleHeader';
import ImageContainer from '../../Component/ImageContainer/ImageContainer';



export default function AboutUs() {

    return (
        <>
        <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />

      <AboutusComponents  />


      <Footer1 />

            
        </>
    )
}
