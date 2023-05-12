import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.get("/api/recipes", async function (req, res) {
  const recipes = await getRecipes();
  const response = {
    success: true,
    payload: recipes,
  };
  res.status(200).json(response);
});

app.get("/api/recipes/:id", async function (req, res) {
  const recipeId = req.params.id;
  const recipe = await getRecipeByID(recipeId);
  const response = {
    success: true, 
    payload: recipe,
  };
  res.status(200).json(response);
});

app.post("/api/recipes", async function (req, res) {
  const newRecipe = req.body;
  const recipe = await createRecipe(newRecipe); 
  const response = {
    success: true,
    payload: recipe,
  };
  res.status(201).json(response);
});

app.patch("/api/recipes/:id", async function (req, res) {
  const id = req.params.id;
  const changedRecipe = req.body;
  const recipe = await updateRecipeByID(id, changedRecipe); 
  const response = {
    success: true,
    payload: recipe,
  };
  res.status(200).json(response);
});

app.delete("/api/recipes/:id", async function (req, res) {
  const deleteId = req.params.id;
  const recipe = await deleteRecipeByID(deleteId);
  const response = {
    success: true,
    payload: recipe,
  };
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
