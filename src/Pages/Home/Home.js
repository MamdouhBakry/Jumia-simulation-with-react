import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MessengerCustomerChat from "react-messenger-customer-chat";

import { ProductById } from "../../Store/actions/ProductActions/GetSingleProduct";

//import UperHeader from "../../Component/UperHeader.js/UperHeader";
import ImageContainer from "../../Component/ImageContainer/ImageContainer";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import Footer1 from "../../Component/Footer1/Footer1";
import JumiaInfo from "../../Component/Jumia-info/JumiaInfo";
import CatList from "../../Component/CatList/CatList";
import Sliderwith4imgs from "../../Component/Sliderwith4imgs/Sliderwith4imgs";
import SmallCard from "../../Component/SmallCard/SmallCard";
import SeeAll from "../../Component/SeeAll/SeeAll";
import { getAllProducts } from "../../Store/actions/ProductActions/getAllProducts";

import Carsoual from "../../Component/Carsoual/Carsoual";
import ProductCard from "../../Component/ProductCard/ProductCard";
import TextCenter from "../../Component/TextCenter/TextCenter";
import SmallImagesContainer from "../../Component/SmallImagesContainer/SmallImagesContainer";

// images
import image1 from "../../assets/imgs/ads.jpeg";
import image2 from "../../assets/Homepage/bank.jpg";
import image11 from "../../assets/Homepage/Artboard_1.jpg";
// import image2 from "../../assets/Homepage/Artboard_1_copy_2-2.jpg";
import slider1 from "../../assets/Homepage/slider1.jpg";
import slider2 from "../../assets/Homepage/slider3.png";
import slider3 from "../../assets/Homepage/slider3.jpg";
import slider4 from "../../assets/Homepage/Slider-Desktop-EN__copy_5.jpg";
import padge1 from "../../assets/Homepage/padge1.png";
import padge2 from "../../assets/Homepage/padge2.png";
import padge3 from "../../assets/Homepage/padge3.png";
import padge4 from "../../assets/Homepage/padge4.png";
import card1 from "../../assets/Homepage/Snooze_-_Floor-Desktop_-EN.jpg";
import card1x from "../../assets/Homepage/Akai-_Floor-Desktop_-EN.jpg";
import card2 from "../../assets/Homepage/EN(1).jpg";
import card3 from "../../assets/Homepage/EN(2).jpg";
import card4 from "../../assets/Homepage/Floor-Desktop-en_copy_2.jpg";
import card5 from "../../assets/Homepage/Floor-Desktop-en_copy_18.jpg";
import card6 from "../../assets/Homepage/Icon_260_x_144_-(6).png";
import ChidCare from "../../assets/Homepage/Mother_Care-1152x252_-EN.jpg";
import JumiaFood1 from "../../assets/Homepage/Floor-Desktop-en_copy-(1).jpg";
import JumiaFood2 from "../../assets/Homepage/Floor-Desktop-en_copy_5.jpg";
import Pickforyou from "../../assets/Homepage/Pickfor you.jpg";
import personalcare from "../../assets/Homepage/personalcare.jpg";
import flash from "../../assets/Homepage/flash.gif";
import subscribe1 from "../../assets/Homepage/subscribe.jpg";
import subscribe2 from "../../assets/Homepage/subscribe.png";
import L1 from "../../assets/Homepage/Collection__260_x_144(1).png";
import L2 from "../../assets/Homepage/Collection__260_x_144(2).png";
import L3 from "../../assets/Homepage/Collection__260_x_144(3).png";
import L4 from "../../assets/Homepage/Collection__260_x_144(4).png";
import L5 from "../../assets/Homepage/Collection__260_x_144(5).png";
import L6 from "../../assets/Homepage/Collection__260_x_144(6).png";
import L7 from "../../assets/Homepage/Collection__260_x_144(7).png";
import L8 from "../../assets/Homepage/Collection__260_x_144.jpg";
import L9 from "../../assets/Homepage/Collection__260_x_144.png";
import L10 from "../../assets/Homepage/Icon_260_x_144_-(6).png";
import L11 from "../../assets/Homepage/Collection__260_x_144(1).png";
import L12 from "../../assets/Homepage/Collection__260_x_144_copy.png";
import x1 from "../../assets/Homepage/x (1).png";
import x2 from "../../assets/Homepage/x (2).png";
import x3 from "../../assets/Homepage/x (3).png";
import x4 from "../../assets/Homepage/x (4).png";
import x5 from "../../assets/Homepage/x (5).png";
import x6 from "../../assets/Homepage/x (6).png";
import x7 from "../../assets/Homepage/x (7).png";
import x8 from "../../assets/Homepage/x (8).png";
import x9 from "../../assets/Homepage/x (9).png";
import x10 from "../../assets/Homepage/x (10).png";
import x11 from "../../assets/Homepage/x (11).png";
import x12 from "../../assets/Homepage/x (12).png";
import y1 from "../../assets/Homepage/y (1).png";
import y2 from "../../assets/Homepage/y (2).png";
import y3 from "../../assets/Homepage/y (3).png";
import y4 from "../../assets/Homepage/y (4).png";
import y5 from "../../assets/Homepage/y (5).png";
import y6 from "../../assets/Homepage/y (6).png";
import z1 from "../../assets/Homepage/z (1).jpg";
import z2 from "../../assets/Homepage/z (2).jpg";

