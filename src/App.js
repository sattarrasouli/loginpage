import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import SignUp from "./Pages/SignUp/ScreenSignUp";
import ScreenActiviation from "./Pages/Activiation/ScreenActiviation";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import ScreenProfile from "./Pages/Profile/ScreenProfile";
import ScreenSignIn from "./Pages/SignIn/ScreenSignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { history } from "./Redux/Store";
import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <ConnectedRouter history={history}>
      <ToastContainer autoClose={2000} />
      <Switch>
        <Route path="/" exact component={ScreenSignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/activiation" exact>
          <PrivateRoute>
            <ScreenActiviation />
          </PrivateRoute>
        </Route>
        <Route path="/profile" exact>
          <PrivateRoute>
            <ScreenProfile />
          </PrivateRoute>
        </Route>
      </Switch>
    </ConnectedRouter>
  );
}
export default App;
