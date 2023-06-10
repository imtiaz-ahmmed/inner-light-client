import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="w-80 h-80 text-indigo-400"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1683138420~exp=1683139020~hmac=6057c846d7443b9bff1abcf42ebfd490be9b4035a27d103afcef48ac508556b5"
          alt=""
        />
        <div className="max-w-md text-center mt-12">
          <Link
            to="/"
            className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
