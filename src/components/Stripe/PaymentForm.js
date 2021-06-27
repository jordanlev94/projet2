import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import "./Payment.css";
import { Context } from "../../ContextProvider";

import Lottie from "react-lottie";
import animationData from "../Lottie/9912-payment-success.json";
import animationData2 from '../Lottie/9913-payment-failed.json'


const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const context = React.useContext(Context);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData2: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    const sum = context.sum;

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else{
        <Lottie options={defaultOptions2} height={400} width={400} />
    }
  };

  return (
    <div className="cadrepaymentt">
      <>
        {!success ? (

        
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button className="btncss">Pay</button>
          </form>
        ) : (
          <div>
            <div>
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
            <div className="ggpayment">
              <h2>Félicitation pour votre achat!</h2>
            </div>
            <div>
              <h3>___</h3>
            </div>
          </div>
         
        )}
      </>
       
    </div>
  );
}
