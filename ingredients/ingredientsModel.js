const db = require('../dbConfig');

module.exports = {
  add,
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
    return knex('scheme')
    .where('id', id)
    .del()
  }
