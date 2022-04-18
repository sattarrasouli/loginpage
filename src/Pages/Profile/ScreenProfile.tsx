import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid, IconButton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "../../Redux/Reducers";
import LoadingCircular from "../../Utils/LoadingCircular";
import { useStyles } from "../SignUp/ScreenSignUp";
import { GetProfileInfoAction } from "./ActionProfile";
import avatar from "../../Assets/img/avatar.png";

const ScreenProfile: React.FC = () => {
  const { loading, error, data } = useSelector((state: RootState) => state.ProfileReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(GetProfileInfoAction());
  }, []);
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={11} md={6} className={classes.wrapper} sx={{ dispaly: "flex", justifyContent: "center", flexDirection: "column" }}>
          <Grid item xs={12} md={12} sx={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#FEF7DC", borderRadius: "10px", height: "fit-content" }}>
            {loading ? (
              <LoadingCircular />
            ) : (
              <>
                <Grid sx={{ display: "flex", justifyContent: "center" }}>
                  <img src={avatar} width="70px" height="auto" className={classes.img} />
                </Grid>
                <Typography sx={{ fontFamily: "inherit", textAlign: "center", margin: "10px" }}>پروفایل کاربری</Typography>
                <Typography sx={{ fontFamily: "inherit", textAlign: "center", margin: "10px" }}>{data?.firstname ? " نام: " + data.firstname : null}</Typography>
                <Typography sx={{ fontFamily: "inherit", textAlign: "center", margin: "10px" }}> {data?.lastname ? " نام خانوادگی: " + data.lastname : null}</Typography>
                <Typography sx={{ fontFamily: "inherit", textAlign: "center", margin: "10px" }}>{data?.phone ? " تلفن : " + data.phone : null}</Typography>
                <Typography sx={{ fontFamily: "inherit", textAlign: "center", margin: "10px" }}>{data?.grade ? " درجه: " + data.grade : null}</Typography>
                <Typography sx={{ fontFamily: "inherit", textAlign: "center", margin: "10px" }}> {data?.active ? "فعال" : "غیرفعال"}</Typography>
              </>
            )}
          </Grid>
          <IconButton onClick={() => history.push("/")} sx={{ width: "40px" }}>
            <ArrowBackIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default ScreenProfile;
