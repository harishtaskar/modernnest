"use client";
import React, { MouseEventHandler } from "react";
import classes from "../css/Shared.module.css";

type Props = {
  name: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const PrimaryButton = ({ name, onClick }: Props) => {
  return (
    <button className={classes.primaryButton} onClick={onClick} type="submit">
      {name}
    </button>
  );
};

export const SecondaryButton = ({ name, onClick }: Props) => {
  return (
    <button className={classes.secondaryButton} onClick={onClick} type="reset">
      {name}
    </button>
  );
};

export default PrimaryButton;
