import React from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";

const SingleClass = ({ allClass }) => {
  const { className, classImage, price, instructorName, availableSeats } =
    allClass;
  const { user } = useContext(AuthContext);
  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        title: "You have to log in first to Select",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img className="h-72 w-full" src={classImage} alt="Class" />
        </figure>
        <div className="card-body" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="card-title  text-lime-600 text-2xl ">{className}</h2>
          <p className=" text-sky-400 font-bold">With {instructorName}</p>
          <p className="text-base text-sky-600 font-bold">
            Available Seats : {availableSeats}
          </p>
          <p className="text-lg text-sky-600 font-bold">Price : {price} $</p>
        </div>
        <div className="card-actions justify-center p-5">
          <button
            onClick={handleSelect}
            className="btn w-full text-white bg-sky-600 hover:bg-sky-400 rounded-lg border-none text-md "
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
