import {Post} from "../../model/posts/postSchema.js";
import joi from "joi";
import fs from "fs";
import multer from "multer";
import cloudinary from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

const postValidationSchema = joi.object({
  userId: joi.string().required(),
  content: joi.string().min(1).max(100).required(),
});

export const createPost = async (req, res) => {
  try {
    const { userId, content } = req.body;

    await postValidationSchema.validateAsync(req.body);

    console.log(req.body);

    fs.readdirSync("images/").forEach((file) => {
      cloudinary.v2.uploader.upload(`images/${file}`,{},async (error, result) => {
          // Delete example_file.txt
          fs.unlink(`images/${file}`, (err) => {
            if (err) console.log(err);
            else {
              console.log("Success Uploaded");
            }
          });
          if (error) {
            return res
              .status(401)
              .send({ status: 401, message: "file not uploaded!", err: error });
          }

          console.log(result);
          

          const postData = await Post.create({
            userId,
            content,
            media: [{ type: result.resource_type, url: result.url }],
            isPublic: true,
          });

          res.status(200).send({
            status: 200,
            message: "Post Uploaded Successfully!",
            data: postData,
          });
        }
      );
    });
    // res.status(200).send({ status: 200, message: "Sucess!" });


  } catch (error) {
    res.status(500).send({ status: 500, message: "Internal Server Error!" });
  }
};
