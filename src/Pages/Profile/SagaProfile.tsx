import axios, { AxiosRequestConfig } from "axios";
import { push } from "connected-react-router";
import { toast } from "react-toastify";
import { put, takeLatest } from "redux-saga/effects";
import * as types from "../../Redux/Types";
import { GetProfileInfoFailedAction, GetProfileInfoSuccessAction } from "./ActionProfile";

function* ProfileWorker(action: any) {
  const token = localStorage.getItem("token");
  const apiUrl = `http://chl-api.rahkardigital.com/API/V1/User/getUserInfo?token=${token}`;
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
      yield put(GetProfileInfoSuccessAction(response));
      yield localStorage.setItem("token", response.token);
      yield put(push("/profile"));
    }
    if (!response.ok) {
      yield put(GetProfileInfoFailedAction("لطفا ابتدا وارد شوید"));
      toast.error("لطفا ابتدا وارد شوید");
      yield put(push("/"));
    }
  } catch (e: any) {
    yield put(GetProfileInfoFailedAction(e.message));
    toast.error("لطفا ابتدا وارد شوید");
  }
}

export function* ProfileWatcher() {
  yield takeLatest(types.GET_PROFILE_INFO_REQUEST, ProfileWorker);
}
