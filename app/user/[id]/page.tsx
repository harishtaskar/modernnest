"use client";
import { currentUserState } from "@/state";
import React, { useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import classes from "@/components/css/Profile.module.css";
import useUsers from "@/hooks/useUsers";
import Card from "@/components/shared/Card";
import Image from "next/image";
import userImage from "@/public/assets/icons/user.svg";
import EditProfile from "@/components/UserProfile/EditProfile";
import UserDetails from "@/components/UserProfile/UserDetails";
import { SecondaryButton } from "@/components/shared/Buttons";
import UserSettings from "@/components/UserProfile/UserSettings";

type Props = {};

const Profile = (props: Props) => {
  const [visibleTab, setVisibleTab] = useState("profile");

  const { isUserAuthorized } = useUsers();
  isUserAuthorized();
  const currentUser: RegisterData = useRecoilValue(currentUserState);

  const renderProfileDetails = useMemo(() => {
    switch (visibleTab) {
      case "profile":
        return <UserDetails />;
      case "edit-profile":
        return <EditProfile />;
      case "settings":
        return <UserSettings />;
      default:
        return <UserDetails />;
    }
  }, [visibleTab, currentUser]);

  const renderProfileNav = useMemo(() => {
    return (
      <div className={classes.profileNav}>
        <div
          className={`${classes.link} ${
            visibleTab === "profile" ? classes.active : ""
          }`}
          onClick={() => setVisibleTab("profile")}
        >
          <span>Profile</span>
        </div>
        <div
          className={`${classes.link} ${
            visibleTab === "edit-profile" ? classes.active : ""
          }`}
          onClick={() => setVisibleTab("edit-profile")}
        >
          <span>Edit</span>
        </div>
        <div
          className={`${classes.link} ${
            visibleTab === "settings" ? classes.active : ""
          }`}
          onClick={() => setVisibleTab("settings")}
        >
          <span>Settings</span>
        </div>
      </div>
    );
  }, [visibleTab, currentUser]);

  const renderProfile = useMemo(() => {
    return (
      <div className={classes.profile}>
        <Card radius={8} padding={20}>
          <div className={classes.profileData}>
            <div className={classes.left}>
              <div className={classes.left}>
                <Image src={userImage} alt="user" className={classes.avatar} />
                <i className={`${"ri-pencil-line ri-xl"} ${classes.editBtn}`} />
              </div>
              {/* <SecondaryButton
                onClick={() => setVisibleTab("profile")}
                name="Profile"
              /> */}
              <SecondaryButton
                onClick={() => setVisibleTab("edit-profile")}
                name="Edit Profile"
              />
              <SecondaryButton
                onClick={() => setVisibleTab("settings")}
                name="Settings"
              />
            </div>
            <div className={classes.right}>
              {renderProfileNav}
              {renderProfileDetails}
            </div>
          </div>
        </Card>
      </div>
    );
  }, [visibleTab, currentUser]);

  return <div className={classes.main}>{renderProfile}</div>;
};

export default Profile;
