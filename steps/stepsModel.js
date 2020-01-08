const db = require('../dbConfig');

module.exports = {
  add,
  find,
  findById,
  getRecipeSteps,
  update

};
function find() {
    return db('steps');
  }

function findById(id) { 
    return db('steps')
      .where({ id })
      .first();
  }

async function add(step) {
  const id = await db('steps').insert(recipe, 'id')
  console.log(id, 'id')
  return findById(id[0]);
}
async function getRecipeSteps (id){
  console.log('hello')
    return await db('steps')
    .where({recipe_id: id})
}


async function update(id, changes){
    await db('steps')
      .where({id: id})
      .update(changes)
    return findById(id[0])
  }
