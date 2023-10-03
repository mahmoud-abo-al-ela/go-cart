import express from "express";
import { register, activateUser, login, getUser } from "../controller/user.js";
import upload from "../multer.js";
import authenicateUser from "../middleware/auth.js";
const router = express.Router();

router.route("/sign-up").post(upload.single("file"), register);
router.route("/activation").post(activateUser);
router.route("/login").post(login);
router.route("/get-user").get(authenicateUser, getUser);

export default router;
