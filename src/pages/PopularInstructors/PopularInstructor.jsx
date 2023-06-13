import React from "react";

const PopularInstructor = ({ popularInstructor }) => {
  const { instructorName, instructorImage, totalClasses } = popularInstructor;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img className="h-72 w-full" src={instructorImage} alt="Class" />
        </figure>
        <div
          className="card-body  "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="  text-center text-lime-600 text-2xl ">
            {instructorName}
          </h2>

          <p className="text-lg text-center text-sky-600 font-bold border-y-2">
            {totalClasses} Classes
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
