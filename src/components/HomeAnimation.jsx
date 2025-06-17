import React from "react";
import Lottie from "lottie-react";
import aiAnimation from "../assets/HomeAnimation.json";

const HomeAnimation = () => {
  return (
    <div className="w-full h-full">
      <Lottie animationData={aiAnimation} loop />
    </div>
  );
};

export default HomeAnimation;
