"use client";
import React from "react";
import classes from "@/components/css/Profile.module.css";
import { useRecoilValue } from "recoil";
import { currentUserState } from "@/state";

type Props = {};

const UserDetails = (props: Props) => {
  const currentUser: RegisterData = useRecoilValue(currentUserState);

  const userArray = Object.entries(currentUser);

  return (
    <div className={classes.detailsTab}>
      {/* <span className={classes.mainHeading}>Hi, {currentUser.firstname}</span> */}
      {userArray?.map((value) => {
        if (
          value[0] !== "password" &&
          value[0] !== "confirmpassword" &&
          value[0] !== "_id" &&
          value[0] !== "__v"
        ) {
          return (
            <div className={classes.row}>
              <div className={classes.pair}>
                <span className={classes.boldText}>
                  {value[0]} {"  "}:
                </span>
                <p className={classes.mediumText}>{value[1]}</p>
              </div>
            </div>
          );
        } else {
          return;
        }
      })}
    </div>
  );
};

export default UserDetails;
