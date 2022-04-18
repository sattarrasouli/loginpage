import * as React from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const auth = localStorage.getItem("token");
  console.log("auth", auth);
  if (auth == "undefined") {
    return <Redirect to="/" />;
  }
  return children;
};
export default PrivateRoute;
