import React from "react";
import { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../../providers/AuthProviders";
import { useState } from "react";
import { useEffect } from "react";

const MyPaymentHistory = () => {
  const [paymentHistories, setPaymentHistories] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const response = await fetch(
          `https://inner-light-server-imtiaz-ahmmed.vercel.app/payments?email=${user.email}`
        );
        const data = await response.json();
        setPaymentHistories(data);
      } catch (error) {
        console.error("Error fetching enrolled classes:", error);
      }
    };

    fetchPaymentHistory();
  }, [user.email]);
  return (
    <div>
      <Slide direction="right">
        <h1 className="text-sky-600 font-bold text-center text-5xl mb-8">
          My Payment History
        </h1>
      </Slide>
      <Helmet>
        <title>Inner Light | My Payment History</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Info</th>

              <th>Price</th>

              <th>Transaction ID</th>
              <th>Enrollment date</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistories.map((paymentHistory, index) => (
              <tr key={paymentHistory._id.$oid}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={paymentHistory.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {paymentHistory.className}
                      </div>
                      <div className="text-sm opacity-50">
                        with {paymentHistory.instructorName}
                      </div>
                    </div>
                  </div>
                </td>

                <td> {paymentHistory.price}</td>
                <td> {paymentHistory.transactionId}</td>
                <td> {paymentHistory.date}</td>
              </tr>
            ))}

            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPaymentHistory;
