import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);


mongoose.connect(
    "mongodb+srv://swathidharmasankaran:SWAthiPlis@favrecipe.hreitig.mongodb.net/favrecipe?retryWrites=true&w=majority&appName=favrecipe"
);
app.listen(3001, () => console.log("Start cooking"));