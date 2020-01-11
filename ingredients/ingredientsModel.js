const db = require('../dbConfig');

module.exports = {
  find,
  findById,
  update,
  deleted
};
function find() {
    return db('recipes');
  }


  function findById(id) { 
    return db('ingriedents')
      .where({ id })
      .first();
  }
async function update(id, changes){
    await db('recipes')
      .where({id: id})
      .update(changes)
    return findById(id[0])
  }

  function deleted(id){
    return db('recipe_ingredients')
    .where('id', recipe_id)
    .del()
  }
