import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../Component/Loader/Loader";
import { LinearProgress } from "@material-ui/core";
import Orders from "../Pages/Orders/Orders";
import ProtectedRoutes from "./ProtectedRoutes";

export const Home = React.lazy(() => import("../Pages/Home/Home"));
export const AddProduct = React.lazy(() =>
  import("../Pages/AddProduct/AddProduct")
);
export const SideBar = React.lazy(() => import("../Pages/SideBar/SideBar"));
export const Checkout = React.lazy(() => import("../Pages/Checkout/Checkout"));
export const NextCheckOut = React.lazy(() =>
  import("../Pages/NextCheckout/NextCheckout")
);
export const UpdateReviewComponent = React.lazy(() =>
  import("../Component/UpdateReviewComponent/UpdateReviewComponent")
);
export const Products = React.lazy(() => import("../Pages/Products/Products"));
export const SingleProduct = React.lazy(() =>
  import("../Pages/SingleProduct/SingleProduct")
);
export const ContactUs = React.lazy(() =>
  import("../Pages/ContactUs/ContactUs")
);
export const Cart = React.lazy(() => import("../Component/Cart/Cart"));
export const Login = React.lazy(() => import("../Pages/Login/Login"));
export const Registration = React.lazy(() =>
  import("../Pages/Registration/Registration")
);
export const AboutUs = React.lazy(() => import("../Pages/AboutUs/AboutUs"));
export const Myaccount = React.lazy(() =>
  import("../Pages/Myaccount/Myaccount")
);
export const UpdatePassword = React.lazy(() =>
  import("../Component/UpdatePassword/UpdatePassword")
);
export const NotFound = React.lazy(() => import("../Pages/Notfound/Notfound"));
export const ProductAfterSearch = React.lazy(() =>
  import("../Pages/ProductsAfterSearch/ProductAfterSearch")
);
export const Order = React.lazy(() => import("../Pages/Orders/Orders"));
export const ReviewComponent = React.lazy(() =>
  import("../Component/RevieComponent/ReviewComponent")
);
export const SellerLogin = React.lazy(() => import("../Pages/SellerLogin/SellerLogin"));

export const Express = React.lazy(() => import("../Pages/Express/Express"));

// import Myaccount from "./Pages/Myaccount/Myaccount";

export const Beforelogin = () => {
  return (
    <>
      {/* it's responsible to show data before lazy loading loading */}
      {/* <Suspense fallback={<Loader/>}> */}
      <Suspense fallback={<LinearProgress />}>
        {/* first Match win */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          

          {/* Nested Routes and layout */}
          <Route path="/sidebar"  element={<SideBar />} >
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="aboutus"  element={<AboutUs />} />

          </Route>
          {/* Nested Routes and layout */}

          <Route path="/products" exact element={<Products />} />
          <Route exact element={<ProtectedRoutes />}>
            <Route exact path="/Myaccount" element={<Myaccount />} />
          </Route>
          <Route path="/singleProduct" exact element={<SingleProduct />} />
          <Route path="/singleProduct/:id" exact element={<SingleProduct />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/nextcheckout" exact element={<NextCheckOut />} />
          <Route path="/review/:id" exact element={<ReviewComponent />} />
          <Route
            path="/productaftersearch"
            exact
            element={<ProductAfterSearch />}
          ></Route>
          {/* <Route path="/orders" exact element={<Orders />}></Route> */}
          <Route exact element={<ProtectedRoutes />}>
            <Route exact path="/orders" element={<Orders />} />
          </Route>

          <Route path="/updatepassword" exact element={<UpdatePassword />} />
          <Route
            path="/updateReview"
            exact
            element={<UpdateReviewComponent />}
          />
          <Route path="/Seller" exact element={<SellerLogin />}></Route>
          <Route path="/Express" exact element={<Express/>}></Route>
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
