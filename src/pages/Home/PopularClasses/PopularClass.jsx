import React from "react";

const PopularClass = ({ popularClass }) => {
  const { className, classImage, price } = popularClass;
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
        <div
          className="card-body  "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="card-title  text-lime-600 text-2xl ">{className}</h2>
          <p className="text-lg text-sky-600 font-bold">Price : {price} $</p>
          {/* <div className="card-actions justify-end">
            <Link to={`/details/subCategory/${_id}`}>
              <button
                onClick={handleDetails}
                className="btn bg-green-400 hover:bg-green-500 rounded-lg border-none text-md "
              >
                View Details
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PopularClass;
