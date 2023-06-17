import React from "react";
import { Helmet } from "react-helmet";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useEffect } from "react";
import Class from "./SingleClass";
import SingleClass from "./SingleClass";
const AllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://inner-light-server-imtiaz-ahmmed.vercel.app/all-classes")
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="pt-32">
      <Helmet>
        <title>Inner Light | Classes</title>
      </Helmet>
      <div className="bg-slate-50">
        {/* Titlle */}
        <div className="text-center  p-4">
          <Slide direction="right">
            <h1 className="text-sky-600 font-bold text-5xl">Classes</h1>
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
          <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-20  md:px-32 py-10 ">
            {allClasses.map((allClass) => {
              return (
                <SingleClass
                  key={allClass._id}
                  allClass={allClass}
                ></SingleClass>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllClasses;
