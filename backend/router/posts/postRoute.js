import express from "express";
import { createPost } from "../../controller/post/index.js";
import { upload } from "../../controller/post/createPost.js";

const postRoute = express.Router();


postRoute.post("/create-post", upload , createPost);


export default postRoute;
