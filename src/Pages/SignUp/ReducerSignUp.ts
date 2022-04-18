import { Action } from "redux";
import * as types from "../../Redux/Types";
import { ISignUp, AppAction } from "../../Redux/Interfaces";

const initialState: ISignUp = {
  data: [],
  loading: false,
  error: false,
};

export default function SignUpReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case types.SUBMIT_SIGNUP:
      return {
        ...state,
        data: action.payload,
        loading: true,
        error: false,
      };
    case types.SUCCESS_SIGNUP:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case types.FAILED_SIGNUP:
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
