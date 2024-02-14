"use client";
import React, {
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import classes from "../css/Login.module.css";
import style from "../css/Shared.module.css";
import Modal from "../HOC/Modal";
import InputText from "../shared/InputText";
import { PrimaryButton } from "../shared/Buttons";
import { useSetRecoilState } from "recoil";
import { activeModalState } from "@/state";
import useUsers from "@/hooks/useUsers";
import { toast } from "react-toastify";

type Props = {
  onClose: MouseEventHandler<HTMLButtonElement>;
};

type LoginData = {
  email: string;
  password: string;
};

const Login = ({ onClose }: Props) => {
  const setActiveModal = useSetRecoilState(activeModalState);
  const { onUserLogin } = useUsers();
  const [userDetails, setuserDetails] = useState<LoginData>({
    email: "",
    password: "",
  });

  const onChangeHandler = useCallback(
    (key: string, value: string) => {
      setuserDetails((prev: any) => {
        return { ...prev, [key]: value };
      });
    },
    [userDetails]
  );

  const onLoginHandler = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const res = await onUserLogin(userDetails.email, userDetails.password);
      if (res !== "ok") {
        toast.error(res);
      } else {
        setuserDetails({ email: "", password: "" });
        setActiveModal("");
        toast.success(" 🔥 Login Successfully");
      }
    },
    [userDetails]
  );

  const loginform = useMemo(() => {
    return (
      <form className={classes.loginform}>
        <InputText
          id="email"
          inputType="email"
          label="Email"
          placeHolder=""
          warning="email format is invalid"
          onChange={onChangeHandler}
        />
        <InputText
          id="password"
          inputType="password"
          label="Password"
          placeHolder=""
          warning="invalid password"
          password={true}
          minLength={8}
          onChange={onChangeHandler}
        />
        <PrimaryButton name="Login" onClick={onLoginHandler} />
      </form>
    );
  }, [userDetails]);

  const renderLoginBody = useMemo(() => {
    return (
      <div className={classes.body}>
        <div className={classes.head}>
          <span className={classes.heading}>Login</span>
          <p className={classes.smallText}>
            Fill in the Login data. All you need to verify is e-mail and
            password
          </p>
        </div>
        {loginform}
        <div className={style.otheroption}>
          Don't have account ?
          <p
            className={style.link}
            onClick={() => setActiveModal("registration")}
          >
            Sign up
          </p>
        </div>
      </div>
    );
  }, [userDetails]);

  return <Modal onClose={onClose} body={renderLoginBody} />;
};

export default Login;
