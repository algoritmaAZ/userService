import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    // get the secretekey
    // get the token
    // if  token not exist will reuturn unauthorized
    // if token exist validate the token
    const secretekey = process.env.SECRET_KEY;
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ errors: "Unauthorized" });
    }
    if (token) {
      jwt.verify(token, secretekey);
      next();
    }
  } catch (err) {
    next(err);
  }
};
