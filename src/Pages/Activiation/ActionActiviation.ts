import * as types from "../../Redux/Types";
import { AppAction } from "../../Redux/Interfaces";

export const ActiviationAction = (payload: AppAction) => ({
  type: types.ACTIVE_CODE_REQUEST,
  payload: payload,
});

export const ActiviationSuccessAction = (payload: AppAction) => ({
  type: types.ACTIVE_CODE_SUCCESS,
  payload: payload,
});

export const ActiviationFailureAction = (payload: AppAction) => ({
  type: types.ACTIVE_CODE_FAILED,
  payload: payload,
});
