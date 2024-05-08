import { atom } from "recoil";

export const showToastState = atom({
  key: "showToastState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
