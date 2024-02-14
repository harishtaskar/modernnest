"use client";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { activeModalState } from "../../state/index";
import Login from "../Registration/Login";
import Registration from "../Registration/Registration";
import ReviewUserData from "../Registration/ReviewUserData";

type Props = {};

const RenderModal = (props: Props) => {
  const [activeModal, setActiveState] = useRecoilState(activeModalState);
  const onClose = useCallback(() => {
    setActiveState("");
  }, []);
  switch (activeModal) {
    case "login":
      return <Login onClose={onClose} />;
    case "registration":
      return <Registration onClose={onClose} />;
    case "review":
      return <ReviewUserData />;
    default:
      return;
  }
};

export default RenderModal;
