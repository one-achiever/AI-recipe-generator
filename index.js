function displayRecipe(response){
    new Typewriter ("#recipe",{
        strings: response.data.answer,
        autoStart: true ,
        delay: 1,
        cursor:"",
    });
}
  function generateRecipe(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#instructions");

    let apiKey = "38ec6o734t61630a022f3b6268c8e219";
    let prompt = `Generate a recipe about ${instructionsInput.value}`;
    let context = "As a nutritionist, your clients seek assistance in creating healthy meal plans. You provide recipe recommendations, listing ingredients and steps separately. Ensure that ingredients and each step are listed individually, using line breaks (<br/>) so they don’t appear in paragraph form and each step appears on a new line.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `Generating a ${instructionsInput.value} recipe`;
    axios.get(apiUrl).then(displayRecipe);
    

}
let formElement = document.querySelector("#recipe-generator-form");
formElement.addEventListener("submit" , generateRecipe);