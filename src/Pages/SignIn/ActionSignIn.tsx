import * as types from "../../Redux/Types";
import { AppAction } from "../../Redux/Interfaces";

export const SignInAction = (payload: AppAction) => ({
  type: types.SIGN_IN_REQUEST,
  payload: payload,
});

export const SignInSuccessAction = () => ({
  type: types.SIGN_IN_SUCCESS,
});

export const SignInFailureAction = () => ({
  type: types.SIGN_IN_FAILED,
});
