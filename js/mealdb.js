document.getElementById('error-message').style.display = 'none'
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchFood = searchField.value;
    document.getElementById('error-message').style = 'none'
    //clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none'
    if (searchFood == '') {

    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displayFoods(data.meals)) //ekta object er moddhe ase
            .catch(error => displayError(error));
    }
}
const displayError = error => {

    document.getElementById('error-message').style.display = 'block'
}

const displayFoods = meals => {
    const searchResult = document.getElementById('search-result');

    searchResult.textContent = '';//for clearing previous searched result
    // searchResult.innerHTML = ''; //for clearing previous searched result
    //forEach chalaie prottek ta meal nibo
    meals.forEach(meal => {
        // console.log(meal); //for knowing the data name
        const newResult = document.createElement('div')
        newResult.classList.add('col')
        newResult.innerHTML = `
            <div onclick="showDetailFood(${meal.idMeal})" class="card h-100">
                <img width="20%" src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
        </div>
        `;
        searchResult.appendChild(newResult);
    })

}
const showDetailFood = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayFoodDetail(data.meals[0]));
}

const displayFoodDetail = food => {
    const detailContainer = document.getElementById('detail-container')
    detailContainer.textContent = '';
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `
        <div class="card mx-auto" style="width: 18rem;">
      <img src="${food.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${food.strMeal}</h5>
        <p class="card-text">${food.strInstructions.slice(0, 130)}</p>
        <a target="_blank" href="${food.strYoutube}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
           `;
    detailContainer.appendChild(newDiv);
}