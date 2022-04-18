import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import SignUpReducer from "../Pages/SignUp/ReducerSignUp";
import ActiviationReducer from "../Pages/Activiation/ReducerActiviation";
import SignInReducer from "../Pages/SignIn/ReducerSignIn";
import ProfileReducer from "../Pages/Profile/ReducerProfile";

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    SignUpReducer,
    ActiviationReducer,
    SignInReducer,
    ProfileReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;
