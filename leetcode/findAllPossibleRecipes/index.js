/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */

//TODO
// Suppose Recipe A requires Recipe B, but Recipe B itself needs Recipe C, and Recipe C, in turn, depends on Recipe A. This creates a circular dependency, making it unclear where to begin. If we do not account for these dependencies properly, we could end up in an infinite loop, never determining which recipes can actually be made. Our approach needs to handle these interdependencies properly.

var findAllRecipes = function (recipes, ingredients, supplies) {
  let inDegree = {};
  let graph = {};
  let supplySet = new Set(supplies);
  let queue = []; //for recipes which can be made immediately


  for (let i = 0; i < recipes.length; i++) {
      inDegree[recipes[i]] = ingredients[i].length;

      for (let ingredient of ingredients[i]) {
          if (!graph[ingredient]) graph[ingredient] = [];
          graph[ingredient].push(recipes[i]);
      }
  }

  for (let recipe of recipes) {
      if (inDegree[recipe] === 0) queue.push(recipe);
  }

  let result = [];

  for (let i = 0; i < recipes.length; i++) {
      for (let recipe of recipes) {
          if (inDegree[recipe] > 0) {
              if (ingredients[i].every(ingredient => supplySet.has(ingredient))) {
                  result.push(recipe);
                  supplySet.add(recipe);
                  inDegree[recipe] = 0;
              }
          }
      }
  }

  return result;
};