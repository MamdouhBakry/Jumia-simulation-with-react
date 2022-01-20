import React from "react";
import { useTranslation } from 'react-i18next'
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./PaymentMethod2.scss";
// img
import image1 from "../../assets/imgs/PNg24.png";
import image2 from "../../assets/imgs/cashIcon1_1.png";
import image3 from "../../assets/imgs/Fawrylogo-(1).png";
export default function PaymentMethod2() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="card mb-3 pb-3 mt-3">
        <div className="card-header bg-white fw-bolder ">
          <CheckCircleRoundedIcon color="disabled" />
          2. PAYMENT METHOD
        </div>
        <div className="card-body">
          <h5 className="card-title  fw-bolder fs-6 ps-3">
            How do you want to pay for your order ?
          </h5>
        </div>
        {/* THIS IS PAYMENT METHOD */}
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="w-100 border-0 text-start bg-white collapsed"
                style={{ fontSize: "1rem" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <div className="d-flex">
                      <img className="d-inline-block h-75 me-1" src={image1} />
                      <p className="fw-bold mt-2">Pay By Card</p>
                    </div>
                  </label>
                </div>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="w-100 border-0 text-start bg-white collapsed"
                style={{ fontSize: "1rem" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    <div className="d-flex">
                      <img className="d-inline-block h-75 me-1" src={image2} />
                      <p className="fw-bold mt-2">Cash On Delivery</p>
                    </div>
                  </label>
                </div>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="w-100 border-0 text-start bg-white collapsed"
                style={{ fontSize: "1rem" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    <div className="d-flex">
                      <img className="d-inline-block h-75 me-1" src={image3} />
                      <p className="fw-bold mt-2">JumiaPay With Fawry</p>
                    </div>
                  </label>
                </div>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="ps-5">
          <p className="fw-light">Subtotal</p>
          <p className="fw-light">Shipping amount</p>
          <hr />

          <p className="fw-bold">Total</p>
        </div>

        <p className="text-center  vouchertxt">
          You will be able to add a voucher in the next step
        </p>
        <button type="button" class="btn proceedBtn text-white fw-bolder mx-3">
          PROCEED TO NEXT STEP
        </button> */}
      </div>
    </>
  );
}
