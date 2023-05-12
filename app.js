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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

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