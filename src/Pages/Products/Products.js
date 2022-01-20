import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetChildCategory,
  GetParentCategory,
} from "../../Store/actions/categories/category";

import { axiosInstance } from "../../network";
import { useTranslation } from "react-i18next";

// styles
import "./Products.scss";
// components
import ImageContainer from "../../Component/ImageContainer/ImageContainer";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader2 from "../../Component/Headers/LowerHeader2/LowerHeader2";
import SlideWith2Imgs from "../../Component/SliderWith2Imgs/SlideWith2Imgs";
import Footer1 from "../../Component/Footer1/Footer1";
import CircleComponent from "../../Component/FilterComponent/CircleComponent";
import SearchComponent from "../../Component/FilterComponent/SearchComponent";
import SquareComponent from "../../Component/FilterComponent/SquareComponent";
import ProductHeader from "../../Component/ProductHeader/ProductHeader";
import Paganation from "../../Component/PaganationComponent/Paganation";
import CardWithHiddenButton from "../../Component/CardWithHidenButton/CardWithHiddenButton";
import RatingSlider from "../../Component/Price Rating Slider/RatingSlider";
import JumiaInfo from "../../Component/Jumia-info/JumiaInfo";
import Carsoual from "../../Component/Carsoual/Carsoual";
// images
import image1 from "../../assets/imgs/ads.jpeg";
import image2 from "../../assets/imgs/6253007438669408234.jfif";
import image3 from "../../assets/imgs/Single_floor_1152x252_px_copy.jpg";
import image4 from "../../assets/imgs/watch.jpg";
import r1 from "../../assets/imgs/Rate1.PNG";
import r2 from "../../assets/imgs/Rate2.PNG";
import r3 from "../../assets/imgs/Rate3.PNG";
import r4 from "../../assets/imgs/Rate4.PNG";
import r5 from "../../assets/imgs/Rate5.PNG";
import circle from "../../assets/imgs/circle.PNG";
import square from "../../assets/imgs/sq.PNG";
import jumiaexpress from "../../assets/imgs/jumia-ex.PNG";
import i10 from "../../assets/imgs/p10.PNG";
import i20 from "../../assets/imgs/p20.PNG";
import i30 from "../../assets/imgs/p30.PNG";
import i40 from "../../assets/imgs/p40.PNG";
import i50 from "../../assets/imgs/p50.PNG";
import i60 from "../../assets/imgs/p60.PNG";
import i80 from "../../assets/imgs/p80.PNG";

// material ui
import WindowIcon from "@mui/icons-material/Window";
import HomeIcon from "@mui/icons-material/Home";
import {
  avergeRatingProducts,
  getAllProductsPaganation,
  sortPrice,
  sortProductRating,
} from "../../Store/actions/ProductActions/GetAllProductsPagination";
import { Link } from "react-router-dom";

