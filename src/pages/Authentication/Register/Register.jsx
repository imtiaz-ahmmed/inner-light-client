import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Helmet>
        <title>Inner Light | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6 text-justify">
              Join Inner Light Yoga and Meditation School today! Register to
              embark on a transformative journey towards self-discovery and
              holistic well-being. Experience the power of yoga and meditation
              in a supportive and uplifting community. Gain access to expert-led
              classes, workshops, and resources to nurture your mind, body, and
              soul. Illuminate your path to inner peace and personal growth.
              Sign up now and let your journey begin!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">
                    Photo URL field is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must contain a special character and a capital
                    letter
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">Passwords do not match</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none"
                  type="submit"
                  value="Register"
                />

                <p className="text-sky-600 pt-4 text-center">
                  Already registered?
                  <Link to="/login" className="font-bold">
                    Go to log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
