const baseUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const container = document.querySelector(".container");

async function getData() {
  const response = await fetch(baseUrl);
  const parseResponse = await response.json();
  return parseResponse.meals[0];
}

async function generateData() {
  const mealInfo = await getData();
  const mealInfoContainer = document.querySelector(".meal_info");

  if (mealInfoContainer) {
    container.removeChild(mealInfoContainer);
  }

  container.insertAdjacentHTML(
    /*html*/
    "beforeend",
    `
    <div class="meal_info">
        <h2>${mealInfo.strMeal}</h2>
        <div class="meal_tags"
            <h3>${mealInfo.strCategory}</h3>
            <h3>${mealInfo.strArea}</h3>
        </div>
        <img src="${mealInfo.strMealThumb}" alt="${mealInfo.strMeal}" />
        <div class="meal_ingredients">
            <ul class="meal_ingredients_list"></ul>
        </div>
        <p>${mealInfo.strInstructions}</p>
    </div>
    `
  );

  const mealIngredients = document.querySelector(".meal_ingredients_list");

  for (let i = 1; i <= 20; i++) {
    const ingredientName = `strIngredient${i}`;
    const measureName = `strMeasure${i}`;

    if (mealInfo[ingredientName] !== "" && mealInfo[ingredientName] !== null) {
      mealIngredients.insertAdjacentHTML(
        /*html*/
        "beforeend",
        `
        <li>
          <span>${mealInfo[ingredientName]}</span>
          <span>${mealInfo[measureName]}</span>
        </li>
        `
      );
    }
  }
}