import React from "react";
import { Slide } from "react-awesome-reveal";
import PopularClass from "./PopularClass";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        setPopularClasses(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="bg-slate-50">
      {/* Titlle */}
      <div className="text-center  p-4">
        <Slide direction="right">
          <h1 className="text-sky-600 font-bold text-5xl">Popular Classes</h1>
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
          {popularClasses.map((popularClass) => {
            return (
              <PopularClass
                key={popularClass._id}
                popularClass={popularClass}
              ></PopularClass>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PopularClasses;
