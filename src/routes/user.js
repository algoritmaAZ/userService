import userController from "../controller/user-controller.js";
import express from "express";
import { authMiddleware } from "../middleware/auth-middleware.js";

export const userRoute = express.Router();

userRoute.use(authMiddleware);
userRoute.get("/user/:username", userController.get); //ad
