"use client";
import React, { LegacyRef, useEffect, useMemo, useRef, useState } from "react";
import classes from "../css/Header.module.css";
import HeaderLinks from "./HeaderLinks";
import UserActions from "./UserActions";
import userprofile from "@/public/assets/icons/userprofile.svg";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentUserState } from "@/state";
import useUsers from "@/hooks/useUsers";
import Link from "next/link";
import SkeletonLoader from "../HOC/SkeletonLoader";
import { nextLocalStorage } from "@/utils/localstorage";

const Header = () => {
  const { UserActionsMobile, UserActionsWeb } = UserActions();
  const { onUserLogout, onSetCurrentUser } = useUsers();
  const currentUser: RegisterData | any = useRecoilValue(currentUserState);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const menuRef:
    | LegacyRef<HTMLDivElement>
    | LegacyRef<HTMLIFrameElement>
    | any = useRef();

  useEffect(() => {
    const token = nextLocalStorage()?.getItem("Authorization") || "";
    onSetCurrentUser(token);
  }, []);

  //Closing menu on outside click
  useEffect(() => {
    function handler(event: any) {
      if (menuRef.current?.contains(event.target)) {
        // change starts here
        setMobileMenuVisible(false);
        // change starts here
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const renderUserProfileButton = useMemo(() => {
    if (currentUser !== "") {
      return (
        <Link
          className={classes.profileBtn}
          href={`/user/${currentUser["_id"]}`}
        >
          <Image
            src={userprofile}
            alt={"profile"}
            style={{ fontWeight: "400" }}
          />
          {currentUser.firstname ? (
            `${currentUser.firstname} ${currentUser.lastname}`
          ) : (
            <SkeletonLoader height={20} width={80} radius={6} />
          )}
        </Link>
      );
    } else {
      return;
    }
  }, [currentUser]);

  return (
    <>
      {/*Menu Mobile View */}
      {mobileMenuVisible && (
        <div className={classes.background} ref={menuRef}>
          <div className={classes.menu}>
            <i
              className={`${"ri-close-line ri-xl"} ${classes.closeBtn}`}
              onClick={() => setMobileMenuVisible((prev) => !prev)}
              style={{ zIndex: "4" }}
            />
            <div className={classes.mobileMenu}>
              {renderUserProfileButton}
              <HeaderLinks />
              <span className={classes.link} onClick={onUserLogout}>
                Logout
              </span>
              {UserActionsMobile}
            </div>
          </div>
        </div>
      )}
      {/* Web Header */}
      <header className={`${classes.header} ${"flex-row-center"}`}>
        <div className={`${classes.main}`}>
          <div className={classes.left}>
            <span className={classes.brand}>ModernNest</span>
            <div className={classes.linksWeb}>
              <HeaderLinks />
            </div>
          </div>
          <div className={classes.right}>
            {UserActionsWeb}
            <div style={{ cursor: "pointer" }}>
              <i className="ri-search-line" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <i className="ri-shopping-cart-line" /> 1
            </div>
            <div style={{ cursor: "pointer" }}>
              <i className="ri-heart-3-line" /> 2
            </div>
            <div className={classes.profileIcon}>{renderUserProfileButton}</div>
            <div className={classes.mobile}>
              <i
                className="ri-menu-3-line"
                onClick={() => setMobileMenuVisible(true)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
