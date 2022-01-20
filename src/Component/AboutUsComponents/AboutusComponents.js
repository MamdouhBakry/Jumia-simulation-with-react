
import React from 'react'
import "./AboutUsComponents.scss"
import image1 from "../../assets/imgs/About.jpg"
import image2 from "../../assets/imgs/KE_W19_LP_About_Us_02n.jpg"
import image3 from "../../assets/imgs/KE_W19_LP_About_Us_04.png"
import image4 from "../../assets/imgs/KE_W19_LP_About_Us_05.png"
import image5 from "../../assets/imgs/KE_W19_LP_About_Us_06.png"

export default function AboutusComponents() {
    return (
        <>
        <div className="row container d-flex justify-content-around m-auto text-center   ">
  <h1 className="p-0 m-0" style={{ color: "#f68b1e" }}>
    About us
  </h1>
  <ul className="about-nav">
    <li className="d-inline-block me-4">
      <a href style={{ color: "#f68b1e", textDecoration: "none" }}>
        Our Vision
      </a>
    </li>
    <span className="text-secondary">|</span>
    <li className="d-inline-block mx-4">
      <a href style={{ color: "#f68b1e", textDecoration: "none" }}>
        Jumia Today
      </a>
    </li>
    <span className="text-secondary">|</span>
    <li className="d-inline-block ms-4">
      <a href style={{ color: "#f68b1e", textDecoration: "none" }}>
        Our History
      </a>
    </li>
  </ul>
  <div
    style={{
      background: "#f49719",
      width: "100%",
      maxWidth: 1170,
      height: 2,
      marginBottom: 10
    }}
  />
  {/* <iframe class="pb-4"  width: 100% height="500px"     src="https://www.youtube.com/embed/aRUtFc_Z4OQ">
   </iframe> */}
  {/* our vision photo */}
  <iframe className="pb-4" style={{
      
      width: "100%",
      
      height: 500,
  
    }}  src="https://www.youtube.com/embed/aRUtFc_Z4OQ"></iframe>
  <div className=" container about-vision pt-5 mb-3 d-none d-lg-block ">
    <img
      style={{ verticalAlign: "middle", width: "100%" }}
      src={image1}
      alt
    />
    <div className="about-text2 fs-5">Our Vision </div>
    
    <div className="about-text1">
      We aim at building the most beloved and trusted shopping destination for
      Africans.
    </div>
  </div>
  {/* four pics div */}
  <div className="container about-vision">
    <img
      className
      src={image2}
      style={{ width: "100%" }}
      
      alt
    />
  </div>
  <div className="row mb-5 ">
    <div
      className="col fw-bolder"
      style={{
          background: "white",
        position: "absolute",
        right: "35%",
        width: "100%",
        fontSize: 12
      }}
    >
      providing 100% <br />
      <span style={{ color: "#f68b1e" }}>Authentic</span> <br />
      Products
    </div>
    <div
      className="col fw-bolder"
      style={{
        position: "absolute",
        right: "10%",
        width: "100%",
        fontSize: 12
      }}
    >
      With the <br />
      <span style={{ color: "#f68b1e" }}>Best Price </span> <br />
      in Egypt
    </div>
    <div
      className="col fw-bolder"
      style={{ position: "absolute", left: "13%", width: "100%", fontSize: 12 }}
    >
      Offering the most <br />
      <span style={{ color: "#f68b1e" }}>Convenient</span> <br />
      Shopping
    </div>
    <div
      className="col fw-bolder"
      style={{ position: "absolute", left: "35%", width: "100%", fontSize: 12 }}
    >
      Assisting You With the <br />
      <span style={{ color: "#f68b1e" }}>Best Service</span> <br />
      in Egypt
    </div>
  </div>
  {/* Jumia today section */}
  <div className="container jumia-section">
    <img
      className="mt-5 d-none d-lg-inline-block "
      src="https://static.jumia.com.eg/cms/content-pages/about/KE_W19_LP_About_Us_03.png"
      alt
    />
    <div className="about-grey d-none d-lg-block ">
      <p className="fs-5" style={{ color: "#f68b1e" }}>
        {" "}
        Jumia Today
      </p>
      <p>In a Nutshell</p>
      {/* first row of photos */}
      <div className="photo1-container position-relative text-center d-none d-lg-block">
        <img src={image3} width="100%" alt />
        <div className="about-photo4 fw-bolder text-light">
          70,000 <br />
          Products
        </div>
        <div className="about-photo5 fw-bolder text-light">
          22 <br /> African <br /> Countries
        </div>
        <div className="about-photo6 fw-bolder text-light">
          820 <br /> international <br /> &amp; National <br /> Brands
        </div>
        <div className="about-photo7 fw-bolder text-light">
          2,000,000 <br /> downloads <br /> for <br /> the <br /> Jumai App
        </div>
      </div>
      <div className="row ">
        <div className="col" style={{ position: "relative", left: "-35px" }}>
          Jumia offers the <br />
          widest assortment <br />
          at an unbeatable price
        </div>
        <div className="col ">
          #1 in Egypt online <br />
          retailer and is present <br />
          in Morocco, Nigeria,
        </div>
        <div className="col">
          Samsung, <br />
          Infinix, Innjoo, <br />
          Vero Moda, Jack &amp; Jones...
        </div>
        <div className="col"></div>
      </div>
      {/* end of first row */}
      {/* Start of second row */}
      <div className="photo1-container position-relative text-center mt-5 ">
        <img src={image4} width="100%" alt />
        <div className="about-photo4 fw-bolder text-light ">
          70,000 <br />
          Products
        </div>
        <div className="about-photo5 fw-bolder text-light">
          22 <br /> African <br /> Countries
        </div>
        <div className="about-photo6 fw-bolder text-light">
          820 <br /> international <br /> &amp; National <br /> Brands
        </div>
        <div className="about-photo7 fw-bolder text-light">
          2,000,000 <br /> downloads <br /> for <br /> the <br /> Jumai App
        </div>
      </div>
      <div className="row ">
        <div className="col " style={{ position: "relative", left: "-35px" }}>
          Across Egypt
        </div>
        <div className="col "></div>
        <div className="col">
          Jumia offers the <br />
          widest assortment <br />
          at an unbeatable price
        </div>
        <div className="col " style={{ position: "relative", right: "-40px" }}>
          During Black <br /> Friday 2017
        </div>
      </div>
    </div>
    {/* end of jumia section */}
    {/* start of history section */}
    <div className="container history-section">
      <img className="mt-5" src={image5} alt />
      <div className="about-grey row">
        <p className="fs-5" style={{ color: "#f68b1e" }}>
          {" "}
          History
        </p>
        <div className="col-6">
          <ul>
            <li style={{ fontSize: 12, textAlign: "left", lineHeight: 2 }}>
              Jumia, Egypt's no. 1 online mall was established in July 2012 with
              the aim and vision to
              <br /> become the one-stop shop in Egypt with implementation of
              best practices both online and offline.
            </li>
            <li style={{ fontSize: 12, textAlign: "left", lineHeight: 2 }}>
              Jumia is the largest online mall store in Egypt.
            </li>
            <li style={{ fontSize: 12, textAlign: "left", lineHeight: 2 }}>
              At inception we did an average delivery time of a week, today we
              do, on average, delivery in 1-5 days.
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li style={{ fontSize: 12, textAlign: "left", lineHeight: 2 }}>
              Initially starting with 3 employees, Jumia presently has a staff
              strength of 350 young and entrepreneurial Egyptians.
            </li>
            <li style={{ fontSize: 12, textAlign: "left", lineHeight: 2 }}>
              Deliveries to all cities in Egypt.
            </li>
          </ul>
        </div>
      </div>
      {/* end of history section */}
      {/* start of anchors section */}
      <div className="mt-5 mb-5 row ">
        <a
          href="#"
          className="text-light text-center mx-5 fw-bolder col"
          style={{
            borderRadius: 2,
            fontSize: 16,
            backgroundColor: "#f68b1e",
            padding: "10px 30px",
            textDecoration: "none"
          }}
        >
          {" "}
          Shop now
        </a>
        <a
          href="#"
          className="text-light text-center mx-5 fw-bolder col"
          style={{
            borderRadius: 2,
            fontSize: 16,
            backgroundColor: "#f68b1e",
            padding: "10px 30px",
            textDecoration: "none"
          }}
        >
          {" "}
          Sell on Jumia
        </a>
        <a
          href="#"
          className="text-light text-center mx-5 fw-bolder col"
          style={{
            borderRadius: 2,
            fontSize: 16,
            backgroundColor: "#f68b1e",
            padding: "10px 30px",
            textDecoration: "none"
          }}
        >
          {" "}
          Affiliate Partner
        </a>
      </div>
      {/* end of the anchor section */}
    </div>
  </div>
</div>


            
        </>
    )
}


