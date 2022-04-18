import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { put, takeLatest } from "redux-saga/effects";
import * as types from "../../Redux/Types";
import { SignInFailureAction, SignInSuccessAction } from "./ActionSignIn";

function* SignInWorker(action: any) {
  const apiUrl = `http://chl-api.rahkardigital.com/API/V1/User/login?phone=${action.payload.data.phone}&password=${action.payload.data.password}`;
  let data: AxiosRequestConfig = {};
  data.method = "POST";
  data.url = apiUrl;

  try {
    let response: any;
    const Api = async () => {
      const result = await axios(data);
      response = result.data;
    };
    yield Api();
    if (response.ok) {
      yield localStorage.setItem("token", response.token);
      yield localStorage.setItem("phone", action.payload.phone);
      yield put(SignInSuccessAction());
      yield action.payload.history.push("/profile");
    }
    if (!response.ok) {
      yield put(SignInFailureAction());
      toast.error("اطلاعات وارد شده صحیح نمیباشد");
    }
  } catch (e: any) {
    yield put(SignInFailureAction());
    yield toast.error(e.message);
  }
}

export function* SignInWatcher() {
  yield takeLatest(types.SIGN_IN_REQUEST, SignInWorker);
}
