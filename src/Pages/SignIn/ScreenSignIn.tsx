import { Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Redux/Reducers";
import LoadingCircular from "../../Utils/LoadingCircular";
import { SignInAction } from "./ActionSignIn";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "70%",
    padding: "20px",
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
    borderRadius: "5px",
    backgroundColor: "rgba(255, 255, 255, .15)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: " translate(-50%, -50%)",
  },

  input: {
    margin: "10px !important",
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
}));

const ScreenSignIn: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, loading, error } = useSelector((state: RootState) => state.SignInReducer);
  const SubmitSignIn: SubmitHandler<FieldValues> = (data: any) => {
    dispatch(SignInAction({ data: data, history: history }));
  };
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <form onSubmit={handleSubmit(SubmitSignIn)}>
          <Grid item xs={10} md={4} className={classes.wrapper}>
            <Grid sx={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#FEF7DC", borderRadius: "10px", height: "fit-content" }}>
              <Typography sx={{ fontFamily: "inherit", textAlign: "center", margin: "10px" }}> ورود</Typography>
              <TextField
                className={classes.input}
                {...register("phone", {
                  required: "شماره موبایل خود را وارد کنید",
                })}
                InputLabelProps={{
                  style: { left: "unset", right: 20, fontFamily: "IranSans" },
                }}
                label="شماره همراه "
                variant="standard"
              />
              <TextField
                className={classes.input}
                InputLabelProps={{
                  style: { left: "unset", right: 20, fontFamily: "IranSans" },
                }}
                {...register("password", {
                  required: "پسورد را وارد کنید",
                })}
                label="پسورد"
                variant="standard"
                type="password"
              />
              <Button onClick={() => history.push("/signup")} sx={{ fontFamily: "inherit", textAlign: "right" }} variant="text">
                ثبت نام کنید
              </Button>
              <Button type="submit" disabled={loading} variant="contained" sx={{ fontFamily: "inherit", margin: "10px" }}>
                {loading ? <LoadingCircular /> : " ثبت"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default ScreenSignIn;
