import { AUTH } from "./types";

export const authenticateUser = (payload) => ({
  type: AUTH,
  payload,
});
