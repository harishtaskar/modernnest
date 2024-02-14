import { currentUserState, registrationDataState } from "@/state";
import { nextLocalStorage } from "@/utils/localstorage";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { useSetRecoilState } from "recoil";

const useUsers = () => {
  const setRegisterData = useSetRecoilState(registrationDataState);
  const setCurrentUser = useSetRecoilState(currentUserState);
  const router = useRouter();

  const onSetRegisterState = useCallback((key: string, input: string) => {
    console.log("key--->" + key, "  input--->", input);
    setRegisterData((prev: any) => {
      return { ...prev, [key]: input };
    });
  }, []);

  const onSetCurrentUser = useCallback((token: string) => {
    const fetchCurrentUser = async () => {
      const res = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const CurrentUser = await res.json();
      if (res.status === 200) {
        if (CurrentUser.messege === "ok") {
          console.log(CurrentUser);
          setCurrentUser(CurrentUser.user);
        } else {
          console.log(CurrentUser.messege);
          setCurrentUser("");
          router.push("/");
        }
      } else {
        console.log(CurrentUser.messege);
        setCurrentUser("");
        router.push("/");
      }
    };
    fetchCurrentUser();
  }, []);

  const onUserLogin = useCallback(async (email: string, password: string) => {
    const res = await fetch("/api/users/login", {
      method: "GET",
      headers: {
        email: email,
        password: password,
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      if (data.messege === "ok") {
        nextLocalStorage()?.setItem("Authorization", data.token);
        onSetCurrentUser(data.token);
        return data.messege;
      } else {
        return data.messege;
      }
    } else {
      return data.messege;
    }
  }, []);

  const onUserRegister = useCallback(async (user: Object) => {
    const res = await fetch("http://localhost:3000/user/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user }),
    });
    const data = await res.json();
    if (res.status === 200) {
      if (data.messege === "ok") {
        return data.messege;
      } else {
        return data.messege;
      }
    } else {
      return data.messege;
    }
  }, []);

  const isUserAuthorized = () => {
    let authorized = false;
    const token = nextLocalStorage()?.getItem("Authorization") || "";
    const authenticateUser = async () => {
      const res = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const CurrentUser = await res.json();
      if (res.status === 200) {
        if (CurrentUser.messege === "ok") {
          authorized = true;
        } else {
          setCurrentUser("");
          router.push("/users/1213123");
        }
      } else {
        setCurrentUser("");
        router.push("/users/1212132131");
      }
    };
    authenticateUser();
    return authorized;
  };

  const onUserLogout = useCallback(() => {
    nextLocalStorage()?.setItem("Authorization", "");
    router.push("/");
    window.location.reload();
  }, []);

  return {
    onSetRegisterState,
    onSetCurrentUser,
    onUserLogin,
    onUserRegister,
    isUserAuthorized,
    onUserLogout,
  };
};

export default useUsers;
