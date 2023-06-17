import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const MyEnrolledClasses = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchEnrolledClasses = async () => {
      try {
        const response = await fetch(
          `https://inner-light-server-imtiaz-ahmmed.vercel.app/payments?email=${user.email}`
        );
        const data = await response.json();
        setEnrolledClasses(data);
      } catch (error) {
        console.error("Error fetching enrolled classes:", error);
      }
    };

    fetchEnrolledClasses();
  }, [user.email]);

  return (
    <div>
      <Slide direction="right">
        <h1 className="text-sky-600 font-bold text-center text-5xl mb-8">
          My Enrolled Classes
        </h1>
      </Slide>
      <Helmet>
        <title>Inner Light | My Enrolled Classes</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Info</th>

              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((enrolledClass, index) => (
              <tr key={enrolledClass._id.$oid}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={enrolledClass.classImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{enrolledClass.className}</div>
                      <div className="text-sm opacity-50">
                        with {enrolledClass.instructorName}
                      </div>
                    </div>
                  </div>
                </td>

                <td>$ {enrolledClass.price}</td>
              </tr>
            ))}

            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
