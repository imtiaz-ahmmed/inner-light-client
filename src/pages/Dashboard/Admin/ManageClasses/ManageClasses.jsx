import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes from the server
    const fetchClasses = async () => {
      try {
        const response = await fetch("http://localhost:5000/add-classes");
        if (!response.ok) {
          throw new Error("Failed to fetch classes");
        }
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="text-center p-4">
      <Slide direction="right">
        <h1 className="text-sky-600 font-bold text-5xl">Manage Classes</h1>
      </Slide>

      {classes.map((classItem) => (
        <div key={classItem._id} className="my-4 p-4 border">
          <img
            src={classItem.classImage}
            alt="Class"
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
          <h2 className="text-xl font-bold">{classItem.className}</h2>
          <p className="text-gray-500">
            Instructor: {classItem.instructorName} ({classItem.instructorEmail})
          </p>
          <p className="text-gray-500">
            Available Seats: {classItem.availableSeats}
          </p>
          <p className="text-gray-500">Price: ${classItem.price}</p>
          <p className="text-gray-500">Status: {classItem.status}</p>
          <div className="mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
              disabled={classItem.status === "approved"}
            >
              Approve
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
              disabled={classItem.status === "denied"}
            >
              Deny
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Send Feedback
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageClasses;
