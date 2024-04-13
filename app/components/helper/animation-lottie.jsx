"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Component did mount
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or a placeholder/spinner
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
    style: {
      width: width || "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
