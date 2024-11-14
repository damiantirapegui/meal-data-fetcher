// TASK //
// 1. Get all meals with title that starts with “g” by API call. More info about the API here: https://www.themealdb.com/api.php.

// 2. Restructure the data so that the meal title is grouped with a list of its ingredients together with the quantity (e.g. 3 tsp) of that
//    ingredient - you can disregard the rest of the data.
//    No need to display anything in a UI. (Imagine that you are preparing the data to be passed to an UI component.)

const API = "https://www.themealdb.com/api/json/v1/1/search.php?f=";

let firstLetter;

const getMeals = async () => {
  firstLetter = "g";

  try {
    const response = await fetch(`${API}${firstLetter}`);
    const data = await response.json();
    const meals = data.meals;

    let newMenu = meals.map((meal) => {
      let menuDetails = [];
      let ingredients = [];
      let measures = [];
      for (let i = 0; i < 20; i++) {
        let ingredient = meal[`strIngredient${i}`];
        let measure = meal[`strMeasure${i}`];

        if (
          (ingredient && ingredient.trim()) ||
          (measure && measure.trim() !== "")
        ) {
          menuDetails.push(`${measure} of ${ingredient}`);
          measures.push(measure);
          ingredients.push(ingredient);
        }
      }
      return {
        title: meal.strMeal,
        ingredients: ingredients,
        measures: measures,
        menuDetails: menuDetails,
      };
    });

    console.log(newMenu);
  } catch (error) {
    console.error("Error fetching meals", error);
  }
};

getMeals();