export default function Products() {
  const { t, i18n } = useTranslation();
  let products = useSelector((state) => state.AllProductsPagination);
  // let Allproducts = useSelector((state) => state.AllProducts);

  // let [ratingproducts, setratingproducts] = useState([])
  // if (ratingproducts.length != 0) {
  //   products = ratingproducts
  // }
  const category = useSelector((state) => state.category);
  // console.log("ratingproductsratingproducts", ratingproducts);

  const categoryChildfrmdb = useSelector((state) => state.categoryChild);
  const [pageNum, setpageNum] = useState(1);

  let catparent = localStorage.getItem("category") || "";
  let categoryChild = localStorage.getItem("categoryChild") || "";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetParentCategory());
    dispatch(GetChildCategory());
  }, []);

  useEffect(() => {
    dispatch(getAllProductsPaganation(pageNum, catparent, categoryChild));
  }, [pageNum]);

  const pagFun2 = (e) => {
    console.log("event value", e.target.innerText);
    setpageNum(e.target.innerText);
    console.log(pageNum);
  };

  const sortPricee = (sign) => {
    // featured
    dispatch(sortPrice(catparent, sign));
  };

  const resetCategry = (cat) => {
    localStorage.setItem("category", cat);
    catparent = localStorage.getItem("category");
    // console.log("catparentcatparentcatparent", catparent);
    dispatch(getAllProductsPaganation(pageNum, catparent, ""));
  };

  const resetCategryChild = (cat) => {
    localStorage.setItem("categoryChild", cat);
    catparent = localStorage.getItem("category");
    categoryChild = localStorage.getItem("categoryChild");
    console.log("catparentcatparentcatparent", catparent);
    console.log("categoryChildcategoryChildcategoryChild", categoryChild);
    dispatch(getAllProductsPaganation(pageNum, catparent, categoryChild));
  };
  // popularty
  const setratingproducts = (id) => {
    dispatch(avergeRatingProducts(catparent, id));
  };
  //Sort rating
  const sortProductRatings = () => {
    dispatch(sortProductRating(catparent));
  };
  return (
    <div>
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader2 />
      <div className="container ProductPage-img">
        <ImageContainer img={image2} />
      </div>
      <SlideWith2Imgs />

      <div className="container mt-4 card">
        <div className="row bg-white p-3">
          <div className="col-md-4 ProductPage-img">
            <ImageContainer img={image4} wid="w-100" />
          </div>
          <div className="col-md-4 ProductPage-img">
            <ImageContainer img={image4} wid="w-100" />
          </div>
          <div className="col-md-4 ProductPage-img">
            <ImageContainer img={image4} wid="w-100" />
          </div>
        </div>
      </div>
      <div className="container d-block mx-auto p-3 mt-3 bg-white card mb-3 ProductPage-img">
        <ImageContainer img={image3} wid="w-100" color={"#fff"} />
      </div>
      {/* Carsoule component */}

      <div className="container card mb-3">
        <Carsoual products={products} />
      </div>
      {/* FILTER AND PRODUCT SECTION */}
      <div className="container">
        <div className="row ">
          {/* FILTER SECTION */}
          <div className="col-md-3">
            <div className="row">
              <div className="col-11 p-3 card">
                <h5 className="mb-3">{t("CATEGORY")}</h5>
                <div className="product-allproduct-productType border-bottom">
                  {/* <h5 className="product-allProduct-productType-header">
                    {catparent}
                  </h5> */}

                  {category.map((cat, index) => {
                    return (
                      <Link
                        to="/products"
                        className=" text-decoration-none text-dark"
                        key={index}
                        onClick={() => resetCategry(`${cat}`)}
                      >
                        <p className="product-allProduct-productType-item ">
                          {cat}
                        </p>
                      </Link>
                    );
                  })}
                </div>
                <h5 className="mb-3 mt-3">{t("SUBCATEGORY")}</h5>
                <div className="product-allproduct-productType border-bottom">
                  {/* <h5 className="product-allProduct-productType-header">
                    {catparent}
                  </h5> */}

                  {categoryChildfrmdb.map((cat, index) => {
                    return (
                      <Link
                        to="/products"
                        className=" text-decoration-none text-dark"
                        key={index}
                        onClick={() => resetCategryChild(`${cat}`)}
                      >
                        <p className="product-allProduct-productType-item ">
                          {cat}
                        </p>
                      </Link>
                    );
                  })}
                </div>

                <h5 className="mb-3 mt-3">{t("PRODUCTRATING")}</h5>
                <CircleComponent
                  imgList={[r1, r2, r3, r4, r5]}
                  img={circle}
                  setratingproducts={setratingproducts}
                />
                {/* <hr /> */}

                {/* PRICE RATING */}
                {/* <RatingSlider />

                <h5 className="mb-3 my-4">{t("EPRESSSHIPPING")}</h5>
                <CircleComponent img={square} imgList={[jumiaexpress]} />
                <hr /> */}
                {/* BRAND */}
                {/* <SearchComponent heading={t("BRAND")} />
                <SquareComponent
                  textList={["Alcatel", "Amazfit", "Andoer", "Apple", "Armor"]}
                  img={square}
                />
                <hr /> */}
                {/* COLOR */}
                {/* <h5 className="mb-3">{t("COLOR")}</h5>
                <SquareComponent
                  textList={["Orang", "Black", "Brown", "Blue", "White"]}
                  img={square}
                />
                <hr /> */}

                {/* disabled */}
                {/* <hr />
                <SearchComponent heading={t("MEGAPIXCELS")} />
                <SquareComponent
                  textList={[0.0, 0.3, 1.3, 2, 2.0]}
                  img={square}
                />
                <hr />
                <h5>{t("OPTICALZOOM")}</h5>
                <SquareComponent textList={[0.0]} img={square} />
                <hr />
                <SearchComponent heading={t("SCREENSIZE")} />
                <SquareComponent
                  textList={[1.7, 2.4, 4.7, 5, 2.0]}
                  img={square}
                />
                <hr />
                <SearchComponent heading={t("SHIPPEDFROM")} />
                <SquareComponent
                  textList={["Shipped from Egypt", "Shipped From Abroad"]}
                  img={square}
                />
                <hr />
                <h5>{t("SELERFROM")}</h5>
                <CircleComponent imgList={[i80, i60, i40, i20]} img={circle} />
                <hr />
                <h5>{t("DISCOUNTPERCENTAGE")}</h5>
                <CircleComponent
                  imgList={[i50, i40, i30, i20, i10]}
                  img={circle}
                />
                <hr />
                <h5>{t("INTERNALMEMORY")}</h5>
                <SquareComponent textList={[0, 1, 2, 3, 4]} img={square} />
                <hr />
                <h5>INTERNAL MEMORY</h5>
                <SquareComponent
                  textList={[-3.5, 0, "FREE SIZE", "ONE-SIZE", "One Size"]}
                  img={square}
                /> */}

                {/* disabled */}
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          {/* PRODUCT SECTION */}
          <div className="col-md-9 card">
            <ProductHeader
              cat={catparent}
              sortPrice={sortPricee}
              setratingproducts={setratingproducts}
              sortProductRatings={sortProductRatings}
            />
            <hr />
            {/* displaying number of products  */}
            <div className="d-flex justify-content-between">
              <p className="text-muted">
                {products?.length} {t("ProductsFound")}
              </p>
              {/* Mateial icon */}
              <p className="d-flex mx-2">
                <a href="#" className="text-decoration-none text-muted mx-2">
                  <HomeIcon />
                </a>
                <a href="#" className="text-decoration-none text-warning ">
                  <WindowIcon />
                </a>
              </p>
            </div>
            <hr />

            <div className="row my-1">
              {/* ratingproducts.length>0?ratingproducts.map((product, index) => {
                return (
              <div key={index} className="col-md-4 mb-2">
                <CardWithHiddenButton key={index} product={product} />
              </div>
              );
              }) : */}
              {products.map((product, index) => {
                return (
                  <div key={index} className="col-md-4 mb-2">
                    <CardWithHiddenButton key={index} product={product} />
                  </div>
                );
              })}
            </div>
            {/* <div className="row my-1">
              {products.map((product, index) => {
                return (
                  <div key={index} className="col-md-4 mb-2">
                    <CardWithHiddenButton key={index} product={product} />
                  </div>
                );
              })}
            </div> */}
            <div className="d-flex justify-content-center mt-5">
              <Paganation pagFun2={pagFun2} />
            </div>
          </div>
        </div>
      </div>

      {/* <ProductsCard pic={image2} /> */}
      {/* <CardHeader /> */}
      <JumiaInfo />
      <Footer1 />
    </div>
  );
}
