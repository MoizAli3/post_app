import express from "express";
import { Comment } from "../../model/posts/commentSchema.js"; // Adjust path to your Comment model
import { Post } from "../../model/posts/postSchema.js";
import joi from "joi";

const postValidationSchema = joi.object({
  postId: joi.string().required(),
  content: joi.string().min(1).max(255).required(),
});

export const commentPost = async (req, res) => {
  try {
    await postValidationSchema.validateAsync(req.body);
    const { postId, content } = req.body;
    const userId = req.userId;

    // Verify post exists
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    // Create comment
    const comment = new Comment({
      postId,
      userId,
      content,
    });

    // Save comment and add to post's comments array
    await comment.save();
    post.comments.push(comment._id);
    await post.save();

    // Populate user details for response
    const populatedComment = await Comment.findById(comment._id).populate(
      "userId"
    );
    res
      .status(201)
      .json({ message: "Comment created", comment: populatedComment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
