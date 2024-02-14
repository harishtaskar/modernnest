"use client";
import React, { MouseEventHandler, ReactElement } from "react";
import classes from "../css/Modal.module.css";

type Props = {
  body: ReactElement;
  onClose: MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({ body, onClose }: Props) => {
  return (
    <div className={classes.background}>
      <div className={classes.modal}>
        <button className={classes["close-btn-user"]} onClick={onClose}>
          <i className="ri-close-line ri-xl"></i>
        </button>
        <>{body}</>
      </div>
    </div>
  );
};

export default Modal;
