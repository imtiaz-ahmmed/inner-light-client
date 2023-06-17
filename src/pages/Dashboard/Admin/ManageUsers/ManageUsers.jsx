import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Slide } from "react-awesome-reveal";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    const data = await res.data;
    return data;
  });

  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleMakeAdmin = (user) => {
    setDisabledButtons((prevDisabledButtons) => [
      ...prevDisabledButtons,
      user._id,
    ]);
    fetch(
      `https://inner-light-server-imtiaz-ahmmed.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
        }
        setDisabledButtons((prevDisabledButtons) =>
          prevDisabledButtons.filter((id) => id !== user._id)
        );
      });
  };

  const handleMakeInstructor = (user) => {
    setDisabledButtons((prevDisabledButtons) => [
      ...prevDisabledButtons,
      user._id,
    ]);
    fetch(
      `https://inner-light-server-imtiaz-ahmmed.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
        }
        setDisabledButtons((prevDisabledButtons) =>
          prevDisabledButtons.filter((id) => id !== user._id)
        );
      });
  };

  console.log(users);

  return (
    <div>
      <Helmet>
        <title>Inner Light | Manage Users</title>
      </Helmet>
      <div className="text-center  p-4">
        <Slide direction="right">
          <h1 className="text-sky-600 font-bold text-5xl">Manage Users</h1>
        </Slide>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role || "student"}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      disabled={disabledButtons.includes(user._id)}
                      className="btn btn-secondary text-white btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      disabled={disabledButtons.includes(user._id)}
                      className="btn btn-primary text-white btn-xs"
                    >
                      Make Instructor
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
