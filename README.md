# Recipe Library

A full-stack app that allows the user to create their own recipes, store them, and delete them. This app makes use of Node.js as the backend to store these recipes.

For this project, we were asked to build a fully-functional back-end that can perform all the CRUD operations on recipe data. This involved creating a router to handle requests and responses, and created endpoints for all CRUD operations. These endpoints were tested using Thunder Client and served as responses to HTTP requests. I also created helper functions that interact with a recipes collection and manipulated the data stored in a JSON file. Finally, I imported these helper functions into the app.js file and connected them to the API endpoints. I then hooked up the backend functionality to the frontend.

## Installation and Setup Instructions

You will need `node` and `npm` installed on your machine.

Clone the repo:

`https://github.com/usama-asghar1/recipe-library`

Install the required npm modules:

`npm install`

Start the application:

`npm start`

## Usage

1. Fill in all the fields to add a recipe.
2. Click on the 'Get recipes' button to make sure all the recipes are loaded
3. Delete a recipe by clicking on the recipe's delete button

## Tech Stack

**Client:** Node, Express, JavaScript, HTML, CSS, (Testing with Thunder Client)

## Improvements

Potential future improvements:

- Add the ability to edit recipes - The back-end functionality but have not hooked it up to the front as of yet
- Move the data storage from the REST API to a database
- Improve the user-experience on the front-end
- Make the app responsive for mobile and tablet viewing

