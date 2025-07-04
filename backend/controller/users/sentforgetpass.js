import { User } from "../../model/users/userSchema.js";
import transporter from "../../helper/index.js";
import joi from "joi";

const userValidationSchema = joi.object({
  email: joi.string().required(),
});

export const sentForgetPassOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const existedUser = await User.findOne({ email });

    await userValidationSchema.validateAsync(req.body);

    if (!existedUser) {
      return res.status(403).send({
        status: 403,
        message: "Email not Exits!",
      });
    }

    const otp = Math.floor(1000 * Math.random() * 1000);

    transporter.sendMail({
      to: existedUser.email,
      from: process.env.NODEMAILER_EMAIL,
      subject: "Password Reset OTP",
      html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset OTP</title>
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
      background: linear-gradient(135deg, #2B6CB0 0%, #3182CE 100%);
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
    .otp-box {
      background-color: #EDF2F7;
      display: inline-block;
      padding: 15px 30px;
      font-size: 24px;
      font-weight: 600;
      color: #2D3748;
      border-radius: 6px;
      margin: 20px 0;
      letter-spacing: 2px;
    }
    /* Button */
    .btn {
      display: inline-block;
      padding: 12px 24px;
      background-color: #3182CE;
      color: #ffffff;
      text-decoration: none;
      border-radius: 6px;
      font-size: 16px;
      font-weight: 500;
      margin: 20px 0;
      transition: background-color 0.3s;
    }
    .btn:hover {
      background-color: #2B6CB0;
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
      .otp-box {
        font-size: 20px;
        padding: 10px 20px;
      }
    }
      </style>
    </head>
    <body>
      <table role="presentation" class="container">
        <tr>
          <td class="header">
            <h1>Password Reset Request</h1>
          </td>
        </tr>
        <tr>
          <td class="content">
            <h2>Dear ${existedUser.fullname}</h2>
            <p>We received a request to reset your password. Please use the following One-Time Password (OTP) to proceed:</p>
            <div class="otp-box">${otp}</div>
            <p>This code is valid for 10 minutes. Enter it on the password reset page to continue.</p>
            <a href="[YOUR_RESET_PAGE_URL]" class="btn">Reset Your Password</a>
            <p>If you did not request a password reset, please ignore this email or contact support.</p>
          </td>
        </tr>
        <tr>
          <td class="footer">
            <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p>If you have any questions, contact us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
          </td>
        </tr>
      </table>
    </body>
    </html>`,
    });

    existedUser.otp = String(otp);
    existedUser.verifytime = String(Date.now() + 10 * 60 * 1000);
    existedUser.save();

    return res.status(200).send({
      status: 200,
      message: "OTP Successfully Sent on Your Email",
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
