import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";

const MyEnrolledClasses = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchEnrolledClasses = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/payments?email=${user.email}`
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
      <h2>My Enrolled Classes</h2>
      {enrolledClasses.map((enrolledClass) => (
        <div key={enrolledClass._id.$oid}>
          <h3>{enrolledClass.className}</h3>
          <p>Instructor: {enrolledClass.instructorName}</p>
          <p>Price: ${enrolledClass.price}</p>
          <img src={enrolledClass.classImage} alt="Class" />
        </div>
      ))}
    </div>
  );
};

export default MyEnrolledClasses;
