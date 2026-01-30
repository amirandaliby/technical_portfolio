"use client";

import Lottie from "react-lottie";
import React from "react";

function AnimationLottie({ animationPath, loop }) {
  const defaultOptions = {
    loop: loop,
    autoplay: true,
    animationData: animationPath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} />;
}

export default AnimationLottie;
