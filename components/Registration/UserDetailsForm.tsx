import React from "react";
import classes from "../css/Registration.module.css";
import InputText from "../shared/InputText";
import useUsers from "@/hooks/useUsers";

type Props = {};

const UserDetailsForm = (props: Props) => {
  const { onSetRegisterState } = useUsers();

  return (
    <form action="post" className={classes.form}>
      <span className={classes.subheading}>User Details</span>
      <InputText
        id="email"
        inputType="email"
        label="Email"
        placeHolder=""
        warning="Email is required"
        onChange={onSetRegisterState}
      />
      <InputText
        id="password"
        inputType="password"
        label="Password"
        placeHolder=""
        warning="Password is too short"
        password={true}
        minLength={8}
        onChange={onSetRegisterState}
      />
      <InputText
        id="confirmpassword"
        inputType="password"
        label="Confirm Password"
        placeHolder=""
        warning="Password not matched"
        password={true}
        onChange={onSetRegisterState}
      />
    </form>
  );
};

export default UserDetailsForm;
