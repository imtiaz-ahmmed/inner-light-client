import React from "react";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import { Helmet } from "react-helmet";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
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
        fetch(`http://localhost:5000/selectedClasses/${row._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full p-10">
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
                <label></label>
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
                  <button className="btn btn-success text-white btn-xs">
                    Pay Now
                  </button>
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
