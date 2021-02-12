import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./Layout";
import Error from "../pages/error";
import Login from "../pages/login";
import { auth } from "../firebase/firebase.config";
import { authTypes } from "../redux/user/user.types";

const App = () => {
  const { isAuthenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const authSubscription = auth.onAuthStateChanged(auth => {
      if (auth) {
        const {
          displayName,
          email,
          photoURL,
          emailVerified,
          phoneNumber,
        } = auth;
        dispatch({
          type: authTypes.LOAD_USER_SUCCESS,
          payload: {
            displayName,
            email,
            photoURL,
            emailVerified,
            phoneNumber,
          },
        });
      } else {
        dispatch({ type: authTypes.CLEAR_ALL });
      }
    });
    return () => authSubscription;
  }, [dispatch]);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // ############################# Private Route ##########################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  // ############################# Public Route ##########################################

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
};
export default App;
