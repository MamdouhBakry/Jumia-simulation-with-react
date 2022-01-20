import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import "./SingleProduct.scss";
// component
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import ImageContainer from "../../Component/ImageContainer/ImageContainer";
import image1 from "../../assets/imgs/ads.jpeg";
import ProductDetailsAndRating from "../../Component/ProductDetailsAndRating/ProductDetailsAndRating";
import ProductDetails from "../../Component/ProductDetails/ProductDetails";
import ProductSpecifications from "../../Component/ProductSpecifications/ProductSpecifications";
import DeliveryReturns from "../../Component/Delivery-Returns/DeliveryReturns";
import Aside2 from "../../Component/Aside2/Aside2";

// import {
//   getAllProducts,
//   ProductById,
// } from "../../Store/actions/ProductActions/productActions";

import { ProductById } from "../../Store/actions/ProductActions/GetSingleProduct";
import { getAllProducts } from "../../Store/actions/ProductActions/getAllProducts";
import Footer1 from "../../Component/Footer1/Footer1";
import ShowReview from "../../Component/ShowReview/ShowReview";

export default function SingleProduct() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const product = useSelector((state) => state.SingleProduct);
  console.log("product", product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductById(id));
  }, []);

  
  return (
    <>
      <ImageContainer img={image1} color={"#a42924"} className="justify-content-center" />
      <MiddeleHeader />
      <LowerHeader />
      <div className="container mt-3 mb-5  ">
        <div className="main row container mt-3 ">
          <div
            className="col-9 row single-firstcol ms-0"
            style={{ backgroundColor: "#F5F5F5", position: "relative" }}
          >
            <div
              className="row"
              style={{
                backgroundColor: "white",
                padding: 8,
                boxShadow: "0 2px 5px 0 #ededed",
                borderRadius: 4,
              }}
            >
              <div className="col-5">
                <ImageContainer
                  wid="col-12"
                  img={product?.image}
                  color={"#a42924"}
                />

                <hr />
                <p className="ps-2 fw-bold">{t('SHARETHISPRODUCT')} </p>
                <div>
                  <a
                    className=" text-decoration-none me-3 fs-4 link-dark"
                  >
                    <i className="fab fa-facebook-f  socialIcon " />
                  </a>
                  <a
                    className=" text-decoration-none me-3 fs-4 link-dark"
                  >
                    <i className="fab fa-twitter socialIcon  " />
                  </a>
                </div>
              </div>
              <div className="col-7">
                {/* <ProductDetailsAndRating name={product.name} rating={product.numOfReviews} price={product.price} discountedPrice="EGP 100" discountPer="-65%" shippingPrice="+ shipping from EGP 11 to 6th of October" quantity="1" /> */}
                <ProductDetailsAndRating product={product} />
                <>
                  <div className="fw-bolder fs-5">{t('Promotions')}</div>
                  <div>
                    <a
                      href
                      className="single-anchor"
                      style={{
                        fontSize: 13,
                        textDecoration: "none",
                        color: "#264996",
                      }}
                    >
                      <i
                        className="fas fa-crown me-2"
                        style={{ color: "#f68b1e" }}
                      />{" "}
                      <span>
                        {t('jumia primo')}
                      </span>{" "}
                    </a>{" "}
                    <br /> <br />
                    <a
                      href
                      className="single-anchor d-flex"
                      style={{
                        fontSize: 13,
                        textDecoration: "none",
                        color: "#264996",
                      }}
                    >
                      <i
                        className="fas fa-shield-alt me-3"
                        style={{ color: "blue" }}
                      />
                      <p>
                      {t('newcustomers')}
                      </p>{" "}
                    </a>{" "}
                    <br />
                    <a
                      href
                      className="single-anchor d-flex"
                      style={{
                        fontSize: 13,
                        textDecoration: "none",
                        color: "#264996",
                        display: "block",
                      }}
                    >
                      <i
                        className="fas fa-certificate me-3"
                        style={{ color: "#f68b1e" }}
                      />
                      <p>
                      {t('Pay with valU over 9 months without interest')}
                      </p>
                    </a>
                  </div>
                </>
              </div>
              <a
                href
                id="product-details"
                style={{
                  fontSize: "small",
                  position: "absolute",
                  bottom: "2%",
                }}
              >
                {t('Report incorrect product infomrmation')}
              </a>
            </div>
          </div>
          <div className=" col-3 single-secondcol ms-0 mx-auto">
            <DeliveryReturns />
          </div>
          {/* <div className="main row container mt-3 "> */}
          <div
            className="col-9 row single-firstcol mt-3 mx-auto"
            style={{ backgroundColor: "", position: "relative" }}
          >
            <ProductDetails
              name={product?.name}
              specs1={product?.description}
              size={product?.weight}
              specs2={product?.model}
              specs3="external use only"
              notes="There may be a difference in the appearance of the outer package or the data from the outside only"
            />
            <div
              className="row"
              style={{
                backgroundColor: "white",
                marginTop: 15,
                padding: 8,
                paddingLeft: 20,
                boxShadow: "0 2px 5px 0 #ededed",
                borderRadius: 4,
              }}
            >
              <h5>{t('Specifications')}</h5>
              <div className="col-6">
                <ProductDetails
                  name={product?.name}
                  specs1={product?.description}
                  size={product?.weight}
                  specs2={product?.model}
                  specs3="external use only"
                  notes="There may be a difference in the appearance of the outer package or the data from the outside only"
                />
              </div>
              <div className="col-6">
                <ProductSpecifications
                  sku={product?.sku}
                  model={product?.model}
                  country="Egypt"
                  size={product?.weight}
                  color={product?.colors}
                  material={product?.material}
                />
              </div>
            </div>
            <div
              className="row"
              style={{
                backgroundColor: "white",
                marginTop: 15,
                padding: 8,
                paddingLeft: 20,
                boxShadow: "0 2px 5px 0 #ededed",
                borderRadius: 4,
              }}
            >
              <ShowReview id={id} averageRating={product?.averageRating} />
            </div>
          </div>
          <div className="col-3 single-secondcol ms-0">
            <Aside2
              productImg={product?.image}
              price={product?.price}
              name={product?.name}
            />
          </div>
        </div>
      </div>
      
      {/* </div>            */}
      <Footer1 />
    </>
  );
}
