const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  getChefRecipes,
  update

};
function find() {
    return db('recipes');
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
