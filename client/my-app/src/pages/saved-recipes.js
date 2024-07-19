import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSavedRecipes();
  }, [userID]);

  const handleUnsave = async (recipeId) => {
    try {
      await axios.delete(`http://localhost:3001/recipes/unsave/${userID}/${recipeId}`);
      setSavedRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== recipeId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <p>{recipe.description}</p>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Duration: {recipe.duration} minutes</p>
            <button onClick={() => handleUnsave(recipe._id)}>Unsave</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
