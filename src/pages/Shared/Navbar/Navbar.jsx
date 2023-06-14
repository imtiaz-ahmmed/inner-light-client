import React, { useContext } from "react";
import logo from "../../../../public/logo-transparent.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
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
    <div>
      <div className="navbar md:fixed z-10 bg-opacity-60 bg-lime-200 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {user ? (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/all-instructors"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Instructors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/all-classes"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/my-selected-classes"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/all-instructors"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Instructors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/all-classes"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Classes
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="md:flex justify-center  items-center">
            <img className=" w-30 h-20 " src={logo} alt="" />
            <Link to="/" className=" text-4xl text-sky-600 font-semibold">
              Inner Light
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1 text-xl  ">
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/all-instructors"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/all-classes"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/all-instructors"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/all-classes"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Classes
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 items-center ">
              <img
                className="h-12 w-12 lg:h-20 lg:w-20 rounded-full "
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                }
                alt=""
                data-tooltip-id="user-name"
                data-tooltip-content={
                  user.displayName ? user.displayName : "Maria"
                }
              />
              <Tooltip id="user-name" />
              <button
                onClick={handleLogOut}
                className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn  text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
