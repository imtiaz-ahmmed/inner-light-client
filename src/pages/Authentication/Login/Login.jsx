import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoGoogle, IoLogoGithub } from "react-icons/io";
import { Helmet } from "react-helmet";
const Login = () => {
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
        <title>Inner Light | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-justify">
              Welcome to Inner Light Yoga and Meditation School! Log in to
              immerse yourself in a nurturing community dedicated to
              illuminating your inner potential. Unlock access to a treasure
              trove of wisdom and guidance as you embark on a journey of
              self-transformation. Let your inner light shine brightly as you
              reconnect with your true essence. Be Happy!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must a special character & a capital letter
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none"
                  type="submit"
                  value="Login"
                />

                <p className="text-sky-600 pt-4 text-center">
                  New here?{" "}
                  <Link to="/register" className="font-bold">
                    Create a New Account
                  </Link>
                </p>
                <p className="pt-4 text-center">Or sign in with</p>
                <div className="flex justify-center gap-4 p-4">
                  <IoLogoFacebook className="text-4xl rounded-full" />
                  <IoLogoGithub className="text-4xl rounded-full" />
                  <IoLogoGoogle className="text-4xl rounded-full" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
