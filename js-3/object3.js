let recipe = {};

recipe.name = "Sandwich";
recipe.ingredients = [];

recipe.ingredients.push({nombre: "Bread", cantidad: 2});
recipe.ingredients.push({nombre: "Cheese", cantidad: 1});

console.log(recipe.ingredients[0].nombre)

let x= 0;
    for (let i = 0; i < recipe.ingredients.length; i++) {
        x += recipe.ingredients[i].cantidad
}

console.log(x)