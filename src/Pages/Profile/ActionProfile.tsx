import * as types from "../../Redux/Types";
import { AppAction } from "../../Redux/Interfaces";

export const GetProfileInfoAction = () => ({
  type: types.GET_PROFILE_INFO_REQUEST,
});

export const GetProfileInfoSuccessAction = (payload: any) => ({
  type: types.GET_PROFILE_INFO_SUCCESS,
  payload: payload,
});

export const GetProfileInfoFailedAction = (payload: any) => ({
  type: types.GET_PROFILE_INFO_FAILED,
  payload: payload,
});
