import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();
    return data;
  });

  console.log(users);
  return (
    <div>
      <Helmet>
        <title>Inner Light | Manage Users</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th>Make Admin </th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>ROle</td>
                <td>
                  <button className="btn btn-secondary text-white btn-xs">
                    Make Admin
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary text-white btn-xs">
                    Make Instructor
                  </button>
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
