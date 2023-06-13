import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import PopularInstructor from "./PopularInstructor";
const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        setPopularInstructors(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="bg-orange-50">
      {/* Titlle */}
      <div className="text-center  p-4">
        <Slide direction="left">
          <h1 className="text-sky-600 font-bold text-5xl">
            Popular Instructors
          </h1>
        </Slide>
      </div>

      {/* Main Content*/}

      {isLoading ? (
        <div className="text-center">
          <img
            className="h-40 w-40  mx-auto"
            src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-9  md:px-32 py-10 ">
          {popularInstructors.map((popularInstructor) => {
            return (
              <PopularInstructor
                key={popularInstructor._id}
                popularInstructor={popularInstructor}
              ></PopularInstructor>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PopularInstructors;
