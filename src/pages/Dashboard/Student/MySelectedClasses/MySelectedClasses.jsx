import React from "react";
import { Helmet } from "react-helmet";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useSelectedClass from "../../../../Hooks/useSelectedClass";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const MySelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClass();
  const total = selectedClasses.reduce(
    (sum, classes) => classes.price + sum,
    0
  );

  const handleDelete = (row) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://inner-light-server-imtiaz-ahmmed.vercel.app/selectedClasses/${row._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else {
              Swal.fire(
                "Not Deleted!",
                "The file could not be deleted.",
                "error"
              );
            }
          })
          .catch((error) => {
            Swal.fire(
              "Not Deleted!",
              "An error occurred while deleting the file.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="w-full p-10">
      <Slide direction="right">
        <h1 className="text-sky-600 font-bold text-center text-5xl mb-8">
          My Selected Classes
        </h1>
      </Slide>
      <Helmet>
        <title>Inner Light | My Selected Classes</title>
      </Helmet>
      <h2 className="text-center font-bold text-lime-600  border p-4 m-2">
        Total Selected Classes: {selectedClasses.length}
      </h2>
      <h2 className="text-center text-cyan-600 font-bold my-4">
        Total Price: $ {total}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class Name</th>
              <th>Total Seats</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((row, index) => (
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

                <td>{row.totalSeats}</td>
                <td>{row.availableSeats}</td>
                <td>{row.price}</td>
                <th>
                  <Link
                    to={`/dashboard/payment?id=${row._id}`}
                    className="btn btn-success text-white btn-xs"
                  >
                    Pay Now
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(row);
                    }}
                    className="btn btn-error text-white btn-xs"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
