import { Post } from "../../model/posts/postSchema.js";
import joi from "joi";
import fs from "fs/promises"; // Use promises-based fs for async operations
import multer from "multer";
import cloudinary from "cloudinary";
import "dotenv/config";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename to avoid conflicts
  },
});

export const upload = multer({ storage: storage }).array("images", 12);

// Joi validation schema
const postValidationSchema = joi.object({
  userId: joi.string().required(),
  content: joi.string().min(1).max(100).required(),
});

export const createPost = async (req, res) => {
  try {
    // Validate request body
    await postValidationSchema.validateAsync(req.body);
    const { userId, content } = req.body;

    // Check if files were uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).send({
        status: 400,
        message: "No files uploaded!",
      });
    }

    // Upload files to Cloudinary and collect results
    const uploadPromises = req.files.map(async (file) => {
      try {
        const result = await cloudinary.v2.uploader.upload(file.path, {
          folder: "posts", // Optional: Organize files in a Cloudinary folder
        });

        // Delete the local file after successful upload
        await fs.unlink(file.path);

        return {
          type: result.resource_type,
          url: result.secure_url,
        };
      } catch (error) {
        console.error(`Error uploading file ${file.originalname}:`, error);
        throw new Error(`Failed to upload ${file.originalname}`);
      }
    });

    // Wait for all uploads to complete
    const media = await Promise.all(uploadPromises);

    // Create post in the database
    const postData = await Post.create({
      userId,
      content,
      media, // Array of { type, url } objects
      isPublic: true,
    });

    // Send success response
    res.status(200).send({
      status: 200,
      message: "Post uploaded successfully!",
      post: postData,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send({
      status: 500,
      message: "Internal Server Error!",
      error: error.message,
    });
  }
};
