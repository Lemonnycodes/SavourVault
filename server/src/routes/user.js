import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();
import { UserModel } from "../models/Users.js";

router.post("/register", async (req, res) => { //username&pwd to the front end
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  
  if (user) {
    return res.status(400).json({ message: "Sorry,User exists!" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "Hurray,User registered!" });
});

router.post("/login",async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "No such User!" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "Username or password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret"); //verify authentication
  res.json({ token, userID: user._id });
}); 

export { router as userRouter };

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
}; 