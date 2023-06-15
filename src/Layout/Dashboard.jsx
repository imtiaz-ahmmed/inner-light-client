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
import { ImUsers } from "react-icons/im";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { Slide } from "react-awesome-reveal";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
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

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Inner Light | My Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <div className="text-center  p-4">
          <Slide direction="right">
            <h1 className="text-sky-600 font-bold text-5xl">My Dashboard</h1>
          </Slide>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  h-full bg-sky-600 text-white font-bold">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to={"/dashboard/admin"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <SiHomeassistant />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/admin/manage-classes"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <SiGoogleclassroom />
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/admin/manage-users"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <ImUsers /> Manage Users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink
                  to={"/dashboard/instructor"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <SiHomeassistant />
                  Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/instructor/add-class"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <SiGoogleclassroom />
                  Add Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/instructor/my-class"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <ImUsers /> My Class
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to={"/dashboard/student"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <SiHomeassistant />
                  My Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/student/my-selected-classes"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <MdFlightClass />
                  My Selected Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/student/my-enrolled-classes"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <SiGoogleclassroom /> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/my-payment-history"}
                  className={({ isActive }) =>
                    isActive ? "dActive" : "dDefault"
                  }
                >
                  <MdOutlineWallet /> My Payment History
                </NavLink>
              </li>
            </>
          )}
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
