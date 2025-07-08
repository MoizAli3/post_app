import express from "express";
import { createPost } from "../../controller/post/index.js";
import { upload } from "../../controller/post/createPost.js";
import { commentPost } from "../../controller/post/comment.js";
import authMiddleware from "../../middleware/authentication.js";
import { likePost } from "../../controller/post/likePost.js";

const postRoute = express.Router();


postRoute.post("/create-post", upload , createPost);
postRoute.post("/comment", authMiddleware, commentPost);
postRoute.post("/like", authMiddleware, likePost);


export default postRoute;
