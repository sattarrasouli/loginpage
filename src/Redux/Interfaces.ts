import { Action } from "redux";

export interface ISignUp {
  data: string[];
  loading: boolean;
  error: boolean;
}
export interface AppAction<P = any> {
  type?: string;
  payload?: P;
  history?: any;
  data?: string;
}
