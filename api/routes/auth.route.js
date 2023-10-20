import  express  from "express";
import { signup } from "../controllers/auth.controllers.js";
const router =express.Router();

router.post("/singup",signup)
export default router;