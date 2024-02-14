"use client";
import React, { MouseEventHandler, useCallback, useMemo } from "react";
import classes from "../css/Registration.module.css";
import style from "../css/Login.module.css";
import share from "../css/Shared.module.css";
import Modal from "../HOC/Modal";
import PersonalDataForm from "./PersonalDataForm";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  activeModalState,
  activeRegistrationForm,
  registrationDataState,
} from "@/state";
import AddressForm from "./AddressForm";
import UserDetailsForm from "./UserDetailsForm";
import Breadcrumb from "./Breadcrumb";
import {PrimaryButton} from "../shared/Buttons";
import { toast } from "react-toastify";

type Props = {
  onClose: MouseEventHandler<HTMLButtonElement>;
};
type Register = {
  name: string;
  personaldata: boolean;
  address: boolean;
  userdetails: boolean;
};

const Registration = ({ onClose }: Props) => {
  const setActiveModal = useSetRecoilState(activeModalState);
  const [registerData, setRegisterData] = useRecoilState<RegisterData>(
    registrationDataState
  );
  const [activeForm, setActiveForm] = useRecoilState<Register | any>(
    activeRegistrationForm
  );

  // rendering appropreate form of registering data
  const renderForms = useMemo(() => {
    console.log(registerData);
    switch (activeForm.name) {
      case "personal":
        return <PersonalDataForm />;
      case "address":
        return <AddressForm title="Address" />;
      case "userdetails":
        return <UserDetailsForm />;
      default:
        return <PersonalDataForm />;
    }
  }, [activeForm, registerData]);

  // onSubmit handler when user submit any of the registration forms
  const onSubmitHandler = useCallback(() => {
    // Checking if submitted form is first personal details form
    if (activeForm.name === "personal") {
      if (
        registerData.firstname &&
        registerData.lastname &&
        registerData.mobile?.toString().length === 10
      ) {
        setActiveForm({ ...activeForm, personaldata: true, name: "address" });
      } else {
        toast.error("Please fill up all fields");
      }
    } // Checking if submitted form is second address details form
    else if (activeForm.name === "address") {
      if (
        registerData.personaladdress &&
        registerData.streetaddress &&
        registerData.pin?.toString().length >= 6 &&
        registerData.country &&
        registerData.state &&
        registerData.city
      ) {
        setActiveForm({ ...activeForm, address: true, name: "userdetails" });
      } else {
        toast.error("Please fill up all fields");
      }
    } // Checking if submitted form is third user details form
    else if (activeForm.name === "userdetails") {
      if (registerData?.email && registerData?.password) {
        if (registerData?.password !== registerData.confirmpassword) {
          toast.error("Password Not Matched");
        } else {
          setActiveModal("review");
        }
      } else {
        toast.error("Please fill up all fields");
      }
    }
  }, [activeForm, registerData]);

  // Rendering Registration modal body
  const renderRegisterBody = useMemo(() => {
    return (
      <div className={classes.registerbody}>
        <div className={style.head}>
          <span className={style.heading}>Registration</span>
          <p className={style.smallText}>
            Fill in the registration data. It will take a couple of minutes.
          </p>
        </div>
        <Breadcrumb />
        <div className={classes.form}>{renderForms}</div>
        <PrimaryButton
          name={activeForm.name === "userdetails" ? "Submit" : "Next"}
          onClick={() => onSubmitHandler()}
        />
        <div className={share.otheroption}>
          Already have account ?{" "}
          <p className={share.link} onClick={() => setActiveModal("login")}>
            Log in
          </p>
        </div>
      </div>
    );
  }, [activeForm, registerData]);
  return <Modal onClose={onClose} body={renderRegisterBody} />;
};

export default Registration;
