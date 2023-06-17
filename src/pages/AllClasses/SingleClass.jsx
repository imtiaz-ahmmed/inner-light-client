import React from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SingleClass = ({ allClass }) => {
  const {
    _id,
    className,
    classImage,
    price,
    instructorName,
    availableSeats,
    totalSeats,
  } = allClass;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSelect = (allClass) => {
    console.log(allClass);
    if (user && user.email) {
      const selectedClass = {
        selectedClassId: _id,
        studentEmail: user.email,
        className,
        classImage,
        instructorName,
        availableSeats,
        totalSeats,
        price,
      };
      fetch(
        "https://inner-light-server-imtiaz-ahmmed.vercel.app/selectedClasses",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(selectedClass),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Selected Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Login First to Select!",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
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
            onClick={() => handleSelect(allClass)}
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
