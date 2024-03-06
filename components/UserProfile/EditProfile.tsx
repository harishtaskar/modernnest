"use client";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import classes from "@/components/css/Profile.module.css";
import { currentUserState } from "@/state";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";
import InputText from "../shared/InputText";
import useNetwork from "@/hooks/useNetwork";
import { PORT } from "@/utils/config";
import { toast } from "react-toastify";

type Props = {};

const EditProfile = (props: Props) => {
  const [currentUser, setCurrentUser] =
    useRecoilState<RegisterData>(currentUserState);
  const currentUserArr = Object.entries(currentUser);

  const { patchRequest } = useNetwork();

  const updateProfile = useCallback(async (user: any) => {
    const response = await patchRequest(`${PORT}/user/update`, {
      update: user,
    });

    if (response.res === "ok") {
      const updatedUser = await response.update;
      setCurrentUser(updatedUser);
      toast.success(response.msg);
    } else {
      toast.error(response.msg);
    }
  }, []);

  const onEditProfile = useCallback(() => {
    updateProfile(currentUser);
  }, [currentUser]);

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
                onChange={(id: string, value: any) =>
                  setCurrentUser((prev) => {
                    return { ...prev, [id]: value };
                  })
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
        <SecondaryButton name={"Cancel"} onClick={() => {}} />
        <PrimaryButton name={"Edit"} onClick={onEditProfile} />
      </div>
    </>
  );
};

export default EditProfile;
