import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const SingleInstructorDetails = () => {
  const [instructorData, setInstructorData] = useState(null);
  const { instructorName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/all-instructors/instructor/${instructorName}`
        );
        const data = await response.json();
        setInstructorData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [instructorName]);

  if (!instructorData) {
    return <div>Loading...</div>;
  }
  console.log(instructorData);
  return (
    <div className="pt-32 pb-10 ">
      <Helmet>
        <title>Inner Light | {instructorData.instructorName}</title>
      </Helmet>

      <div className=" mx-auto card card-compact w-96 bg-base-100 shadow-xl">
        <figure
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            className="h-72 w-full"
            src={instructorData.classImage}
            alt="Class"
          />
        </figure>
        <div
          className="card-body  "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="card-title  text-lime-600 text-2xl ">
            {instructorData.className}
          </h2>
          <p className=" text-sky-400 font-bold">
            With {instructorData.instructorName}
          </p>
          <p className="text-lg text-sky-600 font-bold">
            Price : {instructorData.price} $
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructorDetails;
