import express from "express";
import userRoute from "./users/userRoute.js";
import postRoute from "./posts/postRoute.js";

const router = express.Router();

router.use("/users" , userRoute);
router.use("/posts" , postRoute);

export default router;
