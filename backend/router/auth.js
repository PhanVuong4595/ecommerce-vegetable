import express from "express";
import { Login, Signup } from "../controlles/auth";

const router = express.Router();

router.post("/login", Login);
router.post("/signup", Signup);

export default router;