export default function Home() {
  const products = useSelector((state) => state.AllProducts);
  const singleproduct = useSelector((state) => state.SingleProduct);
  const items = products.slice(0, 6);

  console.log("productsnnnnnnnnnnnnnnnnnnnn", products);
  // console.log("singleproductnnnnnnnnnnnnnnnnnn", singleproduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // dispatch(ProductById('61a13f2a9b6b3cd7f9b46089'));
  }, []);

  const women = products.filter(
    (product) => product.category === "Women" || product.category === "مرأه "
  );
  const womenProduct = women.slice(0, 6);
  const men = products.filter(
    (product) => product.category === "Men" || product.category === "رجال "
  );
  const menProduct = men.slice(0, 6);
  const gaming = products.filter(
    (product) =>
      product.categoryparent === "Gaming" || product.categoryparent === "ألعاب"
  );
  const gamesProducts = gaming.slice(0, 6);
  const smartPhone = products.filter(
    (product) =>
      product.categoryparent === "smartPhone" ||
      product.categoryparent === "موبيلات"
  );
  const Detergent = products.filter(
    (product) =>
      product.categoryparent === "Detergent" ||
      product.categoryparent === "منظفات"
  );
  const smartPhoneProducts = smartPhone.slice(0, 6);
  console.log("women", women);
  // console.log("men", men);
  // console.log("gamesProduct",gamesProducts)
  // console.log("smartPhoneProducts",smartPhoneProducts)

  const { t, i18n } = useTranslation();

  // home links
  let categoryChild = localStorage.getItem("categoryChild") || "";
  let catparent = localStorage.getItem("category") || "";

  const resetCategryChild = (catParnt, catChild) => {
    localStorage.setItem("categoryChild", catChild);
    localStorage.setItem("category", catParnt);
  };

  return (
    <div className="bg-light">
      <div className="container-fluid px-0 mx-0 justify-content-center text-center">
      <ImageContainer img={image1} color={"#a42924"}  />
      </div>
      <MiddeleHeader />
      <LowerHeader />
      <div className="container pe-5  ">
        {/* under header */}
        <div className="row">
          {/* left */}
          <div className="col-lg-2 card rounded ">
            <CatList />
          </div>
          {/* middle */}
          <div className="col-lg-8  rounded  ">
            <Sliderwith4imgs
              slider1={slider1}
              slider2={slider2}
              slider3={slider3}
              slider4={slider4}
            />
          </div>
          {/* right */}
          <div className="col-lg-2 d-lg-block  d-sm-none rounded ps-0 pe-0 ">
            <div className="mb-3 ">
              <ImageContainer img={image2} />
            </div>
            <div className="">
              <ImageContainer img={image11} />
            </div>
          </div>
        </div>
      </div>

      {/* padge */}
      <div className=" container ">
        <div className="row  mt-3">
          <Link to="/AboutUs" className="col-md-3 col-sm-6 col-6 p-0">
            <SmallCard statement={t("aboutus")} pic={padge1} />
          </Link>
          <Link to="/contact" className="col-md-3 col-sm-6 col-6 p-0">
            <SmallCard statement={t("contactUs")} pic={padge2} />
          </Link>

          <Link to="/Express" className="col-md-3 col-sm-6 col-6 p-0">
            <SmallCard statement={t("Express")} pic={padge3} />
          </Link>
          <SmallCard
            statement={t("Orange Points")}
            pic={padge4}
            className="col-md-3 col-sm-6 col-6 "
          />
        </div>
      </div>

      {/* caresoul products */}
      <div className="container card mt-3">
        <div className="row">
          <div className="col-12  pt-2 ">
            <p className="fw-bold fs-5 ps-2">{t("TopSellingItems")}</p>
          </div>
        </div>

        <div className=" HomePage-img  row p-1">
          <div className="col ">
            <Carsoual products={products} />
          </div>
        </div>
      </div>
      {/* <!-- Start 10.10 TOP DEALS section --> */}
      <div className="container  card mt-4">
        <TextCenter title={t("TopDeals")} />
        <div className=" HomePage-img  row p-1">
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={card1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={card1x} wid="w-100" />
          </div>
        </div>
      </div>

      {/* <!--  Execlusive Today section --> */}

      <div className="container card mt-4">
        <TextCenter title={t("ExeclusiveToday")} />
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={card2} wid="w-100" />
          </div>
        </div>
      </div>

      {/* <!--  first Ubder Execlusive Today section --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={card3} wid="w-100" />
          </div>
        </div>
      </div>
      {/* <!--  first Ubder Execlusive Today section --> */}
      <div className="container  card mt-4">
        <div className=" HomePage-img  row py-2 px-1">
          <div className="col HomePage-imgElementNON ">
            <ImageContainer img={card4} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON ">
            <ImageContainer img={card5} wid="w-100" />
          </div>
        </div>
      </div>

      {/* Weakend Clearnace | Limited Stock */}
      <div className="container mt-4 card">
        <SeeAll
          resetCategryChild={() => resetCategryChild("Detergent", "")}
          color="#FFFFFF"
          background="#B60000"
          title={t("WeakendClearnace")}
        />
        <div className="row mt-3">
          {Detergent.map((item, index) => {
            return (
              <div className="col-md-2 mb-4" key={index}>
                <Link to="/singleProduct">
                  <ProductCard product={item} />
                </Link>

                {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>
      </div>

      {/*  NEW OFFERS EVERYDAY ON EVERYTHING */}
      <div className="container  card mt-4 text-center">
        <TextCenter title={t("NEWOFFERS")} />
        <SmallImagesContainer
          resetCategryChild1={() => resetCategryChild("", "Men")}
          resetCategryChild2={() => resetCategryChild("", "Women")}
          resetCategryChild3={() => resetCategryChild("smartPhone", "")}
          resetCategryChild4={() => resetCategryChild("Electronic", "")}
          resetCategryChild5={() => resetCategryChild("laptop", "")}
          text1={t("MenFashion")}
          text2={t("WomenFashion")}
          text3={t("MobileAccessories")}
          text4={t("LaptopAccessories")}
          text5={t("TVsGaming")}
          text6={t("HomeAppliances")}
          img1={x6}
          img2={x10}
          img3={x7}
          img4={x5}
          img5={x9}
          img6={x2}
        />

        {/* iiiiiiiiiiiiii */}
        <SmallImagesContainer
          text1={t("Beautyperfumes")}
          text2={t("Sporting")}
          text3={t("KidsBaby")}
          text4={t("CarEssentials")}
          text5={t("FoodBeverage")}
          text6={t("HouseholdCare")}
          img1={x11}
          img2={x8}
          img3={x4}
          img4={x12}
          img5={x1}
          img6={x3}
        />
      </div>

      {/* <!-- <!-- Mother Care --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={ChidCare} wid="w-100" />
          </div>
        </div>
      </div>

      {/* <!--  MORE DEALS & OFFERS --> */}
      <div className="container  card mt-4">
        <TextCenter title={t("MOREDEALS")} />
        <div className=" HomePage-img  row p-1">
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={JumiaFood1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={JumiaFood2} wid="w-100" />
          </div>
        </div>
      </div>

      {/*Women's Sweatshirts | Up to 50% OFF */}
      <div className="container mt-4 card ">
        <SeeAll
          resetCategryChild={() => resetCategryChild("", "Women")}
          color="black"
          background="#C7C7CD"
          title={t("Women'sFashion")}
        />
        <div className="row mt-3">
          {womenProduct.map((item, index) => {
            return (
              <div className="col-md-2 mb-4" key={index}>
                <ProductCard product={item} />
                {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>
      </div>


      {/* <!--  Pick For You --> */}
      <div className="container  card mt-3 px-4 pb-1">
        <TextCenter title={t("PickForYou")} />
        <div className="   row ">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={Pickforyou} wid="w-100" />
          </div>
        </div>
      </div>

      {/*Men's Sweatshirts | Up to 50% OFF */}
      <div className="container mt-4 card">
        <SeeAll
          resetCategryChild={() => resetCategryChild("", "Men")}
          color="black"
          background="#C7C7CD"
          title={t("Men'sFashion")}
        />
        <div className="row mt-3">
          {menProduct.map((item, index) => {
            return (
              <div className="col-md-2 mb-4" key={index}>
                <ProductCard product={item} />
                {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>
      </div>


      <div className="container  card mt-4">
        <SmallImagesContainer
          img1={y1}
          img2={y2}
          img3={y3}
          img4={y4}
          img5={y5}
          img6={y6}
        />
      </div>

      {/* <!-- <!-- personalcare --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={personalcare} wid="w-100" />
          </div>
        </div>
      </div>



      {/*Games | Up to 30% OFF */}
      <div className="container mt-4 card">
        <SeeAll
          resetCategryChild={() => resetCategryChild("Gaming", "")}
          color="black"
          background="#C7C7CD"
          title={t("Games")}
        />
        <div className="row mt-3">
          {gamesProducts.map((item, index) => {
            return (
              <div className="col-md-2 mb-4" key={index}>
                <ProductCard product={item} />
                {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>
      </div>
      {/* <!-- <!-- personalcare --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={personalcare} wid="w-100" />
          </div>
        </div>
      </div>

      {/*Most Liked Products*/}
      <div className="container mt-4 card">
        <SeeAll
          className="container-fluid"
          color="black"
          background="#C7C7CD"
          title={t("MostLikedProducts")}
        />
        <div className="row mt-3">
          {items.map((item, index) => {
            return (
              <div className="col-md-2 mb-4" key={index}>
                <ProductCard product={item} />
                {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>
      </div>



      {/* 
      <div className="container  card mt-4">
        <SmallImagesContainer img1={card6}
          img2={card6}
          img3={card6}
          img4={card6}
          img5={card6}
          img6={card6}/>
      </div> */}

      {/* <!-- <!-- personalcare --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={flash} wid="w-100" />
          </div>
        </div>
      </div>

      {/*SmartPone */}
      <div className="container mt-4 card">
        <SeeAll
          resetCategryChild={() => resetCategryChild("smartPhone", "")}
          color="black"
          background="#C7C7CD"
          title={t("SmartPone")}
        />
        <div className="row mt-3">
          {smartPhoneProducts.map((item, index) => {
            return (
              <div className="col-md-2 mb-4" key={index}>
                <ProductCard product={item} />
                {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>
      </div>

      {/* <!--   Subscribe Now & Enjoy --> */}
      <div className="container  card mt-4">
        <TextCenter title={t("SubscribeNow")} />
        <div className=" HomePage-img  row p-1">
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={subscribe1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={subscribe2} wid="w-100" />
          </div>
        </div>
      </div>

      {/* New On Jumia */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title={t("NewOnJumia")} />
        <div className="row mt-3">
          {items.map((item, index) => {
            return (
              <div className="col-md-2 mb-4" key={index}>
                <ProductCard product={item} />
                {/* {console.log("item", item)} */}
              </div>
            );
          })}
        </div>
      </div>

      {/* <!-- Start 10.10 TOP DEALS section --> */}
      <div className="container  card mt-4">
        <div className=" HomePage-img  row ">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={z1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={z2} wid="w-100" />
          </div>
        </div>
      </div>

      {/*  Be Prepared for winter */}
      <div className="container  card mt-4 text-center">
        <TextCenter title={t("BePreparedforwinter")} />
        <SmallImagesContainer
          text1={t("menAutumnFashon")}
          text2={t("AllInBlack")}
          text3={t("DressLikeaBoss")}
          text4={t("YourStyleRules")}
          text5={t("BabyComfort")}
          text6={t("WeddingHome")}
          img1={L1}
          img2={L2}
          img3={L12}
          img4={L4}
          img5={L5}
          img6={L6}
        />

        {/* iiiiiiiiiiiiii */}
        <SmallImagesContainer
          text1={t("BusyMums")}
          text2={t("BreakfastEssentials")}
          text3={t("HolidayBreak")}
          text4={t("CaptureYourMoments")}
          text5={t("WomenAutumnFashon")}
          text6={t("MoreCollections")}
          img1={L7}
          img2={L8}
          img3={L9}
          img4={L11}
          img5={L10}
          img6={L3}
        />
      </div>

      <JumiaInfo />
      <Footer1 />
      <MessengerCustomerChat
        className="hidemsg"
        pageId="106293271909112"
        appId="424217142629496"
      />
    </div>
  );
}
