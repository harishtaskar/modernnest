import React from "react";
import classes from "../css/Footer.module.css";

const EndCredits = ({ text }: { text: string }) => {
  return <div className={`${classes.credit} ${"flex-row-center"}`}>{text}</div>;
};

export default EndCredits;
