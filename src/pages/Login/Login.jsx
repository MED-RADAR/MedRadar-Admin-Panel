import React, { useState } from "react";
import styles from "./Login.module.css";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { loginApi } from "../../http";
import { setAuth } from "../../stores/authSlice";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
// import { openToaster } from "../../../stores/toasterSlice";
// import { loginApi } from "../../../http";
// import { setAuth } from "../../../stores/authSlice";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const handleSignup = async () => {
    setIsSubmiting(true);
    if (!email || !password || !confirmPassword) {
      setIsSubmiting(false);
    }
    if (password !== confirmPassword) {
      setIsSubmiting(false);
    }

    try {
      const { data } = await loginApi({
        email,
        password,
      });
      if (data) {
        // dispatch(
        //   openToaster({
        //     message: data.message,
        //     error: false,
        //     success: true,
        //   })
        // );
        setIsSubmiting(false);
        dispatch(setAuth(data));
        navigate('/')
      }

    } catch (error) {
      console.log(error);
      setIsSubmiting(false);
      // dispatch(
      //   // openToaster({
      //   //   message: error.response ? error.response.data.message : error.message,
      //   //   error: true,
      //   //   success: false,
      //   // })
      // );
    }
  };
  return (
    <div className={styles.registerWrapper}>
      <h2>SignIn</h2>
      <div className={styles.registerInnerWrapper}>
        <TextField
          id="email"
          value={email}
          label="Email"
          variant="standard"
          onChange={(e) => setEmail(e.target.value)}
          sx={{ minWidth: 120, width: 400 }}
        />

        <TextField
          id="Password"
          label="Password"
          variant="standard"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ minWidth: 120, width: 400 }}
        />
        <TextField
          id="Confirm-Password"
          label="Confirm Password"
          variant="standard"
          type="password"
          value={confirmPassword}
          sx={{ minWidth: 120, width: 400 }}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!isSubmiting ? (
          <Button variant="contained" onClick={handleSignup}>
            sign in
          </Button>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Login;
