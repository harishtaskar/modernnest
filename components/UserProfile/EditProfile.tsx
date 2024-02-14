"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import classes from "@/components/css/Profile.module.css";
import { currentUserState } from "@/state";
import { PrimaryButton } from "../shared/Buttons";
import InputText from "../shared/InputText";
import useUsers from "@/hooks/useUsers";

type Props = {};

const EditProfile = (props: Props) => {
  const { onSetRegisterState } = useUsers();
  const currentUser: RegisterData = useRecoilValue(currentUserState);
  const currentUserArr = Object.entries(currentUser);

  return (
    <>
      <div className={classes.editTab}>
        {currentUserArr.map((value) => {
          if (
            value[0] !== "password" &&
            value[0] !== "confirmpassword" &&
            value[0] !== "_id" &&
            value[0] !== "__v" &&
            value[0] !== "email"
          ) {
            return (
              <InputText
                key={value[0]}
                label={value[0]}
                onChange={() =>
                  onSetRegisterState(value[0], value[1].toString())
                }
                id={value[0]}
                value={value[1]}
              />
            );
          } else {
            return;
          }
        })}
      </div>
      <div className={`${classes.row1} ${classes.row}`}>
        <PrimaryButton name={"Cancel"} onClick={() => {}} />
        <PrimaryButton name={"Edit"} onClick={() => {}} />
      </div>
    </>
  );
};

export default EditProfile;
