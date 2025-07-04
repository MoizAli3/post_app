import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: { type: Schema.Types.String },
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true },
    fullname: { type: Schema.Types.String, required: true },
    profilePicture: { type: Schema.Types.String },
    bio: { type: Schema.Types.String },
    followers: [{ type: Schema.Types.ObjectId }],
    following: [{ type: Schema.Types.ObjectId }],
    isVerified: { type: Schema.Types.Boolean },
    otp: { type: Schema.Types.String },
    verifyTime: { type: Schema.Types.String},
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
