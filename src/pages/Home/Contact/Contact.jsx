import React from "react";
import { Slide } from "react-awesome-reveal";
import Swal from "sweetalert2";
const Contact = () => {
  const handleMessage = (event) => {
    event.preventDefault();
    const form = event.target;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message Send Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    form.reset();
  };
  return (
    <div
      className="bg-yellow-50  p-12"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold text-sky-600">Contact Us</h1> */}
            <Slide direction="right">
              <h1 className="text-sky-600 font-bold text-5xl">
                Popular Classes
              </h1>
              <p className="py-6">
                Experience transformative practices in a serene sanctuary. Our
                expert instructors offer diverse yoga styles for all levels,
                fostering mind-body-spirit connection. Join our community for
                workshops, retreats, and events. Cultivate inner peace, balance,
                and radiance. Contact us to embark on a journey of
                self-discovery and illumination.
              </p>
            </Slide>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleMessage} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder=" Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Your Message Here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className=" text-white btn bg-sky-600 hover:bg-sky-400 border-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
