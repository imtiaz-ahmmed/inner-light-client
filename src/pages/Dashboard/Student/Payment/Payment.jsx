import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import useSelectedClass from "../../../../Hooks/useSelectedClass";

const stripePromise = loadStripe(
  "pk_test_51NJYSrKJgobm6GEDoHPwdkUCrpSum8qVnzkvKrpgEcmZJuFMW4C619XBHInRnbGqRa1hSe52aZQYPht0aai0Uq5900oHsXz4zU"
);

const Payment = () => {
  const [selectedClass] = useSelectedClass();
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const singleClass = selectedClass.find(
    (selectedClass) => selectedClass._id === id
  );
  const price = singleClass.price;

  return (
    <div>
      <Helmet>
        <title>Inner Light | Payment</title>
      </Helmet>
      <Slide direction="right">
        <h1 className="text-sky-600 font-bold text-5xl mb-8">Payment</h1>
      </Slide>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} singleClass={singleClass} />
      </Elements>
    </div>
  );
};

export default Payment;
