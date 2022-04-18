import { Action } from "redux";
import * as types from "../../Redux/Types";
import { ISignUp, AppAction } from "../../Redux/Interfaces";

const initialState: ISignUp = {
  data: [],
  loading: false,
  error: false,
};

export default function ProfileReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case types.GET_PROFILE_INFO_REQUEST:
      return {
        ...state,
        data: action.payload,
        loading: true,
        error: false,
      };
    case types.GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case types.GET_PROFILE_INFO_FAILED:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
