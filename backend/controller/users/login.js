import { User } from "../../model/users/userSchema.js";
import bcrypt from "bcrypt";
import joi from "joi";
import jwt from "jsonwebtoken";

const userValidationSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().min(6).max(15),
});

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const existedUser = await User.findOne({ email });

  await userValidationSchema.validateAsync(req.body);

  try {
    if (!existedUser) {
      return res.status(403).send({
        status: 403,
        message: "User Not Found!",
      });
    }

    const match = await bcrypt.compare(password, existedUser.password);

    if (!match) {
      return res.status(403).send({
        status: 403,
        message: "Credentials are incorrect!",
      });
    }

    delete existedUser.password;

    const token = jwt.sign(
      { userId: existedUser._id, email: existedUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res
      .status(200)
      .cookie("token", token , {
        httpOnly: true,
        Credentials: true
      })
      .send({
        status: 200,
        message: "Login successful",
        data: existedUser,
      });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
