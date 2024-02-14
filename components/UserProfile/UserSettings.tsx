import React from "react";
import classes from "../css/Profile.module.css";

type Props = {};

const UserSettings = (props: Props) => {
  return (
    <div className={classes.settingsTab}>
      <span
        className="mainHeading"
        style={{ fontSize: "26px", textTransform: "capitalize" }}
      >
        Profile Settings
      </span>
    </div>
  );
};

export default UserSettings;
