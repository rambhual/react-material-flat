import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import useStyles from "./styles";
import logo from "./logo.svg";
import google from "../../images/google.svg";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
  registerWithEmailAndPassword,
} from "../../redux/user/user.action";

const Login = () => {
  const classes = useStyles();
  const { errorMessage, loading } = useSelector(state => state.user);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "sanjaysahani@gmail.com",
    },
  });
  const dispatch = useDispatch();
  const [activeTabId, setActiveTabId] = useState(0);

  const handleLoginSubmit = data => {
    console.log("Login submitted", data);
    dispatch(loginWithEmailAndPassword(data));
  };

  const handleRegisterSubmit = data => {
    console.log("Register submitted", data);
    dispatch(registerWithEmailAndPassword(data));
  };
  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>
          Mobile Programming
        </Typography>
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
              <form onSubmit={handleSubmit(handleLoginSubmit)}>
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
                <Fade in={errorMessage}>
                  <Typography
                    color="secondary"
                    className={classes.errorMessage}
                  >
                    Something is wrong with your login or password :(
                  </Typography>
                </Fade>
                <TextField
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  name="email"
                  error={!!errors.email}
                  inputRef={register({ required: true })}
                  margin="normal"
                  placeholder="Email Address"
                  type="email"
                  fullWidth
                />
                <TextField
                  name="password"
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  inputRef={register({ required: true })}
                  margin="normal"
                  error={!!errors.password}
                  placeholder="Password"
                  type="password"
                  fullWidth
                />
                <div className={classes.formButtons}>
                  {loading ? (
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
              <form onSubmit={handleSubmit(handleRegisterSubmit)}>
                <Typography variant="h1" className={classes.greeting}>
                  Welcome!
                </Typography>
                <Typography variant="h2" className={classes.subGreeting}>
                  Create your account
                </Typography>
                <Fade in={errorMessage}>
                  <Typography
                    color="secondary"
                    className={classes.errorMessage}
                  >
                    Something is wrong with your login or password :(
                  </Typography>
                </Fade>
                <TextField
                  name="displayName"
                  inputRef={register({ required: true })}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  margin="normal"
                  error={!!errors.displayName}
                  placeholder="Full Name"
                  type="text"
                  fullWidth
                />
                <TextField
                  name="email"
                  inputRef={register({ required: true })}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  margin="normal"
                  placeholder="Email Address"
                  type="email"
                  error={!!errors.email}
                  fullWidth
                />
                <TextField
                  name="password"
                  inputRef={register({ required: true })}
                  InputProps={{
                    classes: {
                      underline: classes.textFieldUnderline,
                      input: classes.textField,
                    },
                  }}
                  margin="normal"
                  placeholder="Password"
                  error={!!errors.password}
                  type="password"
                  fullWidth
                />
                <div className={classes.creatingButtonContainer}>
                  {loading ? (
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
};

export default withRouter(Login);
