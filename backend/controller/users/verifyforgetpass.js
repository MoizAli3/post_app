import { User } from "../../model/users/userSchema.js";
import bcrypt from "bcrypt";
import joi from "joi";

const userValidationSchema = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().min(6).max(15),
  otp: joi.number().required(),
});

export const verifyForgetPassOtp = async (req, res) => {
  try {
    const { email, password, otp } = req.body;

    const existedUser = await User.findOne({ email });

    await userValidationSchema.validateAsync(req.body);

    if (!existedUser) {
      return res.status(403).send({
        status: 403,
        message: "User not Exits!",
      });
    }

    if (existedUser.otp !== otp) {
      return res.status(401).send({
        status: 401,
        message: "Wrong otp!",
      });
    }

    if (existedUser.verifytime < Date.now()) {
      return res.status(401).send({
        status: 401,
        message: "OTP Expired, Sent OTP again",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    existedUser.password = passwordHash;
    existedUser.save();

    delete existedUser.password;

    return res.status(200).send({
      status: 200,
      message: "New Password Updated successful"
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
