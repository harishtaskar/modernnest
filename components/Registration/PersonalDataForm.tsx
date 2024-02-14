import React from "react";
import classes from "../css/Registration.module.css";
import InputText from "../shared/InputText";
import useUsers from "@/hooks/useUsers";

type Props = {
  title?: string;
};

const PersonalDataForm = ({ title }: Props) => {
  const { onSetRegisterState } = useUsers();

  return (
    <form method="post" action="submit" className={classes.innerForm}>
      <span className={classes.subheading}>{title}</span>
      <InputText
        id="firstname"
        inputType="text"
        label="First Name"
        placeHolder=""
        warning="first name is required"
        onChange={onSetRegisterState}
      />
      <InputText
        id="lastname"
        inputType="text"
        label="Last Name"
        placeHolder=""
        warning="last name is required"
        onChange={onSetRegisterState}
      />
      <InputText
        id="mobile"
        inputType="number"
        label="Mobile"
        placeHolder=""
        warning="mobile number should be 10 digits"
        minLength={10}
        maxLength={10}
        onChange={onSetRegisterState}
      />
    </form>
  );
};

export default PersonalDataForm;
