import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckOutForm = ({ price, singleClass }) => {
  console.log(price);
  console.log(singleClass.className);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    const payment = {
      email: user?.email,
      transactionId: paymentIntent.id,
      price,
      date: new Date(),
      className: singleClass.className,
      classImage: singleClass.classImage,
      instructorName: singleClass.instructorName,
      totalSeats: singleClass.totalSeats,
      enrolledClassId: singleClass.selectedClassId,
    };
    axiosSecure.post("/payments", payment).then((res) => {
      console.log(res.data);
      if (res.data.result.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Details Saved on DB",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="w-96 border bg-stone-100 p-12 text-white rounded-3xl">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#000000",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-4 text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500 p-4 border-x-2 rounded-3xl bg-slate-200 mt-4">
          TransactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
