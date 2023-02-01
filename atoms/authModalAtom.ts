import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: "signin" | "signup" | "resetPassword";
}

const defaultModalState: AuthModalState = {
  open: false,
  view: "signin",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
