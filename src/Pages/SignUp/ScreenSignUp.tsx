import React, { useRef } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { theme } from "../../Utils/Theme";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import { SignUpSubmitAction } from "./ActionSignUp";
import { AppAction } from "../../Redux/Interfaces";
import LoadingCircular from "../../Utils/LoadingCircular";
import { useHistory } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const useStyles = makeStyles(() => ({
  input: {
    InputLabelProps: {
      color: "red",
      left: "92%",
    },
    "& .css-1d1r5q-MuiFormHelperText-root": {
      color: "red",
      fontFamily: "inherit",
      lineHeight: 1,
    },
  },
  wrapper: {
    width: "90%",
    padding: "15px",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    borderRadius: "5px",
    backgroundColor: "rgba(255, 255, 255, .15)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    display: "block",
    margin: "auto 10px",
  },
}));

const SignUp: React.FC = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm: SubmitHandler<FieldValues> = (data: any) => {
    dispatch(SignUpSubmitAction(data));
  };

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.SignUpReducer);
  const history = useHistory();
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <Grid container>
          <Grid item xs={11} md={6} className={classes.wrapper}>
            <Grid item xs={11} md={10} sx={{ backgroundColor: "#FEF7DC", margin: "0", borderRadius: "10px", width: "100%", height: "fit-content", display: "flex", flexDirection: "column", textAlign: "center", padding: "30px" }}>
              <Typography variant="h4" sx={{ textAlign: "center", fontFamily: "inherit" }}>
                ?????? ??????
              </Typography>
              <TextField
                sx={{ margin: `${theme.spacing(2)}` }}
                className={classes.input}
                InputLabelProps={{
                  style: { left: "unset", right: 0, fontFamily: "IranSans" },
                }}
                {...register("firstname", {
                  required: "?????? ???????????? ??????",
                  minLength: {
                    value: 3,
                    message: "?????? ???????? ?????? ???????? ???? 3 ?????????????? ??????",
                  },
                })}
                helperText={errors.firstname && errors.firstname.message}
                label="??????"
                variant="standard"
              />
              <TextField
                className={classes.input}
                InputLabelProps={{
                  style: { left: "unset", right: 0, fontFamily: "IranSans" },
                }}
                {...register("lastname", {
                  required: "?????? ???????????????? ???????????? ??????",
                  minLength: {
                    value: 3,
                    message: "?????? ???????????????? ???????? ?????? ???????? ???? 3 ?????????????? ??????",
                  },
                })}
                helperText={errors.lastname && errors.lastname.message}
                sx={{ margin: `${theme.spacing(2)}` }}
                label="?????? ????????????????"
                variant="standard"
              />
              <TextField
                className={classes.input}
                InputLabelProps={{
                  style: { left: "unset", right: 0, fontFamily: "IranSans" },
                }}
                type="number"
                {...register("phone", {
                  required: " ?????????? ???????? ???????????? ??????",
                  minLength: {
                    value: 11,
                    message: "?????????? ????????  ???????? ?????? ???????? ???? 11 ?????????????? ??????",
                  },
                })}
                helperText={errors.phone && errors.phone.message}
                sx={{ margin: `${theme.spacing(2)}` }}
                label="?????????? ???????? ??????????"
                variant="standard"
              />
              <TextField
                className={classes.input}
                InputLabelProps={{
                  style: { left: "unset", right: 0, fontFamily: "IranSans" },
                }}
                sx={{ margin: `${theme.spacing(2)}` }}
                label=" ?????? ????????"
                variant="standard"
                type="password"
                {...register("password", {
                  required: "???????? ?????????? ???????????? ??????",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message: "?????????? ???????? ???????? ???????? ?????? ?? ???????????? ????????",
                  },
                  minLength: {
                    value: 12,
                    message: "?????????? ?????????? ???????? 12 ?????????????? ???????? ",
                  },
                })}
                helperText={errors.password && errors.password.message}
              />
              <TextField
                className={classes.input}
                InputLabelProps={{
                  style: { left: "unset", right: 0, fontFamily: "IranSans" },
                }}
                type="password"
                sx={{ margin: `${theme.spacing(2)}` }}
                label="?????????? ?????? ????????"
                variant="standard"
                {...register("password_repeat", {
                  validate: (value) => value === password.current || "?????????? ?????????? ????????",
                })}
                helperText={errors.password_repeat && errors.password_repeat.message}
              />
              <Button disabled={loading} sx={{ margin: `${theme.spacing(2)}`, fontFamily: "IranSans" }} variant="contained" type="submit">
                {loading ? <LoadingCircular /> : " ??????"}
              </Button>
              <IconButton onClick={() => history.push("/")} sx={{ width: "40px" }}>
                <ArrowBackIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignUp;
