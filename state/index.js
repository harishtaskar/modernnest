const { atom } = require("recoil");

export const activeModalState = atom({
  key: "active-modal",
  default: "",
});

export const activeRegistrationForm = atom({
  key: "active-form",
  default: {
    name: "personal",
    personaldata: false,
    address: false,
    userdetails: false,
  },
});

export const registrationDataState = atom({
  key: "registration-data",
  default: {},
});

export const currentUserState = atom({
  key: "current-user",
  default: "",
});
