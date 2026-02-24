import React from "react";
import Banner from "../../component/Banner/Banner";
import Lawyers from "../../component/Lawyers/Lawyers";
import Countdown from "../../component/Countdown/Countdown";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Lawyers></Lawyers>
      <Countdown></Countdown>
    </div>
  );
};

export default Home;
