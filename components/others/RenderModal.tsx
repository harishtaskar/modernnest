"use client";
import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { activeModalState } from "../../state/index";
import Login from "../Registration/Login";
import Registration from "../Registration/Registration";
import ReviewUserData from "../Registration/ReviewUserData";

type Props = {
  active: Function;
};

const RenderModal = ({ active }: Props) => {
  const [activeModal, setActiveState] = useRecoilState(activeModalState);
  useEffect(() => {
    active(activeModal);
  }, [activeModal]);
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
