import { userProfile } from "../database/user-db.js";
import { ResponseError } from "../error/response-error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const get = (username) => {
  const user = userProfile[username];
  if (!user) {
    throw new ResponseError(404, "User Not Found");
  }
  return user;
};

export default { get };
