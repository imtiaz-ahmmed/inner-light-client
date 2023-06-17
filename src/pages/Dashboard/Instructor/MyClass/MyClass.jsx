import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classCount, setClassCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(
          `https://inner-light-server-imtiaz-ahmmed.vercel.app/add-classes?email=${user?.email}`
        );
        if (response.ok) {
          const data = await response.json();
          setClassCount(data.length);
          setData(data);
        } else {
          console.error("Error fetching classes:", response.status);
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    if (user?.email) {
      fetchClasses();
    }
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>Inner Light | My Class</title>
      </Helmet>
      <div className="text-center p-4 mb-8">
        <Slide direction="right">
          <h1 className="text-sky-600 font-bold text-5xl ">My Class </h1>
        </Slide>
        <hr />
      </div>
      <h2 className="text-center text-xs font-bold text-orange-400">
        Total Added Classes: {classCount}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Enrolled Student</th>
              <th>Status</th>
              <th>FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={row.classImage} alt={row.className} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{row.className}</div>
                      <div className="text-sm opacity-50">
                        with {row.instructorName}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="text-center">{row.availableSeats}</td>
                <td className="text-end">$ {row.price} </td>

                <th className="text-center">
                  {row.totalStudent ? row.totalStudent : "0"}
                </th>

                <th>{row.status ? row.status : "Pending"}</th>
                <th>{row.feedback ? row.feedback : ""}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
