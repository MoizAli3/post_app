import express from "express";
import {
  registerUser,
  loginUser,
  sentForgetPassOtp,
  verifyForgetPassOtp,
  logoutUser,
} from "../../controller/users/index.js";
import { stayLoginUser } from "../../controller/users/stayLogin.js";

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.post("/sent-forget-pass-otp", sentForgetPassOtp);
userRoute.post("/verify-forget-pass-otp", verifyForgetPassOtp);
userRoute.post("/verify-forget-pass-otp", verifyForgetPassOtp);
userRoute.post("/logout", logoutUser);
userRoute.post("/stay-login", stayLoginUser);



export default userRoute;
