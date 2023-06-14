import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  MdFlightClass,
  MdOutlineWallet,
  MdHome,
  MdSchool,
  MdLogout,
} from "react-icons/md";
import { SiGoogleclassroom, SiHomeassistant } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
const Dashboard = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    navigate("/");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Log Out Successful!",
      showConfirmButton: false,
      timer: 1500,
    })
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>

        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  h-full bg-sky-600 text-white font-bold">
          {/* Sidebar content here */}
          <li>
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) => (isActive ? "dActive" : "dDefault")}
            >
              <SiHomeassistant />
              My Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/my-selected-classes"}
              className={({ isActive }) => (isActive ? "dActive" : "dDefault")}
            >
              <MdFlightClass />
              My Selected Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/my-enrolled-classes"}
              className={({ isActive }) => (isActive ? "dActive" : "dDefault")}
            >
              <SiGoogleclassroom /> My Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/my-payment-history"}
              className={({ isActive }) => (isActive ? "dActive" : "dDefault")}
            >
              <MdOutlineWallet /> My Payment History
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "dActive" : "dDefault")}
            >
              <MdHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/all-classes"}
              className={({ isActive }) => (isActive ? "aDctive" : "dDefault")}
            >
              <MdSchool /> Classes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/all-instructors"}
              className={({ isActive }) => (isActive ? "dActive" : "dDefault")}
            >
              <GiTeacher />
              Instructors
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>
              <MdLogout />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
