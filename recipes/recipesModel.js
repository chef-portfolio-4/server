const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  getChefRecipes,
  update,
  getAll,
  findRecipeSteps,
  findRecipeIngredients,
  addIngredient,
  deleted

};
function find() {
    return db('recipes');
  }


function findRecipeSteps(id) {
    return db("steps")
      .where('steps.recipe_id', id)
  }

  // function findRecipeSteps(id) {
  //   return db("steps")
  //     .where('steps.recipe_id', id)
  // }

  function findRecipeIngredients(id){
    return db('recipe_ingredients')
      .innerJoin('ingredients as i', 'ingredient_id', 'id')
      .where('recipe_id', id)
  }

  
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

// async function add(recipe) {
//   const id = await db('recipes').insert(recipe, 'id')
//   console.log(id, 'id')
//   return findById(id[0]);
// }

function add(project) {
  return db('recipes')
      .insert(project, 'id')
      .then(([id]) => findById(id))
};
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

  function connectTables(recipe_id, ingredient_id){
    return db('recipe_ingredients')
      .insert({recipe_id: recipe_id, ingredient_id: ingredient_id})
  }

 function addIngredient(ingredient, recipe_id) {
  return db('ingredients').insert(ingredient, 'id')
  .then(ingredient_id => {
    return connectTables(recipe_id, ingredient_id[0])
  })
  
}

function deleted(id){
  return db('recipes')
  .where('id', id)
  .del()
}
