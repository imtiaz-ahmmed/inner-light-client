import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div
          className="carousel-item relative bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80')",
          }}
        >
          <div className="overlay absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="text-center px-3 md:px-0 md:w-1/2 text-white">
              <h2 className="text-3xl mb-4">
                Embrace Balance and Inner Peace with Yoga
              </h2>
              <p className="text-lg mb-6 ">
                Experience the transformative power of yoga and unlock your true
                potential. Connect your mind, body, and soul through ancient
                practices that cultivate strength, flexibility, and serenity.
              </p>
              <button className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none">
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="carousel-item relative bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
          }}
        >
          <div className="overlay absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="text-center  px-3 md:px-0 md:w-1/2 text-white">
              <h2 className="text-3xl mb-4">
                Discover Tranquility Through Meditation
              </h2>
              <p className="text-lg mb-6">
                Immerse yourself in the practice of meditation and embark on a
                journey of self-discovery. Quiet your mind, release stress, and
                find inner peace as you cultivate mindfulness and connect with
                your innermost essence.
              </p>
              <button className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none">
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="carousel-item relative bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
          }}
        >
          <div className="overlay absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="text-center px-3 md:px-0 md:w-1/2 text-white">
              <h2 className="text-3xl mb-4">
                Cultivate Mindfulness and Inner Harmony
              </h2>
              <p className="text-lg mb-6">
                Discover the power of mindfulness and learn to live in the
                present moment. Embrace inner harmony as you develop awareness,
                compassion, and acceptance through dedicated yoga and meditation
                practices.
              </p>
              <button className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none">
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="carousel-item relative bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1599447332412-6bc6830c815a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=791&q=80')",
          }}
        >
          <div className="overlay absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="text-center px-3 md:px-0 md:w-1/2 text-white">
              <h2 className="text-3xl mb-4">Nurture Your Body and Soul</h2>
              <p className="text-lg mb-6">
                Experience the holistic benefits of yoga and meditation as you
                nurture your body and soul. Enhance your physical vitality, find
                emotional balance, and ignite a deeper connection with your
                inner self.
              </p>
              <button className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none">
                Explore Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="carousel-item relative bg-cover bg-center h-screen"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1593204075264-0b7994458bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
          }}
        >
          <div className="overlay absolute top-0 left-0 h-full w-full flex items-center justify-center">
            <div className="text-center px-3 md:px-0 md:w-1/2 text-white">
              <h2 className="text-3xl mb-4">Elevate Your Spiritual Journey</h2>
              <p className="text-lg mb-6">
                Embark on a spiritual journey and explore the depths of your
                soul through yoga and meditation. Awaken your spirit, connect
                with divine energy, and unfold the limitless possibilities of
                your inner being.
              </p>
              <button className="btn text-white bg-sky-600 hover:bg-sky-400 p-4 rounded-lg border-none">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
