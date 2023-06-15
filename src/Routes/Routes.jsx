import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import PrivateRoute from "./privateRoute";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import SingleInstructorDetails from "../pages/SingleInstructorDetails/SingleInstructorDetails";
import Dashboard from "../Layout/Dashboard";

import StudentDashboard from "../pages/Dashboard/Student/StudentDashboard/StudentDashboard";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import MyPaymentHistory from "../pages/Dashboard/Student/MyPaymentHistory/MyPaymentHistory";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import InstructorDashboard from "../pages/Dashboard/Instructor/InstructorDashboard/InstructorDashboard";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass/MyClass";
import AdminRoute from "./AdminRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-instructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "/all-classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/all-instructors/instructor/:instructorName",
        element: <SingleInstructorDetails></SingleInstructorDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/student",
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: "/dashboard/student/my-selected-classes",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "/dashboard/student/my-enrolled-classes",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "/dashboard/my-payment-history",
        element: <MyPaymentHistory></MyPaymentHistory>,
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin/manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/admin/manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "/dashboard/instructor",
        element: <InstructorDashboard></InstructorDashboard>,
      },
      {
        path: "/dashboard/instructor/add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/instructor/my-class",
        element: <MyClass></MyClass>,
      },
    ],
  },
]);
