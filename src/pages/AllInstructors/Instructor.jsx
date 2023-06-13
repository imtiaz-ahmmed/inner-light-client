import React from "react";
import { Link } from "react-router-dom";

const Instructor = ({ instructor }) => {
  const {
    instructorName,
    instructorImage,
    totalClasses,
    instructorEmail,
    className,
  } = instructor;
  return (
    <div>
      <div className="card card-compact h-full w-96 bg-base-100 shadow-xl">
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
          <h4 className="  text-center text-gray-400 text-lg ">
            {instructorEmail}
          </h4>

          <p className="text-lg text-center text-sky-600 font-bold border-y-2">
            Taken {totalClasses} Classes
          </p>
          <p className="text-lg text-center text-orange-500">Classes are: </p>
          <ul className="text-center ">
            {Object.values(className).map((classNo, index) => (
              <li className="text-stone-600 font-bold" key={index}>
                {classNo}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-actions justify-center p-5">
          <Link to={`/all-instructors/instructor/${instructorName}`}>
            <button className="btn w-full text-white bg-sky-600 hover:bg-sky-400 rounded-lg border-none text-md ">
              View Classes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
