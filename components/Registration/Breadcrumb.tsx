"use client";
import React from "react";
import classes from "../css/Registration.module.css";
import { useRecoilValue } from "recoil";
import { activeRegistrationForm } from "@/state";

type Register = {
  name: string;
  personaldata: boolean;
  address: boolean;
  userdetails: boolean;
};

const Breadcrumb = () => {
  const activeForm = useRecoilValue<Register>(activeRegistrationForm);
  return (
    <div className={classes.breadcrumb}>
      {/* Dott */}
      <i
        className={`${
          activeForm.personaldata
            ? `${classes.circle}`
            : `${classes.circleNotCompleted}`
        } ${activeForm.name === "personal" && classes.circleActive}`}
      />
      {/* Line */}
      <i
        className={
          activeForm.personaldata
            ? `${classes.line}`
            : `${classes.lineNotCompleted}`
        }
      />
      {/* Dott */}
      <i
        className={`${
          activeForm.address
            ? `${classes.circle}`
            : `${classes.circleNotCompleted}`
        } ${activeForm.name === "address" && classes.circleActive}`}
      />
      {/* Line */}
      <i
        className={
          activeForm.address ? `${classes.line}` : `${classes.lineNotCompleted}`
        }
      />
      {/* Dott */}
      <i
        className={`${
          activeForm.userdetails
            ? `${classes.circle}`
            : `${classes.circleNotCompleted}`
        } ${activeForm.name === "userdetails" && classes.circleActive}`}
      />
    </div>
  );
};

export default Breadcrumb;
