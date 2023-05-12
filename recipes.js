import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
    const allFood = await fs.readFile(fileName);
    const allRecipes =JSON.parse(allFood)
    return(allRecipes)
}
// GET A RECIPE BY ID
export async function getRecipeByID(id) {
    const allFood = await fs.readFile(fileName);
    const allRecipes =JSON.parse(allFood)
for (let i = 0; i < allRecipes.length; i++) {
if (allRecipes[i].id === id) {
     return(allRecipes[i])

}}} 


// CREATE A RECIPE
export async function createRecipe(newRecipe) {
const allFood = await fs.readFile(fileName);
const allRecipes =JSON.parse(allFood)
allRecipes.push(newRecipe)
const recipeJSON = JSON.stringify(allRecipes, newRecipe)
await fs.writeFile(fileName, recipeJSON)
return(allRecipes)
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {
  const allFood = await fs.readFile(fileName);
    const allRecipes = JSON.parse(allFood)
for (let i = 0; i < allRecipes.length; i++) {
if (allRecipes[i].id === id) {
     allRecipes[i] = updatedRecipe
     const recipeJSON = JSON.stringify(allRecipes)
     await fs.writeFile(fileName, recipeJSON)
     console.log(allRecipes)
     return allRecipes
}}};

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  const allFood = await fs.readFile(fileName);
    const allRecipes = JSON.parse(allFood)
for (let i = 0; i < allRecipes.length; i++) {
if (allRecipes[i].id === id) { 
    allRecipes.splice(i, 1)
    const recipeJSON = JSON.stringify(allRecipes)
    await fs.writeFile(fileName, recipeJSON)
    return allRecipes

}}}
   
/*

import express from "express";
const app = express();
const PORT = 3000;

import { getQuotes, addQuote, getRandomQuote, editQuote, deleteQuote } from "./quote.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to cwissy.rest");
});

app.get("/api/quotes", async function (req, res) {
  if (req.query.type === "random") {
    return res.send(await getRandomQuote());
  }
  res.send(await getQuotes());
});

app.post("/api/quotes", async function (req, res) {
  const { quoteText } = req.body;
  const quote = await addQuote(quoteText);
  res.status(201).send(quote);
});

app.patch("/api/quotes/:id", async function (req, res) {
  const quoteId = req.params.id;
  
  console.log(quoteId);

  const updatedQuoteText = req.body.quoteText;

  // Call the appropriate helper function to update the quote in your data
  const updatedQuote = await editQuote(quoteId, updatedQuoteText);

  res.send(updatedQuote);

});

app.delete("/api/quotes/:id", async function (req, res) {
  const quoteId = req.params.id;

  // Call the appropriate helper function to delete the quote from your data
  const deletedQuote = await deleteQuote(quoteId);

  res.send(deletedQuote);
});
  
app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});


/* alt app.post("/api/quotes", async function (req, res) {
  const { quoteText } = req.body;
  const quote = await addQuote(quoteText);
  res.status(201).send(quote);
}); */ 