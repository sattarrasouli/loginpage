import * as types from "../../Redux/Types";
import { AppAction } from "../../Redux/Interfaces";

export const SignUpSubmitAction = (payload: AppAction) => ({
  type: types.SUBMIT_SIGNUP,
  payload: payload,
});

export const SignUpSubmitSuccessAction = (payload: AppAction) => ({
  type: types.SUCCESS_SIGNUP,
  payload: payload,
});

export const SignUpSubmitFailureAction = (payload: AppAction) => ({
  type: types.FAILED_SIGNUP,
  payload: payload,
});
