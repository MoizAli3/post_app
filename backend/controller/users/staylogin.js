import "dotenv/config";
import jwt from "jsonwebtoken";

export const stayLoginUser = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send({
        status: 403,
        message: "User Loggout",
      });
    }

    const exitsToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!exitsToken) {
      return res.status(403).send({
        status: 403,
        message: "User Loggout",
      });
    }

    return res.status(200).send({
      message: "Stay Login successful",
    });
  } catch (error) {
    return res.status(500).send({ status: 500, message: error.message });
  }
};
