import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
    const allFood = await fs.readFile(fileName);
    const allRecipes = JSON.parse(allFood);
    return allRecipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
    const allFood = await fs.readFile(fileName);
    const allRecipes = JSON.parse(allFood);
    for (let i = 0; i < allRecipes.length; i++) {
        if (allRecipes[i].id === id) {
            return allRecipes[i];
        }
    }
}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
    const allFood = await fs.readFile(fileName);
    const allRecipes = JSON.parse(allFood);
    allRecipes.push(newRecipe);
    newRecipe.id = uuidv4();
    const recipeJSON = JSON.stringify(allRecipes, newRecipe);
    await fs.writeFile(fileName, recipeJSON);
    return allRecipes;
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {
    const allFood = await fs.readFile(fileName);
    const allRecipes = JSON.parse(allFood);
    for (let i = 0; i < allRecipes.length; i++) {
        if (allRecipes[i].id === id) {
            allRecipes[i] = updatedRecipe;
            const recipeJSON = JSON.stringify(allRecipes);
            await fs.writeFile(fileName, recipeJSON);
            console.log(allRecipes);
            return allRecipes;
        }
    }
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
    const allFood = await fs.readFile(fileName);
    const allRecipes = JSON.parse(allFood);
    for (let i = 0; i < allRecipes.length; i++) {
        if (allRecipes[i].id === id) { 
            allRecipes.splice(i, 1);
            const recipeJSON = JSON.stringify(allRecipes);
            await fs.writeFile(fileName, recipeJSON);
            return allRecipes;
        }
    }
}
