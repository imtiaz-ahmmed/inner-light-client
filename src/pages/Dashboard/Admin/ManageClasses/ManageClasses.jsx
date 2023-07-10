import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { FiX } from "react-icons/fi";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState("");

  const fetchClasses = async () => {
    try {
      const response = await fetch(
        "https://inner-light-server-imtiaz-ahmmed.vercel.app//add-classes"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch classes");
      }
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleApprove = async (classId) => {
    try {
      const response = await fetch(
        `https://inner-light-server-imtiaz-ahmmed.vercel.app//${classId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "approved" }),
        }
      );

      if (!response.ok) {
        console.error("Error approving class:", response.statusText);
        return;
      }

      // Update the class status in the local state
      const updatedClass = await response.json();
      setClasses((prevClasses) =>
        prevClasses.map((c) =>
          c._id === classId ? { ...c, status: updatedClass.status } : c
        )
      );
    } catch (error) {
      console.error("Error approving class:", error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      await fetch(
        `https://inner-light-server-imtiaz-ahmmed.vercel.app//add-classes/${classId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "denied" }),
        }
      );
      // Refresh the classes after successful denial
      fetchClasses();
    } catch (error) {
      console.error("Error denying class:", error);
    }
  };

  const handleSendFeedback = (classId) => {
    if (classes.find((c) => c._id === classId).status === "denied") {
      setSelectedClassId(classId);
      setModalOpen(true);
    }
  };

  const handleSubmitFeedback = async (classId) => {
    try {
      const response = await fetch(`/add-classes/${classId}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedback }),
      });

      if (!response.ok) {
        console.error("Error sending feedback:", response.statusText);
        return;
      }

      // Close the modal
      setModalOpen(false);
      // Clear the feedback input
      setFeedback("");
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFeedback("");
  };

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
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 ${
                classItem.status === "approved" || classItem.status === "denied"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                classItem.status === "approved" || classItem.status === "denied"
              }
              onClick={() => handleApprove(classItem._id)}
            >
              Approve
            </button>
            <button
              className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2 ${
                classItem.status === "approved" || classItem.status === "denied"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                classItem.status === "approved" || classItem.status === "denied"
              }
              onClick={() => handleDeny(classItem._id)}
            >
              Deny
            </button>
            <button
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${
                classItem.status !== "denied"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={classItem.status !== "denied"}
              onClick={() => handleSendFeedback(classItem._id)}
            >
              Send Feedback
            </button>
          </div>
        </div>
      ))}

      {/* Render modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 relative">
            <h2 className="text-xl font-bold mb-2">Send Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full h-24 p-2 border mb-2"
            ></textarea>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded absolute top-2 right-2"
              onClick={handleCloseModal}
            >
              <FiX />
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleSubmitFeedback(classItem._id)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
