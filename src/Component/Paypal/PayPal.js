import React, { useRef, useEffect } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next'

export default function Paypal(props) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: props.total + 20,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          props.creatNewOrder();
          // console.log(order);
        },
        onError: (err) => {
          console.log("hamasa order");
          console.log(err);
          console.log("da5al fe al error");
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <>
      <div className="d-flex">
        <CheckCircleRoundedIcon style={{ color: "#a3cf62" }} />
        <p className="fw-bold ms-1">3.{t("PAYMENT METHOD")}</p>
      </div>
      <div>
        <div ref={paypal}></div>
      </div>
    </>
  );
}
