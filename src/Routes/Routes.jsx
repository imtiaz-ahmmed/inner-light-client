import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import SingleInstructorDetails from "../pages/SingleInstructorDetails/SingleInstructorDetails";
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
        // loader: ({ params }) => {
        //   fetch(
        //     `http://localhost:5000/all-instructors/instructor/${params.instructorName}`
        //   );
        // },
      },
    ],
  },
]);
