import express from "express";
import mongoose from "mongoose";
import { RecipesModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

// Get all recipes
router.get("/", async (req, res) => {
  try {
    const result = await RecipesModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new recipe
router.post("/", async (req, res) => {
  const recipe = new RecipesModel(req.body);
  try {
    const result = await recipe.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Save a recipe
router.put("/", async (req, res) => {
  try {
    const recipe = await RecipesModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    user.savedRecipes.push(recipe._id);
    await user.save();
    res.status(201).json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    res.status(500).json(err);
  }
});



// Get IDs of saved recipes
router.get("/savedRecipes/ids/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    res.status(201).json({ savedRecipes: user?.savedRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get saved recipes
router.get("/savedRecipes/:userId", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    const savedRecipes = await RecipesModel.find({
      _id: { $in: user.savedRecipes },
    });
    res.status(201).json({ savedRecipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Unsave a recipe
router.delete('/unsave/:userID/:recipeID', async (req, res) => {
  try {
    const { userID, recipeID } = req.params;
    const user = await UserModel.findById(userID);
    user.savedRecipes.pull(recipeID);
    await user.save();
    res.status(200).json({ message: 'Recipe unsaved successfully', savedRecipes: user.savedRecipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router as recipesRouter };
