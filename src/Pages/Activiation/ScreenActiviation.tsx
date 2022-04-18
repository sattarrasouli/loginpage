import { Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducers";
import LoadingCircular from "../../Utils/LoadingCircular";
import { ActiviationAction } from "./ActionActiviation";

const useStyles = makeStyles(() => ({
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
  },
}));

const ScreenActiviation: React.FC = () => {
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state: RootState) => state.ActiviationReducer);
  const activiation: SubmitHandler<FieldValues> = (data: any) => {
    dispatch(ActiviationAction(data));
  };
  const classes = useStyles();
  return (
    <>
      <form onSubmit={handleSubmit(activiation)}>
        <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "50px" }}>
          <Grid item xs={9} md={4} className={classes.wrapper}>
            <Grid sx={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#FEF7DC", borderRadius: "10px", height: "fit-content" }}>
              <Typography sx={{ fontFamily: "inherit", textAlign: "center", margin: "10px" }}>کد فعالسازی را وارد کنید</Typography>
              <TextField
                {...register("password", {
                  required: "پسورد را وارد کنید",
                })}
              />
              <Button type="submit" disabled={loading} variant="contained" sx={{ fontFamily: "inherit", margin: "10px" }}>
                {loading ? <LoadingCircular /> : " ثبت"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ScreenActiviation;
