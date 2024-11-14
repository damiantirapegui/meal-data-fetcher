# Meal Data Fetcher

## Description

This application fetches meals from the **MealDB API** that start with the letter "g". The data is restructured so that each meal is displayed with a list of ingredients and their corresponding measurements (e.g., "500g of Raw king prawns"). This makes the data more usable for further use, such as in a user interface.

## Features

- Fetches meals whose names start with "g".
- Processes the data into a list of ingredients and their measurements.
- Returns an object containing the meal's title, ingredients, measurements, and a compiled list.

## Technologies

- **JavaScript** (Async/Await and Fetch API)

## Example of Result

```javascript
{
  title: "Garides Saganaki",
  ingredients: ["Raw king prawns", "Olive oil", "Chopped onion", ...],
  measures: ["500g", "3 tablespoons", "1", ...],
  menuDetails: [
    "500g of Raw king prawns",
    "3 tablespoons of Olive oil",
    "1 of Chopped onion",
    ...
  ]
}
```

## Installation

- Clone or download the repository
- Run the code in a Javascript enviroment that supports fetch and async/await
- Call getMeals() to fetch and display the data
