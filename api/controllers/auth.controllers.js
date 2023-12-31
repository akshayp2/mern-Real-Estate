import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHanlder } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword })
    try {
        await newUser.save()
        res.status(201).json("user created successfully");
    }
    catch (error) {
        next(error)
    }
}