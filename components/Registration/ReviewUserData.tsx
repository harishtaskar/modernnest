"use client";
import React, { useCallback, useMemo } from "react";
import Modal from "../HOC/Modal";
import classes from "../css/Registration.module.css";
import style from "../css/Login.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  activeModalState,
  activeRegistrationForm,
  registrationDataState,
} from "@/state";
import { PrimaryButton } from "../shared/Buttons";
import { toast } from "react-toastify";
import InputText from "../shared/InputText";
import useUsers from "@/hooks/useUsers";

type Props = {};

const ReviewUserData = (props: Props) => {
  const setActiveModal = useSetRecoilState(activeModalState);
  const setActiveForm = useSetRecoilState(activeRegistrationForm);
  const registerData: RegisterData = useRecoilValue(registrationDataState);
  const { onSetRegisterState, onSetCurrentUser, onUserRegister } = useUsers();
  // storing user details to database
  const storeUserToDB = async () => {
    const messege = await onUserRegister(registerData);
    if (messege === "ok") {
      toast.success("🔥 User Registered Successfully!");
      setActiveModal("login");
      setActiveForm({
        name: "personal",
        personaldata: false,
        address: false,
        userdetails: false,
      });
    } else {
      toast.error(messege);
    }
  };

  const onSubmitHandler = useCallback(() => {
    if (
      registerData.firstname &&
      registerData.lastname &&
      registerData.mobile?.toString().length === 10 &&
      registerData.personaladdress &&
      registerData.streetaddress &&
      registerData.pin?.toString().length >= 6 &&
      registerData.country &&
      registerData.state &&
      registerData.city &&
      registerData?.email &&
      registerData?.password
    ) {
      if (registerData?.password !== registerData.confirmpassword) {
        toast.error("password not matched");
      } else {
        storeUserToDB();
      }
    } else {
      console.log(registerData);
      toast.error("Please fill all fields");
    }
  }, [registerData]);

  const renderAllInputs = useMemo(() => {
    console.log(registerData);
    const data = Object.entries(registerData);
    console.log(data);
    return (
      <>
        {data.map(([key, value]) => (
          <InputText
            key={key}
            id={key}
            inputType={key === "confirmpassword" ? "password" : key}
            label={key}
            value={value}
            password={key === "password" || key === "confirmpassword"}
            onChange={onSetRegisterState}
          />
        ))}
      </>
    );
  }, [registerData]);

  const renderBody = useMemo(() => {
    return (
      <div className={classes.registerbody} style={{ gap: "20px" }}>
        <div className={style.head}>
          <span className={style.heading}>Review</span>
          <p className={style.mediumText}>
            Review your all inputs and register yourself.
          </p>
        </div>
        <div className={classes.form}>{renderAllInputs}</div>
        <PrimaryButton onClick={onSubmitHandler} name={"Submit"} />
      </div>
    );
  }, [registerData, onSubmitHandler]);
  return (
    <Modal onClose={() => setActiveModal("registration")} body={renderBody} />
  );
};

export default ReviewUserData;
