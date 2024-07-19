import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true // New field for category
  },
  source: {
    type: String,
    required: false // New field for the source of the recipe
  },
  curatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  
});

export const RecipesModel = mongoose.model("Recipes", recipeSchema);
