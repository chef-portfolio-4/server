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


  

  function findById(id) { 
    return db('ingriedents')
      .where({ id })
      .first();
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
