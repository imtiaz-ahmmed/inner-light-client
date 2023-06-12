import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Inner Light | Home</title>
      </Helmet>
      <Banner></Banner>
    </div>
  );
};

export default Home;
