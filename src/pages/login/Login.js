import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";
import google from "../../images/google.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";
import { loginWithGoogle } from "../../redux/user/user.action";

function Login(props) {
  var classes = useStyles();
  const dispatch = useDispatch();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  const handleLoginSubmit = params => {
    console.log("Login submitted");
  };

  const handleRegisterSubmit = params => {
    console.log("Register submitted");
  };
  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Material Admin</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <form onSubmit={handleLoginSubmit}>
                <Typography variant="h1" className={classes.greeting}>
                  Good Morning, User
                </Typography>
                <Button
                  size="large"
                  className={classes.googleButton}
                  onClick={() => dispatch(loginWithGoogle())}
                >
                  <img
                    src={google}
                    alt="google"
                    className={classes.googleIcon}
                  />
                  &nbsp;Sign in with Google
                </Button>
                <div className={classes.formDividerContainer}>
                  <div className={classes.formDivider} />
                  <Typography className={classes.formDividerWord}>
                    or
                  </Typography>
                  <div className={classes.formDivider} />
                </div>
                <Fade in={error}>
                  <Typography
                    color="secondary"
                    className={classes.errorMessage}
                  >
                    Something is wrong with your login or password :(
                  </Typography>
                </Fade>
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={loginValue}
                  onChange={e => setLoginValue(e.target.value)}
                  margin="normal"
                  placeholder="Email Adress"
                  type="email"
                  fullWidth
                />
                <TextField
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                  margin="normal"
                  placeholder="Password"
                  type="password"
                  fullWidth
                />
                <div className={classes.formButtons}>
                  {isLoading ? (
                    <CircularProgress
                      size={26}
                      className={classes.loginLoader}
                    />
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                    >
                      Login
                    </Button>
                  )}
                  <Button
                    color="primary"
                    size="large"
                    className={classes.forgetButton}
                  >
                    Forget Password
                  </Button>
                </div>
              </form>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <form onSubmit={handleRegisterSubmit}>
                <Typography variant="h1" className={classes.greeting}>
                  Welcome!
                </Typography>
                <Typography variant="h2" className={classes.subGreeting}>
                  Create your account
                </Typography>
                <Fade in={error}>
                  <Typography
                    color="secondary"
                    className={classes.errorMessage}
                  >
                    Something is wrong with your login or password :(
                  </Typography>
                </Fade>
                <TextField
                  id="name"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={nameValue}
                  onChange={e => setNameValue(e.target.value)}
                  margin="normal"
                  placeholder="Full Name"
                  type="text"
                  fullWidth
                />
                <TextField
                  id="email"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={loginValue}
                  onChange={e => setLoginValue(e.target.value)}
                  margin="normal"
                  placeholder="Email Adress"
                  type="email"
                  fullWidth
                />
                <TextField
                  id="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  value={passwordValue}
                  onChange={e => setPasswordValue(e.target.value)}
                  margin="normal"
                  placeholder="Password"
                  type="password"
                  fullWidth
                />
                <div className={classes.creatingButtonContainer}>
                  {isLoading ? (
                    <CircularProgress size={26} />
                  ) : (
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                      className={classes.createAccountButton}
                    >
                      Create your account
                    </Button>
                  )}
                </div>
                <div className={classes.formDividerContainer}>
                  <div className={classes.formDivider} />
                  <Typography className={classes.formDividerWord}>
                    or
                  </Typography>
                  <div className={classes.formDivider} />
                </div>
                <Button
                  size="large"
                  className={classnames(
                    classes.googleButton,
                    classes.googleButtonCreating,
                  )}
                >
                  <img
                    src={google}
                    alt="google"
                    className={classes.googleIcon}
                  />
                  &nbsp;Sign in with Google
                </Button>
              </form>
            </React.Fragment>
          )}
        </div>
        <Typography color="primary" className={classes.copyright}>
          © 2014-2021 Mobile Programming, LLC. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
