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
  res.status(200).send(recipes);
})

app.get("/api/recipes/:id", async function (req, res) {
  const recipeId = req.params.id;
  const recipe = await getRecipeByID(recipeId);
  res.status(200).send(recipe);
});

app.post("/api/recipes", async function (req, res) {
  const newRecipe = req.body;
  const recipe = await createRecipe(newRecipe); 
  res.status(201).send(recipe);
})

app.patch("/api/recipes/:id", async function (req, res) {
  const id = req.params.id;
  const changedRecipe = req.body;
  const recipe = await updateRecipeByID(id, changedRecipe); 
  res.status(200).send(recipe);
})



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

