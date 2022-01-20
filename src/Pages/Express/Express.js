import React from "react";
import './Express.scss'
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import Footer2 from "../../Component/Footer2/Footer2"
import img50 from "../../assets/imgs/last-minute-gift.png";
import img51 from "../../assets/imgs/cant-get-out-house.png";
import img52 from "../../assets/imgs/realize.png"
import img53 from "../../assets/imgs/jexpress-logo.png"
import img54 from "../../assets/imgs/c6651a52eb0c1a02a8dec616f50628d5.jpg"
import img56 from "../../assets/imgs/express-hero.jpg"
import img55 from "../../assets/imgs/je.jpg"
import img57 from "../../assets/imgs/one-hundred-percent-availability.png"
import img58 from "../../assets/imgs/easier-shopping-experience.png"
import img59 from "../../assets/imgs/superfast-delivery.png"
import img60 from '../../assets/imgs/deals-of-the-day.png'
import img61 from "../../assets/imgs/phones-tablets.png"
import img62 from "../../assets/imgs/computing.png"
import img63 from "../../assets/imgs/electronics.png"
import img64 from "../../assets/imgs/home-office.png"
import img65 from "../../assets/imgs/fashion.png"
import img66 from "../../assets/imgs/health-beauty.png"
import img67 from "../../assets/imgs/games-consoles.png"
import img68 from "../../assets/imgs/groceries.png"
import img69 from "../../assets/imgs/baby-products-v2.png"
export default function Express() {
  return (
    <>
      <MiddeleHeader />
      <LowerHeader />
      {/* =====================start hero section================================ */}
  <section className="express-hero-section ">
    <div className="container-fluid   position-relative m-0 p-0">
      <img src={img56} className="img-fluid" alt="" />
      <div
        className=" col-sm-12 col-md-3 position-absolute col-lg-3   bg-white  p-1"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <img src={img53} className="img-fluid" alt="" />
      </div>
      <div
        className="row w-75  bg-white position-absolute  justify-content-center  align-items-center  text-center pt-3"
        style={{ bottom: 0, left: 200 }}
      >
        <div className=" d-sm-none col-lg-4  justify-content-center text-center d-flex">
          <img
            src={img57}
            className=" img-fluid "
            alt=""
            style={{
              width: "20%",
              padding: 10,
              borderRadius: "50%",
              border: "2px solid #ff9900"
            }}
          />
          <p
            style={{
              padding: "10px 15px",
              fontWeight: 600,
              fontSize: "0.9em",
              width: "auto"
            }}
          >
            100% Availability
          </p>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 justify-content-center d-flex">
          <img
            src={img58}
            alt=""
            style={{
              width: "20%",
              padding: 10,
              borderRadius: "50%",
              border: "2px solid #ff9900"
            }}
          />
          <p
            style={{
              padding: "10px 15px",
              fontWeight: 600,
              fontSize: "0.9em",
              width: "auto"
            }}
          >
            Easier Shopping Experience
          </p>
        </div>
        <div className=" col-sm-12 col-md-4 col-lg-3 col-4  justify-content-center d-flex">
          <img
            src={img59}
            alt=""
            style={{
              width: "20%",
              padding: 10,
              borderRadius: "50%",
              border: "2px solid #ff9900"
            }}
          />
          <p
            style={{
              padding: "10px 15px",
              fontWeight: 600,
              fontSize: "0.9em",
              width: "auto"
            }}
          >
            Super Fast Delivery
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* =============================nav Express section====================== */}

  ;<>
  {/* =============================nav Express section====================== */}
  <section className="express-nav-section">
    <div className="container-fluid">
      <div className="row">
        <div className="   col-sm-12  col-md-12 col-lg-9  ">
          <div
            id="carouselExampleControlsNoTouching"
            className="carousel slide"
            data-bs-touch="false"
            data-bs-interval="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active overflow-hidden">
                <div className=" row px-5">
                  <div className="d-flex nav-item">
                    <div className=" col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src={img60}
                        className="img-fluid "
                        alt=""
                      />
                      <a href="#/">Deals of the Day</a>
                    </div>
                    <div className=" col-2 border-4 justify-content-center text-center  p-sm-1">
                      <img
                        src={img61}
                        className="img-fluid"
                        alt=""
                      />
                      <a href="/">Phones &amp; Tablets</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1 ">
                      <img
                        src={img62}
                        className="img-fluid"
                        alt=""
                      />
                      <a href="/#">Computing</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src={img63}
                        className="img-fluid"
                        alt=""
                      />
                      <a href>Electronics</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src={img64}
                        className="img-fluid"
                        alt=""
                      />
                      <a href="#">Home &amp; Office</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img src={img65} className="img-fluid" alt="" />
                      <a href="#">Fashion</a>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <img src="..." class="d-block w-100" alt="..."> */}
                <div className=" row px-5  ">
                  <div className="d-flex">
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src={img66}
                        className="img-fluid rounded-circle"
                        alt=""
                      />
                      <a href="#">Health &amp; Beauty</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src={img67}
                        className="img-fluid"
                        alt=""
                      />
                      <a href="#">gaming</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src={img68}
                        className="img-fluid"
                        alt=""
                      />
                      <a href="#">Groceries</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src={img69}
                        className="img-fluid"
                        alt=""
                      />
                      <a href>Baby Products</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src="/imgs/automobile.png"
                        className="img-fluid"
                        alt
                      />
                      <a href="#">Automobile</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src="/imgs/flash-drives.png"
                        className="img-fluid"
                        alt
                      />
                      <a href="#">Flash Drives</a>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="carousel-item">
                {/* <img src="..." class="d-block w-100" alt="..."> */}
                <div className=" row px-5  ">
                  <div className="d-flex">
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src="/imgs/mens-sneakers.png"
                        className="img-fluid rounded-circle"
                        alt
                      />
                      <a href="#">Men's Sneakers</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img src="/imgs/fashion.png" className="img-fluid" alt />
                      <a href="#">Women's Bags</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src="/imgs/small-appliances.png"
                        className="img-fluid"
                        alt
                      />
                      <a href="#">Small Appliances</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src="/imgs/women-fashion.png"
                        className="img-fluid"
                        alt
                      />
                      <a href>Women's Fashion</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img
                        src="/imgs/mens-fashion.png"
                        className="img-fluid"
                        alt
                      />
                      <a href="#">Men's Fashion</a>
                    </div>
                    <div className="col-2 border-4 justify-content-center text-center p-sm-1">
                      <img src="/imgs/drinks.png" className="img-fluid" alt />
                      <a href="#">Drinks</a>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon arrow  "
                aria-hidden="true"
              />
              <span className="visually-hidden arrow ">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className=" col-sm-12 col-md-12 col-lg-3 p-4 text-center">
          <button
            type="button"
            className="btn btn-primary text-dark  fw-bold p-3 but "
          >
            Jumia Express
          </button>
          <button
            type="button"
            className="btn btn-primary text-dark fw-bold p-3 but "
          >
            Start Shoping
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* ======================= EXPRESS-DELIVERY SECTION============================ */}
  <section className="EXPRESS-DELIVERY mt-5 mb-5">
    <div className="container">
      <div className="row">
        <div className="text-center">
          <h2>GET EXPRESS DELIVERY ALL OVER EGYPT</h2>
          <h6>With Jumia Express, delivery is superfast</h6>
        </div>
      </div>
      <div className="row gifts ">
        <div className="col-sm-12 col-md-4 col-lg-4 d-inline-block">
          <img
            src={img50}
            className="img-fluid w-25 h-75"
            alt=""
          />
          <span>Need a last minute gift?</span>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 d-inline-block">
          <img
            src={img51}
            className="img-fluid w-25 h-75"
            alt=""
          />
          <span>Can't get out of the house?</span>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 d-inline-block">
          <img src={img52} className="img-fluid w-25 h-75" alt="" />
          <span>Realize you to pick up something?</span>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className=" col-sm-12 col-md-3 col-lg-3">
          <img src={img53} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-7 ">
          <p className="pt-1">
            orders get delivered to you as fast as the next business day on
            thousands of items
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* TIMELINES  SECTION*/}
  <section className="express-timelines-section">
    <div className="container">
      <div className="row justify-content-center text-center">
        <h5>TIMELINES</h5>
        <div className="  col-sm-12 col-md-6   col-lg-4">
          <div
            className="card mb-3"
            style={{ maxWidth: 540, backgroundColor: "#CAE7FF" }}
          >
            <div className="row g-0">
              <div className=" col-sm-4 col-md-4 bg-white text-center">
                {/* <img src="" class="img-fluid rounded-start" alt="..."> */}
                <p style={{ color: "#f68b1e", fontSize: 40, paddingTop: 20 }}>
                  <i className="fas fa-truck-moving" />
                </p>
                <p>cairo&amp;Giza</p>
              </div>
              <div className=" col-sm-8 col-md-8">
                <div className="card-body">
                  <p className="card-text">
                    If order is placed before 2pm first delivery attempt will be
                    within 1 business da
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  col-sm-12 col-md-6 col-lg-5">
          <div
            className="card mb-3"
            style={{ maxWidth: 540, backgroundColor: "#FFE2B9" }}
          >
            <div className="row g-0">
              <div className="col-sm-4 col-md-4 bg-white text-center">
                <p style={{ color: "#f68b1e", fontSize: 40, paddingTop: 20 }}>
                  <i className="fas fa-truck-moving" />
                </p>
                <p>All Other Cities</p>
              </div>
              <div className="col-sm-8 col-md-8">
                <div className="card-body">
                  <p className="card-text">
                    If order is placed before 2pm first delivery attempt will be
                    within 1 - 7 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* start easier shopping section */}
  <section className>
    <div className="container position-relative ">
      <img src={img55} className="img-fluid" alt="" />
      <div
        className="top-right  position-absolute bg-white p-5 "
        style={{ top: 0, right: 12 }}
      >
        <p className="fw-bold text-center" style={{ color: "#f68b1e" }}>
          Easier Shopping Experience
        </p>
        <p>
          <i className="fas fa-cart-plus fs-3" style={{ color: "#f68b1e" }} />{" "}
          Stocked, packed, shipped by Jumia
        </p>
        <p>
          <i
            className="fas fa-truck-moving fs-3"
            style={{ color: "#f68b1e" }}
          />{" "}
          Guaranteed availability of Products
        </p>
        <p>
          <i className="fas fa-box fs-3 " style={{ color: "#f68b1e" }} /> Best
          quality packing
        </p>
      </div>
    </div>
  </section>
  <Footer2/>
</>

    </>
  );
}
