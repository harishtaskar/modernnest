"use client";
import React, { useCallback, useMemo, useState } from "react";
import classes from "../css/Shared.module.css";

type Props = {
  id: string;
  label?: string;
  inputType?: string;
  placeHolder?: string;
  warning?: string;
  password?: boolean;
  require?: boolean;
  width?: string;
  minLength?: number;
  maxLength?: number;
  onChange: Function;
  value?: any;
};

const InputText = ({
  id,
  label,
  inputType,
  placeHolder,
  warning,
  password,
  require,
  width,
  minLength = 0,
  maxLength = 100,
  onChange,
  value,
}: Props) => {
  //Validating email if type is email
  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const [type, setType] = useState(inputType);
  const [warningState, setWarningState] = useState<any>("");

  const onInputChangeHandler = useCallback((e: any) => {
    if (
      e.target.value.toString().length < minLength ||
      e.target.value.toString().length > maxLength
    ) {
      setWarningState(warning);
    } else {
      if (type === "email") {
        if (validateEmail(e.target.value)) {
          setWarningState("");
          onChange(id, e.target.value);
        } else {
          setWarningState("Invalid Email formate");
        }
      } else {
        setWarningState("");
        onChange(id, e.target.value);
      }
    }
  }, []);

  const renderEyeButton = useMemo(() => {
    if (type === "password") {
      return (
        <i
          className={`${classes.eyediv} ${"ri-eye-off-line"}`}
          onClick={() => setType("text")}
        />
      );
    } else {
      return (
        <i
          className={`${classes.eyediv} ${"ri-eye-line"}`}
          onClick={() => setType("password")}
        />
      );
    }
  }, [type]);
  return (
    <div className={classes.inputText}>
      <label className={classes.inputLabel} htmlFor={id}>
        {label}
      </label>
      <div className={classes.inputdiv}>
        <input
          className={`${classes.input} ${
            warningState !== "" ? classes.inputerror : ""
          }`}
          value={value}
          type={type}
          name={id}
          placeholder={placeHolder}
          id={id}
          required={require ?? true}
          onChange={onInputChangeHandler}
          style={{
            width: `${width ? `calc(${width} - 34px)` : "calc(100% - 34px)"}`,
          }}
          minLength={minLength}
          maxLength={maxLength}
        />
        {password && renderEyeButton}
      </div>
      <span className={classes.warning}>{warningState}</span>
    </div>
  );
};

export default InputText;
