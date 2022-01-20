import React, { useEffect } from "react";
import AddressDetails from "../../Component/AddressDetails/AddressDetails";
import CheckoutOrder from "../../Component/CheckoutOrder/CheckoutOrder";
import DelivaryMethod from "../../Component/DelivaryMethod/DelivaryMethod";
import DelivaryMethod2 from "../../Component/DelivaryMethod2/DelivaryMethod2";
import CheckHeader from "../../Component/Headers/CheckoutHeader/CheckHeader";
import Paymentmethod from "../../Component/Paymentmethod/Paymentmethod";
import PaymentMethod2 from "../../Component/PaymentMethod2/PaymentMethod2";
import Paypal from "../../Component/Paypal/PayPal";
import { useCart } from "react-use-cart";
import { createOrder } from "../../Store/actions/OrdrActions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { axiosInstance } from "../../network";
import { useNavigate } from "react-router-dom";

export default function NextCheckout() {
  const { items, emptyCart } = useCart();
  const products = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const creatNewOrder = async () => {
    console.log("create New order");
    const res = await axiosInstance.post(`/orders`, {
      items,
      tax: 10,
      shippingFee: 10,
    });
    if (res) {
      console.log("create New order if");
      console.log("res res", res);
    } else {
      console.log("create New order else");
      console.log("errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
    }
    emptyCart();

    navigate("/orders");
  };
  //   async function handleCreateNewGame() {
  //         const data = this.state.data;
  //         const res = await axios.post('api/game/create', {...data});
  //         if(res.status === 200) {
  //             const game_id = res.data.id;
  //             window.location.replace(`/game/${game_id}`); //You might want to use something like history.push() instead
  //         } else {
  //             alert('Create ERR');
  //         }
  //     }
  //   handleClick (event) {
  //     axios.post('/myUrl')
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //  }
  const { cartTotal } = useCart();
  return (
    <>
      <CheckHeader />
      <div className="container-fluid mt-5  justify-content-center  ">
        <div className="row  mb-5 justify-content-center  ">
          <div className="col-lg-6 ">
            <AddressDetails />
            <DelivaryMethod2 />

            <Paypal total={cartTotal} creatNewOrder={creatNewOrder} />
          </div>
          <div className="col-lg-3">
            <CheckoutOrder />
            {/* <CheckoutHelp/> */}
          </div>
        </div>
      </div>
    </>
  );
}
