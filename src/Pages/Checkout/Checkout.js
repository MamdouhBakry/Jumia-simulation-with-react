import React from "react";
import AddressDetails from "../../Component/AddressDetails/AddressDetails";
import CheckoutHelp from "../../Component/CheckoutHelp/CheckoutHelp";
import CheckoutOrder from "../../Component/CheckoutOrder/CheckoutOrder";
import CheckHeader from "../../Component/Headers/CheckoutHeader/CheckHeader";
import DelivaryMethod from "../../Component/DelivaryMethod/DelivaryMethod";
import Paymentmethod from "../../Component/Paymentmethod/Paymentmethod";

export default function Checkout() {
  return (
    <div>
      <div>
        <CheckHeader />
      </div>
      <div
        className="container-fluid pt-5  justify-content-center  "
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="row  pb-5 justify-content-center  ">
          <div className="col-lg-6 ">
            <AddressDetails />
            <DelivaryMethod />
            {/* <Paymentmethod/> */}
          </div>
          <div className="col-lg-3">
            <CheckoutOrder />
            {/* <CheckoutHelp/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
