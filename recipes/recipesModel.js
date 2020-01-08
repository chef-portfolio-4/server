const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  getChefRecipes,
  update,
  getAll,
  findRecipeSteps,
  findRecipeIngredients
};
function find() {
    return db('recipes');
  }


function findRecipeSteps(id) {
    return db("steps")
      .where('steps.recipe_id', id)
  }

  function findRecipeSteps(id) {
    return db("steps")
      .where('steps.recipe_id', id)
  }

  function findRecipeIngredients(id){
    return db('recipe_ingredients')
      .innerJoin('ingredients as i', 'ingredient_id', 'id')
      .where('recipe_id', id)
  }
  // function findIngredients(id){
  //   return db('ingredients')
  //     .where('ingredients_id, id)
  // }
  // function findById(id) {
  //   return db("steps")
  //     .leftJoin("recipes", "steps.recipe_id",  "recipes.id")
  //     .where({ "recipes.id": id })
  // }

  function getAll(id){
    return db('recipes as r')
      .select('r.name', 'r.description' ,'r.meal-type' , 'r.time', 's.title', 's.order', 's.directions')
      .innerJoin('steps as s', 'r.id', 's.recipe_id')
      .where('r.id', id)
    }

  function findById(id) { 
    return db('recipes')
      .where({ id })
      .first();
  }

async function add(recipe) {
  const id = await db('recipes').insert(recipe, 'id')
  console.log(id, 'id')
  return findById(id[0]);
}
async function getChefRecipes (id){
    return await db('recipes')
    .where({chef_id: id})
}

async function update(id, changes){
    await db('recipes')
      .where({id: id})
      .update(changes)
    return findById(id[0])
  }
