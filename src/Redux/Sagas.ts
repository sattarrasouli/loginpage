import { all, fork } from "redux-saga/effects";
import { ActiviationWatcher } from "../Pages/Activiation/SagaActiviation";
import { ProfileWatcher } from "../Pages/Profile/SagaProfile";
import { SignInWatcher } from "../Pages/SignIn/SagaSignIn";
import { SignUpWatcher } from "../Pages/SignUp/SagaSignUp";

export const rootSaga = function* root() {
  yield all([fork(SignUpWatcher), fork(ActiviationWatcher), fork(SignInWatcher), fork(ProfileWatcher)]);
};
