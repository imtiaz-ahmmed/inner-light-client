import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import Instructor from "./Instructor";
const AllInstructors = () => {
  const [allInstructors, setAllInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/all-instructors")
      .then((res) => res.json())
      .then((data) => {
        setAllInstructors(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="pt-24">
      <Helmet>
        <title>Inner Light | Instructors</title>
      </Helmet>
      <div className="bg-orange-50">
        {/* Titlle */}
        <div className="text-center  p-4">
          <Slide direction="left">
            <h1 className="text-sky-600 font-bold text-5xl">Instructors</h1>
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
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-20 md:px-32 py-10 ">
            {allInstructors.map((instructor) => {
              return (
                <Instructor
                  key={instructor._id}
                  instructor={instructor}
                ></Instructor>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllInstructors;
