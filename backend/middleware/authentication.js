import "dotenv/config";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(403).send({ status: 403, message: "Unauthorized User" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);


    if (tokenDecode) {
      req.userId = tokenDecode.userId; // safer than modifying req.body
    
      next();
    } else {
      return res
        .status(403)
        .send({ status: 403, message: "Unauthorized User" });
    }
  } catch (error) {
    res.status(500).send({ status: 500, message: error.message });
  }
};

export default authMiddleware;
