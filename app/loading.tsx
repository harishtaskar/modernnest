"use client";
import React from "react";
import classes from "../components/css/Shared.module.css";
import Lottie from "react-lottie";
import loadingIcon from "../public/animations/loading.json";

type Props = {};

const loading = (props: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classes.loading}>
      <Lottie options={defaultOptions} width={200} height={200} />
    </div>
  );
};

export default loading;
