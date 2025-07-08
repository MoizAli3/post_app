import express from "express";
import { Post } from "../../model/posts/postSchema.js";
import joi from "joi";

const postValidationSchema = joi.object({
  postId: joi.string().required(),
});

export const likePost = async (req, res) => {
  try {
    await postValidationSchema.validateAsync(req.body);
    const { postId } = req.body;
    const userId = req.userId;

    // Verify post exists
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    // Save comment and add to post's comments array
    post.likes.push(userId);
    await post.save();

    // Populate user details for response
    const populatedLikes = await Post.findById(userId).populate(
      "userId"
    );
    res
      .status(201)
      .json({ message: "Like created", comment: populatedLikes });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
