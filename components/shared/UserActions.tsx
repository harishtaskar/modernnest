"use client";
import { activeModalState, currentUserState } from "@/state";
import React, { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import classes from "../css/Header.module.css";
import style from "../css/Footer.module.css";
import Link from "next/link";

const UserActions = () => {
  const currentUser = useRecoilValue(currentUserState);
  const setActiveModal = useSetRecoilState(activeModalState);

  const UserActionsMobile = useMemo(() => {
    if (currentUser === "") {
      return (
        <div className={classes.actionsMobile}>
          <Link
            href={"#"}
            className={classes.primaryText}
            onClick={() => setActiveModal("login")}
          >
            <i className={`${"ri-user-line"} ${style.icons}`} />
            Login
          </Link>
          <Link
            href={"#"}
            className={classes.primaryText}
            onClick={() => setActiveModal("registration")}
          >
            <i className={`${"ri-user-line"} ${style.icons}`} />
            Register
          </Link>
        </div>
      );
    } else {
      return;
    }
  }, [currentUser]);

  const UserActionsWeb = useMemo(() => {
    if (currentUser === "") {
      return (
        <div className={classes.actionsWeb}>
          <div className={classes.actions}>
            <i className={`${"ri-user-line"} ${style.icons}`} />
            <Link
              href={"#"}
              className={classes.primaryText}
              onClick={() => setActiveModal("login")}
            >
              Login
            </Link>
            /
            <Link
              href={"#"}
              className={classes.primaryText}
              onClick={() => setActiveModal("registration")}
            >
              Register
            </Link>
          </div>
        </div>
      );
    } else {
      return;
    }
  }, [currentUser]);

  return { UserActionsMobile, UserActionsWeb };
};

export default UserActions;
