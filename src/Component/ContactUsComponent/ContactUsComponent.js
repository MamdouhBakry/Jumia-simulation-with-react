import React from 'react'
import image1 from "../../assets/imgs/contactUs-banner.jpg"
import image2 from "../../assets/imgs/Wrong-Card.png"
import image3 from "../../assets/imgs/Checked-Card.png"
import "./ContactUs.scss"

export default function ContactUsComponent() {
    return (
        <>
        <>
  <section>
    <div className="container">
      <div className="row">
        <img src={image1} alt />
      </div>
    </div>
  </section>
  {/*  security  */}
  <section>
    <div className="container  ">
      <div className="row m-3 ms-5 justify-content-center  ">
        <p className=" col-8 text-center  security  ">
          For your payment security DO NOT share your card details with anyone.
          For confirmation purposes, only the first 6 numbers and last 4 numbers
          of the card can be shared. NEVER share your expiry or CVV number as
          per the picture below.
        </p>
      </div>
    </div>
  </section>
  {/* master card */}
  <section>
    <div className="container ">
      <div className="row justify-content-center ">
        <img src={image2} className="w-25 " alt />
        <img src={image3} className="w-25 " alt />
      </div>
    </div>
  </section>
  <section>
    <div className="container text-center ">
      <h3 style={{ color: "#FF9800" }}>How can we help you ?</h3>
      <div className="row justify-content-center d-flex mt-5">
        <button
          style={{ backgroundColor: "#FF9800" }}
          type="button"
          className="btn btn-warning w-25 me-5"
        >
          Chat with Us
        </button>
        <button
          style={{ backgroundColor: "#FF9800" }}
          type="button"
          className="btn btn-warning w-25"
        >
          Call Us
        </button>
      </div>
    </div>
  </section>
  <section>
    <div className="container text-center mt-5 mb-5 ">
      <h3 style={{ color: "#FF9800" }}>Need help placing an order?</h3>
      <div className="row justify-content-center d-flex mt-5 ">
        <div className="border rounded">
          <p>
            If you have trouble placing your order, please call us on the
            following number:
          </p>
          <h3>
            <a href="tel:15204">15204</a>
          </h3>
          <h4>Opening hours: Sunday to Thursday 10:00 a.m. to 7:00 p.m.</h4>
        </div>
      </div>
    </div>
  </section>
</>

            
        </>
    )
}
