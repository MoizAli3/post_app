import { User } from "../../model/users/userSchema.js";
import transporter from "../../helper/index.js";
import joi from "joi";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

const userValidationSchema = joi.object({
  fullname: joi.string().min(3).max(30).required(),
  username: joi.string().min(3).max(30).required(),
  email: joi.string().required().email(),
  password: joi.string().required().min(6).max(15),
});

export const registerUser = async (req, res) => {
  const { fullname, username, email, password } = req.body;

  await userValidationSchema.validateAsync(req.body);

  try {
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res
        .status(409)
        .send({ status: 409, message: "User Already Exits!" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      fullname,
      username,
      email,
      password: passwordHash,
    });

    transporter.sendMail({
      to: createUser.email,
      from: process.env.NODEMAILER_EMAIL,
      subject: "Welcome to Our Platform!",
      html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome Email</title>
     <style>
    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: #f4f4f4;
    }
    table {
      border-spacing: 0;
      border-collapse: collapse;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
    /* Main container */
    .container {
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    /* Header */
    .header {
      background: linear-gradient(135deg, #6B46C1 0%, #4299E1 100%);
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      font-size: 24px;
      margin: 0;
      font-weight: 600;
    }
    /* Content */
    .content {
      padding: 40px 30px;
      text-align: center;
    }
    .content h2 {
      color: #2D3748;
      font-size: 20px;
      margin: 0 0 20px;
    }
    .content p {
      color: #4A5568;
      font-size: 16px;
      line-height: 1.6;
      margin: 0 0 20px;
    }
    /* Button */
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background-color: #4299E1;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 500;
      margin: 20px 0;
      transition: background-color 0.3s;
    }
    .btn:hover {
      background-color: #3182CE;
    }
    /* Footer */
    .footer {
      background-color: #F7FAFC;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #718096;
    }
    /* Responsive design */
    @media only screen and (max-width: 600px) {
      .content {
        padding: 20px;
      }
      .header h1 {
        font-size: 20px;
      }
      .content h2 {
        font-size: 18px;
      }
      .content p {
        font-size: 14px;
      }
    }
  </style>
    </head>
    <body>
      <table role="presentation" class="container">
        <tr>
          <td class="header">
            <h1>Welcome to Our Platform!</h1>
          </td>
        </tr>
        <tr>
          <td class="content">
            <h2>Hi, ${createUser.fullname}</h2>
            <p>Congratulations! Your account has been created successfully.</p>
            <p>We're thrilled to have you on board. Start exploring our platform and discover all the amazing features waiting for you.</p>
            <a href="[YOUR_WEBSITE_URL]" class="btn">Get Started Now</a>
          </td>
        </tr>
        <tr>
          <td class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p>If you have any questions, contact us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
          </td>
        </tr>
      </table>
    </body>
    </html>`,
    });

    const token = jwt.sign(
      { userId: createUser._id, email: createUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).cookie("token", token).send({
      status: 200,
      message: "User Created Successfully!",
      data: createUser,
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
