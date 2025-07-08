import mongoose, { Schema } from "mongoose";



const PostSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: Schema.Types.String },
    media: [
      {
        type: { type: Schema.Types.String },
        url: { type: Schema.Types.String },
      },
    ],
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    isPublic: { type: Schema.Types.Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", PostSchema);
