import React from "react";
import { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../../providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.classImage[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            className,
            price,
            availableSeats,
            instructorEmail,
            instructorName,
          } = data;
          const newClass = {
            className,
            price: parseFloat(price),
            availableSeats,
            instructorEmail,
            instructorName,
            classImage: imgURL,
          };
          console.log(newClass);
          fetch("http://localhost:5000/add-classes", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newClass),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("after posting new menu item", data);
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "class added successfully. Now wait for Approval",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Inner Light | Add Class</title>
      </Helmet>
      <div className="text-center p-4 mb-8">
        <Slide direction="right">
          <h1 className="text-sky-600 font-bold text-5xl ">Add Class</h1>
        </Slide>
        <hr />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="className"
          >
            Class Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="className"
            type="text"
            {...register("className", { required: true })}
          />
          {errors.className && (
            <span className="text-red-500">Class Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="classImage"
          >
            Class Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="classImage"
            type="file"
            {...register("classImage", { required: true })}
          />
          {errors.classImage && (
            <span className="text-red-500">Class Image is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="instructorName"
          >
            Instructor Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instructorName"
            type="text"
            value={user.displayName}
            readOnly
            {...register("instructorName", { required: true })}
          />
          {errors.instructorName && (
            <span className="text-red-500">Instructor Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="instructorEmail"
          >
            Instructor Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instructorEmail"
            type="email"
            value={user.email}
            readOnly
            {...register("instructorEmail", { required: true })}
          />
          {errors.instructorEmail && (
            <span className="text-red-500">Instructor Email is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="availableSeats"
          >
            Available Seats
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="availableSeats"
            type="number"
            {...register("availableSeats", { required: true })}
          />
          {errors.availableSeats && (
            <span className="text-red-500">Available Seats is required</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-red-500">Price is required</span>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
