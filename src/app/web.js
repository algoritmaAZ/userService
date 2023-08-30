import express from "express";
import cookieParser from "cookie-parser";
import { userRoute } from "../routes/user.js";
import { errorMiddleware } from "../middleware/error-middleware.js";

export const web = express();

web.use(cookieParser());
web.use(express.json());
web.use(userRoute);

web.use(errorMiddleware);
