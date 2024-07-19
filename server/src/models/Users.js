import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, //unique username is necessary
  password: { type: String, required: true }, //unique pwd is not mandatory
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipes" }],
});

export const UserModel = mongoose.model("users", UserSchema); 

//connect data that it is demonstrated in a simple way
