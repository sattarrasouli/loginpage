import axios, { AxiosRequestConfig } from "axios";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { put, takeLatest } from "redux-saga/effects";
import * as types from "../../Redux/Types";
import { ActiviationFailureAction, ActiviationSuccessAction } from "./ActionActiviation";

function* ActiviationWorker(action: any) {
  const token = localStorage.getItem("token");
  const phone = localStorage.getItem("phone");
  const apiUrl = `http://chl-api.rahkardigital.com/API/V1/User/active?phone=${phone}&code=${action.payload.password}&token=${token}`;
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
      toast.success(" حساب کاربری شما با موفقیت فعال شد");
      yield put(push("/profile"));
      yield put(ActiviationSuccessAction(response));
    }
    if (!response.ok) {
      toast.error("مشکلی پیش آمده");
      yield put(ActiviationFailureAction(response));
    }
  } catch (e: any) {
    toast.error(e.message);
    yield put(ActiviationFailureAction(e.message));
  }
}
export function* ActiviationWatcher() {
  yield takeLatest(types.ACTIVE_CODE_REQUEST, ActiviationWorker);
}
