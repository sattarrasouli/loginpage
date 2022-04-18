import axios, { AxiosRequestConfig } from "axios";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { put, takeLatest } from "redux-saga/effects";
import * as types from "../../Redux/Types";
import { SignUpSubmitFailureAction, SignUpSubmitSuccessAction } from "./ActionSignUp";

function* SignUpWorker(action: any) {
  const apiUrl = `http://chl-api.rahkardigital.com/API/V1/User/register?password=${action.payload.password}&firstname=${action.payload.firstname}&lastname=${action.payload.lastname}&phone=${action.payload.phone}`;
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
      yield put(push("/activiation"));
      yield put(SignUpSubmitSuccessAction(response));
      toast.success("ثبت نام شما با موفقیت انجام شد");
    }
    if (response.alreadyExist) {
      yield put(SignUpSubmitFailureAction(response));
      toast.error("شما قبلا ثبت نام کرده اید ، لطفا وارد شوید");
    }
    if (!response.ok && !response.alreadyExist) {
      yield put(SignUpSubmitFailureAction(response));
      toast.error("مشکلی پیش آمده");
    }
  } catch (e: any) {
    yield put(SignUpSubmitFailureAction(e.message));
    toast.error(e.message);
  }
}

export function* SignUpWatcher() {
  yield takeLatest(types.SUBMIT_SIGNUP, SignUpWorker);
}
